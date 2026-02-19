# Report Feedback v2 — 18 Feb 2026

## Feedback items (from Tom's review)

### A. Company personalisation
- **Issue:** No customisation based on the company. Website is provided — we should be pulling context in.
- **Status:** Was in original scope. Not yet implemented.
- **Action needed:** Decision on approach (web scrape at generation time? Pre-fetch and cache? What content to extract?)

### B. Firm type labels
- **Issue:** "Internal business services team" doesn't read well. Should be "B2B service organisation" or similar.
- **Also:** What happens when someone selects "Other services organisation"?
- **Action needed:** Firm type label mapping for report-facing copy.

### C. Tech environment specificity
- **Issue:** "An integrated platform" is too vague. If they told us about their tech, be more specific.
- **Action needed:** Prompt instruction to name the tech environment concretely.

### D. Open framing (high-order prompt instruction)
- **Issue:** Report is too confident about specifics. "The connective tissue between tasks is manual" should be "some of the ways of working suggest that the connective tissue between tasks is manual."
- **Pattern:** Use "the data suggests", "from what you've said", "we'd expect", "it is likely that", "based on what you've described"
- **Constraint:** Don't dilute to fluff. Hedge the specifics, not the recommendations.
- **Action needed:** High-order prompt instruction. Can implement now.

### E. Priority map framing
- **Issue:** Priority map doesn't explain what it is. Say it in plain English first.
- **Action needed:** Static intro text or prompt instruction. Can implement now.

### F. Condition badges in PDF
- **Issue:** "High impact, low complexity, high value" just look like words. Need better visual treatment.
- **Action needed:** Design improvement for PDF condition rendering.

### G. PDF page layout redesign
- **Page 1 (Cover):** Company info, report intro, methodology, what this is, how to use it, caveats. Let it breathe. High impact.
- **Page 2 (Priority map):** Always on one page. Well laid out.
- **Workflow pages:** Fix content cutting across pages. Less paragraphy. More breathing room.
- **Footer:** Better design. Reference leomayn.com website for guidance.
- **Action needed:** Design decisions + cover page text brief (Tom wants to approve text first).

### H. Cover page text brief
Tom wants a brief for approval covering:
1. Methodology explanation
2. What the report is
3. How to use it
4. How to interpret it
5. Caveats
6. Framing: "These are recommended starting points for investigation. Further discovery would unearth the extent to which these are the most relevant and impactful opportunities."

### I. Business case redesign
- **Title options:** "Target savings from AI automation — estimate" / "Target saving range from AI automation"
- **Under workflow name:** Show "Target time savings" with the actual range (e.g. "25–50%") instead of "Recovery rate 50%"
- **Methodology note:** "Recovery rates are estimated based on Leomayn's methodology and industry standards based on comparable workflow types."
- **Full workings:** Make the calculation transparent.
- **Action needed:** Layout and language decisions.

### J. Success factors section (pro forma)
New section listing what supports AI-powered change:
- Governance
- Change management
- Effective leadership
- Communication
- Access to training
- Time for people to upskill

Largely standard text, not personalised per report.

---

## What can ship now (no decisions needed)

- D: Open framing prompt instruction
- C: Tech environment specificity prompt instruction
- E: Priority map plain English intro (in prompt)

## What needs decisions before building

- A: Company personalisation approach
- B: Firm type label mapping
- G: PDF page layout structure
- F: Condition badge design for PDF
- I: Business case layout and language

## What needs Tom's approval on text

- H: Cover page text brief
- J: Success factors pro forma content
