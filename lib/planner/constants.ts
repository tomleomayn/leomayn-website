// ============================================
// Workflow Archetypes
// ============================================

export interface SignalEntry {
  area: string
  symptom: string
  weight: number
}

export interface ArchetypeDefinition {
  id: string
  name: string
  description: string
  painSignals: string[]
  prerequisites: string[]
  goalAlignment: {
    costs: number
    capacity: number
    quality: number
    speed: number
    capability: number
  }
  signalMatrix: SignalEntry[]
  foundationProfile: {
    knowledgeDependency: 'Low' | 'Medium' | 'High'
    dataDependency: 'Low' | 'Medium' | 'High'
  }
  recoveryRate: number
  feasibilityRequirements: {
    minAiAdoption: number
    minTechLevel: number
  }
  // Legacy — kept for reference, not used in v2 scoring
  painMapping: string[]
}

export const ARCHETYPES: ArchetypeDefinition[] = [
  {
    id: 'client-onboarding',
    name: 'Client onboarding and intake',
    description:
      'The end-to-end process of setting up a new client: collecting information, provisioning systems, briefing the team, establishing communication rhythms.',
    painSignals: [
      'Manual data entry across systems',
      'Inconsistent setup quality',
      'Slow time-to-first-value',
      'Knowledge gaps between sales and delivery',
    ],
    prerequisites: [
      'Documented current onboarding steps (even roughly)',
      'Access to systems involved',
      'One process owner who can validate the redesign',
    ],
    goalAlignment: { costs: 3, capacity: 4, quality: 4, speed: 5, capability: 2 },
    signalMatrix: [
      { area: 'onboarding', symptom: 'work-about-work', weight: 8 },
      { area: 'onboarding', symptom: 'handoff-friction', weight: 10 },
      { area: 'onboarding', symptom: 'tool-limitation', weight: 6 },
      { area: 'onboarding', symptom: 'inconsistency', weight: 9 },
      { area: 'proposals', symptom: 'scope-creep', weight: 7 },
      { area: 'communications', symptom: 'scope-creep', weight: 6 },
    ],
    foundationProfile: { knowledgeDependency: 'Medium', dataDependency: 'Medium' },
    recoveryRate: 0.5,
    painMapping: ['onboarding'],
    feasibilityRequirements: { minAiAdoption: 0, minTechLevel: 1 },
  },
  {
    id: 'meeting-intelligence',
    name: 'Meeting intelligence and CRM capture',
    description:
      'Automating the capture, storage, and distribution of meeting outcomes (notes, actions, decisions, follow-ups) and routing them to the right systems.',
    painSignals: [
      'Meeting notes live in someone\'s notebook',
      'Actions get lost',
      'CRM is empty because updating it is manual',
      'Context doesn\'t carry forward between meetings',
    ],
    prerequisites: [
      'CRM or client database in place',
      'Willingness to standardise meeting follow-up process',
    ],
    goalAlignment: { costs: 2, capacity: 4, quality: 3, speed: 3, capability: 4 },
    signalMatrix: [
      { area: 'onboarding', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'proposals', symptom: 'handoff-friction', weight: 6 },
      { area: 'proposals', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'project-delivery', symptom: 'scope-creep', weight: 4 },
      { area: 'project-delivery', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'communications', symptom: 'work-about-work', weight: 5 },
      { area: 'communications', symptom: 'handoff-friction', weight: 8 },
      { area: 'communications', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'communications', symptom: 'tool-limitation', weight: 4 },
      { area: 'knowledge', symptom: 'work-about-work', weight: 6 },
      { area: 'knowledge', symptom: 'rework', weight: 5 },
      { area: 'knowledge', symptom: 'handoff-friction', weight: 7 },
      { area: 'knowledge', symptom: 'decision-bottleneck', weight: 7 },
      { area: 'knowledge', symptom: 'tool-limitation', weight: 4 },
      { area: 'knowledge', symptom: 'inconsistency', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Low', dataDependency: 'Medium' },
    recoveryRate: 0.25,
    painMapping: ['meetings'],
    feasibilityRequirements: { minAiAdoption: 1, minTechLevel: 1 },
  },
  {
    id: 'proposal-scoping',
    name: 'Proposal and scoping',
    description:
      'The process from receiving a brief or enquiry through to producing a scoped, priced proposal, including research, pricing, document generation, and internal review.',
    painSignals: [
      'Proposals take too long',
      'Pricing is inconsistent',
      'Senior people bottleneck the process',
      'Reuse of previous work is ad-hoc',
    ],
    prerequisites: [
      'Some form of pricing framework (even rough)',
      'Access to past proposals for pattern extraction',
    ],
    goalAlignment: { costs: 3, capacity: 5, quality: 3, speed: 4, capability: 3 },
    signalMatrix: [
      { area: 'onboarding', symptom: 'scope-creep', weight: 5 },
      { area: 'onboarding', symptom: 'decision-bottleneck', weight: 5 },
      { area: 'proposals', symptom: 'work-about-work', weight: 8 },
      { area: 'proposals', symptom: 'rework', weight: 4 },
      { area: 'proposals', symptom: 'scope-creep', weight: 4 },
      { area: 'proposals', symptom: 'decision-bottleneck', weight: 10 },
      { area: 'proposals', symptom: 'tool-limitation', weight: 4 },
      { area: 'proposals', symptom: 'inconsistency', weight: 4 },
      { area: 'project-delivery', symptom: 'scope-creep', weight: 4 },
      { area: 'reporting', symptom: 'scope-creep', weight: 4 },
      { area: 'invoicing', symptom: 'scope-creep', weight: 5 },
      { area: 'research', symptom: 'scope-creep', weight: 5 },
      { area: 'research', symptom: 'decision-bottleneck', weight: 5 },
      { area: 'proposals', symptom: 'production-heavy', weight: 8 },
      { area: 'documents', symptom: 'rework', weight: 5 },
      { area: 'documents', symptom: 'production-heavy', weight: 5 },
    ],
    foundationProfile: { knowledgeDependency: 'Medium', dataDependency: 'Medium' },
    recoveryRate: 0.5,
    painMapping: ['proposals'],
    feasibilityRequirements: { minAiAdoption: 1, minTechLevel: 0 },
  },
  {
    id: 'time-invoicing',
    name: 'Time tracking and invoicing',
    description:
      'Capturing time spent on client work, routing through approval workflows, generating invoices, reconciling against budgets, and handling exceptions.',
    painSignals: [
      'Timesheets submitted late or inaccurately',
      'Invoice disputes',
      'Manual reconciliation',
      'Revenue leakage from unbilled time',
    ],
    prerequisites: [
      'Existing time tracking system (even spreadsheets)',
      'Access to billing/finance data',
    ],
    goalAlignment: { costs: 5, capacity: 3, quality: 3, speed: 2, capability: 1 },
    signalMatrix: [
      { area: 'invoicing', symptom: 'work-about-work', weight: 10 },
      { area: 'invoicing', symptom: 'rework', weight: 4 },
      { area: 'invoicing', symptom: 'handoff-friction', weight: 5 },
      { area: 'invoicing', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'invoicing', symptom: 'tool-limitation', weight: 8 },
      { area: 'invoicing', symptom: 'inconsistency', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Low', dataDependency: 'High' },
    recoveryRate: 0.75,
    painMapping: ['invoicing'],
    feasibilityRequirements: { minAiAdoption: 0, minTechLevel: 1 },
  },
  {
    id: 'management-reporting',
    name: 'Management reporting',
    description:
      'Producing regular reports (utilisation, revenue, pipeline, project status, team performance) by pulling data from multiple systems and formatting for leadership.',
    painSignals: [
      'Reports take hours/days to compile',
      'Data pulled manually from multiple sources',
      'Reports are often late or inaccurate',
      'Leadership doesn\'t trust the numbers',
    ],
    prerequisites: [
      'Identifiable data sources',
      'Clear reporting requirements',
      'Someone who currently owns the process',
    ],
    goalAlignment: { costs: 4, capacity: 4, quality: 4, speed: 3, capability: 3 },
    signalMatrix: [
      { area: 'project-delivery', symptom: 'work-about-work', weight: 7 },
      { area: 'project-delivery', symptom: 'decision-bottleneck', weight: 6 },
      { area: 'project-delivery', symptom: 'tool-limitation', weight: 4 },
      { area: 'reporting', symptom: 'work-about-work', weight: 10 },
      { area: 'reporting', symptom: 'rework', weight: 4 },
      { area: 'reporting', symptom: 'handoff-friction', weight: 4 },
      { area: 'reporting', symptom: 'scope-creep', weight: 5 },
      { area: 'reporting', symptom: 'decision-bottleneck', weight: 8 },
      { area: 'reporting', symptom: 'tool-limitation', weight: 9 },
      { area: 'reporting', symptom: 'inconsistency', weight: 6 },
      { area: 'invoicing', symptom: 'work-about-work', weight: 5 },
      { area: 'invoicing', symptom: 'decision-bottleneck', weight: 5 },
      { area: 'invoicing', symptom: 'tool-limitation', weight: 4 },
      { area: 'communications', symptom: 'decision-bottleneck', weight: 5 },
      { area: 'research', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'reporting', symptom: 'production-heavy', weight: 8 },
      { area: 'documents', symptom: 'production-heavy', weight: 5 },
      { area: 'documents', symptom: 'work-about-work', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Low', dataDependency: 'High' },
    recoveryRate: 0.75,
    painMapping: ['reporting'],
    feasibilityRequirements: { minAiAdoption: 0, minTechLevel: 1 },
  },
  {
    id: 'project-delivery',
    name: 'Project delivery coordination',
    description:
      'Managing the flow of client work through the organisation: task assignment, status tracking, handoffs between teams, quality gates, deadline management.',
    painSignals: [
      'Work falls through cracks between teams',
      'Status updates are manual and unreliable',
      'Quality varies by who\'s involved',
      'Scope creep happens silently',
    ],
    prerequisites: [
      'Some form of project tracking (even informal)',
      'Identifiable project stages and handoff points',
    ],
    goalAlignment: { costs: 3, capacity: 3, quality: 5, speed: 4, capability: 2 },
    signalMatrix: [
      { area: 'project-delivery', symptom: 'rework', weight: 4 },
      { area: 'project-delivery', symptom: 'handoff-friction', weight: 10 },
      { area: 'project-delivery', symptom: 'scope-creep', weight: 9 },
      { area: 'project-delivery', symptom: 'tool-limitation', weight: 7 },
      { area: 'project-delivery', symptom: 'inconsistency', weight: 8 },
      { area: 'project-delivery', symptom: 'work-about-work', weight: 5 },
      { area: 'reporting', symptom: 'handoff-friction', weight: 5 },
      { area: 'invoicing', symptom: 'rework', weight: 5 },
      { area: 'invoicing', symptom: 'handoff-friction', weight: 5 },
      { area: 'invoicing', symptom: 'scope-creep', weight: 4 },
      { area: 'research', symptom: 'scope-creep', weight: 4 },
      { area: 'knowledge', symptom: 'scope-creep', weight: 5 },
    ],
    foundationProfile: { knowledgeDependency: 'Medium', dataDependency: 'Medium' },
    recoveryRate: 0.5,
    painMapping: ['project-delivery'],
    feasibilityRequirements: { minAiAdoption: 0, minTechLevel: 1 },
  },
  {
    id: 'document-processing',
    name: 'Document processing and review',
    description:
      'Reviewing, extracting information from, generating, or processing documents: contracts, agreements, reports, compliance documents, templates.',
    painSignals: [
      'Manual document review is slow and error-prone',
      'Templates are inconsistent',
      'Extraction of key terms is manual',
      'Version control is chaotic',
    ],
    prerequisites: [
      'Sample documents for pattern identification',
      'Clear quality standards',
      'Identified document types to prioritise',
    ],
    goalAlignment: { costs: 4, capacity: 4, quality: 4, speed: 4, capability: 3 },
    signalMatrix: [
      // onboarding — secondary (removed work-about-work, client-onboarding owns it)
      { area: 'onboarding', symptom: 'rework', weight: 5 },
      { area: 'onboarding', symptom: 'inconsistency', weight: 4 },
      // proposals — reduced (proposal-scoping is primary)
      { area: 'proposals', symptom: 'rework', weight: 4 },
      { area: 'proposals', symptom: 'tool-limitation', weight: 5 },
      { area: 'proposals', symptom: 'inconsistency', weight: 4 },
      // project delivery — secondary
      { area: 'project-delivery', symptom: 'rework', weight: 5 },
      { area: 'project-delivery', symptom: 'inconsistency', weight: 4 },
      // reporting — secondary
      { area: 'reporting', symptom: 'work-about-work', weight: 4 },
      { area: 'reporting', symptom: 'inconsistency', weight: 4 },
      // invoicing — secondary
      { area: 'invoicing', symptom: 'inconsistency', weight: 4 },
      // communications — secondary
      { area: 'communications', symptom: 'rework', weight: 4 },
      // research — secondary (removed handoff-friction, research-analysis owns it)
      { area: 'research', symptom: 'rework', weight: 4 },
      { area: 'research', symptom: 'inconsistency', weight: 4 },
      // knowledge — reduced (was over-weighted)
      { area: 'knowledge', symptom: 'work-about-work', weight: 4 },
      { area: 'knowledge', symptom: 'rework', weight: 4 },
      { area: 'knowledge', symptom: 'tool-limitation', weight: 4 },
      { area: 'knowledge', symptom: 'inconsistency', weight: 4 },
      // documents area — direct match for this archetype (strongest signals here)
      { area: 'documents', symptom: 'work-about-work', weight: 8 },
      { area: 'documents', symptom: 'rework', weight: 9 },
      { area: 'documents', symptom: 'handoff-friction', weight: 6 },
      { area: 'documents', symptom: 'tool-limitation', weight: 8 },
      { area: 'documents', symptom: 'inconsistency', weight: 9 },
      { area: 'documents', symptom: 'production-heavy', weight: 10 },
      // production-heavy symptom — cross-cutting (moderate, not primary)
      { area: 'proposals', symptom: 'production-heavy', weight: 5 },
      { area: 'reporting', symptom: 'production-heavy', weight: 5 },
      { area: 'research', symptom: 'production-heavy', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Medium', dataDependency: 'Low' },
    recoveryRate: 0.75,
    painMapping: ['documents'],
    feasibilityRequirements: { minAiAdoption: 1, minTechLevel: 0 },
  },
  {
    id: 'client-communications',
    name: 'Client communications and follow-ups',
    description:
      'Managing ongoing client communication: scheduled updates, check-ins, satisfaction tracking, renewal reminders, and proactive outreach.',
    painSignals: [
      'Follow-ups are inconsistent',
      'Client communication depends on individual memory',
      'No systematic check-in process',
      'Clients fall silent without notice',
    ],
    prerequisites: [
      'Client list with contact details',
      'Defined communication touchpoints',
      'CRM or contact management system',
    ],
    goalAlignment: { costs: 2, capacity: 3, quality: 4, speed: 3, capability: 3 },
    signalMatrix: [
      { area: 'communications', symptom: 'work-about-work', weight: 6 },
      { area: 'communications', symptom: 'rework', weight: 9 },
      { area: 'communications', symptom: 'handoff-friction', weight: 5 },
      { area: 'communications', symptom: 'scope-creep', weight: 4 },
      { area: 'communications', symptom: 'tool-limitation', weight: 5 },
      { area: 'communications', symptom: 'inconsistency', weight: 7 },
      { area: 'proposals', symptom: 'handoff-friction', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Low', dataDependency: 'Medium' },
    recoveryRate: 0.25,
    painMapping: ['communications'],
    feasibilityRequirements: { minAiAdoption: 1, minTechLevel: 1 },
  },
  {
    id: 'research-analysis',
    name: 'Research and analysis for client work',
    description:
      'Conducting bespoke research, competitive analysis, market intelligence, due diligence, or background research as part of client delivery.',
    painSignals: [
      'Research is time-consuming and often duplicated',
      'Findings aren\'t captured for reuse',
      'Junior staff spend disproportionate time on research',
      'Quality varies',
    ],
    prerequisites: [
      'Identifiable research patterns/types',
      'Quality standards for research output',
      'Access to information sources',
    ],
    goalAlignment: { costs: 2, capacity: 5, quality: 3, speed: 4, capability: 5 },
    signalMatrix: [
      { area: 'research', symptom: 'work-about-work', weight: 9 },
      { area: 'research', symptom: 'rework', weight: 7 },
      { area: 'research', symptom: 'tool-limitation', weight: 8 },
      { area: 'research', symptom: 'inconsistency', weight: 7 },
      { area: 'reporting', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'reporting', symptom: 'tool-limitation', weight: 4 },
      { area: 'knowledge', symptom: 'decision-bottleneck', weight: 4 },
      { area: 'research', symptom: 'production-heavy', weight: 7 },
      { area: 'documents', symptom: 'work-about-work', weight: 4 },
    ],
    foundationProfile: { knowledgeDependency: 'Medium', dataDependency: 'Low' },
    recoveryRate: 0.5,
    painMapping: ['research'],
    feasibilityRequirements: { minAiAdoption: 1, minTechLevel: 0 },
  },
]

// ============================================
// Question Options
// ============================================

export const ROLE_OPTIONS = [
  { value: 'founder-ceo', label: 'Founder or CEO' },
  { value: 'c-suite', label: 'C-suite or board member' },
  { value: 'director-vp', label: 'Director or VP' },
  { value: 'head-of', label: 'Head of department or practice' },
  { value: 'manager', label: 'Manager' },
  { value: 'other', label: 'Other' },
] as const

export const TURNOVER_OPTIONS = [
  { value: 'under-1m', label: 'Under \u00a31M' },
  { value: '1m-5m', label: '\u00a31M \u2013 \u00a35M' },
  { value: '5m-10m', label: '\u00a35M \u2013 \u00a310M' },
  { value: '10m-20m', label: '\u00a310M \u2013 \u00a320M' },
  { value: '20m-50m', label: '\u00a320M \u2013 \u00a350M' },
  { value: '50m-plus', label: '\u00a350M+' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
] as const

export const FIRM_TYPE_OPTIONS = [
  { value: 'accounting', label: 'Accounting, tax, or audit' },
  { value: 'agency', label: 'Agency (creative, digital, PR, media)' },
  { value: 'technical', label: 'Architecture, engineering, or technical services' },
  { value: 'internal-services', label: 'Internal business services team' },
  { value: 'law', label: 'Law or legal services' },
  { value: 'consulting', label: 'Management or specialist consulting' },
  { value: 'other', label: 'Other services organisation' },
] as const

export const TEAM_SIZE_OPTIONS = [
  { value: '10-30', label: '10\u201330' },
  { value: '31-75', label: '31\u201375' },
  { value: '76-150', label: '76\u2013150' },
  { value: '151-300', label: '151\u2013300' },
  { value: '301-500', label: '301\u2013500' },
  { value: '500-plus', label: '500+' },
] as const

export const STRATEGIC_FOCUS_OPTIONS = [
  {
    value: 'costs',
    label: 'Reduce operating costs',
  },
  {
    value: 'capacity',
    label: 'Increase team capacity without hiring',
  },
  {
    value: 'quality',
    label: 'Improve delivery quality and consistency',
  },
  {
    value: 'speed',
    label: 'Deliver faster for clients',
  },
  {
    value: 'capability',
    label: 'Build new capabilities with AI',
  },
] as const

export const AREA_OPTIONS = [
  { value: 'documents', label: 'Preparing documents, presentations, and internal materials' },
  { value: 'proposals', label: 'Producing proposals, scoping, and pricing' },
  { value: 'onboarding', label: 'Getting new clients set up and onboarded' },
  { value: 'research', label: 'Research and analysis for client work' },
  { value: 'communications', label: 'Client communications and follow-ups' },
  { value: 'project-delivery', label: 'Managing active project delivery' },
  { value: 'invoicing', label: 'Processing invoices, timesheets, and approvals' },
  { value: 'reporting', label: 'Generating reports and management information' },
  { value: 'knowledge', label: 'Capturing and sharing knowledge across the team' },
] as const

export const SYMPTOM_OPTIONS = [
  { value: 'work-about-work', label: 'Too much time on coordination, updates, and admin around the real work' },
  { value: 'rework', label: 'Work gets done more than once: revisions, corrections, miscommunication' },
  { value: 'handoff-friction', label: 'Things fall through the cracks when work moves between people or teams' },
  { value: 'scope-creep', label: 'Scope expands beyond what was planned or agreed' },
  { value: 'decision-bottleneck', label: 'Progress stalls waiting for decisions, approvals, or information from senior people' },
  { value: 'tool-limitation', label: 'Working around existing system limitations' },
  { value: 'inconsistency', label: 'No standard way of doing it. Quality depends on who picks it up' },
  { value: 'production-heavy', label: 'Too much time spent producing and formatting, not enough time thinking' },
] as const

// Legacy alias — kept for backward compatibility in scoring shim
export const PAIN_POINT_OPTIONS = AREA_OPTIONS

export const AI_ADOPTION_OPTIONS = [
  { value: 'embedded', label: 'AI is part of how we work across the organisation', level: 3 },
  { value: 'partial', label: 'We use AI tools in specific processes or departments', level: 2 },
  { value: 'individual', label: 'Individual team members use AI tools for their own work', level: 1 },
  { value: 'not-started', label: 'We have not started using AI in any structured way', level: 0 },
] as const

export const TECH_ENVIRONMENT_OPTIONS = [
  {
    value: 'fully-integrated',
    label: 'Fully integrated line-of-business platform with workflows and reporting built in',
    level: 3,
  },
  {
    value: 'integrated',
    label: 'Some systems talk to each other with some data flowing automatically',
    level: 2,
  },
  {
    value: 'disconnected',
    label: 'Dedicated systems for each function (CRM, project management, finance) but not connected',
    level: 1,
  },
  {
    value: 'basic',
    label: 'Mostly email, documents, and spreadsheets',
    level: 0,
  },
] as const

export const PROCESS_KNOWLEDGE_OPTIONS = [
  { value: 'well-documented', label: 'Well documented. SOPs, templates, and playbooks exist for most processes', level: 3 },
  { value: 'partially-documented', label: 'Partially documented. Some processes are written down, others depend on who you ask', level: 2 },
  { value: 'mostly-undocumented', label: 'Mostly undocumented. Knowledge lives in people\'s heads', level: 1 },
  { value: 'dont-know', label: 'Don\'t know', level: 1 },
] as const

export const DATA_FOUNDATIONS_OPTIONS = [
  { value: 'strong', label: 'Strong. Data is consistent, accessible, and trusted for decisions', level: 3 },
  { value: 'mixed', label: 'Mixed. Some systems are reliable, others need manual cleanup', level: 2 },
  { value: 'weak', label: 'Weak. Data quality is a known problem, lots of manual workarounds', level: 1 },
  { value: 'dont-know', label: 'Don\'t know', level: 1 },
] as const

export const BILLABLE_SPLIT_OPTIONS = [
  { value: 'mostly-billable', label: 'Mostly billable (80%+)' },
  { value: 'mixed', label: 'Mixed (50\u201380% billable)' },
  { value: 'mostly-operational', label: 'Mostly operational (under 50% billable)' },
  { value: 'not-applicable', label: 'Not applicable (non-billable model)' },
] as const

export const PEOPLE_INVOLVED_OPTIONS = [
  { value: '1-3', label: '1\u20133', midpoint: 2 },
  { value: '4-8', label: '4\u20138', midpoint: 6 },
  { value: '9-15', label: '9\u201315', midpoint: 12 },
  { value: '16-30', label: '16\u201330', midpoint: 23 },
  { value: '31-75', label: '31\u201375', midpoint: 50 },
  { value: '76-150', label: '76\u2013150', midpoint: 110 },
  { value: '150-plus', label: '150+', midpoint: 200 },
] as const

export const WEEKLY_HOURS_OPTIONS = [
  { value: 'under-5', label: 'Under 5 hours', midpoint: 3 },
  { value: '5-15', label: '5\u201315 hours', midpoint: 10 },
  { value: '15-30', label: '15\u201330 hours', midpoint: 22.5 },
  { value: '30-60', label: '30\u201360 hours', midpoint: 45 },
  { value: '60-plus', label: '60+ hours', midpoint: 80 },
] as const

export const COST_PER_PERSON_OPTIONS = [
  { value: 'under-30k', label: 'Under \u00a330K', midpoint: 25000 },
  { value: '30k-50k', label: '\u00a330K\u2013\u00a350K', midpoint: 40000 },
  { value: '50k-75k', label: '\u00a350K\u2013\u00a375K', midpoint: 62500 },
  { value: '75k-100k', label: '\u00a375K\u2013\u00a3100K', midpoint: 87500 },
  { value: '100k-150k', label: '\u00a3100K\u2013\u00a3150K', midpoint: 125000 },
  { value: 'over-150k', label: 'Over \u00a3150K', midpoint: 175000 },
] as const

// ============================================
// Educational Context (per question)
// ============================================

export const QUESTION_CONTEXT: Record<string, string> = {
  firmType:
    'Different types of organisation have different workflow patterns. An agency\'s delivery chain looks different from a law practice\'s matter lifecycle.',
  teamSize:
    'Your organisation\'s size helps us calibrate which workflows will have the biggest impact. The pain points shift as teams grow.',
  strategicFocus:
    'Your top priority carries more weight in our scoring. Picking two helps us distinguish between workflows that serve your primary goal and those that support your secondary one.',
  painAreas:
    'Pick the two or three areas where your workforce loses the most time to manual, repetitive, or frustrating work. We will then ask what the problem looks like in each area.',
  painSymptoms:
    'Different symptoms point to different solutions. Knowing whether the issue is rework, coordination overhead, or something else helps us recommend the right starting point.',
  aiAdoption:
    'Most organisations we work with are in the first two categories. That is normal. The important question is not whether you are using AI, but whether you are using it with a clear purpose.',
  techEnvironment:
    'Your current tech environment affects what is feasible as a starting point. Some workflows need system integration; others can start with what you have today.',
  processKnowledge:
    'Process documentation is a foundation for automation. It is hard to improve a process that nobody has written down.',
  dataFoundations:
    'Data quality affects which workflows are achievable as a starting point. Some improvements need reliable data; others can work with what you have.',
  billableSplit:
    'This matters because improving workflows for client-facing staff has a direct revenue impact. Their recovered time can be reinvested in client work.',
  costPerPerson:
    'Annual base salary before pension, NI, and benefits. We apply a standard employer cost uplift in the calculation.',
  freeText:
    'The more context you give us, the more specific your report will be. Even a sentence or two makes a difference.',
}

// ============================================
// Scoring constants
// ============================================

// v2 scoring constants (from scoring spec Section 5)
export const GOAL_PRIMARY_WEIGHT = 2
export const GOAL_SECONDARY_WEIGHT = 1
export const FEASIBILITY_BONUS = 2
export const FEASIBILITY_PENALTY = -3
export const FOUNDATION_PENALTY_WEIGHT = 2
export const WORKING_WEEKS_PER_YEAR = 45
export const HOURS_PER_WEEK = 37.5
export const EMPLOYER_COST_UPLIFT = 0.25
export const RECOVERY_SPREAD = 0.075
export const RECOVERY_FLOOR = 0.10
export const RECOVERY_CEILING = 0.85


// ============================================
// Condition label reference (colour → label per dimension)
// Green always = favourable. Labels derived from colour so they never mismatch.
// ============================================

export const CONDITION_LABELS = {
  impact: { green: 'High impact', amber: 'Medium impact', red: 'Low impact' },
  complexity: { green: 'Low complexity', amber: 'Medium complexity', red: 'High complexity' },
  learning: { green: 'High learning value', amber: 'Moderate learning value', red: 'Low learning value' },
} as const

// ============================================
// Firm type report labels (human-readable for report copy)
// ============================================

export const FIRM_TYPE_REPORT_LABELS: Record<string, string> = {
  accounting: 'accounting and advisory practice',
  agency: 'agency',
  technical: 'technical services practice',
  'internal-services': 'B2B service organisation',
  law: 'legal practice',
  consulting: 'consulting firm',
  other: 'service organisation',
}

// ============================================
// Tech environment expanded descriptions (for prompt)
// ============================================

export const TECH_ENVIRONMENT_DESCRIPTIONS: Record<string, string> = {
  'fully-integrated': 'a fully integrated line-of-business platform with workflows and reporting built in',
  integrated: 'multiple systems with some data flowing automatically between them',
  disconnected: 'dedicated systems for each function that do not talk to each other',
  basic: 'primarily email, documents, and spreadsheets',
}

// ============================================
// Recovery percentage range helper
// ============================================

export function getRecoveryPercentageRange(archetypeId: string): { low: number; high: number } {
  const rate = ARCHETYPES.find(a => a.id === archetypeId)?.recoveryRate ?? 0.5
  return {
    low: Math.round(Math.max(RECOVERY_FLOOR, rate - RECOVERY_SPREAD) * 100),
    high: Math.round(Math.min(RECOVERY_CEILING, rate + RECOVERY_SPREAD) * 100),
  }
}

// ============================================
// Wizard step labels
// ============================================

export const WIZARD_STEPS = [
  { label: 'About you', shortLabel: 'You' },
  { label: 'Your firm', shortLabel: 'Firm' },
  { label: 'Size it up', shortLabel: 'Sizing' },
  { label: 'Your report', shortLabel: 'Report' },
] as const
