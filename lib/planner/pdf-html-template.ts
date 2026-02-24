import type { GeneratedReport, ConditionLevel, QualificationData, DiagnosticData, RankedArchetype } from './types'
import { normaliseCondition } from './types'
import {
  getRecoveryPercentageRange,
  CONDITION_LABELS,
  ROLE_DISPLAY_LABELS,
  FIRM_TYPE_REPORT_LABELS,
  FIRM_TYPE_OPTIONS,
  TECH_ENVIRONMENT_DESCRIPTIONS,
  STRATEGIC_FOCUS_OPTIONS,
  TEAM_SIZE_OPTIONS,
  AREA_OPTIONS,
  SYMPTOM_OPTIONS,
  AI_ADOPTION_OPTIONS,
  PROCESS_KNOWLEDGE_OPTIONS,
  DATA_FOUNDATIONS_OPTIONS,
  getSalaryTiers,
  EMPLOYER_COST_UPLIFT,
} from './constants'
import { escapeHtml } from './sanitise'
import {
  MANROPE_400_BASE64,
  MANROPE_600_BASE64,
  MANROPE_700_BASE64,
  DM_SERIF_400_BASE64,
  LOGO_DATA_URI,
  LOGO_SVG_DATA_URI,
} from './pdf-assets'

// ── Types ──

export interface PdfTemplateData {
  report: GeneratedReport
  companyName: string
  recipientName: string
  jobTitle?: string
  qualification?: QualificationData
  diagnostic?: DiagnosticData
  topArchetypes?: RankedArchetype[]
  companyContext?: string
}

// ── Helpers ──

function h(text: string): string {
  return escapeHtml(text)
}

function stripEmDashes(text: string): string {
  // Spaced em-dash → sentence break with capitalised next word
  let result = text.replace(/ \u2014 (\w)/g, (_, ch: string) => `. ${ch.toUpperCase()}`)
  // Catch any remaining (unspaced) em-dashes
  result = result.replace(/\u2014/g, '. ')
  return result
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatRecovery(range: { low: number; high: number }): string {
  if (range.low === range.high) return formatCurrency(range.low)
  return `${formatCurrency(range.low)} \u2013 ${formatCurrency(range.high)}`
}

function getRoleDisplayLabel(qualification?: QualificationData): string {
  if (!qualification) return ''
  if (qualification.roleOther) return qualification.roleOther
  return ROLE_DISPLAY_LABELS[qualification.role] ?? ''
}

function normalise(s: string): string {
  return s.replace(/-and-|-/g, '')
}

function groupPainPoints(painPoints: { area: string; symptom: string }[]): { area: string; symptoms: string[] }[] {
  const grouped = new Map<string, string[]>()
  for (const pp of painPoints) {
    const areaLabel = AREA_OPTIONS.find(o => o.value === pp.area)?.label ?? pp.area
    const symptomLabel = SYMPTOM_OPTIONS.find(o => o.value === pp.symptom)?.label ?? pp.symptom
    const existing = grouped.get(areaLabel) ?? []
    existing.push(symptomLabel.charAt(0).toLowerCase() + symptomLabel.slice(1))
    grouped.set(areaLabel, existing)
  }
  return Array.from(grouped.entries()).map(([area, symptoms]) => ({ area, symptoms }))
}

// ── Condition pill colours ──

const CONDITION_PILL: Record<ConditionLevel, { bg: string; color: string }> = {
  green: { bg: '#d1fae5', color: '#065f46' },
  amber: { bg: '#fef3c7', color: '#92400e' },
  red: { bg: '#fee2e2', color: '#991b1b' },
}

const CONDITION_LEGEND: Record<ConditionLevel, string> = {
  green: 'Strong alignment',
  amber: 'Partial alignment',
  red: 'Preparation needed',
}

// ── Report title (used across cover, header, TOC) ──

const REPORT_TITLE = 'AI Opportunity Report'

// ── CSS ──

function cssBlock(): string {
  return `
    @font-face {
      font-family: 'Manrope';
      font-weight: 400;
      font-style: normal;
      src: url(data:font/woff2;base64,${MANROPE_400_BASE64}) format('woff2');
    }
    @font-face {
      font-family: 'Manrope';
      font-weight: 600;
      font-style: normal;
      src: url(data:font/woff2;base64,${MANROPE_600_BASE64}) format('woff2');
    }
    @font-face {
      font-family: 'Manrope';
      font-weight: 700;
      font-style: normal;
      src: url(data:font/woff2;base64,${MANROPE_700_BASE64}) format('woff2');
    }
    @font-face {
      font-family: 'DM Serif Display';
      font-weight: 400;
      font-style: normal;
      src: url(data:font/woff2;base64,${DM_SERIF_400_BASE64}) format('woff2');
    }

    :root {
      --slate: #1a3d56;
      --slate-light: #2c4a62;
      --rock: #9ab8cb;
      --coral: #f7c9c0;
      --coral-dark: #f0b3a8;
      --coral-text: #c96b60;
      --chalk: #fffcfa;
      --pearl: #fef8f1;
      --steel: #9da7b0;
      --white: #ffffff;
      --light-blue: #f0f5f8;
      --font-sans: 'Manrope', sans-serif;
      --font-serif: 'DM Serif Display', serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-sans);
      font-size: 10pt;
      color: var(--slate);
      line-height: 1.6;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .page {
      position: relative;
      padding: 0;
    }
    .page-break {
      page-break-before: always;
    }

    /* Prevent awkward mid-element page breaks */
    .workflow-card,
    .stat-row,
    .pull-quote,
    .cta-box,
    .foundation-card,
    .situation-box {
      page-break-inside: avoid;
    }

    /* Page header — no logo, just title + date */
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--coral);
      margin-bottom: 16px;
    }
    .page-header-title {
      font-size: 9pt;
      font-weight: 600;
      color: var(--slate);
    }
    .page-header-date {
      font-size: 9pt;
      color: var(--slate);
    }

    /* Typography */
    .section-title {
      font-family: var(--font-serif);
      font-size: 18pt;
      color: var(--slate);
      margin-bottom: 10px;
      margin-top: 8px;
    }
    .section-subtitle {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--slate);
      margin-bottom: 6px;
      margin-top: 10px;
    }
    .paragraph {
      font-size: 10pt;
      line-height: 1.6;
      color: var(--slate);
      margin-bottom: 8px;
    }
    .disclaimer {
      font-size: 9pt;
      color: var(--slate);
      line-height: 1.4;
      margin-top: 6px;
    }

    /* Section opener band */
    .section-band {
      background: var(--slate);
      padding: 10px 16px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-radius: 4px;
    }
    .section-band-stripe {
      width: 4px;
      height: 24px;
      background: var(--coral);
      border-radius: 2px;
    }
    .section-band-number {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 11pt;
      color: var(--coral);
    }
    .section-band-title {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--white);
    }

    /* Cover page */
    .cover-title {
      font-family: var(--font-serif);
      font-size: 28pt;
      color: var(--slate);
      margin-bottom: 8px;
    }
    .cover-divider {
      height: 1px;
      background: var(--coral);
      margin: 8px 0 16px 0;
    }
    .cover-meta {
      font-size: 10pt;
      color: var(--slate);
      margin-bottom: 3px;
    }
    .about-report-title {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--slate);
      margin-bottom: 6px;
      margin-top: 16px;
    }

    /* Situation box (used on exec summary) */
    .situation-box {
      background: var(--slate);
      padding: 12px 16px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .situation-title {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--white);
      margin-bottom: 8px;
    }
    .situation-text {
      font-size: 10pt;
      line-height: 1.6;
      color: #dce6ed;
    }

    /* Hero saving stat (exec summary) */
    .hero-stat {
      margin-top: 18px;
      margin-bottom: 14px;
    }
    .hero-label {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--slate);
      margin-bottom: 6px;
    }
    .hero-value {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 22pt;
      color: var(--coral-text);
    }
    .hero-context {
      font-size: 10pt;
      color: var(--slate);
      margin-top: 4px;
      line-height: 1.5;
    }

    /* TOC */
    .toc {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .toc-title {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 9pt;
      color: var(--slate);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .toc-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0;
      border-bottom: 1px dotted var(--steel);
    }
    .toc-label {
      font-size: 9pt;
      color: var(--slate);
    }
    .toc-page {
      font-size: 9pt;
      color: var(--steel);
      padding-left: 8px;
    }

    /* Workflow cards (priority map) */
    .workflow-card {
      border: 1px solid #e5e5e5;
      border-left: 4px solid var(--coral);
      border-radius: 4px;
      padding: 14px;
      margin-bottom: 12px;
      background: var(--light-blue);
    }
    .workflow-card-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }
    .workflow-number {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 10pt;
      color: var(--white);
      background: var(--slate);
      width: 20px;
      height: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .workflow-name {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--slate);
    }
    .workflow-score {
      font-family: var(--font-sans);
      font-weight: 600;
      font-size: 9pt;
      color: var(--slate);
    }
    .score-bar-container {
      width: 80px;
      height: 6px;
      background: #dce2e7;
      border-radius: 3px;
      margin-left: 8px;
      display: inline-block;
      vertical-align: middle;
    }
    .score-bar-fill {
      height: 6px;
      background: var(--slate);
      border-radius: 3px;
    }

    /* Condition pills — equal sized */
    .pill-row {
      display: flex;
      gap: 8px;
      margin-top: 6px;
    }
    .pill {
      border-radius: 10px;
      padding: 3px 8px;
      font-size: 8pt;
      font-weight: 700;
      display: inline-block;
      min-width: 155px;
      text-align: center;
    }
    .legend-row {
      display: flex;
      gap: 14px;
      margin-bottom: 12px;
      padding: 6px 10px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .legend-label {
      font-size: 8pt;
      color: var(--slate);
    }

    /* Pull-quote callout */
    .pull-quote {
      border-left: 4px solid var(--coral);
      background: var(--pearl);
      padding: 8px 12px;
      margin-bottom: 8px;
    }
    .pull-quote-text {
      font-size: 11pt;
      font-style: italic;
      line-height: 1.5;
      color: var(--slate);
    }

    /* Two-column layout */
    .two-col {
      display: flex;
      gap: 10px;
      margin-bottom: 8px;
    }
    .col {
      flex: 1;
    }
    .col-box {
      background: var(--pearl);
      padding: 10px 12px;
      border-radius: 4px;
      flex: 1;
    }
    .col-box-accent {
      background: #fdf0ed;
      padding: 10px 12px;
      border-radius: 4px;
      flex: 1;
    }
    .col-label {
      font-size: 10pt;
      font-weight: 700;
      color: var(--slate);
      margin-bottom: 4px;
    }
    .list-item {
      font-size: 9pt;
      line-height: 1.45;
      color: var(--slate);
      margin-bottom: 2px;
      padding-left: 8px;
    }

    /* Detail boxes (prerequisites, pitfalls) */
    .detail-box {
      background: var(--pearl);
      padding: 10px 12px;
      border-radius: 4px;
      flex: 1;
    }
    .detail-box-warn {
      background: #fef2f0;
      padding: 10px 12px;
      border-radius: 4px;
      flex: 1;
    }

    /* Stat cards — equal sizing */
    .stat-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }
    .stat-box {
      background: var(--pearl);
      padding: 16px;
      border-radius: 4px;
      text-align: center;
      flex: 1;
    }
    .stat-box-accent {
      background: #fdf0ed;
      padding: 16px;
      border-radius: 4px;
      text-align: center;
      flex: 1;
    }
    .stat-value {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 20pt;
      color: var(--slate);
    }
    .stat-value-coral {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 20pt;
      color: var(--coral-text);
    }
    .stat-label {
      font-size: 9pt;
      color: var(--slate);
      margin-top: 2px;
    }

    /* Table */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
    }
    .data-table thead th {
      background: var(--slate);
      color: var(--white);
      font-size: 9pt;
      font-weight: 700;
      padding: 10px;
      text-align: left;
      white-space: nowrap;
    }
    .data-table thead th:first-child {
      border-top-left-radius: 4px;
    }
    .data-table thead th:last-child {
      border-top-right-radius: 4px;
    }
    .data-table thead th.text-right {
      text-align: right;
    }
    .data-table tbody td {
      font-size: 9pt;
      color: var(--slate);
      padding: 10px;
      border-bottom: 1px solid #f0f0f0;
    }
    .data-table tbody td.text-right {
      text-align: right;
      white-space: nowrap;
    }
    .data-table tfoot td {
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      padding: 10px;
      background: var(--pearl);
    }
    .data-table tfoot td.text-right {
      text-align: right;
      white-space: nowrap;
    }
    .data-table tfoot td:first-child {
      border-bottom-left-radius: 4px;
    }
    .data-table tfoot td:last-child {
      border-bottom-right-radius: 4px;
    }
    .data-table .sub-text {
      font-size: 8pt;
      color: var(--slate);
    }

    /* SVG bar chart */
    .bar-chart {
      margin: 16px 0;
    }
    .chart-title {
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      margin-bottom: 8px;
    }

    /* Foundation cards */
    .foundation-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }
    .foundation-card {
      background: var(--pearl);
      border-radius: 4px;
      padding: 12px;
      border-left: 3px solid var(--coral-dark);
    }
    .foundation-title {
      font-size: 9pt;
      font-weight: 700;
      color: var(--coral-text);
      margin-bottom: 4px;
    }
    .foundation-label {
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      margin-top: 6px;
      margin-bottom: 2px;
    }
    .foundation-text {
      font-size: 9pt;
      color: var(--slate);
      line-height: 1.5;
    }

    /* CTA */
    .cta-box {
      background: var(--slate);
      padding: 24px;
      border-radius: 4px;
      margin-top: 16px;
    }
    .cta-title {
      font-family: var(--font-serif);
      font-size: 15pt;
      color: var(--white);
      margin-bottom: 8px;
    }
    .cta-text {
      font-size: 10pt;
      line-height: 1.5;
      color: #b5c9d8;
      margin-bottom: 12px;
    }
    .cta-link {
      font-size: 11pt;
      font-weight: 700;
      color: var(--coral);
    }
    .cta-steps {
      display: flex;
      gap: 12px;
      margin-bottom: 14px;
    }
    .cta-step {
      flex: 1;
      text-align: center;
      color: #b5c9d8;
      font-size: 9pt;
      line-height: 1.4;
    }
    .cta-step-number {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--coral);
      color: var(--slate);
      font-weight: 700;
      font-size: 9pt;
      line-height: 20px;
      text-align: center;
      margin-bottom: 4px;
    }

    /* Numbered step */
    .step-row {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
      align-items: flex-start;
    }
    .step-number {
      width: 18px;
      height: 18px;
      border-radius: 9px;
      background: #e8ebed;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      flex-shrink: 0;
    }

    /* Appendix diagnostic row */
    .diag-section {
      background: var(--pearl);
      border-radius: 4px;
      padding: 16px;
    }
    .diag-group-title {
      font-size: 9pt;
      font-weight: 700;
      color: var(--coral-text);
      margin-bottom: 6px;
    }
    .diag-group-title + .diag-group-title {
      margin-top: 10px;
    }
    .diag-row {
      display: flex;
      margin-bottom: 4px;
    }
    .diag-label {
      font-size: 8pt;
      font-weight: 700;
      color: var(--slate);
      width: 90px;
      flex-shrink: 0;
    }
    .diag-value {
      font-size: 8pt;
      color: var(--slate);
    }

    /* Key considerations box */
    .considerations-box {
      background: var(--light-blue);
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  `
}

// ── Section renderers ──

function pageHeader(companyName: string, dateStr: string): string {
  return `
    <div class="page-header">
      <span class="page-header-title">${REPORT_TITLE} | ${h(companyName)}</span>
      <span class="page-header-date">${h(dateStr)}</span>
    </div>
  `
}

function sectionBand(number: string, title: string): string {
  return `
    <div class="section-band">
      <div class="section-band-stripe"></div>
      <span class="section-band-number">${h(number)}</span>
      <span class="section-band-title">${h(title)}</span>
    </div>
  `
}

function conditionPill(level: ConditionLevel, label: string): string {
  const pill = CONDITION_PILL[level]
  return `<span class="pill" style="background:${pill.bg};color:${pill.color}">${h(label)}</span>`
}

// ── Page 1: Cover ──

function coverPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
  const { report, companyName, recipientName, qualification } = data
  const roleLabel = getRoleDisplayLabel(qualification)
  const jobTitle = qualification?.jobTitle
  const workflows = report.workflows

  // Display job title if provided, otherwise fall back to role label
  const titleLine = jobTitle ? h(jobTitle) : (roleLabel ? h(roleLabel) : '')

  return `
    <div class="page">
      <img src="${LOGO_SVG_DATA_URI}" style="width:200px;margin-bottom:28px;margin-top:12px" />

      <div class="cover-title">${REPORT_TITLE}</div>
      <div class="cover-divider"></div>
      <div class="cover-meta">Prepared for: ${h(recipientName)}${titleLine ? `, ${titleLine}` : ''}</div>
      <div class="cover-meta">Company: ${h(companyName)}</div>
      <div class="cover-meta" style="margin-top:4px">Date: ${h(dateStr)}</div>

      <div class="about-report-title">About this report</div>
      <p class="paragraph">
        Use this report as a starting point for prioritisation. The business case numbers are directional estimates based on the sizing data you provided, not financial forecasts. A full Diagnose engagement would validate these figures with access to your team, data, and systems.
      </p>

      <div class="toc">
        <div class="toc-title">Contents</div>
        <div class="toc-row"><span class="toc-label">Executive summary</span><span class="toc-page">2</span></div>
        <div class="toc-row"><span class="toc-label">Where to start</span><span class="toc-page">3</span></div>
        <div class="toc-row"><span class="toc-label">The business case</span><span class="toc-page">4</span></div>
        ${workflows.map((wf, i) => `
          <div class="toc-row"><span class="toc-label">${h(wf.name)}</span><span class="toc-page">${i + 5}</span></div>
        `).join('')}
        <div class="toc-row"><span class="toc-label">Your current situation</span><span class="toc-page">8</span></div>
        <div class="toc-row"><span class="toc-label">What makes AI adoption stick</span><span class="toc-page">9</span></div>
        <div class="toc-row"><span class="toc-label">Suggested roadmap</span><span class="toc-page">10</span></div>
        ${data.diagnostic ? `<div class="toc-row"><span class="toc-label">Appendix 1: What you told us</span><span class="toc-page">${totalPages - 1}</span></div>
        <div class="toc-row"><span class="toc-label">Appendix 2: Salary benchmarks</span><span class="toc-page">${totalPages}</span></div>` : ''}
      </div>

    </div>
  `
}

// ── Page 2: Executive Summary ──

function executiveSummaryPage(data: PdfTemplateData, dateStr: string, heroRecovery: string): string {
  const { report, companyName, topArchetypes } = data
  const maxScore = 25

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('01', 'Executive summary')}

      <div class="situation-box">
        <div class="situation-title">Your situation</div>
        <div class="situation-text">${h(report.situationSummary)}</div>
      </div>

      <div class="hero-stat">
        <div class="hero-label">Estimated annual saving opportunity</div>
        <div class="hero-value">${heroRecovery}</div>
        <div class="hero-context">
          The potential value of time saved by achieving target improvement rates across three high-potential workflows identified from your diagnostic data. These are directional estimates designed to frame the scale of the opportunity.
        </div>
      </div>

      <div class="section-subtitle">Three workflows to investigate</div>
      <p class="paragraph" style="margin-bottom:10px">${report.priorityMapIntro ? h(report.priorityMapIntro) : 'We scored nine workflow archetypes against your diagnostic inputs and ranked them by impact, feasibility, and learning value. These three emerged as the strongest starting points.'}</p>

      ${report.workflows.map((wf, i) => {
        const impact = normaliseCondition(wf.threeConditionsCheck.impact)
        const complexity = normaliseCondition(wf.threeConditionsCheck.complexity)
        const compositeScore = topArchetypes?.find(
          a => a.id === wf.archetypeId || normalise(wf.archetypeId).startsWith(normalise(a.id))
        )?.compositeScore
        const barWidth = compositeScore !== undefined ? Math.round((compositeScore / maxScore) * 100) : 0

        return `
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;margin-bottom:4px;background:var(--light-blue);border-radius:4px;border-left:3px solid var(--coral)">
            <div class="workflow-number">${i + 1}</div>
            <div style="flex:1">
              <span style="font-weight:700;font-size:10pt;color:var(--slate)">${h(wf.name)}</span>
              ${compositeScore !== undefined ? `
                <span style="font-size:9pt;color:var(--steel);margin-left:6px">${compositeScore.toFixed(1)} / ${maxScore}</span>
              ` : ''}
            </div>
            <span class="pill" style="background:${CONDITION_PILL[impact].bg};color:${CONDITION_PILL[impact].color};min-width:0;font-size:7pt;padding:2px 8px">${h(CONDITION_LABELS.impact[impact])}</span>
            <span class="pill" style="background:${CONDITION_PILL[complexity].bg};color:${CONDITION_PILL[complexity].color};min-width:0;font-size:7pt;padding:2px 8px">${h(CONDITION_LABELS.complexity[complexity])}</span>
          </div>
        `
      }).join('')}

    </div>
  `
}

// ── Page 3: Where to start (priority map) ──

function priorityMapPage(data: PdfTemplateData, dateStr: string): string {
  const { report, companyName, topArchetypes } = data
  const maxScore = 25

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('02', 'Where to start')}

      ${report.priorityMapIntro ? `<p class="paragraph">${h(report.priorityMapIntro)}</p>` : ''}

      <div class="legend-row">
        ${(['green', 'amber', 'red'] as ConditionLevel[]).map(level => `
          <div class="legend-item">
            <div class="legend-dot" style="background:${CONDITION_PILL[level].bg}"></div>
            <span class="legend-label">${CONDITION_LEGEND[level]}</span>
          </div>
        `).join('')}
      </div>

      ${report.workflows.map((wf, i) => {
        const impact = normaliseCondition(wf.threeConditionsCheck.impact)
        const complexity = normaliseCondition(wf.threeConditionsCheck.complexity)
        const learning = normaliseCondition(wf.threeConditionsCheck.learning)
        const compositeScore = topArchetypes?.find(
          a => a.id === wf.archetypeId || normalise(wf.archetypeId).startsWith(normalise(a.id))
        )?.compositeScore
        const barWidth = compositeScore !== undefined ? Math.round((compositeScore / maxScore) * 100) : 0

        return `
          <div class="workflow-card">
            <div class="workflow-card-header">
              <div class="workflow-number">${i + 1}</div>
              <div style="flex:1">
                <span class="workflow-name">${h(wf.name)}</span>
                ${compositeScore !== undefined ? `
                  <span class="workflow-score"> (${compositeScore.toFixed(1)} / ${maxScore})</span>
                  <div class="score-bar-container">
                    <div class="score-bar-fill" style="width:${barWidth}%"></div>
                  </div>
                ` : ''}
              </div>
            </div>
            <p class="paragraph">${h(wf.whyThisMatters)}</p>
            <div class="pill-row">
              ${conditionPill(impact, CONDITION_LABELS.impact[impact])}
              ${conditionPill(complexity, CONDITION_LABELS.complexity[complexity])}
              ${conditionPill(learning, CONDITION_LABELS.learning[learning])}
            </div>
          </div>
        `
      }).join('')}

    </div>
  `
}

// ── Page 4: Business case ──

function businessCasePage(data: PdfTemplateData, dateStr: string, heroRecovery: string): string {
  const { report, companyName } = data
  const { businessCase } = report

  const weeklyHoursText = businessCase.weeklyHoursRecovered.low === businessCase.weeklyHoursRecovered.high
    ? `${businessCase.weeklyHoursRecovered.low}`
    : `${businessCase.weeklyHoursRecovered.low} \u2013 ${businessCase.weeklyHoursRecovered.high}`

  // SVG bar chart data
  const maxVal = Math.max(
    ...businessCase.perArea.map(a => a.annualCost),
    ...businessCase.perArea.map(a => a.recoveryRange.high)
  )
  const chartWidth = 500
  const barHeight = 28
  const barGap = 10
  const labelWidth = 140
  const chartAreaWidth = chartWidth - labelWidth - 80 // leave room for value labels
  const svgHeight = businessCase.perArea.length * (barHeight + barGap) + 30

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('03', 'The business case')}

      <p class="paragraph">
        This is the time your team could recover and the estimated value of that time, based on achieving target savings across three high-potential workflows. The figures are based on the team sizes, seniority levels, and time estimates you provided, with a 25% employer cost uplift for pension, NI, and benefits.
      </p>

      <div class="stat-row">
        <div class="stat-box-accent">
          <div class="stat-value">${weeklyHoursText}</div>
          <div class="stat-label">Hours per week your team could recover</div>
        </div>
        <div class="stat-box-accent">
          <div class="stat-value-coral">${heroRecovery}</div>
          <div class="stat-label">Estimated annual saving</div>
        </div>
      </div>

      <table class="data-table">
        <thead>
          <tr>
            <th style="width:30%">Workflow</th>
            <th class="text-right" style="width:20%">Annual hours</th>
            <th class="text-right" style="width:20%">Annual cost</th>
            <th class="text-right" style="width:30%">Target saving range</th>
          </tr>
        </thead>
        <tbody>
          ${businessCase.perArea.map((area, i) => {
            const pctRange = getRecoveryPercentageRange(area.archetypeId)
            return `
              <tr>
                <td>
                  ${h(report.workflows[i]?.name ?? '')}
                  <div class="sub-text">Target: ${pctRange.low}\u2013${pctRange.high}%</div>
                </td>
                <td class="text-right">${area.annualHours.toLocaleString('en-GB')}</td>
                <td class="text-right">${formatCurrency(area.annualCost)}</td>
                <td class="text-right">${formatRecovery(area.recoveryRange)}</td>
              </tr>
            `
          }).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td class="text-right">${businessCase.totalAnnualHours.toLocaleString('en-GB')}</td>
            <td class="text-right">${formatCurrency(businessCase.totalAnnualCost)}</td>
            <td class="text-right">${formatRecovery(businessCase.conservativeRecovery)}</td>
          </tr>
        </tfoot>
      </table>

      <div class="bar-chart">
        <div class="chart-title">Annual cost and target saving range by workflow</div>
        <svg width="${chartWidth}" height="${svgHeight}" viewBox="0 0 ${chartWidth} ${svgHeight}">
          <!-- Legend -->
          <rect x="${labelWidth}" y="0" width="10" height="10" rx="2" fill="#1a3d56" opacity="0.2"/>
          <text x="${labelWidth + 14}" y="9" font-family="Manrope,sans-serif" font-size="7" fill="#1a3d56">Current annual cost</text>
          <rect x="${labelWidth + 120}" y="0" width="10" height="10" rx="2" fill="#f7c9c0"/>
          <text x="${labelWidth + 134}" y="9" font-family="Manrope,sans-serif" font-size="7" fill="#1a3d56">Conservative saving</text>
          <rect x="${labelWidth + 250}" y="0" width="10" height="10" rx="2" fill="#f7c9c0" opacity="0.5"/>
          <text x="${labelWidth + 264}" y="9" font-family="Manrope,sans-serif" font-size="7" fill="#1a3d56">Upper saving target</text>

          ${businessCase.perArea.map((area, i) => {
            const y = i * (barHeight + barGap) + 20
            const barW = maxVal > 0 ? (area.annualCost / maxVal) * chartAreaWidth : 0
            const recoveryLowW = maxVal > 0 ? (area.recoveryRange.low / maxVal) * chartAreaWidth : 0
            const recoveryHighW = maxVal > 0 ? (area.recoveryRange.high / maxVal) * chartAreaWidth : 0
            return `
              <text x="0" y="${y + barHeight / 2 + 3}" font-family="Manrope,sans-serif" font-size="8" fill="#1a3d56">${h(report.workflows[i]?.name ?? '')}</text>
              <rect x="${labelWidth}" y="${y}" width="${barW}" height="${barHeight}" rx="3" fill="#1a3d56" opacity="0.2"/>
              <rect x="${labelWidth}" y="${y + 2}" width="${recoveryHighW}" height="${barHeight - 4}" rx="2" fill="#f7c9c0" opacity="0.5"/>
              <rect x="${labelWidth}" y="${y + 4}" width="${recoveryLowW}" height="${barHeight - 8}" rx="2" fill="#f7c9c0"/>
              <text x="${labelWidth + Math.max(barW, recoveryHighW) + 6}" y="${y + barHeight / 2 + 3}" font-family="Manrope,sans-serif" font-size="8" fill="#1a3d56">${formatCurrency(area.annualCost)}</text>
            `
          }).join('')}
        </svg>
      </div>

      <div class="section-subtitle">How we calculated this</div>
      <p class="paragraph">
        Base salary midpoint multiplied by 1.25 employer uplift gives the fully loaded cost per person. People involved multiplied by weekly hours and 45 working weeks gives annual hours. Annual hours multiplied by the hourly rate gives annual cost. Target time savings are applied per workflow type based on our assessment of automation potential. These are directional estimates. A full Diagnose engagement would validate them with access to your team and data.
      </p>

    </div>
  `
}

// ── Pages 5-7: Workflow detail ──

function workflowDetailPage(data: PdfTemplateData, wfIndex: number, dateStr: string): string {
  const { report, companyName } = data
  const wf = report.workflows[wfIndex]

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('04', `Key opportunities: ${wf.name}`)}

      <div class="pull-quote">
        <div class="pull-quote-text">${h(wf.whyThisMatters)}</div>
      </div>

      <div class="two-col">
        <div class="col-box">
          <div class="col-label">What this looks like today</div>
          <p class="paragraph">${h(wf.currentState)}</p>
        </div>
        <div class="col-box-accent">
          <div class="col-label">What this could look like</div>
          <p class="paragraph">${h(wf.futureState)}</p>
        </div>
      </div>

      <div class="considerations-box">
        <div class="col-label">Key considerations</div>
        <p class="paragraph" style="margin-bottom:0">${h(wf.considerations)}</p>
      </div>

      <div class="two-col">
        <div class="detail-box">
          <div class="col-label">\u2713 Prerequisites</div>
          ${wf.prerequisites.map(p => `<div class="list-item">\u2022 ${h(p)}</div>`).join('')}
        </div>
        <div class="detail-box-warn">
          <div class="col-label">\u26A0 Watch out for</div>
          ${wf.pitfalls.map(p => `<div class="list-item">\u2022 ${h(p)}</div>`).join('')}
        </div>
      </div>

    </div>
  `
}

// ── Page 8: Your current situation ──

function readinessPage(data: PdfTemplateData, dateStr: string): string {
  const { report, companyName } = data

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('05', 'Your current situation')}

      ${report.maturityAssessment ? `
        <div style="margin-bottom:6px">
          <div class="section-subtitle" style="margin-top:0;margin-bottom:4px">Your operational maturity</div>
          <div class="two-col" style="gap:8px">
            <div class="col">
              <div class="col-label">Strengths</div>
              ${report.maturityAssessment.strengths.map(s => `<div class="list-item" style="font-size:8pt;line-height:1.4;margin-bottom:1px">\u2022 ${h(s)}</div>`).join('')}
            </div>
            <div class="col">
              <div class="col-label">Areas for development</div>
              ${report.maturityAssessment.development.map(d => `<div class="list-item" style="font-size:8pt;line-height:1.4;margin-bottom:1px">\u2022 ${h(d)}</div>`).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${report.quickWins && report.quickWins.length > 0 ? `
        <div style="margin-bottom:6px">
          <div class="section-subtitle" style="margin-bottom:4px">Three actions for this week</div>
          <p style="font-size:9pt;color:var(--slate);margin-bottom:4px">Zero-cost actions to build momentum and surface information for next steps.</p>
          ${report.quickWins.map((win, i) => `
            <div class="step-row">
              <div class="step-number">${i + 1}</div>
              <p class="paragraph" style="flex:1">${h(win)}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="section-subtitle" style="margin-bottom:4px">${h(companyName)}\u2019s readiness for AI change</div>
      <div class="two-col" style="gap:8px;margin-bottom:6px">
        <div class="col">
          <div class="col-label">Strengths</div>
          ${report.readiness.strengths.map(s => `<div class="list-item" style="font-size:8pt;line-height:1.4;margin-bottom:1px">\u2022 ${h(s)}</div>`).join('')}
        </div>
        <div class="col">
          <div class="col-label">Gaps to address</div>
          ${report.readiness.gaps.map(g => `<div class="list-item" style="font-size:8pt;line-height:1.4;margin-bottom:1px">\u2022 ${h(g)}</div>`).join('')}
        </div>
      </div>

    </div>
  `
}

// ── Page 9: What makes AI adoption stick ──

function foundationsPage(data: PdfTemplateData, dateStr: string): string {
  const { companyName, report } = data
  const firstWorkflow = report.workflows[0]?.name ?? 'the first workflow'

  const foundations = [
    {
      title: 'Assign clear ownership',
      explanation: `Each workflow needs a single owner with authority to approve changes. Without this, improvements stall at the first disagreement. For ${h(firstWorkflow)}, identify the person who owns the process end to end.`,
      action: `Start with a RACI chart for ${h(firstWorkflow)}. Clarify who decides, who executes, who needs to be informed. Expand the model as you add more workflows.`,
    },
    {
      title: 'Involve the people doing the work',
      explanation: 'People adopt what they helped shape. A structured transition works when those affected are part of the design. The team doing the work today understands the edge cases, workarounds, and unwritten rules that no process map captures.',
      action: 'Run a design workshop with the team before building anything. Map the current workflow together, then co-design the target state.',
    },
    {
      title: 'Make leadership visible',
      explanation: 'Teams watch what leaders do. Visible sponsorship from senior leaders who model the new behaviours sets the tone. This is not about endorsement in a meeting. It is about using the new workflow publicly.',
      action: 'Have the sponsor use the redesigned workflow in their own work within the first week. Build the pilot around a workflow they directly oversee.',
    },
    {
      title: 'Communicate early and often',
      explanation: 'Regular, honest updates on what is changing, why, and what it means for individuals. Silence breeds resistance. Most change resistance comes from uncertainty, not opposition.',
      action: 'Establish a fortnightly update rhythm from day one. A standing 15-minute slot covering: what changed, what is next, what we learned.',
    },
    {
      title: 'Train for the specific workflow',
      explanation: 'Role-specific training on the new tools and workflows. Generic AI training does not change daily behaviour. People need to see how their specific tasks change, not learn about AI in the abstract.',
      action: 'Shadow the current process first, then train on the difference. Create materials specific to each role\u2019s interaction with the workflow.',
    },
    {
      title: 'Protect time to learn',
      explanation: 'Teams need space to experiment and build confidence. Bolting AI onto a full workload produces frustration, not adoption. The transition period requires dedicated time for learning and iteration.',
      action: 'Ring-fence 2\u20133 hours per week per person during the transition. Reduce meeting load or defer non-critical work to create the space.',
    },
  ]

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('06', 'What makes AI adoption stick')}

      <p class="paragraph" style="margin-bottom:12px">
        Beyond the technical implementation, these are the practices that help AI adoption succeed. You do not need all of them in place before starting. The first workflow pilot is where most of them develop, and our guidance addresses each as part of the engagement.
      </p>

      <div class="foundation-grid">
        ${foundations.map(f => `
          <div class="foundation-card">
            <div class="foundation-title">${h(f.title)}</div>
            <div class="foundation-text">${h(f.explanation)}</div>
            <div class="foundation-label">Getting started</div>
            <div class="foundation-text">${h(f.action)}</div>
          </div>
        `).join('')}
      </div>

    </div>
  `
}

// ── Page 10: Suggested roadmap ──

function roadmapPage(data: PdfTemplateData, dateStr: string): string {
  const { report, companyName } = data

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('07', 'Suggested roadmap: diagnosis to implementation')}

      <p class="paragraph">Structured steps to move from this diagnostic to a working implementation.</p>
      ${report.nextSteps.map((step, i) => `
        <div class="step-row">
          <div class="step-number">${i + 1}</div>
          <p class="paragraph" style="flex:1">${h(step)}</p>
        </div>
      `).join('')}

      <div class="cta-box">
        <div class="cta-title">Ready to move from diagnostic to design?</div>
        <div class="cta-text">
          This report is a starting point. A full Diagnose engagement validates these findings with access to your team, your data, and your systems. The output is an implementation-ready blueprint: redesigned workflows, technical architecture, team training plan, and a measured business case.
        </div>
        <div class="cta-steps">
          <div class="cta-step">
            <div class="cta-step-number">1</div><br/>
            30-minute discovery call
          </div>
          <div class="cta-step">
            <div class="cta-step-number">2</div><br/>
            Scope and proposal
          </div>
          <div class="cta-step">
            <div class="cta-step-number">3</div><br/>
            Diagnose engagement
          </div>
        </div>
        <div class="cta-link">Book a discovery call: calendly.com/tom-leomayn/30min</div>
        <div class="cta-link" style="margin-top:4px">Email: hello@leomayn.com</div>
      </div>

    </div>
  `
}

// ── Appendix 1: What you told us ──

function appendixPage(data: PdfTemplateData, dateStr: string): string {
  const { companyName, diagnostic } = data
  if (!diagnostic) return ''

  const painGroups = groupPainPoints(diagnostic.painPoints)

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}

      <div class="section-title">Appendix 1: What you told us</div>

      <div class="diag-section">
        <div class="diag-group-title">Organisation</div>
        <div class="diag-row"><span class="diag-label">Company</span><span class="diag-value">${h(companyName)}</span></div>
        <div class="diag-row"><span class="diag-label">Firm type</span><span class="diag-value">${h(FIRM_TYPE_REPORT_LABELS[diagnostic.firmType] ?? diagnostic.firmType)}</span></div>
        <div class="diag-row"><span class="diag-label">Team size</span><span class="diag-value">${h(`${TEAM_SIZE_OPTIONS.find(o => o.value === diagnostic.teamSize)?.label ?? diagnostic.teamSize} people`)}</span></div>

        <div class="diag-group-title" style="margin-top:10px">Strategic focus</div>
        <div class="diag-row"><span class="diag-label">Primary</span><span class="diag-value">${h(STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.primary)?.label ?? diagnostic.strategicFocus.primary)}</span></div>
        <div class="diag-row"><span class="diag-label">Secondary</span><span class="diag-value">${h(STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.secondary)?.label ?? diagnostic.strategicFocus.secondary)}</span></div>

        <div class="diag-group-title" style="margin-top:10px">Foundations</div>
        <div class="diag-row"><span class="diag-label">AI adoption</span><span class="diag-value">${h(AI_ADOPTION_OPTIONS.find(o => o.value === diagnostic.aiAdoption)?.label ?? diagnostic.aiAdoption)}</span></div>
        <div class="diag-row"><span class="diag-label">Tech environment</span><span class="diag-value">${h(TECH_ENVIRONMENT_DESCRIPTIONS[diagnostic.techEnvironment] ?? diagnostic.techEnvironment)}</span></div>
        <div class="diag-row"><span class="diag-label">Processes</span><span class="diag-value">${h(PROCESS_KNOWLEDGE_OPTIONS.find(o => o.value === diagnostic.processKnowledge)?.label ?? diagnostic.processKnowledge)}</span></div>
        <div class="diag-row"><span class="diag-label">Data</span><span class="diag-value">${h(DATA_FOUNDATIONS_OPTIONS.find(o => o.value === diagnostic.dataFoundations)?.label ?? diagnostic.dataFoundations)}</span></div>

        <div class="diag-group-title" style="margin-top:10px">Pain points</div>
        ${painGroups.map(group => `
          <div style="font-size:8pt;color:var(--slate);margin-bottom:3px;padding-left:6px">\u2022 ${h(group.area)}: ${h(group.symptoms.join(', '))}</div>
        `).join('')}
      </div>

    </div>
  `
}

// ── Appendix 2: Salary benchmarks ──

function salaryBenchmarksAppendix(data: PdfTemplateData, dateStr: string): string {
  const { companyName, diagnostic } = data
  if (!diagnostic) return ''

  const firmType = diagnostic.firmType
  const tiers = getSalaryTiers(firmType)
  const industryLabel = FIRM_TYPE_OPTIONS.find(o => o.value === firmType)?.label ?? firmType
  const upliftMultiplier = 1 + EMPLOYER_COST_UPLIFT

  const hasNewTiers = tiers.some(t => t.value.startsWith('tier-'))
  if (!hasNewTiers) return ''

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}

      <div class="section-title">Appendix 2: Salary benchmarks</div>

      <p class="paragraph" style="margin-bottom:12px">
        UK benchmarks for ${h(industryLabel.toLowerCase())}, outside London. A 25% employer cost uplift covers pension, NI, and benefits.
      </p>

      <table class="data-table">
        <thead>
          <tr>
            <th style="width:50%">Seniority level</th>
            <th class="text-right">Base salary midpoint</th>
            <th class="text-right">Fully loaded (\u00d71.25)</th>
          </tr>
        </thead>
        <tbody>
          ${tiers.map(tier => `
            <tr>
              <td>${h(tier.label)}</td>
              <td class="text-right">${formatCurrency(tier.midpoint)}</td>
              <td class="text-right">${formatCurrency(Math.round(tier.midpoint * upliftMultiplier))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <p class="disclaimer">
        Compiled from Hays, ICAEW, Ascent, BARBRI, EMBS, and ONS data (2024\u20132026). Midpoints represent typical base salaries for the seniority band. Actual salaries vary by region, specialism, and firm size.
      </p>

    </div>
  `
}

// ── Main export ──

export function buildPdfHtml(data: PdfTemplateData): string {
  const { report, diagnostic } = data
  const dateStr = new Date(report.generatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const heroRecovery = formatRecovery(report.businessCase.conservativeRecovery)

  // Total pages: cover + exec summary + priority map + business case + 3 workflows + situation + foundations + roadmap + optional appendices
  const totalPages = diagnostic ? 12 : 10

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <style>${cssBlock()}</style>
</head>
<body>
  ${coverPage(data, dateStr, totalPages)}
  ${executiveSummaryPage(data, dateStr, heroRecovery)}
  ${priorityMapPage(data, dateStr)}
  ${businessCasePage(data, dateStr, heroRecovery)}
  ${report.workflows.map((_, i) => workflowDetailPage(data, i, dateStr)).join('')}
  ${readinessPage(data, dateStr)}
  ${foundationsPage(data, dateStr)}
  ${roadmapPage(data, dateStr)}
  ${appendixPage(data, dateStr)}
  ${salaryBenchmarksAppendix(data, dateStr)}
</body>
</html>`

  // Global em-dash sanitisation — catches any that slip through from AI-generated content
  return stripEmDashes(html)
}
