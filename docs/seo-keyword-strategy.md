# Leomayn SEO & Website Backlog

**Created:** 2025-01-13
**Status:** Canonical Source
**Purpose:** Master backlog for all website optimization work

---

## 1. Metadata Best Practices

### Element Limits

| Element | Max Width | Max Characters | Key Rules |
|---------|-----------|----------------|-----------|
| Title | 580px | ~60 chars | Primary keyword in first half; end with " \| Leomayn" |
| H1 | 600px | ~70 chars | Include primary keyword; must differ from title |
| Meta Description | 920px | ~155 chars | Include keyword + CTA; vary opening approach |
| Alt Text | - | 100 chars | Descriptive of image content |
| URL/Slug | - | Short | Lowercase, hyphens, include primary keyword |

### Formatting Rules

- **Title Case** for all page titles and H1s
- **Sentence case** for meta descriptions and H1s
- **Primary keyword** MUST appear in Title, H1, AND Meta Description
- **Unique content** - each Title, H1, Meta must be unique across all URLs
- **H1 ≠ Title** - titles and H1s must differ (rephrase, don't duplicate)
- **Brand suffix** - always end titles with " | Leomayn" (pipe format, consistent)
- **CTA in meta** - include action phrase ("Book a discovery call", "Learn how", etc.)
- **No unsubstantiated claims** - avoid "guaranteed results", "best in class", unsupported statistics

### Page Metadata Implementation Checklist

When updating SEO metadata for any page, ensure ALL of these are set:

```tsx
export const metadata = {
  title: '...',           // Required - appears in browser tab, search results
  description: '...',     // Required - appears in search results
  openGraph: {            // Required - for social sharing (Facebook, LinkedIn)
    title: '...',         // Usually matches title
    description: '...',   // Usually matches description
  },
}
```

**Why this matters:** Without explicit `openGraph` properties, pages inherit from `layout.tsx` which shows homepage content when sharing on social media. Each page needs its own OG metadata for correct social previews.

**QA validation:** Run `python website-qa-all.py /path` to verify all metadata is correctly set before considering any SEO task complete.

### Meta Description Opening Approaches

Vary the opening approach across pages to avoid repetitive patterns:

1. **Outcome-first**: "Achieve...", "Deliver...", "Get..."
2. **Problem-solution**: "Solve...", "Address...", "Fix..."
3. **Feature-first**: "Expert...", "Advanced...", "Proven..."
4. **Benefit-first**: "Enhanced...", "Superior...", "Streamlined..."
5. **Action-first**: "Transform...", "Build...", "Implement..."
6. **Question-based**: "Need...?", "Looking for...?", "Want...?"

---

## 2. Keyword Strategy Summary

### Priority Keyword Groups

| Priority | Keyword Group | Monthly Searches | Primary Target Page |
|----------|---------------|------------------|---------------------|
| 1 | AI Consulting Services | 10,000+ | Homepage, /services |
| 2 | AI Agents / Agentic AI | 37,000+ | NEW: /ai-agents |
| 3 | AI Automation | 2,200+ | /services/deliver |
| 4 | AI Strategy | 1,200+ | /how-we-think |
| 5 | Industry-Specific | Niche | Future content |

### Primary Keywords Reference

**AI Consulting Services:** ai consulting (2,900), ai consultants (2,900), ai consulting services (480), ai business consulting (170)

**AI Agents:** agentic ai (22,200), ai agent (14,800), ai agents examples (390)

**AI Automation:** ai automation (1,600), ai workflow automation (170), ai automation services (90)

**AI Strategy:** ai strategy (480), ai business strategy (110), ai implementation strategy (10)

---

## 3. Page-by-Page Backlog

### 3.1 Homepage (`/`)

**Target Keywords:** ai consulting, ai consultants, ai consulting services

**Current State:**
- Title: "Leomayn - Fix Work, Then Scale with AI"
- H1: "Fix work, then scale with AI"
- Meta: "We redesign knowledge work to remove bottlenecks..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Consulting Services - Fix Work, Then Scale with AI \| Leomayn |
| H1 | Fix Work, Then Scale with AI *(keep - brand message)* |
| Meta | Expert AI consulting for professional services firms. We fix operational foundations first, then scale with automation and AI. Book a discovery call. |

**Variation Approach:** Benefit-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| HP-01 | Update title tag for "ai consulting" keyword | High | To Do |
| HP-02 | Update meta description with keyword + CTA | High | To Do |
| HP-03 | Add "AI consulting" phrase to body copy (Context section) | Medium | To Do |
| HP-04 | Add 'Common workflows we improve' section | High | To Do |
| HP-05 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.2 Services Overview (`/services`)

**Target Keywords:** ai consulting services, ai business consulting

**Current State:**
- Title: "Services - Leomayn"
- H1: "Four steps to operational improvement"
- Meta: "Four-phase framework for operational improvement..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Consulting Services - Four-Phase Framework \| Leomayn |
| H1 | AI Consulting Services: Four Steps to Operational Improvement |
| Meta | AI consulting services using our proven four-phase framework: Diagnose, Define, Deliver, Support. Expert AI consultants who fix operations first. Book a call. |

**Variation Approach:** Feature-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| SV-01 | Update title tag for "ai consulting services" | High | To Do |
| SV-02 | Update H1 to include primary keyword | High | To Do |
| SV-03 | Update meta description with keyword + CTA | High | To Do |
| SV-04 | Add pricing ranges to page | High | To Do |
| SV-05 | Add internal links to each phase page | Low | To Do |

---

### 3.3 Diagnose Phase (`/services/diagnose`)

**Target Keywords:** ai consulting, operational assessment, workflow analysis

**Current State:**
- Title: "Diagnose Phase - Leomayn"
- H1: "Diagnose"
- Meta: "Identify what is broken and what matters..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Consulting: Diagnose - Discovery & Assessment \| Leomayn |
| H1 | Diagnose: Discovery & Operational Assessment |
| Meta | AI consulting starts with diagnosis. We map workflows, interview stakeholders, and identify bottlenecks before recommending technology. Book a discovery call. |

**Variation Approach:** Problem-solution

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| DG-01 | Update title tag with keyword | High | To Do |
| DG-02 | Update H1 to be more descriptive | High | To Do |
| DG-03 | Update meta description with keyword + CTA | High | To Do |
| DG-04 | Add pricing ranges | High | To Do |
| DG-05 | Add 'What good looks like' block | Medium | To Do |
| DG-06 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.4 Define Phase (`/services/define`)

**Target Keywords:** ai strategy, solution design, ai implementation

**Current State:**
- Title: "Define Phase - Leomayn"
- H1: "Define"
- Meta: "Design the right solution once..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Strategy & Solution Design - Define Phase \| Leomayn |
| H1 | Define: AI Strategy & Solution Design |
| Meta | Design the right AI solution once. We create detailed blueprints covering workflows, architecture, and governance before building begins. Learn more. |

**Variation Approach:** Outcome-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| DF-01 | Update title tag with "ai strategy" keyword | High | To Do |
| DF-02 | Update H1 to be more descriptive | High | To Do |
| DF-03 | Update meta description with keyword + CTA | High | To Do |
| DF-04 | Add pricing ranges | High | To Do |
| DF-05 | Add 'What good looks like' block | Medium | To Do |
| DF-06 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.5 Deliver Phase (`/services/deliver`)

**Target Keywords:** ai automation, ai automation services, ai workflow automation

**Current State:**
- Title: "Deliver Phase - Leomayn"
- H1: "Deliver"
- Meta: "Working automation in weeks..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Automation Services - Deliver Phase \| Leomayn |
| H1 | Deliver: AI Automation & Deployment |
| Meta | AI automation services that deliver working systems in weeks. We build, test, and deploy with your team involved. You own all code and IP. Get started. |

**Variation Approach:** Action-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| DL-01 | Update title tag for "ai automation" keyword | High | To Do |
| DL-02 | Update H1 to include "AI Automation" | High | To Do |
| DL-03 | Update meta description with keyword + CTA | High | To Do |
| DL-04 | Add "AI automation" phrase to body copy | Medium | To Do |
| DL-05 | Add pricing ranges | High | To Do |
| DL-06 | Add 'What good looks like' block | Medium | To Do |
| DL-07 | Add 'Common workflows we improve' section | High | To Do |
| DL-08 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.6 Support Phase (`/services/support`)

**Target Keywords:** ai support, ai training, ongoing optimisation

**Current State:**
- Title: "Support Phase - Leomayn"
- H1: "Support"
- Meta: "Keep systems optimised as you grow..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Support & Training - Ongoing Optimisation \| Leomayn |
| H1 | Support: AI Training & Ongoing Optimisation |
| Meta | Ongoing AI support and training to keep automation optimised. Quarterly health checks, performance monitoring, and capability building. Learn about our plans. |

**Variation Approach:** Benefit-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| SP-01 | Update title tag with keywords | High | To Do |
| SP-02 | Update H1 to be more descriptive | High | To Do |
| SP-03 | Update meta description with keyword + CTA | High | To Do |
| SP-04 | Add pricing ranges | High | To Do |
| SP-05 | Add 'What good looks like' block | Medium | To Do |
| SP-06 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.7 About (`/about`)

**Target Keywords:** ai consultants, ai consulting company

**Current State:**
- Title: "About - Leomayn"
- H1: "About Leomayn"
- Meta: "Founded by Tom Jones, Leomayn helps professional services firms..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | About Leomayn - AI Consultants for Professional Services \| Leomayn |
| H1 | About Leomayn |
| Meta | Expert AI consultants for professional services firms. Founded by Tom Jones with 20 years operations experience. We build operational leverage through AI. |

**Variation Approach:** Feature-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| AB-01 | Update title tag with "AI consultants" keyword | Medium | To Do |
| AB-02 | Update meta description with keyword | Medium | To Do |
| AB-03 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.8 How We Think (`/how-we-think`)

**Target Keywords:** ai strategy, ai implementation strategy, ai philosophy

**Current State:**
- Title: "How We Think - Leomayn"
- H1: "How we think"
- Meta: "Our philosophy on operational improvement, AI implementation..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Strategy & Implementation Philosophy \| Leomayn |
| H1 | Our AI Strategy & Implementation Philosophy |
| Meta | Our AI strategy philosophy: fix operations before implementing technology. Learn how we approach AI to create sustainable leverage for professional services. |

**Variation Approach:** Problem-solution

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| HT-01 | Update title tag for "ai strategy" keyword | Medium | To Do |
| HT-02 | Update H1 to include keyword | Medium | To Do |
| HT-03 | Update meta description with keyword + CTA | Medium | To Do |
| HT-04 | Resolve redundancy with /approach page | Medium | To Do |
| HT-05 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.9 Our Approach (`/approach`)

**Target Keywords:** ai consulting approach, methodology

**Current State:**
- Title: "Our Approach - Leomayn"
- H1: "Our approach"
- Meta: "Fix the work first, then scale with AI..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | Our Approach to AI Consulting \| Leomayn |
| H1 | Our Approach to AI Consulting |
| Meta | How we deliver AI consulting: fix the work first, then scale. Systematic operational improvement for professional services firms. See how it works. |

**Variation Approach:** Action-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| AP-01 | Update title tag with keyword | Medium | To Do |
| AP-02 | Update H1 to include "AI consulting" | Medium | To Do |
| AP-03 | Update meta description with CTA | Medium | To Do |
| AP-04 | **Resolve redundancy with /how-we-think** - merge or differentiate | Medium | To Do |
| AP-05 | Make content more extractable for LLMs | Medium | To Do |

**Note:** Pages /approach and /how-we-think have ~70% content overlap. Recommend either merging into one page or clearly differentiating focus (methodology vs philosophy).

---

### 3.10 Why Leomayn (`/why-leomayn`)

**Target Keywords:** why choose ai consulting, ai consulting differentiators

**Current State:**
- Title: "Why Leomayn - Leomayn"
- H1: "Why Leomayn"
- Meta: "Founded by Tom Jones to solve operational challenges..."

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | Why Choose Leomayn for AI Consulting \| Leomayn |
| H1 | Why Choose Leomayn |
| Meta | Why choose Leomayn for AI consulting? 20 years operations experience. We deliver working AI systems, not strategy decks. No vendor lock-in. Book a call. |

**Variation Approach:** Question-based

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| WL-01 | Update title tag | Medium | To Do |
| WL-02 | Update H1 | Medium | To Do |
| WL-03 | Update meta description with keyword + CTA | Medium | To Do |
| WL-04 | Sharpen 'why us vs internal + Zapier + Copilot' messaging | Medium | To Do |
| WL-05 | Make content more extractable for LLMs | Medium | To Do |

---

### 3.11 Contact (`/contact`)

**Target Keywords:** N/A (conversion-focused page)

**Current State:**
- Title: Not explicitly set
- Focus: Lead generation, Calendly booking

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | Contact Leomayn - Book a Discovery Call \| Leomayn |
| H1 | Book a Discovery Call |
| Meta | Book a free 30-minute discovery call with Leomayn. We'll discuss your operational challenges and show you where AI can create leverage. |

**Variation Approach:** Action-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| CT-01 | Ensure title tag is set properly | Low | To Do |
| CT-02 | Update meta description | Low | To Do |
| CT-03 | Vary CTA copy from other pages | Low | To Do |

---

## 4. New Pages Required

### 4.1 AI Agents Page (NEW)

**URL:** `/ai-agents`
**Priority:** High
**Rationale:** 37,000+ monthly searches, zero current coverage

**Target Keywords:** agentic ai (22,200), ai agent (14,800), ai agents examples (390)

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | AI Agents & Agentic AI Implementation \| Leomayn |
| H1 | AI Agents: Practical Implementation for Business |
| Meta | Implement AI agents that deliver real business value. Expert guidance on agentic AI from strategy to deployment. We build systems that augment your team. |

**Variation Approach:** Feature-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| AG-01 | Create page structure and URL | High | To Do |
| AG-02 | Write content: What are AI agents (business definition) | High | To Do |
| AG-03 | Write content: Types of AI agents | High | To Do |
| AG-04 | Write content: Business use cases and examples | High | To Do |
| AG-05 | Write content: How Leomayn implements AI agents | High | To Do |
| AG-06 | Write content: When agents make sense vs simpler automation | High | To Do |
| AG-07 | Add schema markup | Medium | To Do |
| AG-08 | Add to navigation | Medium | To Do |

---

### 4.2 FAQ Page (NEW)

**URL:** `/faq`
**Priority:** High
**Rationale:** Supports conversions, LLM extractability, long-tail queries

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | FAQ - AI Consulting Questions Answered \| Leomayn |
| H1 | Frequently Asked Questions |
| Meta | Common questions about AI consulting, automation, and working with Leomayn. Clear answers about our process, pricing, and what to expect. |

**Variation Approach:** Question-based

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| FQ-01 | Create page structure and URL | High | To Do |
| FQ-02 | Write 10-15 Q&A blocks | High | To Do |
| FQ-03 | Add FAQ schema markup | Medium | To Do |
| FQ-04 | Structure for LLM extractability | Medium | To Do |
| FQ-05 | Add to navigation (footer) | Low | To Do |

---

### 4.3 Security & Data Handling Page (NEW)

**URL:** `/security`
**Priority:** High
**Rationale:** Enterprise trust signal, addresses buyer concerns

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | Security & Data Handling - AI Governance \| Leomayn |
| H1 | Security & Data Handling |
| Meta | How Leomayn handles your data securely. Our approach to AI governance, data protection, model training policies, and compliance. |

**Variation Approach:** Feature-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| SC-01 | Create page structure and URL | High | To Do |
| SC-02 | Write content: Where data flows | High | To Do |
| SC-03 | Write content: Model training stance | High | To Do |
| SC-04 | Write content: Architecture preferences | High | To Do |
| SC-05 | Write content: Compliance approach | High | To Do |
| SC-06 | Add to navigation (footer) | Medium | To Do |

---

### 4.4 Case Studies Page (NEW)

**URL:** `/case-studies`
**Priority:** Medium
**Rationale:** Social proof, supports conversion

**Proposed Metadata:**
| Element | Proposed |
|---------|----------|
| Title | Case Studies - AI Consulting Results \| Leomayn |
| H1 | Case Studies & Results |
| Meta | See how Leomayn helps professional services firms improve operations with AI. Anonymised case studies with real metrics and outcomes. |

**Variation Approach:** Outcome-first

#### Backlog Items

| ID | Task | Priority | Status |
|----|------|----------|--------|
| CS-01 | Create page structure and URL | Medium | To Do |
| CS-02 | Write 3-6 anonymised mini-cases | Medium | To Do |
| CS-03 | Include before/after metrics | Medium | To Do |
| CS-04 | Add schema markup | Low | To Do |
| CS-05 | Add to navigation | Low | To Do |

---

## 5. Site-Wide Tasks

| ID | Task | Priority | Status |
|----|------|----------|--------|
| SW-01 | Implement internal linking strategy (each page links to 2-3 others) | Low | To Do |
| SW-02 | Vary CTA copy across pages (not all "Book Discovery Call") | Low | To Do |
| SW-03 | Create downloadable lead magnet | Low | To Do |

---

## 6. Consolidated Backlog by Priority

### High Priority (Do First)

| ID | Page | Task |
|----|------|------|
| HP-01 | Homepage | Update title tag for "ai consulting" |
| HP-02 | Homepage | Update meta description |
| HP-04 | Homepage | Add 'Common workflows we improve' section |
| SV-01 | /services | Update title tag |
| SV-02 | /services | Update H1 |
| SV-03 | /services | Update meta description |
| SV-04 | /services | Add pricing ranges |
| DG-01 | /services/diagnose | Update title tag |
| DG-02 | /services/diagnose | Update H1 |
| DG-03 | /services/diagnose | Update meta description |
| DG-04 | /services/diagnose | Add pricing ranges |
| DF-01 | /services/define | Update title tag |
| DF-02 | /services/define | Update H1 |
| DF-03 | /services/define | Update meta description |
| DF-04 | /services/define | Add pricing ranges |
| DL-01 | /services/deliver | Update title tag |
| DL-02 | /services/deliver | Update H1 |
| DL-03 | /services/deliver | Update meta description |
| DL-05 | /services/deliver | Add pricing ranges |
| DL-07 | /services/deliver | Add 'Common workflows we improve' section |
| SP-01 | /services/support | Update title tag |
| SP-02 | /services/support | Update H1 |
| SP-03 | /services/support | Update meta description |
| SP-04 | /services/support | Add pricing ranges |
| AG-01 | /ai-agents (NEW) | Create page |
| AG-02-06 | /ai-agents (NEW) | Write all content sections |
| FQ-01 | /faq (NEW) | Create page |
| FQ-02 | /faq (NEW) | Write Q&A blocks |
| SC-01 | /security (NEW) | Create page |
| SC-02-05 | /security (NEW) | Write all content sections |

### Medium Priority (Do Second)

| ID | Page | Task |
|----|------|------|
| HP-03 | Homepage | Add keyword to body copy |
| HP-05 | Homepage | LLM extractability |
| DG-05 | /services/diagnose | Add 'What good looks like' block |
| DG-06 | /services/diagnose | LLM extractability |
| DF-05 | /services/define | Add 'What good looks like' block |
| DF-06 | /services/define | LLM extractability |
| DL-04 | /services/deliver | Add keyword to body copy |
| DL-06 | /services/deliver | Add 'What good looks like' block |
| DL-08 | /services/deliver | LLM extractability |
| SP-05 | /services/support | Add 'What good looks like' block |
| SP-06 | /services/support | LLM extractability |
| AB-01 | /about | Update title tag |
| AB-02 | /about | Update meta description |
| AB-03 | /about | LLM extractability |
| HT-01 | /how-we-think | Update title tag |
| HT-02 | /how-we-think | Update H1 |
| HT-03 | /how-we-think | Update meta description |
| HT-04 | /how-we-think | Resolve redundancy with /approach |
| HT-05 | /how-we-think | LLM extractability |
| AP-01 | /approach | Update title tag |
| AP-02 | /approach | Update H1 |
| AP-03 | /approach | Update meta description |
| AP-04 | /approach | Resolve redundancy with /how-we-think |
| AP-05 | /approach | LLM extractability |
| WL-01 | /why-leomayn | Update title tag |
| WL-02 | /why-leomayn | Update H1 |
| WL-03 | /why-leomayn | Update meta description |
| WL-04 | /why-leomayn | Sharpen differentiator messaging |
| WL-05 | /why-leomayn | LLM extractability |
| AG-07 | /ai-agents | Add schema markup |
| AG-08 | /ai-agents | Add to navigation |
| FQ-03 | /faq | Add FAQ schema |
| FQ-04 | /faq | LLM extractability |
| SC-06 | /security | Add to navigation |
| CS-01 | /case-studies (NEW) | Create page |
| CS-02 | /case-studies | Write case studies |
| CS-03 | /case-studies | Add metrics |

### Low Priority (Do Later)

| ID | Page | Task |
|----|------|------|
| SV-05 | /services | Internal links |
| CT-01 | /contact | Update title |
| CT-02 | /contact | Update meta |
| CT-03 | /contact | Vary CTA copy |
| FQ-05 | /faq | Add to navigation |
| CS-04 | /case-studies | Schema markup |
| CS-05 | /case-studies | Add to navigation |
| SW-01 | Site-wide | Internal linking strategy |
| SW-02 | Site-wide | Vary CTA copy |
| SW-03 | Site-wide | Create lead magnet |

---

## 7. Completed Items

| ID | Page | Task | Completed |
|----|------|------|-----------|
| - | Site-wide | Add /llms.txt file | Done |

---

## 8. Next Steps

1. [ ] Review and approve this backlog
2. [ ] Begin High Priority items (metadata updates)
3. [ ] Create AI Agents page (highest-value new content)
4. [ ] Create FAQ and Security pages
5. [ ] Work through Medium Priority items
