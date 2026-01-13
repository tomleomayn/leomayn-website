#!/usr/bin/env python3
"""
SEO QA Script for leomayn.com
Verifies meta tags, OpenGraph, and provides GSC submission link.
"""

import requests
import re
import sys
from urllib.parse import urljoin

# Configuration
SITE_URL = "https://www.leomayn.com"
GSC_URL = "https://search.google.com/search-console"

# Expected values for homepage
EXPECTED = {
    "/": {
        "title": "AI Consulting - Fix Work, Then Scale with AI | Leomayn",
        "description": "AI consulting that frees your team to focus on work that creates real value. We fix operations first, then scale with automation. Book a discovery call.",
        "og_title": "AI Consulting - Fix Work, Then Scale with AI | Leomayn",
        "og_description": "AI consulting that frees your team to focus on work that creates real value. We fix operations first, then scale with automation.",
        "og_image": "https://leomayn.com/logo/logo-social-1200x630.png",
    }
}


def fetch_page(url):
    """Fetch page HTML."""
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) SEO-QA-Bot"
        })
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"  ✗ Failed to fetch {url}: {e}")
        return None


def extract_meta(html, name):
    """Extract meta tag content by name or property."""
    # Try name attribute
    match = re.search(rf'<meta\s+name="{name}"\s+content="([^"]*)"', html, re.IGNORECASE)
    if match:
        return match.group(1)

    # Try property attribute (for OG tags)
    match = re.search(rf'<meta\s+property="{name}"\s+content="([^"]*)"', html, re.IGNORECASE)
    if match:
        return match.group(1)

    # Try reversed order (content before name/property)
    match = re.search(rf'<meta\s+content="([^"]*)"\s+name="{name}"', html, re.IGNORECASE)
    if match:
        return match.group(1)

    match = re.search(rf'<meta\s+content="([^"]*)"\s+property="{name}"', html, re.IGNORECASE)
    if match:
        return match.group(1)

    return None


def extract_title(html):
    """Extract title tag content."""
    match = re.search(r'<title>([^<]*)</title>', html, re.IGNORECASE)
    return match.group(1) if match else None


def check_page(path, expected):
    """Check a single page against expected values."""
    url = urljoin(SITE_URL, path)
    print(f"\n{'='*60}")
    print(f"Checking: {url}")
    print('='*60)

    html = fetch_page(url)
    if not html:
        return False

    all_passed = True

    # Check title
    actual_title = extract_title(html)
    if actual_title == expected.get("title"):
        print(f"  ✓ Title: {actual_title[:50]}...")
    else:
        print(f"  ✗ Title mismatch:")
        print(f"    Expected: {expected.get('title')}")
        print(f"    Actual:   {actual_title}")
        all_passed = False

    # Check meta description
    actual_desc = extract_meta(html, "description")
    if actual_desc == expected.get("description"):
        print(f"  ✓ Meta description: {actual_desc[:50]}...")
    else:
        print(f"  ✗ Meta description mismatch:")
        print(f"    Expected: {expected.get('description')}")
        print(f"    Actual:   {actual_desc}")
        all_passed = False

    # Check OG title
    actual_og_title = extract_meta(html, "og:title")
    if actual_og_title == expected.get("og_title"):
        print(f"  ✓ og:title: {actual_og_title[:50]}...")
    else:
        print(f"  ✗ og:title mismatch:")
        print(f"    Expected: {expected.get('og_title')}")
        print(f"    Actual:   {actual_og_title}")
        all_passed = False

    # Check OG description
    actual_og_desc = extract_meta(html, "og:description")
    if actual_og_desc == expected.get("og_description"):
        print(f"  ✓ og:description: {actual_og_desc[:50]}...")
    else:
        print(f"  ✗ og:description mismatch:")
        print(f"    Expected: {expected.get('og_description')}")
        print(f"    Actual:   {actual_og_desc}")
        all_passed = False

    # Check OG image
    actual_og_image = extract_meta(html, "og:image")
    expected_og_image = expected.get("og_image")
    if expected_og_image:
        if actual_og_image == expected_og_image:
            print(f"  ✓ og:image: {actual_og_image[:50]}...")
        else:
            print(f"  ✗ og:image mismatch:")
            print(f"    Expected: {expected_og_image}")
            print(f"    Actual:   {actual_og_image}")
            all_passed = False
    elif actual_og_image:
        print(f"  ✓ og:image present: {actual_og_image[:60]}...")
    else:
        print(f"  ⚠ og:image missing (no expected value set)")
        all_passed = False

    return all_passed


def main():
    print("\n" + "="*60)
    print("SEO QA Script - leomayn.com")
    print("="*60)

    all_passed = True

    for path, expected in EXPECTED.items():
        if not check_page(path, expected):
            all_passed = False

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)

    if all_passed:
        print("✓ All checks passed!")
    else:
        print("✗ Some checks failed - review above")

    # Manual steps
    print("\n" + "-"*60)
    print("MANUAL STEPS REQUIRED:")
    print("-"*60)
    print(f"""
1. OpenGraph Preview (check social sharing):
   - Facebook: https://developers.facebook.com/tools/debug/?q={SITE_URL}
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter:  https://cards-dev.twitter.com/validator

2. Google Search Console - Request Indexing:
   - Go to: {GSC_URL}
   - Enter URL: {SITE_URL}
   - Click "Request Indexing"

3. Rank Monitoring (ongoing):
   - Track "ai consulting" in your rank tracking tool
   - Check weekly for 4 weeks
   - Document baseline position
""")

    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
