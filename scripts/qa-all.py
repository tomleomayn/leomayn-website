#!/usr/bin/env python3
"""
Complete QA Suite for leomayn.com
Runs all QA checks: SEO meta tags, visual screenshots, and OpenGraph previews.
"""

import os
import sys
import subprocess
from datetime import datetime

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))


def run_script(name, script_path, args=None):
    """Run a QA script and return success status."""
    print(f"\n{'='*60}")
    print(f"Running: {name}")
    print('='*60)

    cmd = [sys.executable, script_path]
    if args:
        cmd.extend(args)

    result = subprocess.run(cmd, cwd=SCRIPTS_DIR)
    return result.returncode == 0


def main():
    print("\n" + "="*60)
    print("LEOMAYN.COM - COMPLETE QA SUITE")
    print(f"Run at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*60)

    # Parse arguments
    pages = [arg for arg in sys.argv[1:] if arg.startswith("/")]
    args = pages if pages else None

    results = {}

    # 1. SEO Meta Tags
    results["SEO Meta Tags"] = run_script(
        "SEO Meta Tags Check",
        os.path.join(SCRIPTS_DIR, "qa-seo.py"),
        args
    )

    # 2. OpenGraph Validation
    results["OpenGraph"] = run_script(
        "OpenGraph Validation",
        os.path.join(SCRIPTS_DIR, "qa-opengraph.py"),
        args
    )

    # 3. Visual Screenshots
    results["Visual QA"] = run_script(
        "Visual Screenshots",
        os.path.join(SCRIPTS_DIR, "qa-visual.py"),
        (args or []) + ["--desktop"]
    )

    # Summary
    print("\n" + "="*60)
    print("COMPLETE QA SUMMARY")
    print("="*60)

    all_passed = True
    for name, passed in results.items():
        status = "✓ PASS" if passed else "✗ FAIL"
        print(f"  {status}: {name}")
        if not passed:
            all_passed = False

    print()
    if all_passed:
        print("✓ All QA checks passed!")
    else:
        print("✗ Some checks failed - review output above")

    # Output locations
    print("\n" + "-"*60)
    print("OUTPUT FILES:")
    print("-"*60)
    print(f"  Screenshots:    qa-screenshots/")
    print(f"  OG Previews:    qa-screenshots/og-previews/")
    print()

    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
