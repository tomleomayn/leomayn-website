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

## Brand & Voice (from Leomayn HQ)

All content must follow Leomayn voice and visual standards. These live in leomayn-hq (single source of truth):

| Resource | Location |
|----------|----------|
| Voice guide | `leomayn-hq/brain/frameworks/leomayn-voice-guide.md` |
| Visual style guide | `leomayn-hq/brain/frameworks/leomayn-visual-style-guide.md` |
| Service framework | `leomayn-hq/brain/frameworks/service-framework-schema.md` |

**Quick voice rules:**
- UK English only (prioritise, organisation, programme)
- Collaborative: "together we'll" not "we'll do for you"
- No hedging, no hype, no jargon unless earned

## Skills (from Leomayn HQ)

Skills for structured workflows live in leomayn-hq. Relevant for website work:

| Skill | Purpose | Location |
|-------|---------|----------|
| schema-markup-skill | Generate JSON-LD structured data | `leomayn-hq/.claude/skills/schema-markup-skill/SKILL.md` |

To use a skill from leomayn-hq, read the SKILL.md file and follow its workflow.

## Related Resources

- **Leomayn HQ (main brain):** `/Users/tomjones/Documents/Dev/leomayn-hq/`
  - Brand guidelines and voice guide
  - Service frameworks
  - Client templates
  - Integration credentials
  - Skills and automation workflows

## Development Workflow

**Branches:**
- `main` — Production (auto-deploys to leomayn.com)
- `develop` — Staging/development work

**Workflow:**
```
Local changes → commit → push to develop → create PR → Vercel preview → merge → production
```

| Environment | URL | Trigger |
|-------------|-----|---------|
| Local | http://localhost:3000 | `npm run dev` |
| Preview | PR-specific Vercel URL | Open PR from develop to main |
| Production | leomayn.com | Merge PR to main |

**Commands:**
```bash
# Start local dev
npm run dev

# After making changes
git add .
git commit -m "Description of changes"
git push origin develop

# Create PR for preview
gh pr create --base main --head develop --title "..." --body "..."

# After review, merge via GitHub or:
gh pr merge --squash
```

**Note:** Files added to the folder are not synced until you explicitly commit and push.

## Key Files

- `app/page.tsx` - Homepage
- `app/services/` - Service pages (Diagnose, Define, Deliver, Support)
- `app/about/` - About page
- `app/contact/` - Contact page with Calendly integration
- `components/` - Shared UI components
- `public/` - Static assets and images
