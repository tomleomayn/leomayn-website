interface ArticleBylineProps {
  /** ISO date string, e.g. '2026-02-11' */
  published: string
  /** ISO date string. Omitted or equal to published hides the "Updated" segment. */
  updated?: string
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticleByline({ published, updated }: ArticleBylineProps) {
  const showUpdated = updated && updated !== published

  return (
    <div className="mt-6 pl-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-sans text-slate/60">
      <span className="font-semibold text-slate/80">Tom Jones</span>
      <span aria-hidden="true" className="text-slate/30">&middot;</span>
      <span>Published {formatDate(published)}</span>
      {showUpdated && (
        <>
          <span aria-hidden="true" className="text-slate/30">&middot;</span>
          <span>Updated {formatDate(updated)}</span>
        </>
      )}
    </div>
  )
}
