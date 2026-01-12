# Leomayn Logo Assets

This directory contains official Leomayn logo files in various formats for documentation, social media, and general use.

## Logo Files

### SVG (Vector - recommended for web)
All SVG files have **transparent backgrounds** and scale infinitely without quality loss.

#### Icon (Square)
- `logo-icon.svg` - For light backgrounds (dark slate L with coral underline)
- `logo-icon-light.svg` - For dark backgrounds (white L with coral underline)
- Dimensions: 192×192 viewBox

#### Horizontal (Wordmark)
- `logo-horizontal.svg` - For light backgrounds
- `logo-horizontal-light.svg` - For dark backgrounds
- Dimensions: 600×150 viewBox
- Letter spacing: 0.12em (matches website)

### PNG (Raster - for compatibility)
Exported at standard sizes with transparent backgrounds.

#### Icon Sizes
- `logo-icon-512.png` - 512×512px (standard)
- `logo-icon-1024.png` - 1024×1024px (2x retina)
- `logo-icon-light-512.png` - 512×512px for dark backgrounds
- `logo-icon-light-1024.png` - 1024×1024px for dark backgrounds

#### Horizontal Sizes
- `logo-horizontal-1200x300.png` - Standard horizontal (4:1 ratio)
- `logo-horizontal-2400x600.png` - Retina horizontal
- `logo-horizontal-light-1200x300.png` - For dark backgrounds
- `logo-horizontal-light-2400x600.png` - For dark backgrounds (retina)

#### Social Media / OG Images
- `logo-social-1200x630.png` - Open Graph / Twitter card size

## Usage Guidelines

### When to use each version

**Icon logos** - Use when space is limited:
- Favicons
- App icons
- Social media profile pictures
- Small badges

**Horizontal logos** - Use for branding and documentation:
- Website headers
- GitHub README
- Documentation sites
- Email signatures
- Presentations
- Marketing materials

### Background Selection

**Dark version** (logo-*-light.svg/png):
- Use on dark backgrounds (#1a3d56 slate or darker)
- Use on colorful backgrounds where dark text would lack contrast
- Use on photography/images with dark tones

**Standard version** (logo-*.svg/png):
- Use on white or light backgrounds
- Use in documentation (typically white background)
- Use in most web contexts

## Brand Colors

- **Slate**: #1a3d56
- **Coral (Accent)**: #f7c9c0
- **Chalk**: #fffcfa

## Typography

- **Font Family**: System fonts (system-ui, -apple-system, sans-serif)
- **Font Weight**: 700 (bold)
- **Letter Spacing**: 0.12em
- **Underline Height**: 8px (in 72px font context), proportional to 3px at website text sizes

## Examples

### GitHub README
```markdown
<!-- Light background -->
![Leomayn](https://leomayn.com/logo/logo-horizontal.svg)

<!-- Dark background -->
![Leomayn](https://leomayn.com/logo/logo-horizontal-light.svg)
```

### HTML
```html
<!-- SVG (recommended) -->
<img src="/logo/logo-horizontal.svg" alt="Leomayn" width="400">

<!-- PNG fallback -->
<img src="/logo/logo-horizontal-1200x300.png" alt="Leomayn" width="400">
```

### Social Media
Use `logo-social-1200x630.png` for:
- Open Graph meta tags (Facebook, LinkedIn)
- Twitter Card images
- Link previews

## Regenerating PNG Files

If you need to regenerate PNG files from SVG sources:

```bash
# Install librsvg (includes rsvg-convert)
brew install librsvg

# Generate icon PNGs
rsvg-convert -w 512 -h 512 logo-icon.svg > logo-icon-512.png
rsvg-convert -w 1024 -h 1024 logo-icon.svg > logo-icon-1024.png
rsvg-convert -w 512 -h 512 logo-icon-light.svg > logo-icon-light-512.png
rsvg-convert -w 1024 -h 1024 logo-icon-light.svg > logo-icon-light-1024.png

# Generate horizontal PNGs
rsvg-convert -w 1200 -h 300 logo-horizontal.svg > logo-horizontal-1200x300.png
rsvg-convert -w 2400 -h 600 logo-horizontal.svg > logo-horizontal-2400x600.png
rsvg-convert -w 1200 -h 300 logo-horizontal-light.svg > logo-horizontal-light-1200x300.png
rsvg-convert -w 2400 -h 600 logo-horizontal-light.svg > logo-horizontal-light-2400x600.png
```

## License

These logo assets are proprietary to Leomayn Limited. All rights reserved.
