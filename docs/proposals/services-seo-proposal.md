# Services Page SEO Optimization Proposal

**Date:** 2025-01-13
**Status:** Draft - Awaiting Review
**Backlog Items:** SV-01, SV-02, SV-03, SV-04, SV-05

---

## Summary

This proposal covers 5 Services page backlog items to optimize for the keyword group "AI Consulting Services."

**Target Keywords:**
- Primary: "ai consulting services" (480 monthly searches)
- Secondary: "ai business consulting" (170), "ai consultants" (2,900)

---

## Current State

### Metadata (in `app/services/page.tsx`)

| Element | Current Value | Character Count |
|---------|---------------|-----------------|
| Title | Services - Leomayn | 18 chars |
| Meta Description | Four-phase framework for operational improvement: Diagnose, Define, Deliver, Support. Fix the work first, then scale with AI. | 127 chars |
| H1 | Four steps to operational improvement | 38 chars |

### Issues
- Title is generic - no keyword targeting
- H1 has no keyword - purely descriptive
- Meta description mentions framework but not "AI consulting"
- No pricing information despite "Transparent pricing approach" section

---

## Proposed Changes

### SV-01: Update Title Tag

**Location:** `app/services/page.tsx` line 8

| Element | Current | Proposed |
|---------|---------|----------|
| Title | Services - Leomayn | AI Consulting Services - Our Four-Phase Framework \| Leomayn |

**Character count:** 57 chars (within 60 limit)

---

### SV-02: Update H1 to Include Primary Keyword

**Location:** `app/services/page.tsx` line 41

| Element | Current | Proposed |
|---------|---------|----------|
| H1 | Four steps to operational improvement | AI Consulting Services: Four Steps to Operational Improvement |

**Character count:** 62 chars (within 70 limit)

**Rationale:**
- Front-loads the primary keyword "AI Consulting Services"
- Preserves the existing messaging about the four-step approach
- Differentiates from title (as per best practices)

---

### SV-03: Update Meta Description

**Location:** `app/services/page.tsx` line 9

**Current (127 chars):**
```
Four-phase framework for operational improvement: Diagnose, Define, Deliver, Support. Fix the work first, then scale with AI.
```

**Proposed (154 chars):**
```
AI consulting services built on our proven four-phase framework. We diagnose, define, deliver, and support—fixing operations before scaling with AI. Book a call.
```

**Checklist:**
- [x] Under 155 characters (154)
- [x] Contains primary keyword ("AI consulting services")
- [x] Preserves framework message (four-phase)
- [x] Contains CTA ("Book a call")
- [x] Variation approach: Feature-first

---

### SV-04: Add Pricing Ranges to Page

**Location:** `app/services/page.tsx` - Pricing Philosophy section (lines 180-204)

**Current state:** Section discusses pricing approach but gives no actual ranges.

**Proposed:** Add indicative pricing ranges after the philosophy explanation:

```tsx
<div className="mt-8 grid md:grid-cols-3 gap-6">
  <div className="bg-pearl p-6 rounded-lg text-center">
    <h3 className="text-xl font-serif text-slate mb-2">Diagnose</h3>
    <p className="text-2xl font-semibold text-coral-accessible mb-2">From £5,000</p>
    <p className="text-sm text-slate/70">2-4 weeks</p>
  </div>
  <div className="bg-pearl p-6 rounded-lg text-center">
    <h3 className="text-xl font-serif text-slate mb-2">Define</h3>
    <p className="text-2xl font-semibold text-coral-accessible mb-2">From £7,500</p>
    <p className="text-sm text-slate/70">2-3 weeks</p>
  </div>
  <div className="bg-pearl p-6 rounded-lg text-center">
    <h3 className="text-xl font-serif text-slate mb-2">Deliver</h3>
    <p className="text-2xl font-semibold text-coral-accessible mb-2">From £15,000</p>
    <p className="text-sm text-slate/70">4-8 weeks</p>
  </div>
</div>
<p className="text-sm text-slate/60 mt-4 text-center italic">
  Indicative pricing for standard complexity. Actual pricing depends on scope.
</p>
```

**Rationale:**
- Visitors want to understand investment level before booking a call
- Reduces unqualified leads
- Demonstrates transparency (matches section heading)
- SEO benefit: pricing pages tend to rank well for commercial queries

**Note:** Placeholder values used - please confirm actual pricing ranges.

---

### SV-05: Add Internal Links to Each Phase Page

**Location:** `app/services/page.tsx` - ServiceCard components (lines 55-110)

**Current state:** Each ServiceCard already has an `href` prop linking to the phase page.

**Status:** Already implemented. Mark as Done.

---

## Files to Modify

| File | Changes |
|------|---------|
| `app/services/page.tsx` | Update title (line 8), description (line 9), H1 (line 41), add pricing grid |

---

## Implementation Checklist

- [ ] **SV-01:** Update title in page.tsx
- [ ] **SV-02:** Update H1 in page.tsx
- [ ] **SV-03:** Update meta description in page.tsx
- [ ] **SV-04:** Add pricing ranges grid (requires pricing confirmation)
- [x] **SV-05:** Already implemented (internal links exist)

---

## Questions for Review

1. **SV-04 Pricing:** What are the actual starting prices for each phase? The proposal uses placeholders.

2. **H1 wording:** Is "AI Consulting Services: Four Steps to Operational Improvement" the right balance, or would you prefer something different?

---

## Post-Implementation

- [ ] Update QA script with Services page expected values
- [ ] Run QA script to verify changes
- [ ] Update Notion backlog items to Done
- [ ] Request GSC re-indexing for /services
