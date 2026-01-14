# SEO Implementation Handover

**Date:** 2026-01-14
**Session:** Services page SEO optimization
**Status:** Ready to continue in Cursor

---

## Completed This Session

### Services Page (`/services`) - SV-01, SV-02, SV-03

| Item | Change |
|------|--------|
| Title | `AI Consulting Services - Our Four-Phase Framework \| Leomayn` |
| H1 | `AI consulting that delivers operational improvement` (sentence case) |
| Meta | `AI consulting services built on our four-phase framework. We diagnose, define, deliver, and support. Fix operations before scaling with AI. Book a call.` |
| Body copy | Integrated "AI consulting services" into hero paragraph |
| Pricing heading | Changed from "Transparent pricing approach" to "How we price" |
| CTA | Changed from "Book Discovery Call" to "Let's talk" with `min-w-[220px]` |
| OpenGraph | Added full openGraph object with title, description, and images |

**Commits:**
- `eac3c86` - Implement services page SEO optimizations (SV-01, SV-02, SV-03)
- `85b19da` - Add OpenGraph metadata to services page and document requirement
- `fecfea4` - Add og:image to services page openGraph metadata

**QA Status:** All checks passing

---

## On Hold

### SV-04: Add Pricing Ranges

The "How we price" section needs indicative pricing. Placeholder values from proposal:

| Phase | Starting From | Duration |
|-------|---------------|----------|
| Diagnose | £5,000 | 2-4 weeks |
| Define | £7,500 | 2-3 weeks |
| Deliver | £15,000 | 4-8 weeks |

**Action required:** Confirm actual pricing before implementation.

---

## Key Learnings Documented

### OpenGraph Metadata (Important!)

Page-level `openGraph` objects **completely override** (not merge with) the layout's openGraph. Each page needs:

```tsx
export const metadata = {
  title: '...',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: [{  // MUST include - not inherited from layout
      url: 'https://leomayn.com/logo/logo-social-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'Leomayn - AI Consulting',
    }],
  },
}
```

This is documented in `docs/seo-keyword-strategy.md` under "Page Metadata Implementation Checklist".

---

## QA Automation

### Location
`/Users/tomjones/Documents/Dev/leomayn-hq/automation/website-qa/`

### Usage
```bash
cd /path/to/leomayn-hq/automation/website-qa

# Full QA suite for a page
python website-qa-all.py /services

# Individual scripts
python website-qa-seo.py /services      # SEO meta validation
python website-qa-visual.py /services   # Screenshots
python website-qa-opengraph.py /services # OG + social previews
```

### Configuration
Expected values are in `website-config.py`. Add new pages there before running QA.

### Output
- Screenshots: `output/screenshots/`
- Social previews: `output/og-previews/`

---

## Notion Backlog

**Database:** Website Backlog (NOTION_DB_WEBSITE_BACKLOG)

**Updated to Done:**
- SV-01, SV-02, SV-03

**Remaining Services items:**
- SV-04 (on hold - pricing)
- SV-05 (already done - internal links exist)

---

## Next Priority Items (from backlog)

### High Priority
| ID | Page | Task |
|----|------|------|
| DG-01 | /services/diagnose | Update title tag |
| DG-02 | /services/diagnose | Update H1 |
| DG-03 | /services/diagnose | Update meta description |
| DF-01 | /services/define | Update title tag |
| DF-02 | /services/define | Update H1 |
| DF-03 | /services/define | Update meta description |
| DL-01 | /services/deliver | Update title tag |
| DL-02 | /services/deliver | Update H1 |
| DL-03 | /services/deliver | Update meta description |
| SP-01 | /services/support | Update title tag |
| SP-02 | /services/support | Update H1 |
| SP-03 | /services/support | Update meta description |

### New Pages (High Priority)
- AG-01: Create /ai-agents page (37,000+ monthly searches)
- FQ-01: Create /faq page
- SC-01: Create /security page

---

## Key Files

| File | Purpose |
|------|---------|
| `app/services/page.tsx` | Services page (just updated) |
| `app/layout.tsx` | Site-wide metadata defaults |
| `docs/seo-keyword-strategy.md` | SEO backlog and best practices |
| `docs/proposals/services-seo-proposal.md` | Original proposal for services |

---

## Workflow for Next Pages

1. Read the page's section in `docs/seo-keyword-strategy.md` for proposed metadata
2. Update the page's metadata (title, description, openGraph with images)
3. Update H1 and integrate keyword into body copy where natural
4. Add expected values to `website-config.py` in leomayn-hq
5. Commit and push
6. Run QA after deploy: `python website-qa-all.py /path`
7. Update Notion backlog items to Done

---

## Environment

- **Website repo:** `/Users/tomjones/Documents/Dev/leomayn-website`
- **HQ repo:** `/Users/tomjones/Documents/Dev/leomayn-hq`
- **Notion credentials:** `/Users/tomjones/Documents/Dev/leomayn-hq/.env`
- **Deploy:** Auto-deploys from main branch push

---

**Ready to continue.**
