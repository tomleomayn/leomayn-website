# Indexing Fix Plan — leomayn.com

## Context

Search Console data (7 Apr 2026) shows 33 pages not indexed vs 13 indexed — a collapse from 18 indexed in January. Three critical issues: 6 redirect pages, 15 crawled-not-indexed, 12 discovered-not-indexed. Root causes: stale static sitemap, missing pages, dead-end pages with no internal links, metadata gaps. This plan combines Phase 1 (technical) and Phase 2 (content quality) fixes, plus rolls in Notion backlog item [SW-01] internal linking strategy.

## Work Items

### 1. Dynamic Sitemap (`app/sitemap.ts`)

**Why:** Static `/public/sitemap.xml` has lastmod dates from February. Google sees a dormant site and deprioritises crawling.

**Action:**
- Delete `public/sitemap.xml`
- Create `app/sitemap.ts` using Next.js Metadata API
- Include all 28 indexable pages with accurate lastmod (use build date)
- Exclude: `/ai-planner/start` (noindex), `/ai-planner/decline` (utility page)

**File:** `app/sitemap.ts` (new)

---

### 2. Deploy Ghost Pages

**Why:** `/ai-readiness` and `/applied-ai/sophistication-gap` are complete, production-ready pages (3500 and 2800 words respectively) sitting as untracked files. They return 404 on production.

**Action:**
- These are untracked files on branch `content/resource-claude-code-deck-guide`
- Will be committed as part of this work and merged to main
- Add both to sitemap
- The `/applied-ai` hub page already links to `/applied-ai/sophistication-gap`

**Files:** `app/ai-readiness/page.tsx`, `app/applied-ai/sophistication-gap/page.tsx` (existing, untracked)

---

### 3. Create `/resources` Index Page

**Why:** `/resources` returns 404. Google discovers parent paths from URL structure — wasted crawl budget. Also gives a landing page for the 4 gated resources.

**Action:**
- Create `app/resources/page.tsx` — server component with metadata
- List all 4 resources with titles, descriptions (indexable text), and links
- Pattern: match `/applied-ai` hub page style
- Add to sitemap

**Files:** `app/resources/page.tsx` (new), `app/resources/layout.tsx` (new, for metadata)

---

### 4. Internal Linking Overhaul — [SW-01]

**Why:** Most pages are dead ends beyond nav/footer. Google needs contextual crawl paths to discover and value pages. Notion backlog [SW-01]: "every page links to at least 2-3 related pages."

**Approach:** Add a reusable `RelatedPages` component for consistent cross-linking at the bottom of content pages. Plus targeted inline links where natural.

**Linking map:**

| Page | Add contextual links to |
|------|------------------------|
| `/approach` | `/how-we-think`, `/services` |
| `/how-we-think` | `/approach`, `/applied-ai` |
| `/about` | `/why-leomayn`, `/approach`, `/contact` |
| `/why-leomayn` | `/about`, `/services`, `/contact` |
| `/ai-consulting` | `/applied-ai`, `/services`, `/approach` |
| `/contact` | `/services`, `/faq`, `/approach` |
| `/faq` | `/services`, `/contact`, `/approach` |
| `/privacy` | `/contact`, `/security-compliance` |
| `/services/diagnose` | `/services/define` (next phase), `/ai-readiness` |
| `/services/define` | `/services/diagnose` (prev), `/services/deliver` (next) |
| `/services/deliver` | `/services/define` (prev), `/services/support` (next) |
| `/services/support` | `/services/deliver` (prev), `/contact` |
| `/applied-ai/*` articles | 2 sibling articles each + `/applied-ai` hub |
| `/ai-readiness` | `/services/diagnose`, `/applied-ai` |
| `/resources/*` pages | `/resources` index, 1 related resource |
| `/security-compliance` | `/services`, `/faq` |

**Component:** Create `components/RelatedPages.tsx` — accepts array of `{href, title, description}`, renders a "You might also like" or "Related" section.

**Files:** `components/RelatedPages.tsx` (new), ~20 page files edited

---

### 5. Metadata Gaps

**Why:** Missing OpenGraph tags hurt social sharing signals; missing metadata on client pages means Google sees generic titles.

**Action:**

| Page | Fix |
|------|-----|
| `/privacy` | Add OpenGraph tags to metadata export |
| `/why-leomayn` | Add OpenGraph tags to metadata export |
| `/contact` | Add OpenGraph tags to `layout.tsx` metadata |
| `/ai-planner` | Create `app/ai-planner/layout.tsx` with full metadata + OG |
| Home `/` | Already has metadata via root layout — OK |

**Files:** `app/privacy/page.tsx`, `app/why-leomayn/page.tsx`, `app/contact/layout.tsx`, `app/ai-planner/layout.tsx` (new)

---

### 6. Resource Page Indexability

**Why:** All 4 resource pages are client components showing gated forms. Google sees a form, not content. The layout.tsx files have metadata/descriptions, which helps, but the page body itself is thin from Google's perspective.

**Action:**
- Add 100-150 words of descriptive content above the gate form on each resource page — what the resource covers, who it's for, key takeaways
- This gives Google indexable text while keeping the gate intact

**Files:** `app/resources/claude-code-cheat-sheet/page.tsx`, `app/resources/claude-code-reporting-guide/page.tsx`, `app/resources/ai-vendor-due-diligence/page.tsx`, `app/resources/claude-code-deck-guide/page.tsx`

---

### 7. About vs Why Leomayn Differentiation

**Why:** These pages cover similar ground (founder story, company values). Google may see them as duplicate/thin relative to each other.

**Action:** NOT consolidating — keep both but sharpen the distinction:
- `/about` = the firm: who we are, what we believe, how we work
- `/why-leomayn` = the case for choosing us: differentiators, proof points, comparison
- Add explicit cross-link between them with framing ("About the firm" vs "Why choose us")
- Ensure meta descriptions are clearly differentiated

**Files:** `app/about/page.tsx`, `app/why-leomayn/page.tsx` (minor content edits + linking)

---

## Execution Order

1. Create `RelatedPages` component (dependency for step 4)
2. Dynamic sitemap (`app/sitemap.ts`)
3. `/resources` index page
4. Ghost pages committed
5. Metadata gaps fixed
6. Internal linking added to all pages
7. Resource page content enhanced
8. About/Why Leomayn sharpened

## Branch Strategy

All work on a new branch `fix/indexing-overhaul` from main. Single PR.

## Verification

1. `npm run build` — no errors
2. `npm run dev` — spot-check pages render
3. Visit `/sitemap.xml` — verify dynamic generation, all URLs present, lastmod dates current
4. Visit `/resources` — verify index page renders
5. Visit `/ai-readiness` and `/applied-ai/sophistication-gap` — verify 200
6. Spot-check 5 pages for RelatedPages component rendering
7. Check no trailing-slash links in any modified file
8. After deploy: resubmit sitemap in Search Console, request indexing for priority pages

## Notion Update

Update [SW-01] status from Backlog → In Progress (then Done after merge).
