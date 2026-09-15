'use client'

import { useEffect, useRef, useState } from 'react'

interface TaglineRevealProps {
  words: string[]
  className?: string
}

export default function TaglineReveal({ words, className = '' }: TaglineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeWords, setActiveWords] = useState<number[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const wordElements = container.querySelectorAll('.tagline-word')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(wordElements).indexOf(entry.target)
            if (index !== -1) {
              setActiveWords((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index]
                }
                return prev
              })
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -20% 0px' }
    )

    wordElements.forEach((el) => observer.observe(el))

    return () => {
      wordElements.forEach((el) => observer.unobserve(el))
    }
  }, [words])

  return (
    <div ref={containerRef} className={`text-balance ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`tagline-word inline-block ${activeWords.includes(index) ? 'active' : ''}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {word}{' '}
        </span>
      ))}
    </div>
  )
}
