#!/usr/bin/env python3
"""
Visual QA Script for leomayn.com
Takes screenshots of all pages for visual validation.
"""

import os
import sys
from datetime import datetime
from playwright.sync_api import sync_playwright

# Configuration
SITE_URL = "https://www.leomayn.com"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "qa-screenshots")

# Pages to capture
PAGES = [
    "/",
    "/services",
    "/services/diagnose",
    "/services/define",
    "/services/deliver",
    "/services/support",
    "/about",
    "/how-we-think",
    "/approach",
    "/why-leomayn",
    "/contact",
]

# Viewport sizes
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900},
    "mobile": {"width": 390, "height": 844},  # iPhone 14 Pro
}


def ensure_output_dir():
    """Create output directory if it doesn't exist."""
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    return OUTPUT_DIR


def slugify(path):
    """Convert URL path to filename-safe string."""
    if path == "/":
        return "homepage"
    return path.strip("/").replace("/", "-")


def capture_screenshots(pages=None, viewports=None):
    """Capture screenshots of specified pages."""
    pages = pages or PAGES
    viewports = viewports or VIEWPORTS

    output_dir = ensure_output_dir()
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")

    screenshots = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for viewport_name, viewport_size in viewports.items():
            context = browser.new_context(
                viewport=viewport_size,
                device_scale_factor=2,  # Retina quality
            )
            page = context.new_page()

            for path in pages:
                url = f"{SITE_URL}{path}"
                slug = slugify(path)
                filename = f"{slug}-{viewport_name}.png"
                filepath = os.path.join(output_dir, filename)

                print(f"Capturing {viewport_name}: {path}...", end=" ")

                try:
                    page.goto(url, wait_until="networkidle", timeout=30000)
                    page.wait_for_timeout(500)  # Let animations settle

                    # Full page screenshot
                    page.screenshot(path=filepath, full_page=True)

                    print(f"✓ {filename}")
                    screenshots.append({
                        "path": path,
                        "viewport": viewport_name,
                        "file": filepath,
                        "status": "success"
                    })

                except Exception as e:
                    print(f"✗ Error: {e}")
                    screenshots.append({
                        "path": path,
                        "viewport": viewport_name,
                        "file": None,
                        "status": f"error: {e}"
                    })

            context.close()

        browser.close()

    return screenshots


def main():
    """Main entry point."""
    print("\n" + "="*60)
    print("Visual QA Script - leomayn.com")
    print("="*60 + "\n")

    # Parse arguments for specific pages
    pages = None
    viewports = None

    if len(sys.argv) > 1:
        if sys.argv[1] == "--help":
            print("Usage: python qa-visual.py [page_path] [--mobile|--desktop]")
            print("\nExamples:")
            print("  python qa-visual.py                    # All pages, all viewports")
            print("  python qa-visual.py /                  # Homepage only")
            print("  python qa-visual.py /services          # Services page only")
            print("  python qa-visual.py / --mobile         # Homepage, mobile only")
            return 0

        # Filter pages
        pages = [arg for arg in sys.argv[1:] if arg.startswith("/")]
        if not pages:
            pages = PAGES

        # Filter viewports
        if "--mobile" in sys.argv:
            viewports = {"mobile": VIEWPORTS["mobile"]}
        elif "--desktop" in sys.argv:
            viewports = {"desktop": VIEWPORTS["desktop"]}

    screenshots = capture_screenshots(pages, viewports)

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)

    success = [s for s in screenshots if s["status"] == "success"]
    failed = [s for s in screenshots if s["status"] != "success"]

    print(f"\n✓ Captured: {len(success)} screenshots")
    if failed:
        print(f"✗ Failed: {len(failed)} screenshots")

    print(f"\nScreenshots saved to: {OUTPUT_DIR}")

    # List files for easy access
    print("\nFiles created:")
    for s in success:
        print(f"  - {os.path.basename(s['file'])}")

    return 0 if not failed else 1


if __name__ == "__main__":
    sys.exit(main())
