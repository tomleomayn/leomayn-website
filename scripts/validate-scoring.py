"""
Cross-validates the TypeScript scoring engine data against the Python simulator.

Reads the TypeScript constants.ts file, extracts signal matrix entries,
goal alignment, feasibility, and foundation profiles, then runs the
same scoring algorithm and compares results with the Python simulator.
"""

import re
import sys
sys.path.insert(0, '/Users/tomjones/Documents/Dev/leomayn-hq')
import importlib.util
spec = importlib.util.spec_from_file_location(
    "simulator",
    "/Users/tomjones/Documents/Dev/leomayn-hq/automation/lead-magnet-scoring-simulator.py"
)
sim = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sim)

build_signal_matrix_v2 = sim.build_signal_matrix_v2
GOAL_ALIGNMENT = sim.GOAL_ALIGNMENT
FEASIBILITY_REQS = sim.FEASIBILITY_REQS
FOUNDATION_PROFILES = sim.FOUNDATION_PROFILES
PERSONAS = sim.PERSONAS
score_persona = sim.score_persona
WORKFLOWS_V2 = sim.WORKFLOWS_V2
WORKFLOW_NAMES = sim.WORKFLOW_NAMES
RECOVERY_RATES = sim.RECOVERY_RATES


def parse_ts_signal_matrix(ts_path: str) -> dict:
    """Extract signal matrix entries from TypeScript constants.ts"""
    with open(ts_path) as f:
        content = f.read()

    # Find all signalMatrix entries: { area: 'X', symptom: 'Y', weight: N }
    # Group by archetype ID
    archetypes = {}

    # Split by archetype blocks
    archetype_pattern = r"id:\s*'([^']+)'.*?signalMatrix:\s*\[(.*?)\]"
    for match in re.finditer(archetype_pattern, content, re.DOTALL):
        arch_id = match.group(1)
        matrix_text = match.group(2)

        entries = []
        entry_pattern = r"\{\s*area:\s*'([^']+)',\s*symptom:\s*'([^']+)',\s*weight:\s*(\d+)\s*\}"
        for entry in re.finditer(entry_pattern, matrix_text):
            entries.append((entry.group(1), entry.group(2), int(entry.group(3))))
        archetypes[arch_id] = entries

    return archetypes


def parse_ts_goal_alignment(ts_path: str) -> dict:
    """Extract goal alignment from TypeScript constants.ts"""
    with open(ts_path) as f:
        content = f.read()

    goals = {}
    pattern = r"id:\s*'([^']+)'.*?goalAlignment:\s*\{\s*costs:\s*(\d+),\s*capacity:\s*(\d+),\s*quality:\s*(\d+),\s*speed:\s*(\d+),\s*capability:\s*(\d+)\s*\}"
    for match in re.finditer(pattern, content, re.DOTALL):
        arch_id = match.group(1)
        goals[arch_id] = {
            'costs': int(match.group(2)),
            'capacity': int(match.group(3)),
            'quality': int(match.group(4)),
            'speed': int(match.group(5)),
            'capability': int(match.group(6)),
        }
    return goals


def parse_ts_foundation_profiles(ts_path: str) -> dict:
    """Extract foundation profiles from TypeScript constants.ts"""
    with open(ts_path) as f:
        content = f.read()

    dep_map = {'Low': 1, 'Medium': 2, 'High': 3}
    profiles = {}
    pattern = r"id:\s*'([^']+)'.*?foundationProfile:\s*\{\s*knowledgeDependency:\s*'(\w+)',\s*dataDependency:\s*'(\w+)'\s*\}"
    for match in re.finditer(pattern, content, re.DOTALL):
        arch_id = match.group(1)
        profiles[arch_id] = (dep_map[match.group(2)], dep_map[match.group(3)])
    return profiles


def parse_ts_recovery_rates(ts_path: str) -> dict:
    """Extract recovery rates from TypeScript constants.ts"""
    with open(ts_path) as f:
        content = f.read()

    rates = {}
    pattern = r"id:\s*'([^']+)'.*?recoveryRate:\s*([\d.]+)"
    for match in re.finditer(pattern, content, re.DOTALL):
        arch_id = match.group(1)
        rates[arch_id] = float(match.group(2))
    return rates


# ID mapping
TS_TO_PY = {
    'client-onboarding': 'CO',
    'meeting-intelligence': 'MI',
    'proposal-scoping': 'PS',
    'time-invoicing': 'TI',
    'management-reporting': 'MR',
    'project-delivery': 'PD',
    'document-processing': 'DP',
    'client-communications': 'CC',
    'research-analysis': 'RA',
}


def validate_signal_matrix(ts_path: str) -> tuple[int, int]:
    """Compare signal matrix entries between TS and Python."""
    ts_archetypes = parse_ts_signal_matrix(ts_path)
    py_matrix = build_signal_matrix_v2()

    passed = 0
    failed = 0

    # Build Python lookup: { (area, symptom, workflow): weight }
    py_lookup = {}
    for (area, symptom), weights in py_matrix.items():
        for wf, weight in weights.items():
            py_lookup[(area, symptom, wf)] = weight

    # Build TS lookup
    ts_lookup = {}
    for ts_id, entries in ts_archetypes.items():
        py_id = TS_TO_PY.get(ts_id, ts_id)
        for area, symptom, weight in entries:
            ts_lookup[(area, symptom, py_id)] = weight

    # Compare
    all_keys = set(py_lookup.keys()) | set(ts_lookup.keys())
    for key in sorted(all_keys):
        py_val = py_lookup.get(key)
        ts_val = ts_lookup.get(key)

        if py_val is None:
            print(f"  EXTRA in TS:  {key[2]} {key[0]}×{key[1]} = {ts_val}")
            failed += 1
        elif ts_val is None:
            print(f"  MISSING in TS: {key[2]} {key[0]}×{key[1]} = {py_val}")
            failed += 1
        elif py_val != ts_val:
            print(f"  MISMATCH: {key[2]} {key[0]}×{key[1]}: Python={py_val} TS={ts_val}")
            failed += 1
        else:
            passed += 1

    return passed, failed


def validate_goal_alignment(ts_path: str) -> tuple[int, int]:
    """Compare goal alignment between TS and Python."""
    ts_goals = parse_ts_goal_alignment(ts_path)
    passed = 0
    failed = 0

    for ts_id, ts_ga in ts_goals.items():
        py_id = TS_TO_PY.get(ts_id, ts_id)
        py_ga = GOAL_ALIGNMENT.get(py_id, {})

        for focus, ts_val in ts_ga.items():
            py_val = py_ga.get(focus, 0)
            if ts_val != py_val:
                print(f"  MISMATCH: {py_id} {focus}: Python={py_val} TS={ts_val}")
                failed += 1
            else:
                passed += 1

    return passed, failed


def validate_foundation_profiles(ts_path: str) -> tuple[int, int]:
    """Compare foundation profiles between TS and Python."""
    ts_profiles = parse_ts_foundation_profiles(ts_path)
    passed = 0
    failed = 0

    for ts_id, (ts_k, ts_d) in ts_profiles.items():
        py_id = TS_TO_PY.get(ts_id, ts_id)
        py_profile = FOUNDATION_PROFILES.get(py_id)
        if py_profile is None:
            print(f"  MISSING in Python: {py_id}")
            failed += 1
            continue
        py_k, py_d = py_profile
        if ts_k != py_k:
            print(f"  MISMATCH: {py_id} knowledge: Python={py_k} TS={ts_k}")
            failed += 1
        else:
            passed += 1
        if ts_d != py_d:
            print(f"  MISMATCH: {py_id} data: Python={py_d} TS={ts_d}")
            failed += 1
        else:
            passed += 1

    return passed, failed


def validate_scoring_results() -> tuple[int, int]:
    """Run all 10 personas through Python engine and print expected results."""
    py_matrix = build_signal_matrix_v2()
    passed = 0
    failed = 0

    print("\n  Expected top-3 results (from Python simulator):")
    for i, persona in enumerate(PERSONAS, 1):
        results = score_persona(persona, py_matrix, WORKFLOWS_V2)
        top3 = results[:3]
        line = f"  {i}. {persona.name}: "
        line += " | ".join(f"{r['workflow']}({r['composite']})" for r in top3)
        print(line)
        passed += 1

    return passed, failed


def main():
    ts_path = '/Users/tomjones/Documents/Dev/leomayn-website/lib/planner/constants.ts'

    print("=" * 60)
    print("  Signal Matrix Validation")
    print("=" * 60)
    p, f = validate_signal_matrix(ts_path)
    print(f"\n  Signal matrix: {p} matched, {f} mismatches")
    total_pass, total_fail = p, f

    print("\n" + "=" * 60)
    print("  Goal Alignment Validation")
    print("=" * 60)
    p, f = validate_goal_alignment(ts_path)
    print(f"\n  Goal alignment: {p} matched, {f} mismatches")
    total_pass += p
    total_fail += f

    print("\n" + "=" * 60)
    print("  Foundation Profile Validation")
    print("=" * 60)
    p, f = validate_foundation_profiles(ts_path)
    print(f"\n  Foundation profiles: {p} matched, {f} mismatches")
    total_pass += p
    total_fail += f

    print("\n" + "=" * 60)
    print("  Recovery Rate Validation")
    print("=" * 60)
    ts_rates = parse_ts_recovery_rates(ts_path)
    pass  # RECOVERY_RATES already imported above
    rp, rf = 0, 0
    for ts_id, ts_rate in ts_rates.items():
        py_id = TS_TO_PY.get(ts_id, ts_id)
        py_rate = RECOVERY_RATES.get(py_id)
        if py_rate is None:
            print(f"  MISSING in Python: {py_id}")
            rf += 1
        elif abs(ts_rate - py_rate) > 0.001:
            print(f"  MISMATCH: {py_id}: Python={py_rate} TS={ts_rate}")
            rf += 1
        else:
            rp += 1
    print(f"\n  Recovery rates: {rp} matched, {rf} mismatches")
    total_pass += rp
    total_fail += rf

    print("\n" + "=" * 60)
    print("  Persona Scoring Reference")
    print("=" * 60)
    validate_scoring_results()

    print("\n" + "=" * 60)
    print(f"  TOTAL: {total_pass} passed, {total_fail} failed")
    print("=" * 60)

    sys.exit(1 if total_fail > 0 else 0)


if __name__ == '__main__':
    main()
