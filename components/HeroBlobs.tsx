'use client'

export default function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Blob 1 - Coral (top right) */}
      <div
        className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full opacity-55"
        style={{
          backgroundColor: 'var(--color-coral-dark)',
          filter: 'blur(130px)',
          animation: 'blobWander1 24s ease-in-out infinite',
        }}
      />
      {/* Blob 2 - Rock (bottom left) */}
      <div
        className="absolute -bottom-32 -left-48 w-[440px] h-[440px] rounded-full opacity-50"
        style={{
          backgroundColor: 'var(--color-rock-dark)',
          filter: 'blur(110px)',
          animation: 'blobWander2 28s ease-in-out infinite',
        }}
      />
      {/* Blob 3 - Coral (center right) */}
      <div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full opacity-45"
        style={{
          backgroundColor: 'var(--color-coral)',
          filter: 'blur(120px)',
          animation: 'blobWander3 22s ease-in-out infinite',
        }}
      />
    </div>
  )
}
