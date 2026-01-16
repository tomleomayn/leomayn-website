'use client'

export default function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Blob 1 - Coral (top right) */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-40 blur-3xl"
        style={{
          backgroundColor: 'var(--color-coral)',
          animation: 'blobFloat 20s ease-in-out infinite',
        }}
      />
      {/* Blob 2 - Rock (left side) */}
      <div
        className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{
          backgroundColor: 'var(--color-rock)',
          animation: 'blobFloat 25s ease-in-out infinite reverse',
          animationDelay: '-5s',
        }}
      />
      {/* Blob 3 - Coral Light (bottom right) */}
      <div
        className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full opacity-35 blur-3xl"
        style={{
          backgroundColor: 'var(--color-coral-light)',
          animation: 'blobFloat 18s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
    </div>
  )
}
