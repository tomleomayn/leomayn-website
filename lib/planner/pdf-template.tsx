import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import type { GeneratedReport, ConditionLevel, QualificationData, DiagnosticData } from './types'
import { normaliseCondition } from './types'
import {
  getRecoveryPercentageRange,
  CONDITION_LABELS,
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

const slate = '#1a3d56'
const coral = '#f7c9c0'
const coralText = '#c96b60'
const pearl = '#fef8f1'
const steel = '#9da7b0'
const white = '#ffffff'

const CONDITION_PILL: Record<ConditionLevel, { bg: string; color: string }> = {
  green: { bg: '#d1fae5', color: '#065f46' },
  amber: { bg: '#fef3c7', color: '#92400e' },
  red: { bg: '#fee2e2', color: '#991b1b' },
}

const styles = StyleSheet.create({
  page: {
    padding: 48,
    paddingBottom: 60,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: slate,
    backgroundColor: white,
  },
  // Cover page styles
  coverLogo: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 3,
    color: slate,
  },
  coverUnderline: {
    width: 60,
    height: 3,
    backgroundColor: coral,
    marginTop: 4,
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 14,
    color: steel,
    marginBottom: 4,
  },
  coverDate: {
    fontSize: 10,
    color: steel,
  },
  coverDivider: {
    height: 2,
    backgroundColor: coral,
    marginTop: 28,
    marginBottom: 20,
  },
  coverGrid: {
    flexDirection: 'row' as const,
    gap: 10,
    marginBottom: 10,
  },
  coverPanel: {
    flex: 1,
    backgroundColor: pearl,
    borderRadius: 6,
    padding: 14,
    borderTopWidth: 2,
    borderTopColor: coral,
  },
  coverSectionLabel: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    marginBottom: 4,
  },
  coverBody: {
    fontSize: 9,
    lineHeight: 1.6,
    color: slate,
  },
  // Page header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 3,
    borderBottomColor: coral,
  },
  logo: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    color: slate,
  },
  dateText: {
    fontSize: 8,
    color: steel,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 48,
    right: 48,
  },
  footerLine: {
    height: 1,
    backgroundColor: coral,
    marginBottom: 6,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: steel,
  },
  footerBrand: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    letterSpacing: 1,
  },
  // Sections
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    marginBottom: 12,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.6,
    color: slate,
    marginBottom: 8,
  },
  summaryBox: {
    backgroundColor: pearl,
    padding: 16,
    borderRadius: 4,
    marginBottom: 12,
  },
  // Workflow cards (priority map)
  workflowCard: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,
    padding: 14,
    marginBottom: 10,
  },
  workflowNumber: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: white,
    backgroundColor: slate,
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 1,
    paddingTop: 4,
  },
  workflowName: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    marginBottom: 4,
  },
  // Pill badge
  pillBadge: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    minWidth: 110,
    textAlign: 'center',
  },
  pillText: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
  },
  // Workflow detail
  twoCol: {
    flexDirection: 'row',
    gap: 12,
  },
  col: {
    flex: 1,
  },
  colBox: {
    backgroundColor: pearl,
    padding: 14,
    borderRadius: 4,
    flex: 1,
  },
  colBoxAccent: {
    backgroundColor: '#fdf0ed',
    padding: 14,
    borderRadius: 4,
    flex: 1,
  },
  colLabel: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: slate,
    marginBottom: 6,
  },
  listItem: {
    fontSize: 9,
    lineHeight: 1.5,
    color: slate,
    marginBottom: 4,
    paddingLeft: 8,
  },
  // Table
  table: {
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: slate,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: white,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tableTotalRow: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: pearl,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  tableCell: {
    fontSize: 9,
    color: slate,
  },
  // Stat cards
  statBox: {
    backgroundColor: pearl,
    padding: 14,
    borderRadius: 4,
    textAlign: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: slate,
  },
  statLabel: {
    fontSize: 8,
    color: steel,
    marginTop: 2,
  },
  // CTA
  ctaSection: {
    backgroundColor: slate,
    padding: 20,
    borderRadius: 4,
    marginTop: 16,
  },
  ctaTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: white,
    marginBottom: 6,
  },
  ctaText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#b5c9d8',
    marginBottom: 10,
  },
  ctaLink: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: coral,
  },
  // Misc
  disclaimer: {
    fontSize: 8,
    color: steel,
    lineHeight: 1.4,
    marginTop: 6,
  },
})

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

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Split a paragraph into 2-sentence chunks for visual breathing room.
 */
function splitIntoChunks(text: string): string[] {
  const sentences = text.split(/(?<=\.)\s+/).filter(s => s.trim().length > 0)
  if (sentences.length <= 2) return [text]
  const chunks: string[] = []
  for (let i = 0; i < sentences.length; i += 2) {
    chunks.push(sentences.slice(i, i + 2).join(' '))
  }
  return chunks
}

function PdfFooter() {
  return (
    <View style={styles.footer} fixed>
      <View style={styles.footerLine} />
      <View style={styles.footerContent}>
        <Text style={styles.footerBrand}>LEOMAYN</Text>
        <Text style={styles.footerText}>leomayn.com</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
        />
      </View>
    </View>
  )
}

function DiagnosticRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flexDirection: 'row' as const, marginBottom: 4 }}>
      <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: steel, width: 90 }}>{label}</Text>
      <Text style={{ fontSize: 8, color: slate, flex: 1 }}>{value}</Text>
    </View>
  )
}

function ConditionPill({ level, label }: { level: ConditionLevel; label: string }) {
  const pill = CONDITION_PILL[level]
  return (
    <View style={[styles.pillBadge, { backgroundColor: pill.bg }]}>
      <Text style={[styles.pillText, { color: pill.color }]}>
        {label}
      </Text>
    </View>
  )
}

interface PdfTemplateProps {
  report: GeneratedReport
  companyName: string
  recipientName: string
  qualification?: QualificationData
  diagnostic?: DiagnosticData
  companyContext?: string
}

export function PlannerPdfDocument({ report, companyName, recipientName, qualification, diagnostic, companyContext }: PdfTemplateProps) {
  const { businessCase } = report
  const dateStr = new Date(report.generatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Document>
      {/* ── Page 1: Cover ── */}
      <Page size="A4" style={[styles.page, { paddingTop: 72 }]}>
        <View style={{ marginBottom: 48 }}>
          <Text style={styles.coverLogo}>LEOMAYN</Text>
          <View style={styles.coverUnderline} />
        </View>

        <Text style={styles.coverTitle}>AI Deployment Plan</Text>
        <Text style={styles.coverSubtitle}>Prepared for: {recipientName}</Text>
        <Text style={[styles.coverDate, { marginBottom: 2 }]}>Organisation: {companyName}</Text>
        <Text style={styles.coverDate}>{dateStr}</Text>

        <View style={styles.coverDivider} />

        <View style={styles.coverGrid}>
          <View style={styles.coverPanel}>
            <Text style={styles.coverSectionLabel}>About this report</Text>
            <Text style={styles.coverBody}>
              This report identifies three operational workflows where AI-assisted automation is most likely to deliver measurable value for {companyName}. The recommendations are based on your responses to our diagnostic questionnaire, which assessed your strategic priorities, operational pain points, team structure, and technology foundations.
            </Text>
          </View>
          <View style={styles.coverPanel}>
            <Text style={styles.coverSectionLabel}>How to use this report</Text>
            <Text style={styles.coverBody}>
              Each recommended workflow includes an assessment of current state, a view of what AI-assisted operations could look like, and an outline business case. Use this as a starting point for internal discussion and prioritisation. The workflows are ordered by potential impact, feasibility, and learning value.
            </Text>
          </View>
        </View>

        <View style={styles.coverGrid}>
          <View style={styles.coverPanel}>
            <Text style={styles.coverSectionLabel}>How to interpret the findings</Text>
            <Text style={styles.coverBody}>
              For each workflow, we assess impact, complexity, and learning value using a green, amber, or red rating. Green indicates strong alignment with your inputs. Amber indicates partial alignment or a factor worth investigating. Red indicates a potential constraint. The business case provides directional estimates, not a financial forecast.
            </Text>
          </View>
          <View style={styles.coverPanel}>
            <Text style={styles.coverSectionLabel}>What this report is not</Text>
            <Text style={styles.coverBody}>
              This is a light diagnostic based on structured questions. We have not had access to your team, your data, or your systems. These recommendations reflect patterns in what you have told us. A Diagnose engagement would validate these findings with direct access and produce implementation-ready workflow blueprints.
            </Text>
          </View>
        </View>

        <PdfFooter />
      </Page>

      {/* ── Page 2: Your situation ── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>LEOMAYN</Text>
          <Text style={styles.dateText}>{dateStr}</Text>
        </View>

        <Text style={styles.sectionTitle}>{companyName}</Text>
        <View style={styles.summaryBox}>
          <Text style={[styles.paragraph, { marginBottom: 0 }]}>{report.situationSummary}</Text>
        </View>

        {diagnostic && (
          <View style={{ marginTop: 14, backgroundColor: pearl, borderRadius: 4, padding: 16 }}>
            <Text style={{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: slate, marginBottom: 10 }}>What you told us</Text>

            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 6 }}>Organisation</Text>
            <DiagnosticRow label="Company" value={companyName} />
            <DiagnosticRow label="Firm type" value={FIRM_TYPE_REPORT_LABELS[diagnostic.firmType] ?? diagnostic.firmType} />
            <DiagnosticRow label="Team size" value={`${TEAM_SIZE_OPTIONS.find(o => o.value === diagnostic.teamSize)?.label ?? diagnostic.teamSize} people`} />

            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 6, marginTop: 10 }}>Strategic focus</Text>
            <DiagnosticRow label="Primary" value={STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.primary)?.label ?? diagnostic.strategicFocus.primary} />
            <DiagnosticRow label="Secondary" value={STRATEGIC_FOCUS_OPTIONS.find(o => o.value === diagnostic.strategicFocus.secondary)?.label ?? diagnostic.strategicFocus.secondary} />

            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 6, marginTop: 10 }}>Foundations</Text>
            <DiagnosticRow label="AI adoption" value={AI_ADOPTION_OPTIONS.find(o => o.value === diagnostic.aiAdoption)?.label ?? diagnostic.aiAdoption} />
            <DiagnosticRow label="Tech environment" value={TECH_ENVIRONMENT_DESCRIPTIONS[diagnostic.techEnvironment] ?? diagnostic.techEnvironment} />
            <DiagnosticRow label="Processes" value={PROCESS_KNOWLEDGE_OPTIONS.find(o => o.value === diagnostic.processKnowledge)?.label ?? diagnostic.processKnowledge} />
            <DiagnosticRow label="Data" value={DATA_FOUNDATIONS_OPTIONS.find(o => o.value === diagnostic.dataFoundations)?.label ?? diagnostic.dataFoundations} />

            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 6, marginTop: 10 }}>Pain points</Text>
            {diagnostic.painPoints.map((pp, i) => {
              const areaLabel = AREA_OPTIONS.find(o => o.value === pp.area)?.label ?? pp.area
              const symptomLabel = SYMPTOM_OPTIONS.find(o => o.value === pp.symptom)?.label ?? pp.symptom
              return (
                <Text key={i} style={{ fontSize: 8, color: slate, marginBottom: 3, paddingLeft: 6 }}>
                  {'\u2022'} {areaLabel}: {symptomLabel.charAt(0).toLowerCase()}{symptomLabel.slice(1)}
                </Text>
              )
            })}
          </View>
        )}

        <PdfFooter />
      </Page>

      {/* ── Page 3: Priority map ── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>LEOMAYN</Text>
          <Text style={styles.dateText}>{dateStr}</Text>
        </View>

        <Text style={styles.sectionTitle}>Priority map</Text>
        <Text style={[styles.paragraph, { fontSize: 9, color: steel, marginBottom: 6 }]}>
          Based on your diagnostic inputs, we scored nine workflow archetypes and ranked them by impact, feasibility, and learning value. These three represent your strongest starting points.
        </Text>
        {report.priorityMapIntro && (
          <Text style={[styles.paragraph, { fontSize: 9, color: steel, marginBottom: 10 }]}>{report.priorityMapIntro}</Text>
        )}
        {report.workflows.map((wf, i) => {
          const impact = normaliseCondition(wf.threeConditionsCheck.impact)
          const complexity = normaliseCondition(wf.threeConditionsCheck.complexity)
          const learning = normaliseCondition(wf.threeConditionsCheck.learning)
          return (
            <View key={wf.archetypeId} style={styles.workflowCard} wrap={false}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <View style={styles.workflowNumber}>
                  <Text>{i + 1}</Text>
                </View>
                <Text style={styles.workflowName}>{wf.name}</Text>
              </View>
              <Text style={[styles.paragraph, { fontSize: 9 }]}>{wf.whyThisMatters}</Text>
              <View style={{ flexDirection: 'row', gap: 6 }}>
                <ConditionPill level={impact} label={CONDITION_LABELS.impact[impact]} />
                <ConditionPill level={complexity} label={CONDITION_LABELS.complexity[complexity]} />
                <ConditionPill level={learning} label={CONDITION_LABELS.learning[learning]} />
              </View>
            </View>
          )
        })}

        <PdfFooter />
      </Page>

      {/* ── Pages 4-6: Workflow detail ── */}
      {report.workflows.map((wf, i) => (
        <Page key={`detail-${wf.archetypeId}`} size="A4" style={styles.page} wrap>
          <View style={styles.header}>
            <Text style={styles.logo}>LEOMAYN</Text>
            <Text style={styles.dateText}>{dateStr}</Text>
          </View>

          <Text style={styles.sectionTitle}>{i + 1}. {wf.name}</Text>

          <View style={[styles.twoCol, { marginBottom: 16 }]} wrap={false}>
            <View style={styles.colBox}>
              <Text style={styles.colLabel}>What this looks like today</Text>
              {splitIntoChunks(wf.currentState).map((chunk, j) => (
                <Text key={j} style={[styles.paragraph, { fontSize: 10 }]}>{chunk}</Text>
              ))}
            </View>
            <View style={styles.colBoxAccent}>
              <Text style={styles.colLabel}>What this could look like</Text>
              {splitIntoChunks(wf.futureState).map((chunk, j) => (
                <Text key={j} style={[styles.paragraph, { fontSize: 10 }]}>{chunk}</Text>
              ))}
            </View>
          </View>

          <Text style={styles.colLabel}>Key considerations</Text>
          <Text style={[styles.paragraph, { marginBottom: 16 }]}>{wf.considerations}</Text>

          <View style={[styles.twoCol, { marginTop: 8 }]} wrap={false}>
            <View style={styles.col}>
              <Text style={styles.colLabel}>Prerequisites</Text>
              {wf.prerequisites.map((p, j) => (
                <Text key={j} style={styles.listItem}>{'\u2022'} {p}</Text>
              ))}
            </View>
            <View style={styles.col}>
              <Text style={styles.colLabel}>Watch out for</Text>
              {wf.pitfalls.map((p, j) => (
                <Text key={j} style={styles.listItem}>{'\u2022'} {p}</Text>
              ))}
            </View>
          </View>

          <PdfFooter />
        </Page>
      ))}

      {/* ── Business case + success factors ── */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Text style={styles.logo}>LEOMAYN</Text>
          <Text style={styles.dateText}>{dateStr}</Text>
        </View>

        <Text style={styles.sectionTitle}>Estimated savings from successful AI automation</Text>

        <Text style={[styles.paragraph, { fontSize: 9, color: steel, marginBottom: 8 }]}>
          Based on the team size and time estimates you provided. Includes a standard 25% employer cost uplift. Target saving ranges reflect the proportion of manual effort each workflow type typically yields to automation and process improvement. These are directional estimates, not a financial forecast.
        </Text>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { flex: 2 }]}>Workflow</Text>
            <Text style={[styles.tableHeaderCell, { flex: 1, textAlign: 'right' }]}>Est. annual hours</Text>
            <Text style={[styles.tableHeaderCell, { flex: 1, textAlign: 'right' }]}>Est. annual cost</Text>
            <Text style={[styles.tableHeaderCell, { flex: 1.5, textAlign: 'right' }]}>Target saving range</Text>
          </View>
          {businessCase.perArea.map((area, i) => {
            const pctRange = getRecoveryPercentageRange(area.archetypeId)
            return (
              <View key={area.archetypeId} style={styles.tableRow}>
                <View style={{ flex: 2 }}>
                  <Text style={styles.tableCell}>{report.workflows[i]?.name}</Text>
                  <Text style={{ fontSize: 7, color: steel }}>Target time savings: {pctRange.low}{'\u2013'}{pctRange.high}%</Text>
                </View>
                <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>{area.annualHours.toLocaleString('en-GB')}</Text>
                <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>{formatCurrency(area.annualCost)}</Text>
                <Text style={[styles.tableCell, { flex: 1.5, textAlign: 'right' }]}>{formatRecovery(area.recoveryRange)}</Text>
              </View>
            )
          })}
          <View style={styles.tableTotalRow}>
            <Text style={[styles.tableCell, { flex: 2, fontFamily: 'Helvetica-Bold' }]}>Combined target saving range</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right', fontFamily: 'Helvetica-Bold' }]}>{businessCase.totalAnnualHours.toLocaleString('en-GB')}</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right', fontFamily: 'Helvetica-Bold' }]}>{formatCurrency(businessCase.totalAnnualCost)}</Text>
            <Text style={[styles.tableCell, { flex: 1.5, textAlign: 'right', fontFamily: 'Helvetica-Bold' }]}>{formatRecovery(businessCase.conservativeRecovery)}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={[styles.twoCol, { marginBottom: 10 }]}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              {businessCase.weeklyHoursRecovered.low === businessCase.weeklyHoursRecovered.high
                ? `${businessCase.weeklyHoursRecovered.low}`
                : `${businessCase.weeklyHoursRecovered.low} \u2013 ${businessCase.weeklyHoursRecovered.high}`}
            </Text>
            <Text style={styles.statLabel}>Est. weekly hours recovered</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: '#fdf0ed' }]}>
            <Text style={styles.statValue}>{formatRecovery(businessCase.conservativeRecovery)}</Text>
            <Text style={styles.statLabel}>Combined target saving range</Text>
          </View>
        </View>

        {/* Methodology note */}
        <Text style={styles.disclaimer}>
          Target saving ranges are estimated based on Leomayn's methodology and industry benchmarks for comparable workflow types. These are directional estimates based on the sizing data you provided. A full Diagnose engagement would validate these figures with access to your team and data.
        </Text>

        {/* Full workings */}
        <Text style={[styles.disclaimer, { marginTop: 6 }]}>
          How we calculated this: Base salary estimate x 1.25 employer uplift = fully loaded cost. People involved x weekly hours x 45 working weeks = annual hours. Annual hours x hourly rate = annual cost. Target time savings range applied per workflow type. Sum across three workflows = combined target saving range.
        </Text>

        {/* Success factors */}
        <Text style={[styles.sectionTitle, { fontSize: 13, marginTop: 14, marginBottom: 4 }]}>What supports AI-powered change</Text>
        <Text style={[styles.paragraph, { fontSize: 8, color: steel, marginBottom: 10 }]}>
          These factors consistently determine whether AI-assisted workflows deliver sustained value:
        </Text>

        <View style={{ flexDirection: 'row' as const, gap: 8, marginBottom: 8 }}>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Governance</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>Clear ownership of each workflow, with defined decision rights</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Change management</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>A structured approach to transitioning teams from current to future ways of working</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' as const, gap: 8, marginBottom: 8 }}>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Effective leadership</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>Visible sponsorship from senior leaders who model the new behaviours</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Communication</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>Regular, honest updates on what is changing, why, and what it means for individuals</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' as const, gap: 8, marginBottom: 6 }}>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Access to training</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>Practical, role-specific training on the new tools and workflows</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: pearl, borderRadius: 4, padding: 10, borderLeftWidth: 2, borderLeftColor: coral }}>
            <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: coralText, marginBottom: 3 }}>Time to upskill</Text>
            <Text style={{ fontSize: 8, color: slate, lineHeight: 1.4 }}>Protected time for teams to learn, experiment, and build confidence</Text>
          </View>
        </View>

        <Text style={[styles.disclaimer, { marginTop: 4 }]}>
          These factors develop through the engagement, not before it. Our Diagnose phase assesses your current position on each and helps you build them into an implementation plan.
        </Text>

        <PdfFooter />
      </Page>

      {/* ── Readiness + next steps + CTA ── */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Text style={styles.logo}>LEOMAYN</Text>
          <Text style={styles.dateText}>{dateStr}</Text>
        </View>

        {/* Maturity assessment */}
        {report.maturityAssessment && (
          <View style={{ marginBottom: 14 }}>
            <Text style={styles.sectionTitle}>Your maturity profile</Text>
            <View style={styles.twoCol}>
              <View style={styles.col}>
                <Text style={styles.colLabel}>Strengths</Text>
                {report.maturityAssessment.strengths.map((s, i) => (
                  <Text key={i} style={styles.listItem}>{'\u2022'} {s}</Text>
                ))}
              </View>
              <View style={styles.col}>
                <Text style={styles.colLabel}>Areas for development</Text>
                {report.maturityAssessment.development.map((d, i) => (
                  <Text key={i} style={styles.listItem}>{'\u2022'} {d}</Text>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Quick wins */}
        {report.quickWins && report.quickWins.length > 0 && (
          <View style={{ marginBottom: 14 }}>
            <Text style={[styles.sectionTitle, { marginTop: 4 }]}>Quick wins</Text>
            <Text style={{ fontSize: 9, color: slate, marginBottom: 10 }}>Things you can start this week to build early momentum and validate assumptions.</Text>
            {report.quickWins.map((win, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 8, marginBottom: 5 }}>
                <View style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: '#e8ebed',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ fontSize: 7, fontFamily: 'Helvetica-Bold', color: slate }}>{i + 1}</Text>
                </View>
                <Text style={[styles.paragraph, { flex: 1, fontSize: 9 }]}>{win}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Readiness */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>{companyName}{'\u2019'}s readiness for AI change</Text>
        <View style={[styles.twoCol, { marginBottom: 14 }]}>
          <View style={styles.col}>
            <Text style={styles.colLabel}>Strengths</Text>
            {report.readiness.strengths.map((s, i) => (
              <Text key={i} style={styles.listItem}>{'\u2022'} {s}</Text>
            ))}
          </View>
          <View style={styles.col}>
            <Text style={styles.colLabel}>Gaps to address</Text>
            {report.readiness.gaps.map((g, i) => (
              <Text key={i} style={styles.listItem}>{'\u2022'} {g}</Text>
            ))}
          </View>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 4 }]}>What to do next</Text>
        <Text style={{ fontSize: 9, color: steel, marginBottom: 6 }}>Structured steps to move from diagnostic to implementation.</Text>
        {report.nextSteps.map((step, i) => (
          <View key={i} style={{ flexDirection: 'row', gap: 8, marginBottom: 6 }}>
            <View style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: '#e8ebed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: slate }}>{i + 1}</Text>
            </View>
            <Text style={[styles.paragraph, { flex: 1, fontSize: 9 }]}>{step}</Text>
          </View>
        ))}

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Want to go deeper?</Text>
          <Text style={styles.ctaText}>
            This planner gives you a starting point. Our Diagnose engagement goes further: with access to your team, your data, and your systems, we produce a validated roadmap with workflow blueprints, business case, and implementation sequencing.
          </Text>
          <Text style={styles.ctaLink}>Book a discovery call: calendly.com/tom-leomayn/30min</Text>
          <Text style={[styles.ctaLink, { marginTop: 3 }]}>Email: hello@leomayn.com</Text>
        </View>

        <PdfFooter />
      </Page>
    </Document>
  )
}
