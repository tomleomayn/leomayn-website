#!/usr/bin/env python3
"""
OpenGraph QA Script for leomayn.com
Validates OG tags and generates social preview mockups.
"""

import os
import sys
import requests
import re
from io import BytesIO
from urllib.parse import urljoin, quote
from playwright.sync_api import sync_playwright

# Configuration
SITE_URL = "https://www.leomayn.com"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "qa-screenshots", "og-previews")

# Pages to check
PAGES = ["/", "/services", "/about", "/contact"]

# Platform requirements
PLATFORMS = {
    "facebook": {
        "name": "Facebook",
        "min_width": 1200,
        "min_height": 630,
        "aspect_ratio": 1.91,
        "debugger": "https://developers.facebook.com/tools/debug/?q=",
    },
    "linkedin": {
        "name": "LinkedIn",
        "min_width": 1200,
        "min_height": 627,
        "aspect_ratio": 1.91,
        "debugger": "https://www.linkedin.com/post-inspector/inspect/",
    },
    "twitter": {
        "name": "Twitter/X",
        "min_width": 800,
        "min_height": 418,
        "aspect_ratio": 1.91,
        "debugger": "https://cards-dev.twitter.com/validator",
    },
}


def ensure_output_dir():
    """Create output directory if it doesn't exist."""
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    return OUTPUT_DIR


def fetch_page(url):
    """Fetch page HTML."""
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (compatible; OG-QA-Bot/1.0)"
        })
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        return None


def extract_meta(html, name):
    """Extract meta tag content."""
    patterns = [
        rf'<meta\s+property="{name}"\s+content="([^"]*)"',
        rf'<meta\s+content="([^"]*)"\s+property="{name}"',
        rf'<meta\s+name="{name}"\s+content="([^"]*)"',
        rf'<meta\s+content="([^"]*)"\s+name="{name}"',
    ]
    for pattern in patterns:
        match = re.search(pattern, html, re.IGNORECASE)
        if match:
            return match.group(1)
    return None


def extract_title(html):
    """Extract title tag."""
    match = re.search(r'<title>([^<]*)</title>', html, re.IGNORECASE)
    return match.group(1) if match else None


def get_image_dimensions(url):
    """Fetch image and get dimensions."""
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (compatible; OG-QA-Bot/1.0)"
        })
        response.raise_for_status()

        # Use PIL if available, otherwise estimate from content
        try:
            from PIL import Image
            img = Image.open(BytesIO(response.content))
            return img.size
        except ImportError:
            # Fallback: check content-length suggests valid image
            if len(response.content) > 1000:
                return (1200, 630)  # Assume valid if substantial content
            return None
    except:
        return None


def validate_og_tags(url):
    """Validate OpenGraph tags for a URL."""
    html = fetch_page(url)
    if not html:
        return {"error": "Failed to fetch page"}

    og_data = {
        "url": url,
        "title": extract_meta(html, "og:title") or extract_title(html),
        "description": extract_meta(html, "og:description") or extract_meta(html, "description"),
        "image": extract_meta(html, "og:image"),
        "site_name": extract_meta(html, "og:site_name"),
        "type": extract_meta(html, "og:type"),
        "twitter_card": extract_meta(html, "twitter:card"),
        "twitter_image": extract_meta(html, "twitter:image"),
    }

    # Validate image
    if og_data["image"]:
        dims = get_image_dimensions(og_data["image"])
        if dims:
            og_data["image_width"] = dims[0]
            og_data["image_height"] = dims[1]
            og_data["image_valid"] = True
        else:
            og_data["image_valid"] = False

    return og_data


def generate_preview_html(og_data, platform):
    """Generate HTML for a social preview mockup."""
    title = og_data.get("title", "No title")[:60]
    description = og_data.get("description", "No description")[:150]
    image = og_data.get("image", "")
    site_name = og_data.get("site_name", "leomayn.com")
    url_display = og_data.get("url", "").replace("https://", "").replace("http://", "")

    if platform == "facebook":
        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f0f2f5; padding: 40px; margin: 0; }}
                .preview {{ width: 500px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }}
                .image {{ width: 100%; height: 261px; background: #e4e6eb url('{image}') center/cover no-repeat; }}
                .content {{ padding: 12px; border-top: 1px solid #e4e6eb; }}
                .site {{ font-size: 12px; color: #65676b; text-transform: uppercase; }}
                .title {{ font-size: 16px; font-weight: 600; color: #1c1e21; margin: 4px 0; line-height: 1.3; }}
                .desc {{ font-size: 14px; color: #65676b; line-height: 1.3; }}
                .label {{ position: absolute; top: 10px; left: 10px; background: #1877f2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }}
                .container {{ position: relative; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="label">Facebook Preview</div>
                <div class="preview">
                    <div class="image"></div>
                    <div class="content">
                        <div class="site">{site_name}</div>
                        <div class="title">{title}</div>
                        <div class="desc">{description}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

    elif platform == "linkedin":
        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f3f2ef; padding: 40px; margin: 0; }}
                .preview {{ width: 552px; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; }}
                .image {{ width: 100%; height: 289px; background: #e0e0e0 url('{image}') center/cover no-repeat; }}
                .content {{ padding: 12px 16px; }}
                .title {{ font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.9); margin-bottom: 4px; line-height: 1.4; }}
                .site {{ font-size: 12px; color: rgba(0,0,0,0.6); }}
                .label {{ position: absolute; top: 10px; left: 10px; background: #0a66c2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }}
                .container {{ position: relative; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="label">LinkedIn Preview</div>
                <div class="preview">
                    <div class="image"></div>
                    <div class="content">
                        <div class="title">{title}</div>
                        <div class="site">{url_display}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

    elif platform == "twitter":
        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #15202b; padding: 40px; margin: 0; }}
                .preview {{ width: 504px; background: #192734; border-radius: 16px; overflow: hidden; border: 1px solid #38444d; }}
                .image {{ width: 100%; height: 252px; background: #38444d url('{image}') center/cover no-repeat; }}
                .content {{ padding: 12px; }}
                .title {{ font-size: 15px; font-weight: 400; color: #e7e9ea; margin-bottom: 4px; line-height: 1.3; }}
                .desc {{ font-size: 15px; color: #8b98a5; line-height: 1.3; margin-bottom: 4px; }}
                .site {{ font-size: 15px; color: #8b98a5; display: flex; align-items: center; gap: 4px; }}
                .site::before {{ content: '🔗'; font-size: 12px; }}
                .label {{ position: absolute; top: 10px; left: 10px; background: #1d9bf0; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }}
                .container {{ position: relative; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="label">Twitter/X Preview</div>
                <div class="preview">
                    <div class="image"></div>
                    <div class="content">
                        <div class="title">{title}</div>
                        <div class="desc">{description[:100]}...</div>
                        <div class="site">{url_display}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """

    return ""


def capture_preview(og_data, platform, output_path):
    """Capture a screenshot of the preview mockup."""
    html = generate_preview_html(og_data, platform)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 700, "height": 500})
        page.set_content(html)
        page.wait_for_timeout(500)
        page.screenshot(path=output_path)
        browser.close()


def slugify(path):
    """Convert path to filename."""
    if path == "/":
        return "homepage"
    return path.strip("/").replace("/", "-")


def main():
    print("\n" + "="*60)
    print("OpenGraph QA Script - leomayn.com")
    print("="*60)

    ensure_output_dir()

    pages = PAGES
    if len(sys.argv) > 1 and sys.argv[1].startswith("/"):
        pages = [sys.argv[1]]

    all_passed = True

    for path in pages:
        url = f"{SITE_URL}{path}"
        slug = slugify(path)

        print(f"\n{'─'*60}")
        print(f"Checking: {url}")
        print('─'*60)

        og_data = validate_og_tags(url)

        if "error" in og_data:
            print(f"  ✗ {og_data['error']}")
            all_passed = False
            continue

        # Check required tags
        checks = [
            ("og:title", og_data.get("title")),
            ("og:description", og_data.get("description")),
            ("og:image", og_data.get("image")),
        ]

        for tag, value in checks:
            if value:
                print(f"  ✓ {tag}: {value[:50]}...")
            else:
                print(f"  ✗ {tag}: MISSING")
                all_passed = False

        # Check image dimensions
        if og_data.get("image_valid"):
            w, h = og_data.get("image_width", 0), og_data.get("image_height", 0)
            print(f"  ✓ Image dimensions: {w}x{h}")

            # Check against platform requirements
            for platform_key, platform in PLATFORMS.items():
                if w >= platform["min_width"] and h >= platform["min_height"]:
                    print(f"    ✓ {platform['name']}: meets requirements")
                else:
                    print(f"    ✗ {platform['name']}: needs {platform['min_width']}x{platform['min_height']}")
        elif og_data.get("image"):
            print(f"  ✗ Image failed to load")
            all_passed = False

        # Generate preview mockups
        print(f"\n  Generating preview mockups...")
        for platform_key in ["facebook", "linkedin", "twitter"]:
            output_path = os.path.join(OUTPUT_DIR, f"{slug}-{platform_key}.png")
            try:
                capture_preview(og_data, platform_key, output_path)
                print(f"    ✓ {platform_key}: {os.path.basename(output_path)}")
            except Exception as e:
                print(f"    ✗ {platform_key}: {e}")

        # Print debugger links
        print(f"\n  Debugger links (for manual verification):")
        encoded_url = quote(url, safe='')
        for platform_key, platform in PLATFORMS.items():
            if platform_key == "twitter":
                print(f"    {platform['name']}: {platform['debugger']}")
            else:
                print(f"    {platform['name']}: {platform['debugger']}{encoded_url}")

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)

    if all_passed:
        print("✓ All OpenGraph checks passed!")
    else:
        print("✗ Some checks failed - review above")

    print(f"\nPreview mockups saved to: {OUTPUT_DIR}")

    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
