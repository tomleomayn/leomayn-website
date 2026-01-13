# Claude Code Instructions

This is the Leomayn marketing website (leomayn.com).

## Project Overview

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Domain:** leomayn.com

## Notion Access

Notion databases are accessed via API, not web scraping (WebFetch won't work on Notion URLs).

**Credentials and documentation:** `/Users/tomjones/Documents/Dev/leomayn-hq/`

| Resource | Location |
|----------|----------|
| API credentials | `leomayn-hq/.env` |
| Database IDs | `leomayn-hq/.env` |
| Integration docs | `leomayn-hq/integrations/notion.md` |
| Python scripts | `leomayn-hq/automation/notion-*.py` |

**Website Backlog Database:** `NOTION_DB_WEBSITE_BACKLOG` in the `.env` file

## Related Resources

- **Leomayn HQ (main brain):** `/Users/tomjones/Documents/Dev/leomayn-hq/`
  - Brand guidelines
  - Service frameworks
  - Client templates
  - Integration credentials

## Key Files

- `app/page.tsx` - Homepage
- `app/services/` - Service pages (Diagnose, Define, Deliver, Support)
- `app/about/` - About page
- `app/contact/` - Contact page with Calendly integration
- `components/` - Shared UI components
- `public/` - Static assets and images
