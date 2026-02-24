import type { GeneratedReport, ConditionLevel, QualificationData, DiagnosticData, RankedArchetype } from './types'
import { normaliseCondition } from './types'
import {
  getRecoveryPercentageRange,
  CONDITION_LABELS,
  ROLE_DISPLAY_LABELS,
  FIRM_TYPE_REPORT_LABELS,
  TECH_ENVIRONMENT_DESCRIPTIONS,
  STRATEGIC_FOCUS_OPTIONS,
  TEAM_SIZE_OPTIONS,
  AREA_OPTIONS,
  SYMPTOM_OPTIONS,
  AI_ADOPTION_OPTIONS,
  PROCESS_KNOWLEDGE_OPTIONS,
  DATA_FOUNDATIONS_OPTIONS,
} from './constants'
import { escapeHtml } from './sanitise'
import {
  MANROPE_400_BASE64,
  MANROPE_600_BASE64,
  MANROPE_700_BASE64,
  DM_SERIF_400_BASE64,
  LOGO_DATA_URI,
} from './pdf-assets'

// ── Types ──

export interface PdfTemplateData {
  report: GeneratedReport
  companyName: string
  recipientName: string
  qualification?: QualificationData
  diagnostic?: DiagnosticData
  topArchetypes?: RankedArchetype[]
  companyContext?: string
}

// ── Helpers ──

function h(text: string): string {
  return escapeHtml(text)
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
  green: 'Strong fit with your situation',
  amber: 'Moderate fit, some considerations',
  red: 'Potential constraint, may need groundwork',
}

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
    /* Allow detail/two-col boxes to split if needed — prevents mostly-empty overflow pages */

    /* Page header */
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--coral);
      margin-bottom: 16px;
    }
    .page-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .page-header-logo {
      width: 80px;
      height: auto;
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

    /* Footer handled by Puppeteer footerTemplate */

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
      margin-bottom: 16px;
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
    .hero-stat {
      margin-top: 18px;
      margin-bottom: 14px;
    }
    .hero-label {
      font-size: 10pt;
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
      font-size: 9pt;
      color: var(--slate);
      margin-top: 4px;
    }
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
      border-left: 4px solid var(--coral);
      border: 1px solid #e5e5e5;
      border-left: 4px solid var(--coral);
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 6px;
      background: var(--white);
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
      background: var(--pearl);
      border-radius: 3px;
      margin-left: 8px;
      display: inline-block;
      vertical-align: middle;
    }
    .score-bar-fill {
      height: 6px;
      background: var(--coral);
      border-radius: 3px;
    }

    /* Condition pills */
    .pill-row {
      display: flex;
      gap: 6px;
      margin-top: 4px;
    }
    .pill {
      border-radius: 10px;
      padding: 3px 8px;
      font-size: 8pt;
      font-weight: 700;
      display: inline-block;
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
      padding: 10px 14px;
      margin-bottom: 10px;
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
      gap: 12px;
      margin-bottom: 8px;
    }
    .col {
      flex: 1;
    }
    .col-box {
      background: var(--pearl);
      padding: 12px;
      border-radius: 4px;
      flex: 1;
    }
    .col-box-accent {
      background: #fdf0ed;
      padding: 12px;
      border-radius: 4px;
      flex: 1;
    }
    .col-label {
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      margin-bottom: 6px;
    }
    .list-item {
      font-size: 9pt;
      line-height: 1.5;
      color: var(--slate);
      margin-bottom: 4px;
      padding-left: 8px;
    }

    /* Detail boxes (prerequisites, pitfalls) */
    .detail-box {
      background: var(--pearl);
      padding: 12px;
      border-radius: 4px;
      flex: 1;
    }
    .detail-box-warn {
      background: #fef2f0;
      padding: 12px;
      border-radius: 4px;
      flex: 1;
    }

    /* Stat cards */
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
    .stat-box-hero {
      background: #fdf0ed;
      padding: 16px;
      border-radius: 4px;
      text-align: center;
      flex: 2;
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
      font-size: 22pt;
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
    }
    .data-table tfoot td {
      font-size: 9pt;
      font-weight: 700;
      color: var(--slate);
      padding: 10px;
      background: var(--pearl);
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
      font-size: 8pt;
      font-weight: 700;
      color: var(--slate);
      margin-top: 6px;
      margin-bottom: 2px;
    }
    .foundation-text {
      font-size: 8pt;
      color: var(--slate);
      line-height: 1.5;
    }

    /* CTA */
    .cta-box {
      background: var(--slate);
      padding: 20px;
      border-radius: 4px;
      margin-top: 16px;
    }
    .cta-title {
      font-family: var(--font-serif);
      font-size: 13pt;
      color: var(--white);
      margin-bottom: 6px;
    }
    .cta-text {
      font-size: 10pt;
      line-height: 1.5;
      color: #b5c9d8;
      margin-bottom: 10px;
    }
    .cta-link {
      font-size: 10pt;
      font-weight: 700;
      color: var(--coral);
    }

    /* Numbered step */
    .step-row {
      display: flex;
      gap: 8px;
      margin-bottom: 6px;
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
  `
}

// ── Section renderers ──

function pageHeader(companyName: string, dateStr: string, showTitle: boolean = true): string {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <img src="${LOGO_DATA_URI}" class="page-header-logo" />
        ${showTitle ? `<span class="page-header-title">AI Deployment Report \u2014 ${h(companyName)}</span>` : ''}
      </div>
      <span class="page-header-date">${h(dateStr)}</span>
    </div>
  `
}

// Footer is rendered by Puppeteer's footerTemplate — no inline footer needed

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

function coverPage(data: PdfTemplateData, dateStr: string, heroRecovery: string, totalPages: number): string {
  const { report, companyName, recipientName, qualification } = data
  const roleLabel = getRoleDisplayLabel(qualification)
  const workflows = report.workflows

  return `
    <div class="page">
      <img src="${LOGO_DATA_URI}" style="width:140px;margin-left:-8px;margin-bottom:20px;margin-top:8px" />

      <div class="cover-title">AI Deployment Report</div>
      <div class="cover-divider"></div>
      <div class="cover-meta">Prepared for: ${h(recipientName)}${roleLabel ? `, ${h(roleLabel)}` : ''}</div>
      <div class="cover-meta">Company: ${h(companyName)}</div>
      <div class="cover-meta" style="margin-top:4px">${h(dateStr)}</div>

      <div class="hero-stat">
        <div class="hero-label">Estimated annual saving opportunity</div>
        <div class="hero-value">${heroRecovery}</div>
        <div class="hero-context">Across three workflows identified from your diagnostic data</div>
      </div>

      <div class="situation-box">
        <div class="situation-title">Your situation</div>
        <div class="situation-text">${h(report.situationSummary)}</div>
      </div>

      <div class="toc">
        <div class="toc-title">Contents</div>
        <div class="toc-row"><span class="toc-label">Where to start</span><span class="toc-page">2</span></div>
        <div class="toc-row"><span class="toc-label">The business case</span><span class="toc-page">3</span></div>
        ${workflows.map((wf, i) => `
          <div class="toc-row"><span class="toc-label">${h(wf.name)}</span><span class="toc-page">${i + 4}</span></div>
        `).join('')}
        <div class="toc-row"><span class="toc-label">What makes AI adoption stick</span><span class="toc-page">7</span></div>
        <div class="toc-row"><span class="toc-label">Your current position</span><span class="toc-page">8</span></div>
        <div class="toc-row"><span class="toc-label">Your roadmap from here</span><span class="toc-page">9</span></div>
        ${data.diagnostic ? `<div class="toc-row"><span class="toc-label">Appendix: What you told us</span><span class="toc-page">${totalPages}</span></div>` : ''}
      </div>

      <p class="paragraph">
        Use this report as a starting point for prioritisation. The business case numbers are directional estimates, not financial forecasts.
      </p>

      <p class="disclaimer">
        This report is based on a light diagnostic. We have not had access to your team, data, or systems. Recommendations reflect patterns in what you told us.
      </p>

    </div>
  `
}

function priorityMapPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
  const { report, companyName, topArchetypes } = data
  const maxScore = 25

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}

      <div class="section-title">Where to start</div>
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
                  <span class="workflow-score"> (score: ${compositeScore.toFixed(1)})</span>
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

function businessCasePage(data: PdfTemplateData, dateStr: string, heroRecovery: string, totalPages: number): string {
  const { report, companyName } = data
  const { businessCase } = report

  const weeklyHoursText = businessCase.weeklyHoursRecovered.low === businessCase.weeklyHoursRecovered.high
    ? `${businessCase.weeklyHoursRecovered.low}`
    : `${businessCase.weeklyHoursRecovered.low} \u2013 ${businessCase.weeklyHoursRecovered.high}`

  // SVG bar chart data
  const maxCost = Math.max(...businessCase.perArea.map(a => a.annualCost))
  const chartWidth = 500
  const barHeight = 28
  const barGap = 10
  const labelWidth = 140
  const chartAreaWidth = chartWidth - labelWidth
  const svgHeight = businessCase.perArea.length * (barHeight + barGap) + 10

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr, false)}
      ${sectionBand('02', 'The business case')}

      <p class="paragraph">
        The figures below are based on the team sizes, time estimates, and seniority levels you provided in the diagnostic. They include a standard 25% employer cost uplift for pension, NI, and benefits. These are directional estimates designed to frame the scale of the opportunity.
      </p>

      <div class="stat-row">
        <div class="stat-box-hero">
          <div class="stat-value-coral">${weeklyHoursText} hours per week</div>
          <div class="stat-label">Estimated time your team could recover</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">${heroRecovery}</div>
          <div class="stat-label">Estimated annual saving</div>
        </div>
      </div>

      <table class="data-table">
        <thead>
          <tr>
            <th style="width:35%">Workflow</th>
            <th class="text-right">Current est. annual hours</th>
            <th class="text-right">Current est. annual cost</th>
            <th class="text-right">Target saving range</th>
          </tr>
        </thead>
        <tbody>
          ${businessCase.perArea.map((area, i) => {
            const pctRange = getRecoveryPercentageRange(area.archetypeId)
            return `
              <tr>
                <td>
                  ${h(report.workflows[i]?.name ?? '')}
                  <div class="sub-text">Target time savings: ${pctRange.low}\u2013${pctRange.high}%</div>
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
            <td>Total across three workflows</td>
            <td class="text-right">${businessCase.totalAnnualHours.toLocaleString('en-GB')}</td>
            <td class="text-right">${formatCurrency(businessCase.totalAnnualCost)}</td>
            <td class="text-right">${formatRecovery(businessCase.conservativeRecovery)}</td>
          </tr>
        </tfoot>
      </table>

      <div class="bar-chart">
        <svg width="${chartWidth}" height="${svgHeight}" viewBox="0 0 ${chartWidth} ${svgHeight}">
          ${businessCase.perArea.map((area, i) => {
            const y = i * (barHeight + barGap)
            const barW = maxCost > 0 ? (area.annualCost / maxCost) * chartAreaWidth : 0
            const recoveryLowW = maxCost > 0 ? (area.recoveryRange.low / maxCost) * chartAreaWidth : 0
            const recoveryHighW = maxCost > 0 ? (area.recoveryRange.high / maxCost) * chartAreaWidth : 0
            return `
              <text x="0" y="${y + barHeight / 2 + 3}" font-family="Manrope,sans-serif" font-size="8" fill="#1a3d56">${h(report.workflows[i]?.name ?? '')}</text>
              <rect x="${labelWidth}" y="${y}" width="${barW}" height="${barHeight}" rx="3" fill="#1a3d56" opacity="0.15"/>
              <rect x="${labelWidth}" y="${y + 2}" width="${recoveryHighW}" height="${barHeight - 4}" rx="2" fill="#f7c9c0" opacity="0.5"/>
              <rect x="${labelWidth}" y="${y + 4}" width="${recoveryLowW}" height="${barHeight - 8}" rx="2" fill="#f7c9c0"/>
              <text x="${labelWidth + barW + 6}" y="${y + barHeight / 2 + 3}" font-family="Manrope,sans-serif" font-size="8" fill="#1a3d56">${formatCurrency(area.annualCost)}</text>
            `
          }).join('')}
        </svg>
      </div>

      <div class="section-subtitle">How we calculated this</div>
      <p class="paragraph">
        Base salary estimate x 1.25 employer uplift = fully loaded cost. People involved x weekly hours x 45 working weeks = annual hours. Annual hours x hourly rate = annual cost. Target time savings range applied per workflow type. Sum across three workflows = combined target saving range. These are directional estimates based on the sizing data you provided. A full Diagnose engagement would validate these figures with access to your team and data.
      </p>

    </div>
  `
}

function workflowDetailPage(data: PdfTemplateData, wfIndex: number, dateStr: string, totalPages: number): string {
  const { report, companyName } = data
  const wf = report.workflows[wfIndex]
  const pageNum = wfIndex + 4

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr)}

      <div class="section-title">${wfIndex + 1}. ${h(wf.name)}</div>

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

      <div class="col-label">Key considerations</div>
      <p class="paragraph" style="margin-bottom:10px">${h(wf.considerations)}</p>

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

function foundationsPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
  const { companyName } = data
  const foundations = [
    {
      title: 'Assign clear ownership',
      explanation: 'Each workflow needs a single owner with authority to approve changes. Without this, improvements stall at the first disagreement.',
      whatToDo: 'Assign a single owner per workflow who has authority to approve changes.',
      how: 'Start with a RACI chart for the first workflow. Expand as you add more.',
    },
    {
      title: 'Involve the people doing the work',
      explanation: 'People adopt what they helped shape. A structured transition works when those affected are part of the design.',
      whatToDo: 'Include the people who do the work in designing the new workflow.',
      how: 'Run a design workshop with the team before building anything.',
    },
    {
      title: 'Make leadership visible',
      explanation: 'Teams watch what leaders do. Visible sponsorship from senior leaders who model the new behaviours sets the tone.',
      whatToDo: 'Have one senior leader use the new workflow publicly within the first week.',
      how: 'Build the first pilot around a workflow the sponsor directly oversees.',
    },
    {
      title: 'Communicate early and often',
      explanation: 'Regular, honest updates on what is changing, why, and what it means for individuals. Silence breeds resistance.',
      whatToDo: 'Establish a fortnightly update rhythm from day one.',
      how: 'A standing 15-minute slot covering: what changed, what is next, what we learned.',
    },
    {
      title: 'Train for the specific workflow',
      explanation: 'Role-specific training on the new tools and workflows. Generic AI training does not change daily behaviour.',
      whatToDo: 'Create training materials specific to each role\u2019s interaction with the workflow.',
      how: 'Shadow the current process first, then train on the difference.',
    },
    {
      title: 'Protect time to learn',
      explanation: 'Teams need space to experiment and build confidence. Bolting AI onto a full workload produces frustration, not adoption.',
      whatToDo: 'Ring-fence 2\u20133 hours per week per person during the transition period.',
      how: 'Reduce meeting load or defer non-critical work to create the space.',
    },
  ]

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr, false)}
      ${sectionBand('04', 'What makes AI adoption stick')}

      <div class="foundation-grid">
        ${foundations.map(f => `
          <div class="foundation-card">
            <div class="foundation-title">${h(f.title)}</div>
            <div class="foundation-text">${h(f.explanation)}</div>
            <div class="foundation-label">What to do</div>
            <div class="foundation-text">${h(f.whatToDo)}</div>
            <div class="foundation-label">How</div>
            <div class="foundation-text">${h(f.how)}</div>
          </div>
        `).join('')}
      </div>

      <p class="disclaimer">
        These foundations build through the engagement. You do not need all of them in place before starting. The first workflow pilot is where most of them develop.
      </p>

    </div>
  `
}

function readinessPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
  const { report, companyName } = data

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr, false)}
      ${sectionBand('05', 'Your current position')}

      ${report.maturityAssessment ? `
        <div style="margin-bottom:14px">
          <div class="two-col">
            <div class="col">
              <div class="col-label">Strengths</div>
              ${report.maturityAssessment.strengths.map(s => `<div class="list-item">\u2022 ${h(s)}</div>`).join('')}
            </div>
            <div class="col">
              <div class="col-label">Areas for development</div>
              ${report.maturityAssessment.development.map(d => `<div class="list-item">\u2022 ${h(d)}</div>`).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${report.quickWins && report.quickWins.length > 0 ? `
        <div style="margin-bottom:14px">
          <div class="section-subtitle">What you can start this week</div>
          <p style="font-size:10pt;color:var(--slate);margin-bottom:8px">Zero-cost actions to build momentum and surface information for next steps.</p>
          ${report.quickWins.map((win, i) => `
            <div class="step-row">
              <div class="step-number">${i + 1}</div>
              <p class="paragraph" style="flex:1">${h(win)}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="section-subtitle">${h(companyName)}\u2019s readiness for AI change</div>
      <div class="two-col" style="margin-bottom:14px">
        <div class="col">
          <div class="col-label">Strengths</div>
          ${report.readiness.strengths.map(s => `<div class="list-item">\u2022 ${h(s)}</div>`).join('')}
        </div>
        <div class="col">
          <div class="col-label">Gaps to address</div>
          ${report.readiness.gaps.map(g => `<div class="list-item">\u2022 ${h(g)}</div>`).join('')}
        </div>
      </div>

    </div>
  `
}

function roadmapPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
  const { report, companyName } = data

  return `
    <div class="page page-break">
      ${pageHeader(companyName, dateStr, false)}
      ${sectionBand('06', 'Your roadmap from here')}

      <p style="font-size:10pt;color:var(--slate);margin-bottom:6px">Structured steps to move from diagnostic to implementation.</p>
      ${report.nextSteps.map((step, i) => `
        <div class="step-row">
          <div class="step-number">${i + 1}</div>
          <p class="paragraph" style="flex:1">${h(step)}</p>
        </div>
      `).join('')}

      <div class="cta-box">
        <div class="cta-title">Ready to move from diagnostic to design?</div>
        <div class="cta-text">
          This report is a starting point. A full Diagnose engagement validates these findings with access to your team, your data, and your systems, and produces implementation-ready blueprints.
        </div>
        <div class="cta-link">Book a discovery call: calendly.com/tom-leomayn/30min</div>
        <div class="cta-link" style="margin-top:3px">Email: hello@leomayn.com</div>
      </div>

    </div>
  `
}

function appendixPage(data: PdfTemplateData, dateStr: string, totalPages: number): string {
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

// ── Main export ──

export function buildPdfHtml(data: PdfTemplateData): string {
  const { report, diagnostic } = data
  const dateStr = new Date(report.generatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const heroRecovery = formatRecovery(report.businessCase.conservativeRecovery)

  // Total pages: cover + priority map + business case + 3 workflows + foundations + readiness + roadmap + optional appendix
  const totalPages = diagnostic ? 10 : 9

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <style>${cssBlock()}</style>
</head>
<body>
  ${coverPage(data, dateStr, heroRecovery, totalPages)}
  ${priorityMapPage(data, dateStr, totalPages)}
  ${businessCasePage(data, dateStr, heroRecovery, totalPages)}
  ${report.workflows.map((_, i) => workflowDetailPage(data, i, dateStr, totalPages)).join('')}
  ${foundationsPage(data, dateStr, totalPages)}
  ${readinessPage(data, dateStr, totalPages)}
  ${roadmapPage(data, dateStr, totalPages)}
  ${appendixPage(data, dateStr, totalPages)}
</body>
</html>`
}
