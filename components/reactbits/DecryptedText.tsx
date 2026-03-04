/**
 * DecryptedText — adapted from ReactBits (reactbits.dev)
 * Upstream commit: 6352a8a
 *
 * Brand adaptations:
 * - Uppercase Latin only character set
 * - Sequential reveal, fast (40ms per character)
 * - Uses rAF instead of setInterval for scramble loop
 * - Max 2 instances per page (enforced by convention, not code)
 * - Respects prefers-reduced-motion
 * - Always renders wrapper with ref to avoid useInView null-ref bug
 */
'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useInView } from 'motion/react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const INTERVAL_MS = 40

interface DecryptedTextProps {
  text: string
  className?: string
  animateOn?: 'view' | 'hover'
  speed?: number
}

export default function DecryptedText({
  text,
  className = '',
  animateOn = 'view',
  speed = INTERVAL_MS,
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [hasMounted, setHasMounted] = useState(false)
  const [displayText, setDisplayText] = useState(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const rafRef = useRef<number>(0)
  const lastTickRef = useRef<number>(0)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const runDecrypt = useCallback(() => {
    if (hasAnimated) return

    const original = text
    let revealedCount = 0

    const tick = (timestamp: number) => {
      if (!lastTickRef.current) lastTickRef.current = timestamp

      if (timestamp - lastTickRef.current >= speed) {
        lastTickRef.current = timestamp
        revealedCount++

        if (revealedCount > original.length) {
          setDisplayText(original)
          setHasAnimated(true)
          return
        }

        const revealed = original.slice(0, revealedCount)
        const scrambled = Array.from({ length: original.length - revealedCount }, () =>
          CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('')

        setDisplayText(revealed + scrambled)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    lastTickRef.current = 0
    rafRef.current = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafRef.current)
  }, [text, speed, hasAnimated])

  // Trigger on view
  useEffect(() => {
    if (!hasMounted || animateOn !== 'view' || !isInView || hasAnimated) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayText(text)
      setHasAnimated(true)
      return
    }

    // Start with scrambled text
    setDisplayText(
      Array.from({ length: text.length }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join('')
    )

    const cleanup = runDecrypt()
    return cleanup
  }, [hasMounted, isInView, animateOn, hasAnimated, text, runDecrypt])

  const handleMouseEnter = () => {
    if (animateOn !== 'hover' || hasAnimated) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    setDisplayText(
      Array.from({ length: text.length }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join('')
    )
    runDecrypt()
  }

  // Always render with ref so useInView can observe the element
  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={animateOn === 'hover' ? handleMouseEnter : undefined}
      aria-label={text}
      style={{ fontFamily: 'inherit' }}
    >
      <span aria-hidden="true" style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'inherit' }}>
        {displayText}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
