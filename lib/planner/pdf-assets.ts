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

// Logo — PNG for footer/header (small), SVG for cover (crisp at any size)
export const LOGO_BASE64 = loadBase64('public/logo/logo-horizontal-1200x300.png')
export const LOGO_DATA_URI = `data:image/png;base64,${LOGO_BASE64}`

function loadSvgDataUri(pathFromRoot: string): string {
  const fullPath = join(process.cwd(), pathFromRoot)
  const svg = readFileSync(fullPath, 'utf-8')
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export const LOGO_SVG_DATA_URI = loadSvgDataUri('public/logo/logo-horizontal.svg')
