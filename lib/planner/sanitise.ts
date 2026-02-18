import { generatedReportSchema, type GeneratedReport } from './types'

/**
 * Sanitise free-text input: strip control characters,
 * truncate, and wrap in delimiters for the AI prompt.
 */
export function sanitiseFreeText(input: string): string {
  if (!input) return ''
  // Strip control characters except newlines
  const cleaned = input.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, '')
  // Truncate to 200 chars
  const truncated = cleaned.slice(0, 200)
  return truncated
}

/**
 * Wrap user-provided text in delimiters that instruct the AI
 * to treat it as descriptive context only.
 */
export function wrapUserContext(label: string, text: string): string {
  if (!text) return ''
  return `<USER_CONTEXT label="${label}">${sanitiseFreeText(text)}</USER_CONTEXT>`
}

/**
 * Validate AI output against the expected report schema.
 * Returns the validated report or throws with details.
 */
export function validateReportSchema(output: unknown): GeneratedReport {
  return generatedReportSchema.parse(output)
}

/**
 * Escape HTML entities to prevent XSS in email templates.
 */
export function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char])
}
