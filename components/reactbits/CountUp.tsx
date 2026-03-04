/**
 * CountUp — adapted from ReactBits (reactbits.dev)
 * Upstream commit: 6352a8a
 *
 * Brand adaptations:
 * - Default separator ","
 * - Reduced-motion shows final number immediately
 * - Uses motion/react useInView for scroll trigger
 * - Always renders wrapper with ref to avoid useInView null-ref bug
 */
'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useMotionValue, animate } from 'motion/react'

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  separator?: string
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

function formatNumber(value: number, decimals: number, separator: string): string {
  const fixed = value.toFixed(decimals)
  const [intPart, decPart] = fixed.split('.')
  const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  return decPart !== undefined ? `${withSeparator}.${decPart}` : withSeparator
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  separator = ',',
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [hasMounted, setHasMounted] = useState(false)
  const motionValue = useMotionValue(from)
  // Initialise to final value so SSR and pre-animation state show the target number
  const [displayValue, setDisplayValue] = useState(formatNumber(to, decimals, separator))

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted || !isInView) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayValue(formatNumber(to, decimals, separator))
      return
    }

    // Reset to start value before animating
    motionValue.set(from)
    setDisplayValue(formatNumber(from, decimals, separator))

    const controls = animate(motionValue, to, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        setDisplayValue(formatNumber(latest, decimals, separator))
      },
    })

    return () => controls.stop()
  }, [hasMounted, isInView, to, from, duration, decimals, separator, motionValue])

  // Always render with ref so useInView can observe the element
  return (
    <span ref={ref} className={className} style={{ fontFamily: 'inherit' }}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
