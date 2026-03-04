/**
 * BlurText — adapted from ReactBits (reactbits.dev)
 * Upstream commit: 6352a8a
 *
 * Brand adaptations:
 * - Blur 6px (not 10), y-offset 20px (not 50), stagger delay 100ms
 * - hasMounted SSR guard — always renders wrapper with ref to avoid useInView null-ref bug
 * - Respects prefers-reduced-motion
 */
'use client'

import { useRef, useState, useEffect, ElementType } from 'react'
import { motion, useInView, Variant } from 'motion/react'

interface BlurTextProps {
  text: string
  as?: ElementType
  delay?: number
  className?: string
}

export default function BlurText({
  text,
  as: Tag = 'span',
  delay = 0,
  className = '',
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const words = text.split(' ')

  const hidden: Variant = { filter: 'blur(6px)', opacity: 0, y: 20 }
  const visible: Variant = { filter: 'none', opacity: 1, y: 0 }

  const prefersReducedMotion =
    hasMounted &&
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const shouldAnimate = hasMounted && !prefersReducedMotion

  // Always render Tag with ref so useInView can observe the element
  return (
    <Tag ref={ref} className={className}>
      {shouldAnimate
        ? words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={hidden}
              animate={isInView ? visible : hidden}
              transition={{
                duration: 0.4,
                delay: delay + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ display: 'inline-block', fontFamily: 'inherit' }}
            >
              {word}
              {i < words.length - 1 && '\u00A0'}
            </motion.span>
          ))
        : text}
    </Tag>
  )
}
