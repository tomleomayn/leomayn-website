#!/usr/bin/env python3
"""
Replay test for the AI Deployment Planner generate endpoint.

Usage:
  python scripts/test-generate.py                      # Use baked-in test persona
  python scripts/test-generate.py --fixture path.json  # Replay a captured input
  python scripts/test-generate.py --latest              # Replay most recent captured input
  python scripts/test-generate.py --port 3001           # Use a different port

The dev server must be running (npm run dev).
"""

import argparse
import json
import os
import sys
import textwrap
import urllib.request
import urllib.error
from datetime import datetime
from glob import glob
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
FIXTURES_DIR = SCRIPT_DIR / "test-fixtures"

# ============================================
# Baked-in test persona
# ============================================

DEFAULT_PAYLOAD = {
    "qualification": {
        "name": "Sarah Mitchell",
        "email": "test@leomayn-internal.com",
        "company": "Meridian Consulting",
        "companyWebsite": "https://meridianconsulting.co.uk",
        "role": "director-vp",
        "turnover": "5m-10m",
        "consentGiven": True,
    },
    "diagnostic": {
        "firmType": "consulting",
        "teamSize": "76-150",
        "strategicFocus": {
            "primary": "capacity",
            "secondary": "quality",
        },
        "painPoints": [
            {"area": "proposals", "symptom": "rework"},
            {"area": "project-delivery", "symptom": "handoff-friction"},
            {"area": "research", "symptom": "work-about-work"},
        ],
        "aiAdoption": "individual",
        "techEnvironment": "disconnected",
        "processKnowledge": "partially-documented",
        "dataFoundations": "mixed",
        "billableSplit": 65,
    },
    "sizing": [
        {
            "archetypeId": "research-analysis",
            "peopleInvolved": "9-15",
            "weeklyHours": "15-30",
            "costPerPerson": "75k-100k",
            "freeText": "",
        },
        {
            "archetypeId": "project-delivery",
            "peopleInvolved": "16-30",
            "weeklyHours": "5-15",
            "costPerPerson": "50k-75k",
            "freeText": "",
        },
        {
            "archetypeId": "proposal-scoping",
            "peopleInvolved": "4-8",
            "weeklyHours": "15-30",
            "costPerPerson": "50k-75k",
            "freeText": "",
        },
    ],
}


def find_latest_fixture() -> Path | None:
    """Find the most recently captured input fixture."""
    pattern = str(FIXTURES_DIR / "input-*.json")
    files = sorted(glob(pattern), reverse=True)
    return Path(files[0]) if files else None


def load_payload(args) -> dict:
    """Load the test payload from fixture or default."""
    if args.fixture:
        path = Path(args.fixture)
        if not path.exists():
            print(f"Fixture not found: {path}")
            sys.exit(1)
        print(f"Loading fixture: {path}")
        with open(path) as f:
            return json.load(f)

    if args.latest:
        latest = find_latest_fixture()
        if not latest:
            print("No captured fixtures found in scripts/test-fixtures/")
            print("Fill the form once with the dev server running to capture one.")
            sys.exit(1)
        print(f"Loading latest fixture: {latest}")
        with open(latest) as f:
            return json.load(f)

    print("Using baked-in test persona: Sarah Mitchell, Meridian Consulting")
    return DEFAULT_PAYLOAD


def call_generate(payload: dict, port: int) -> dict:
    """POST to the generate endpoint and return the response."""
    url = f"http://localhost:{port}/api/planner/generate"
    data = json.dumps(payload).encode("utf-8")

    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Content-Type": "application/json",
            "Origin": f"http://localhost:{port}",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8") if e.fp else ""
        print(f"\nAPI error {e.code}: {body}")
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"\nCannot reach dev server at localhost:{port}")
        print(f"  {e.reason}")
        print("  Start it with: npm run dev")
        sys.exit(1)


def word_count(text: str) -> int:
    return len(text.split())


def fmt_gbp(amount: int | float) -> str:
    return f"£{amount:,.0f}"


def print_summary(report: dict):
    """Print a readable summary of the generated report."""
    sep = "─" * 60

    print(f"\n{sep}")
    print("  REPORT SUMMARY")
    print(sep)

    # Situation summary
    summary = report.get("situationSummary", "")
    print(f"\n▸ Situation summary ({word_count(summary)} words)")
    print(textwrap.indent(textwrap.fill(summary, 80), "  "))

    # Workflows
    print(f"\n▸ Workflows")
    for i, wf in enumerate(report.get("workflows", []), 1):
        name = wf.get("name", "?")
        impact = wf.get("impactPotential", "?")
        complexity = wf.get("implementationComplexity", "?")
        conditions = wf.get("threeConditionsCheck", {})
        cond_str = " ".join(
            f"{'✓' if v else '✗'}{k[0].upper()}"
            for k, v in conditions.items()
        )

        why_words = word_count(wf.get("whyThisMatters", ""))
        current_words = word_count(wf.get("currentState", ""))
        future_words = word_count(wf.get("futureState", ""))
        considerations_words = word_count(wf.get("considerations", ""))
        prereqs = len(wf.get("prerequisites", []))
        pitfalls = len(wf.get("pitfalls", []))

        print(f"\n  {i}. {name}")
        print(f"     Impact: {impact}  |  Complexity: {complexity}  |  {cond_str}")
        print(f"     Word counts — why: {why_words}, current: {current_words}, future: {future_words}, considerations: {considerations_words}")
        print(f"     Prerequisites: {prereqs}  |  Pitfalls: {pitfalls}")

    # Business case
    bc = report.get("businessCase", {})
    print(f"\n▸ Business case")
    print(f"  Total annual hours: {bc.get('totalAnnualHours', 0):,}")
    print(f"  Total annual cost:  {fmt_gbp(bc.get('totalAnnualCost', 0))}")
    recovery = bc.get("conservativeRecovery", {})
    print(f"  Recovery range:     {fmt_gbp(recovery.get('low', 0))} – {fmt_gbp(recovery.get('high', 0))}")
    weekly = bc.get("weeklyHoursRecovered", {})
    print(f"  Weekly hours back:  {weekly.get('low', 0)} – {weekly.get('high', 0)}")

    for area in bc.get("perArea", []):
        print(f"    • {area['archetypeId']}: {area['annualHours']:,}h, {fmt_gbp(area['annualCost'])}, recovery {fmt_gbp(area['recoveryRange']['low'])}")

    # Maturity assessment
    maturity = report.get("maturityAssessment")
    if maturity:
        strengths = maturity.get("strengths", [])
        development = maturity.get("development", [])
        print(f"\n▸ Maturity assessment")
        print(f"  Strengths ({len(strengths)}): {'; '.join(strengths[:2])}{'...' if len(strengths) > 2 else ''}")
        print(f"  Development ({len(development)}): {'; '.join(development[:2])}{'...' if len(development) > 2 else ''}")
    else:
        print(f"\n▸ Maturity assessment: NOT GENERATED")

    # Quick wins
    quick_wins = report.get("quickWins")
    if quick_wins:
        print(f"\n▸ Quick wins ({len(quick_wins)})")
        for qw in quick_wins:
            print(f"  • {qw[:80]}{'...' if len(qw) > 80 else ''}")
    else:
        print(f"\n▸ Quick wins: NOT GENERATED")

    # Readiness
    readiness = report.get("readiness", {})
    print(f"\n▸ Readiness")
    print(f"  Strengths: {len(readiness.get('strengths', []))}")
    print(f"  Gaps: {len(readiness.get('gaps', []))}")

    # Next steps
    next_steps = report.get("nextSteps", [])
    print(f"\n▸ Next steps ({len(next_steps)})")
    for ns in next_steps:
        print(f"  • {ns[:80]}{'...' if len(ns) > 80 else ''}")

    # Total word count
    all_text = json.dumps(report)
    print(f"\n▸ Total report JSON size: {len(all_text):,} chars")

    print(f"\n{sep}\n")


def save_output(response: dict, payload: dict) -> Path:
    """Save the full response and return the path."""
    FIXTURES_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y-%m-%dT%H-%M-%S")

    output_path = FIXTURES_DIR / f"output-{timestamp}.json"
    with open(output_path, "w") as f:
        json.dump(response, f, indent=2)

    # Also save the input alongside if using default persona
    input_path = FIXTURES_DIR / f"input-default-persona.json"
    if not input_path.exists():
        with open(input_path, "w") as f:
            json.dump(payload, f, indent=2)

    return output_path


def main():
    parser = argparse.ArgumentParser(description="Test the planner generate endpoint")
    parser.add_argument("--fixture", help="Path to a captured input JSON file")
    parser.add_argument("--latest", action="store_true", help="Use the most recent captured fixture")
    parser.add_argument("--port", type=int, default=3000, help="Dev server port (default: 3000)")
    parser.add_argument("--quiet", action="store_true", help="Only save output, skip summary")
    args = parser.parse_args()

    payload = load_payload(args)

    print(f"\nCalling generate endpoint on localhost:{args.port}...")
    print("(This calls Anthropic — expect 15-30 seconds)\n")

    response = call_generate(payload, args.port)

    if response.get("status") != "success":
        print(f"Generation failed: {response.get('error', 'unknown error')}")
        sys.exit(1)

    report = response.get("report", {})
    output_path = save_output(response, payload)
    print(f"Full output saved to: {output_path}")

    if not args.quiet:
        print_summary(report)


if __name__ == "__main__":
    main()
