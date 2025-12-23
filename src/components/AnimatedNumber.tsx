'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedNumberProps {
  value: string // e.g., "50+", "300%", "10K+"
  duration?: number // Animation duration in milliseconds
  className?: string
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  className = '',
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    // Handle different formats: "50+", "300%", "10K+", "24/7", "98%"
    if (val.includes('/')) {
      // For "24/7", return as is
      return { number: 0, suffix: val, isSpecial: true }
    }

    const match = val.match(/([\d.]+)([KMB%+]*)/)
    if (!match) return { number: 0, suffix: val, isSpecial: true }

    let number = parseFloat(match[1])
    const suffix = match[2] || ''

    // Handle K (thousands), M (millions), B (billions)
    if (suffix.includes('K')) {
      number = number * 1000
    } else if (suffix.includes('M')) {
      number = number * 1000000
    } else if (suffix.includes('B')) {
      number = number * 1000000000
    }

    return { number, suffix, isSpecial: false }
  }

  const { number, suffix, isSpecial } = parseValue(value)

  useEffect(() => {
    if (!isInView || isSpecial) {
      if (isSpecial) {
        setDisplayValue(value)
      }
      return
    }

    const startTime = Date.now()
    const startValue = 0
    const endValue = number

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const currentValue = startValue + (endValue - startValue) * easeOut

      // Format the number based on original format
      let formattedValue = ''
      if (suffix.includes('K')) {
        formattedValue = (currentValue / 1000).toFixed(0) + 'K'
      } else if (suffix.includes('M')) {
        formattedValue = (currentValue / 1000000).toFixed(1) + 'M'
      } else if (suffix.includes('B')) {
        formattedValue = (currentValue / 1000000000).toFixed(1) + 'B'
      } else if (suffix.includes('%')) {
        formattedValue = Math.round(currentValue).toString() + '%'
      } else {
        formattedValue = Math.round(currentValue).toString()
      }

      // Add suffix back
      if (suffix && !suffix.includes('K') && !suffix.includes('M') && !suffix.includes('B') && !suffix.includes('%')) {
        formattedValue += suffix
      }

      setDisplayValue(formattedValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value matches exactly
        setDisplayValue(value)
      }
    }

    animate()
  }, [isInView, number, suffix, value, duration, isSpecial])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}

