'use client'

import { useCallback, useMemo } from 'react'
import './index.css'

export function Star() {
  const random = useMemo(() => Math.floor(Math.random() * 10), [])
  const size = {
    height: random,
    width: random
  }
  const handleGetAxis = useCallback(() => {
    const axisY = Math.floor(Math.random() * screen.height)
    const axisX = Math.floor(Math.random() * screen.width)

    return {
      bottom: `${axisY}px`,
      left: `${axisX}px`
    }
  }, [])

  return (
    <div
      className="star"
      style={{
        ...size,
        ...handleGetAxis(),
        animationDelay: `${Math.floor(Math.random() * 10)}s`
      }}
    ></div>
  )
}
