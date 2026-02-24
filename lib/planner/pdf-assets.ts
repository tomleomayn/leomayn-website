import { readFileSync } from 'fs'
import { join } from 'path'

function loadBase64(pathFromRoot: string): string {
  const fullPath = join(process.cwd(), pathFromRoot)
  return readFileSync(fullPath).toString('base64')
}

// Fonts — loaded once at module import, cached for container lifetime
export const MANROPE_400_BASE64 = loadBase64('lib/planner/fonts/manrope-400.woff2')
export const MANROPE_600_BASE64 = loadBase64('lib/planner/fonts/manrope-600.woff2')
export const MANROPE_700_BASE64 = loadBase64('lib/planner/fonts/manrope-700.woff2')
export const DM_SERIF_400_BASE64 = loadBase64('lib/planner/fonts/dm-serif-display-400.woff2')

// Logo — 14KB PNG, base64-encoded
export const LOGO_BASE64 = loadBase64('public/logo/logo-horizontal-1200x300.png')
export const LOGO_DATA_URI = `data:image/png;base64,${LOGO_BASE64}`
