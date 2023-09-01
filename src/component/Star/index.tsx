'use client'

import { useCallback, useMemo } from 'react'
import './index.css'

interface StarProps {
  height: number
  width: number
}

export function Star({ height, width }: StarProps) {
  const random = useMemo(() => Math.floor(Math.random() * 10), [])
  const size = {
    height: random,
    width: random
  }
  const handleGetAxis = useCallback(() => {
    const axisY = Math.floor(Math.random() * height)
    const axisX = Math.floor(Math.random() * width)

    return {
      bottom: `${axisY}px`,
      left: `${axisX}px`
    }
  }, [height, width])

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
