# Homepage SEO Optimization Proposal

**Date:** 2025-01-13
**Status:** Implemented
**Backlog Items:** HP-01, HP-02, HP-03, HP-05
**Deferred:** HP-04 (moved to /services/deliver)

---

## Summary

This proposal covers 4 homepage backlog items to optimize for the primary keyword group "AI Consulting Services."

**Target Keywords:**
- Primary: "ai consulting" (2,900 monthly searches)
- Secondary: "ai consultants", "ai consulting services"

---

## Current State

### Metadata (in `app/layout.tsx`)

| Element | Current Value | Character Count |
|---------|---------------|-----------------|
| Title | Leomayn - Fix Work, Then Scale with AI | 40 chars |
| Meta Description | We redesign knowledge work to remove bottlenecks, reduce repetitive work, and fix error-prone processes. Then we use automation and AI to free up humans to focus on work which creates real value. | 198 chars (OVER LIMIT) |

### Page Content (in `app/page.tsx`)

| Element | Current Value |
|---------|---------------|
| H1 | Fix work, then scale with AI |
| Keyword mentions | "consulting" = 0 mentions |

---

## Approved Changes

### HP-01: Update Title Tag ✓

**Location:** `app/layout.tsx` line 29

| Element | Current | Proposed |
|---------|---------|----------|
| Title | Leomayn - Fix Work, Then Scale with AI | AI Consulting - Fix Work, Then Scale with AI \| Leomayn |

**Character count:** 55 chars (within 60 limit)
**Pixel width:** ~385px (within 580px limit)

**Also update OpenGraph & Twitter titles (lines 35, 44):**
```
AI Consulting - Fix Work, Then Scale with AI | Leomayn
```

---

### HP-02: Update Meta Description ✓

**Location:** `app/layout.tsx` line 30

**Current (198 chars - TOO LONG):**
```
We redesign knowledge work to remove bottlenecks, reduce repetitive work, and fix error-prone processes. Then we use automation and AI to free up humans to focus on work which creates real value.
```

**Proposed (154 chars):**
```
AI consulting that frees your team to focus on work that creates real value. We fix operations first, then scale with automation. Book a discovery call.
```

**Also update OpenGraph & Twitter descriptions (lines 36-37, 45-46):**
```
AI consulting that frees your team to focus on work that creates real value. We fix operations first, then scale with automation.
```

**Checklist:**
- [x] Under 155 characters (154)
- [x] Contains primary keyword ("AI consulting")
- [x] Preserves brand message ("work that creates real value")
- [x] Contains CTA ("Book a discovery call")
- [x] Variation approach: Benefit-first

---

### HP-03: Add "AI Consulting" to Body Copy ✓

**Location:** `app/page.tsx` - Context Section (lines 87-110)

**H2 (line 89):** Keep unchanged
```
AI helps great teams achieve more
```

**Existing paragraphs:** Keep unchanged

**Add new 4th paragraph after line 107:**
```tsx
<p>
  Our AI consulting approach starts with diagnosis, not technology. We identify
  where time leaks out of your workflows before recommending solutions.
</p>
```

**Rationale:**
- Natural integration of "AI consulting" keyword
- Reinforces "diagnose first" differentiator
- Maintains existing flow and tone
- Doesn't disrupt current content

---

### HP-04: Common Workflows Section — DEFERRED

**Decision:** Remove from homepage scope.

**Rationale:**
- Homepage should focus on promise and positioning
- Page already has substantial content journey
- Adding another section could dilute conversion focus
- Better fit for `/services/deliver` page

**Action:** This content is already covered by backlog item DL-07 on the Deliver page.

---

### HP-05: Make Content More Extractable for LLMs ✓

**Location:** `app/page.tsx` - Context Section

**Add after the new 4th paragraph (HP-03):**

```tsx
<div className="mt-8 p-6 bg-chalk rounded-lg">
  <p className="text-lg leading-relaxed text-slate">
    <strong>If you have</strong> manual processes slowing your team down,
    <strong> we</strong> diagnose the root cause and redesign the workflow,
    <strong> so you get</strong> automation that actually works and a team
    that can maintain it.
  </p>
</div>
```

**Add definition block:**

```tsx
<p className="text-sm text-slate/60 mt-4 italic">
  Operational leverage: Getting more output from the same input by
  removing friction, automating repetitive tasks, and focusing human
  effort on high-value work.
</p>
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `app/layout.tsx` | Update title (line 29, 35, 44), description (line 30, 36-37, 45-46) |
| `app/page.tsx` | Add new paragraph + LLM blocks to Context section (after line 107) |

---

## Implementation Checklist

- [x] **HP-01:** Update title in layout.tsx (lines 29, 35, 44)
- [x] **HP-02:** Update meta description in layout.tsx (lines 30, 36-37, 45-46)
- [x] **HP-03:** Add new 4th paragraph to Context section in page.tsx
- [x] **HP-05:** Add LLM-extractable content blocks in page.tsx
- [ ] **HP-04:** Mark as deferred in Notion (reassign to DL-07)

---

## Notion Updates Required

| Item | Action | Status |
|------|--------|--------|
| HP-01 | Mark "Done" after implementation | ✓ Done |
| HP-02 | Mark "Done" after implementation | ✓ Done |
| HP-03 | Mark "Done" after implementation | ✓ Done |
| HP-04 | Mark "Deferred" - covered by DL-07 | ✓ Backlog (deferred) |
| HP-05 | Mark "Done" after implementation | ✓ Done |

---

## Post-Implementation

QA items created in Notion Website Backlog (SEO category, "Next up" status):

- [x] QA-HP-01: Verify title/meta render correctly in browser
- [x] QA-HP-02: Check OpenGraph preview (use og:image debugger)
- [x] QA-HP-03: Submit to Google Search Console for re-indexing
- [x] QA-HP-04: Monitor rankings for "ai consulting" over 4 weeks
