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

const REPORT_TITLE = 'AI-Enhanced Workflow Opportunities'

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
      margin-bottom: 8px;
      margin-top: 44px;
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
      margin-top: 36px;
      margin-bottom: 10px;
    }
    .toc-title {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--slate);
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
      margin-bottom: 18px;
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
    /* Executive summary workflow grid */
    .es-wf-row {
      display: grid;
      grid-template-columns: 24px 1fr 140px 140px 140px;
      align-items: center;
      gap: 6px;
      padding: 8px 10px;
      margin-bottom: 4px;
      background: var(--light-blue);
      border-radius: 4px;
      border-left: 3px solid var(--coral);
    }
    .es-wf-name {
      padding-right: 8px;
    }
    .es-wf-pill {
      text-align: center;
      font-size: 7pt;
      padding: 3px 6px;
      min-width: 0;
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
      overflow: hidden;
      border: 1px solid #b0bec5;
    }
    .score-bar-fill {
      height: 6px;
      background: var(--slate);
      border-radius: 3px;
    }

    /* Condition pills — equal sized, same width */
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
      text-align: center;
      flex: 1;
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
      padding: 6px 12px;
      margin-bottom: 6px;
    }
    .pull-quote-text {
      font-size: 9.5pt;
      font-style: italic;
      line-height: 1.45;
      color: var(--slate);
    }

    /* Two-column layout */
    .two-col {
      display: flex;
      gap: 10px;
      margin-bottom: 6px;
    }
    .col {
      flex: 1;
    }
    .col-box {
      background: var(--pearl);
      padding: 8px 10px;
      border-radius: 4px;
      flex: 1;
    }
    .col-box-accent {
      background: #fdf0ed;
      padding: 8px 10px;
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
      font-size: 9.5pt;
      line-height: 1.45;
      color: var(--slate);
      margin-bottom: 2px;
      padding-left: 8px;
    }

    /* Detail boxes (prerequisites, pitfalls) */
    .detail-box {
      background: var(--pearl);
      padding: 8px 10px;
      border-radius: 4px;
      flex: 1;
    }
    .detail-box-warn {
      background: #fef2f0;
      padding: 8px 10px;
      border-radius: 4px;
      flex: 1;
    }

    /* Stat cards — equal sizing */
    .stat-row {
      display: flex;
      gap: 12px;
      margin-bottom: 10px;
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
      padding: 12px;
      border-radius: 4px;
      text-align: center;
      flex: 1;
    }
    .stat-value {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 18pt;
      color: var(--slate);
    }
    .stat-value-coral {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 18pt;
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

    /* Business case infographic — shared 3-col grid for cards + totals */
    .bc-card {
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 8px 14px;
      margin-bottom: 5px;
      background: var(--light-blue);
      page-break-inside: avoid;
    }
    .bc-card-header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 14px;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .bc-card-name {
      font-family: var(--font-serif);
      font-size: 11pt;
      color: var(--slate);
      grid-column: 1 / 3;
    }
    .bc-card-saving-cell {
      text-align: right;
    }
    .bc-card-saving {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 11pt;
      color: var(--coral-text);
    }
    .bc-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 14px;
      margin-bottom: 6px;
    }
    .bc-grid-cell {
      display: flex;
      flex-direction: column;
    }
    .bc-metric-value {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 10pt;
      color: var(--slate);
      white-space: nowrap;
    }
    .bc-metric-label {
      font-size: 7pt;
      color: var(--steel);
      text-transform: uppercase;
      letter-spacing: 0.3px;
      line-height: 1.3;
    }
    .bc-target-badge {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 9pt;
      color: var(--coral-text);
      background: #fdf0ed;
      padding: 1px 8px;
      border-radius: 8px;
    }
    .bc-bars-stacked {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .bc-bar-row {
      height: 6px;
      width: 100%;
      background: #f0f0f0;
      border-radius: 3px;
      overflow: hidden;
    }
    .bc-bar-segment {
      height: 100%;
      border-radius: 3px;
    }
    .bc-bar-total-cost {
      background: var(--slate);
      opacity: 0.25;
    }
    .bc-bar-upper {
      background: var(--coral);
      opacity: 0.5;
    }
    .bc-bar-conservative {
      background: var(--coral);
    }
    .bc-total-row {
      background: var(--slate);
      border-radius: 4px;
      margin-top: 2px;
      padding: 10px 14px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 14px;
      align-items: start;
      margin-bottom: 6px;
    }
    .bc-total-label {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--white);
      align-self: center;
    }
    .bc-total-value {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 11pt;
      color: var(--white);
    }
    .bc-total-sublabel {
      font-size: 7pt;
      color: var(--rock);
      text-transform: uppercase;
      letter-spacing: 0.3px;
      line-height: 1.3;
    }
    .bc-legend {
      display: flex;
      gap: 14px;
      padding: 4px 0;
    }
    .bc-legend-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 7pt;
      color: var(--slate);
    }
    .bc-legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      flex-shrink: 0;
    }

    /* Foundation cards */
    .foundation-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }
    .foundation-card {
      background: var(--pearl);
      border-radius: 4px;
      padding: 14px;
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
      padding: 12px;
    }
    .diag-group-title {
      font-size: 8pt;
      font-weight: 700;
      color: var(--coral-text);
      margin-bottom: 4px;
    }
    .diag-group-title + .diag-group-title {
      margin-top: 8px;
    }
    .diag-row {
      display: flex;
      margin-bottom: 2px;
    }
    .diag-label {
      font-size: 7pt;
      font-weight: 700;
      color: var(--slate);
      width: 80px;
      flex-shrink: 0;
    }
    .diag-value {
      font-size: 7pt;
      color: var(--slate);
    }

    /* Key considerations box */
    .considerations-box {
      background: var(--light-blue);
      padding: 6px 10px;
      border-radius: 4px;
      margin-bottom: 6px;
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
  const jobTitle = data.jobTitle?.trim() || qualification?.jobTitle?.trim()
  const workflows = report.workflows

  // Only show job title if the user explicitly typed one — never show generic role banding
  const titleLine = jobTitle ? h(jobTitle) : ''

  return `
    <div class="page">
      <div style="text-align:center;margin-top:24px;margin-bottom:48px">
        <img src="${LOGO_SVG_DATA_URI}" style="width:320px" />
      </div>

      <div class="cover-title">${REPORT_TITLE}</div>
      <div class="cover-divider"></div>
      <div class="cover-meta">Prepared for: ${h(recipientName)}${titleLine ? `, ${titleLine}` : ''}</div>
      <div class="cover-meta">Company: ${h(companyName)}</div>
      <div class="cover-meta" style="margin-top:4px">Date: ${h(dateStr)}</div>

      <div class="about-report-title">About this report</div>
      <p class="paragraph">
        This report highlights three high-potential workflow improvements identified from your diagnostic inputs. The recommendations are scored using a structured methodology that evaluates business impact, technical feasibility, and learning value — but they are based on limited information and should be treated as a starting point, not a conclusion. The business case figures represent directional estimates informed by efficiency patterns observed across professional services firms. They are designed to help you decide where to focus your attention and what practical next steps might look like.
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
        ${data.diagnostic ? `<div class="toc-row"><span class="toc-label">Appendix: What you told us</span><span class="toc-page">${totalPages}</span></div>` : ''}
      </div>

    </div>
  `
}

// ── Page 2: Executive Summary ──

function executiveSummaryPage(data: PdfTemplateData, dateStr: string, heroRecovery: string): string {
  const { report, companyName, topArchetypes } = data
  const maxScore = topArchetypes?.[0]?.compositeScore ?? 25

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
      <p class="paragraph" style="margin-bottom:10px">${report.priorityMapIntro ? h(report.priorityMapIntro) : 'We scored nine workflow archetypes against your diagnostic inputs and ranked them by the potential to have a positive business impact, the likely technical feasibility of delivering the improvement, and the extent to which the opportunity would provide good learning experience for your team to support the overall upskilling of the workforce in AI. These three emerged as the strongest starting points.'}</p>

      ${report.workflows.map((wf, i) => {
        const impact = normaliseCondition(wf.threeConditionsCheck.impact)
        const complexity = normaliseCondition(wf.threeConditionsCheck.complexity)
        const learning = normaliseCondition(wf.threeConditionsCheck.learning)
        const compositeScore = topArchetypes?.find(
          a => a.id === wf.archetypeId || normalise(wf.archetypeId).startsWith(normalise(a.id))
        )?.compositeScore

        return `
          <div class="es-wf-row">
            <div class="workflow-number">${i + 1}</div>
            <div class="es-wf-name">
              <div style="font-weight:700;font-size:10pt;color:var(--slate)">${h(wf.name)}</div>
              ${compositeScore !== undefined ? `
                <div style="font-size:8pt;color:var(--steel);margin-top:2px">Opportunity score: ${compositeScore.toFixed(1)} / ${maxScore.toFixed(1)}</div>
              ` : ''}
            </div>
            <span class="pill es-wf-pill" style="background:${CONDITION_PILL[impact].bg};color:${CONDITION_PILL[impact].color}">${h(CONDITION_LABELS.impact[impact])}</span>
            <span class="pill es-wf-pill" style="background:${CONDITION_PILL[complexity].bg};color:${CONDITION_PILL[complexity].color}">${h(CONDITION_LABELS.complexity[complexity])}</span>
            <span class="pill es-wf-pill" style="background:${CONDITION_PILL[learning].bg};color:${CONDITION_PILL[learning].color}">${h(CONDITION_LABELS.learning[learning])}</span>
          </div>
        `
      }).join('')}

    </div>
  `
}

// ── Page 3: Where to start (priority map) ──

function priorityMapPage(data: PdfTemplateData, dateStr: string): string {
  const { report, companyName, topArchetypes } = data
  const maxScore = topArchetypes?.[0]?.compositeScore ?? 25

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('02', 'Where to start')}

      ${report.priorityMapIntro ? `<p class="paragraph">${h(report.priorityMapIntro)}</p>` : ''}
      <p class="paragraph">Each workflow is scored on three dimensions: the potential to have a positive business impact, the likely technical feasibility of delivering the improvement, and the extent to which the opportunity would provide good learning experience for people in the organisation to support the overall upskilling of the workforce in AI.</p>
      ${report.notRecommendedNote ? `<p class="paragraph">${h(report.notRecommendedNote)}</p>` : ''}

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
                  <span class="workflow-score"> (${compositeScore.toFixed(1)} / ${maxScore.toFixed(1)})</span>
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

  // Max annual cost for bar scaling (each bar is relative to the largest cost)
  const maxCost = Math.max(...businessCase.perArea.map(a => a.annualCost))

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}
      ${sectionBand('03', 'The business case')}

      <p class="paragraph" style="margin-bottom:8px">
        This is the time your team could recover and the estimated value of that time, based on achieving target savings across three high-potential workflows. The figures are based on the team sizes, seniority levels, and time estimates you provided, with a 25% employer cost uplift for pension, NI, and benefits.
      </p>

      <div class="stat-row">
        <div class="stat-box-accent">
          <div class="stat-value">${weeklyHoursText}</div>
          <div class="stat-label">Hours per week your team could recover through improvements to target workflows</div>
        </div>
        <div class="stat-box-accent">
          <div class="stat-value-coral">${heroRecovery}</div>
          <div class="stat-label">Estimated annual saving range based on improvements to the target workflows</div>
        </div>
      </div>

      ${businessCase.perArea.map((area, i) => {
        const pctRange = getRecoveryPercentageRange(area.archetypeId)
        const costBarWidth = maxCost > 0 ? Math.round((area.annualCost / maxCost) * 100) : 0
        const upperSavingWidth = area.annualCost > 0 ? Math.round((area.recoveryRange.high / maxCost) * 100) : 0
        const lowerSavingWidth = area.annualCost > 0 ? Math.round((area.recoveryRange.low / maxCost) * 100) : 0

        return `
          <div class="bc-card">
            <div class="bc-card-header">
              <div class="bc-card-name">${h(report.workflows[i]?.name ?? '')}</div>
              <div class="bc-card-saving-cell">
                <div class="bc-card-saving">${formatRecovery(area.recoveryRange)}</div>
                <div class="bc-metric-label">Target annual cost saving</div>
              </div>
            </div>
            <div class="bc-grid">
              <div class="bc-grid-cell">
                <div class="bc-metric-value">${area.annualHours.toLocaleString('en-GB')}</div>
                <div class="bc-metric-label">Current estimated<br/>hours per year</div>
              </div>
              <div class="bc-grid-cell">
                <div class="bc-metric-value">${formatCurrency(area.annualCost)}</div>
                <div class="bc-metric-label">Current estimated<br/>annual cost</div>
              </div>
              <div class="bc-grid-cell">
                <div class="bc-target-badge">${pctRange.low}\u2013${pctRange.high}%</div>
                <div class="bc-metric-label">Target workflow<br/>efficiency saving</div>
              </div>
            </div>
            <div class="bc-bars-stacked">
              <div class="bc-bar-row">
                <div class="bc-bar-segment bc-bar-total-cost" style="width:${costBarWidth}%"></div>
              </div>
              <div class="bc-bar-row">
                <div class="bc-bar-segment bc-bar-upper" style="width:${upperSavingWidth}%"></div>
              </div>
              <div class="bc-bar-row">
                <div class="bc-bar-segment bc-bar-conservative" style="width:${lowerSavingWidth}%"></div>
              </div>
            </div>
          </div>
        `
      }).join('')}

      <div class="bc-total-row">
        <div>
          <div class="bc-total-label">Total</div>
          <div class="bc-total-value">${businessCase.totalAnnualHours.toLocaleString('en-GB')}</div>
          <div class="bc-total-sublabel">Current estimated<br/>hours per year</div>
        </div>
        <div>
          <div class="bc-total-value" style="margin-top:18px">${formatCurrency(businessCase.totalAnnualCost)}</div>
          <div class="bc-total-sublabel">Current estimated<br/>annual cost</div>
        </div>
        <div>
          <div class="bc-total-value" style="margin-top:18px">${formatRecovery(businessCase.conservativeRecovery)}</div>
          <div class="bc-total-sublabel">Target annual<br/>cost saving</div>
        </div>
      </div>

      <div class="bc-legend">
        <div class="bc-legend-item"><div class="bc-legend-dot" style="background:var(--slate);opacity:0.25"></div>Current total workflow cost</div>
        <div class="bc-legend-item"><div class="bc-legend-dot" style="background:var(--coral);opacity:0.5"></div>Upper estimated saving</div>
        <div class="bc-legend-item"><div class="bc-legend-dot" style="background:var(--coral)"></div>Lower estimated saving</div>
      </div>

      <div class="section-subtitle" style="margin-top:6px">How we calculated this</div>
      <p class="paragraph" style="font-size:8.5pt">
        Base salary midpoint multiplied by 1.25 employer uplift gives the fully loaded cost per person. People involved multiplied by weekly hours and 45 working weeks gives annual hours. Annual hours multiplied by the hourly rate gives annual cost. Target savings are informed by efficiency patterns observed across professional services firms. These are directional estimates, not forecasts.
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
      ${sectionBand(String(4 + wfIndex).padStart(2, '0'), 'What an improved AI workflow might look like')}

      <div class="section-subtitle">${h(wf.name)}</div>

      <div class="pull-quote">
        <div class="pull-quote-text">${h(wf.whyThisMatters)}</div>
      </div>

      <div class="two-col">
        <div class="col-box">
          <div class="col-label">\ud83d\udd0d What this looks like today</div>
          <p class="paragraph" style="font-size:9.5pt;line-height:1.45">${h(wf.currentState)}</p>
        </div>
        <div class="col-box-accent">
          <div class="col-label">\ud83d\udca1 What this could look like</div>
          <p class="paragraph" style="font-size:9.5pt;line-height:1.45">${h(wf.futureState)}</p>
        </div>
      </div>

      <div class="considerations-box">
        <div class="col-label">Key considerations</div>
        <p class="paragraph" style="font-size:9.5pt;line-height:1.45;margin-bottom:0">${h(wf.considerations)}</p>
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
      ${sectionBand('07', 'Your current situation')}

      ${report.maturityAssessment ? `
        <div style="margin-bottom:10px">
          <div class="section-subtitle" style="margin-top:0;margin-bottom:4px">Your operational maturity</div>
          <div class="two-col" style="gap:8px">
            <div class="col">
              <div class="col-label">Strengths</div>
              ${report.maturityAssessment.strengths.map(s => `<div class="list-item" style="line-height:1.35;margin-bottom:1px">\u2022 ${h(s)}</div>`).join('')}
            </div>
            <div class="col">
              <div class="col-label">Areas for development</div>
              ${report.maturityAssessment.development.map(d => `<div class="list-item" style="line-height:1.35;margin-bottom:1px">\u2022 ${h(d)}</div>`).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${report.quickWins && report.quickWins.length > 0 ? `
        <div style="margin-bottom:16px;background:var(--light-blue);border:1px solid #e5e5e5;border-left:4px solid var(--coral);border-radius:4px;padding:12px 16px">
          <div class="section-subtitle" style="margin-bottom:4px">Three actions for this week</div>
          <p class="paragraph" style="margin-bottom:6px">Zero-cost actions to build momentum and surface information for next steps.</p>
          ${report.quickWins.map((win, i) => `
            <div class="step-row" style="margin-bottom:6px">
              <div class="step-number">${i + 1}</div>
              <p class="paragraph" style="flex:1;margin-bottom:0">${h(win)}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="section-subtitle" style="margin-bottom:4px">${h(companyName)}\u2019s readiness for AI change</div>
      <div class="two-col" style="gap:10px;margin-bottom:8px">
        <div class="col">
          <div class="col-label">Strengths</div>
          ${report.readiness.strengths.map(s => `<div class="list-item" style="line-height:1.35;margin-bottom:1px">\u2022 ${h(s)}</div>`).join('')}
        </div>
        <div class="col">
          <div class="col-label">Gaps to address</div>
          ${report.readiness.gaps.map(g => `<div class="list-item" style="line-height:1.35;margin-bottom:1px">\u2022 ${h(g)}</div>`).join('')}
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
      ${sectionBand('08', 'What makes AI adoption stick')}

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
      ${sectionBand('09', 'Suggested roadmap: diagnosis to implementation')}

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
          This report has been designed as a starting point. A Diagnose engagement with Leomayn would undertake a deep analysis to develop a bespoke business case and recommendation on where to start, based on access to your team, your data, and your systems. The output would be ready to lead into a Define phase where we would create an implementation-ready blueprint for a new AI-enabled workflow that moved the needle for your business.
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

      <div class="section-title">Appendix: What you told us</div>

      <div class="diag-section">
        <div class="diag-group-title">Organisation</div>
        <div class="diag-row"><span class="diag-label">Company</span><span class="diag-value">${h(companyName)}</span></div>
        <div class="diag-row"><span class="diag-label">Firm type</span><span class="diag-value">${h(FIRM_TYPE_OPTIONS.find(o => o.value === diagnostic.firmType)?.label ?? diagnostic.firmType)}</span></div>
        <div class="diag-row"><span class="diag-label">Team size</span><span class="diag-value">${h(`${TEAM_SIZE_OPTIONS.find(o => o.value === diagnostic.teamSize)?.label ?? diagnostic.teamSize} people`)}</span></div>

        <div class="diag-group-title" style="margin-top:10px">Strategic focus</div>
        <div class="diag-row"><span class="diag-label">Primary</span><span class="diag-value">${h(STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.primary)?.label ?? diagnostic.strategicFocus.primary)}</span></div>
        <div class="diag-row"><span class="diag-label">Secondary</span><span class="diag-value">${h(STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.secondary)?.label ?? diagnostic.strategicFocus.secondary)}</span></div>

        <div class="diag-group-title" style="margin-top:10px">Foundations</div>
        <div class="diag-row"><span class="diag-label">AI adoption</span><span class="diag-value">${h(AI_ADOPTION_OPTIONS.find(o => o.value === diagnostic.aiAdoption)?.label ?? diagnostic.aiAdoption)}</span></div>
        <div class="diag-row"><span class="diag-label">Tech environment</span><span class="diag-value">${h(TECH_ENVIRONMENT_DESCRIPTIONS[diagnostic.techEnvironment] ?? diagnostic.techEnvironment)}</span></div>
        <div class="diag-row"><span class="diag-label">Processes</span><span class="diag-value">${h(PROCESS_KNOWLEDGE_OPTIONS.find(o => o.value === diagnostic.processKnowledge)?.label ?? diagnostic.processKnowledge)}</span></div>
        <div class="diag-row"><span class="diag-label">Data</span><span class="diag-value">${h(DATA_FOUNDATIONS_OPTIONS.find(o => o.value === diagnostic.dataFoundations)?.label ?? diagnostic.dataFoundations)}</span></div>

        <div class="diag-group-title" style="margin-top:8px">Pain points</div>
        ${painGroups.map(group => `
          <div style="font-size:7pt;color:var(--slate);margin-bottom:2px;padding-left:6px">\u2022 ${h(group.area)}: ${h(group.symptoms.join(', '))}</div>
        `).join('')}
      </div>

      ${(() => {
        const firmType = diagnostic.firmType
        const tiers = getSalaryTiers(firmType)
        const industryLabel = FIRM_TYPE_OPTIONS.find(o => o.value === firmType)?.label ?? firmType
        const upliftMultiplier = 1 + EMPLOYER_COST_UPLIFT
        const hasNewTiers = tiers.some(t => t.value.startsWith('tier-'))
        if (!hasNewTiers) return ''

        return `
          <div class="section-subtitle" style="margin-top:14px;margin-bottom:6px">Salary benchmarks</div>
          <p style="font-size:8pt;color:var(--slate);margin-bottom:8px">
            UK benchmarks for ${h(industryLabel.toLowerCase())}, outside London. A 25% employer cost uplift covers pension, NI, and benefits.
          </p>

          <table class="data-table" style="font-size:8pt">
            <thead>
              <tr>
                <th style="width:50%;font-size:8pt">Seniority level</th>
                <th class="text-right" style="font-size:8pt">Base salary midpoint</th>
                <th class="text-right" style="font-size:8pt">Fully loaded (\u00d71.25)</th>
              </tr>
            </thead>
            <tbody>
              ${tiers.map(tier => `
                <tr>
                  <td style="font-size:8pt;padding:6px 10px">${h(tier.label)}</td>
                  <td class="text-right" style="font-size:8pt;padding:6px 10px">${formatCurrency(tier.midpoint)}</td>
                  <td class="text-right" style="font-size:8pt;padding:6px 10px">${formatCurrency(Math.round(tier.midpoint * upliftMultiplier))}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <p class="disclaimer" style="font-size:7pt">
            Compiled from Hays, ICAEW, Ascent, BARBRI, EMBS, and ONS data (2024\u20132026). Midpoints represent typical base salaries for the seniority band. Actual salaries vary by region, specialism, and firm size.
          </p>
        `
      })()}

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

  // Total pages: cover + exec summary + priority map + business case + 3 workflows + situation + foundations + roadmap + optional appendix
  const totalPages = diagnostic ? 11 : 10

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
</body>
</html>`

  // Global em-dash sanitisation — catches any that slip through from AI-generated content
  return stripEmDashes(html)
}
