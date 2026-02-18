# AI Prompt Brief — Lead Magnet Diagnostic Report

**Purpose:** Strategic instructions for the system prompt in `prompt.ts`. These rules govern how the AI interprets scoring output and generates the diagnostic report. Reference this document when updating the prompt.

**Source data:** Scoring spec (`leomayn-hq/sessions/2026-02-16-lead-magnet-scoring-spec.md`), validated against 10 persona scenarios via Python simulator and TypeScript cross-validation.

**Last updated:** 2026-02-17

---

## 1. Cross-cutting explanation is the core value

When a workflow wins because it accumulates moderate signal from multiple pain points (rather than high signal from one), the AI must connect the pain points through the workflow. This is the diagnostic insight — it's what the prospect couldn't see on their own.

**Rule:** For each recommended workflow, reference the specific pain points that route to it. Explain the causal connection: why fixing this workflow addresses both symptoms.

**Example (Scenario 1 — MI wins for delivery + comms pain):**
- Good: "Your scope creep and handoff problems share a root cause — decisions made in meetings are not captured and distributed. Fix the meeting-to-action pipeline and both symptoms improve."
- Bad: "Meeting intelligence helps you capture meeting notes and actions automatically."

**Implementation:** The scoring output now includes `matchedSignals` per archetype — the specific (area, symptom, weight) triples that contributed to each workflow's signal score. The AI should use these to build the causal narrative.

---

## 2. Gap-aware confidence language

Score gaps between ranked workflows vary from 0 to 6 points across the 10 test personas. The AI must calibrate its confidence language to the gap.

**Rules:**

| Gap (#1 → #2) | Framing |
|----------------|---------|
| ≥ 5 points | "Your clearest starting point is..." — present with confidence |
| 2–4 points | Present in order, distinct recommendations, no hedging |
| ≤ 2 points | "Two equally strong starting points — the right choice depends on [contextual factor]" |

| Gap (#3 → #4) | Framing |
|----------------|---------|
| ≥ 3 points | Top 3 is robust. Present all three as recommendations. |
| ≤ 2 points | Acknowledge the third recommendation is marginal: "A fourth candidate — [name] — scored almost identically." |
| 0 points | Name the near-miss explicitly. Do not pretend the cutoff is meaningful. |

**Implementation:** Pass `compositeScore` for all top archetypes plus the #4 score to the AI prompt. Compute gaps in the prompt builder and include them as explicit instructions.

---

## 3. Document processing is infrastructure, not a standalone recommendation

Document processing appears in the top 3 in 9 of 10 test scenarios. It is a "means to an end" workflow — template standardisation, document reuse, and structured review that supports other workflows. If treated as a standalone recommendation, every report sounds the same.

**Rules by rank:**

| DP rank | Framing |
|---------|---------|
| #1 | Lead with it as root cause. Explain why it solves both pain points. This only happens when the prospect's pain genuinely points to document infrastructure (e.g. proposal rework + research inconsistency). |
| #2 or #3 | Frame as supporting infrastructure: "Document processing underpins [primary workflow] by providing the templates and standards that prevent the [symptom] you described." |

**The key distinction:** Primary workflow = the thing the prospect will feel. Supporting infrastructure = the thing that makes it stick. The AI should use language that signals this difference.

**Implementation:** Include an `isInfrastructure` flag or equivalent in the prompt context for DP. Or handle via prompt instruction that names `document-processing` explicitly.

---

## 4. Foundation penalties need narrative, not just numbers

When Q6 (process knowledge) or Q7 (data foundations) reveal gaps, the foundation modifier adjusts rankings. But the AI must also address the gap in the readiness section of the report.

**Rules:**

- When foundation modifier < 0 for a recommended workflow: include a specific caveat in that workflow's section. "For [workflow] to deliver full value, you will need [specific foundation: process documentation / reliable data in your core systems]."
- When the prospect selected "Don't know" for Q6 or Q7: address it directly. "You indicated you are unsure about your [process documentation / data quality]. That is common, and it is one of the first things a Diagnose engagement would assess."
- Never frame weak foundations as a blocker. Frame as: "This is where you start — and it is one of the first things we would address together."

**Tone:** Empathy, not judgment. The prospect has just told you something vulnerable. Acknowledge it, normalise it, and position the Diagnose engagement as the natural next step.

**Implementation:** The prompt receives `processKnowledge` and `dataFoundations` values plus `foundationModifier` per archetype. Include explicit instructions for how to handle negative modifiers.

---

## 5. Recovery rate language should match the tier

The business case uses per-archetype recovery rates: 75% (High), 50% (Medium), 25% (Low). The AI weaves these numbers into the narrative but must match its language to what the rate actually means.

**Rules:**

| Tier | Rate | Language |
|------|------|----------|
| High (TI, DP, MR) | 75% | "This work is largely data entry and reconciliation. Most of it can be automated." |
| Medium (CO, PS, RA, PD) | 50% | "AI assists significantly, but human judgment is needed at key decision points." |
| Low (CC, MI) | 25% | "The capture is automatable. The action and follow-through still need people." |

**Do not:** Present a 25% recovery figure with the same enthusiasm as a 75% figure. The business case should feel honest, not inflated.

**Implementation:** Include recovery tier context alongside the per-area business case numbers in the prompt. The AI does not need to recalculate — just frame appropriately.

---

## 6. Compressed scores signal a different tone

When all scores are low and compressed (e.g. scenario 6: range 2–14), the prospect's foundations are weak and every workflow requires groundwork. When scores are high and well-separated (e.g. scenario 5: range 13–26), the prospect is well-positioned to move quickly.

**Rules:**

| Score profile | Tone |
|---------------|------|
| Top score ≥ 20, clear gaps | Confident. "You are well-positioned to move quickly on this." |
| Top score 15–20, moderate gaps | Balanced. Standard recommendations. |
| Top score ≤ 15, compressed range | Cautious. "Your current foundations mean every workflow improvement will require some groundwork first. The recommendations below are ordered by where the investment pays off fastest given where you are today." |

**Implementation:** Include the top composite score and the #1–#3 gap range in the prompt context. The AI adjusts overall tone accordingly.

---

## Summary: prompt instruction checklist

When building or updating `prompt.ts`, ensure the system prompt includes:

1. Instruction to connect pain points through workflows using `matchedSignals`
2. Score gaps (#1→#2, #3→#4) with explicit framing rules
3. DP infrastructure framing rule (by rank)
4. Foundation penalty narrative instructions (per workflow + readiness section)
5. Recovery tier language guidance (High/Medium/Low)
6. Overall tone calibration based on score compression

These six rules are what make the report feel diagnostic rather than generic. They are the translation layer between deterministic scoring and persuasive narrative.
