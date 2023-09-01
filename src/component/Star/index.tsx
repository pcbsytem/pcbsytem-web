'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import './index.css'

export function Star() {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 })
  const random = useMemo(() => Math.floor(Math.random() * 10), [])
  const size = {
    height: random,
    width: random
  }
  const handleGetAxis = useCallback(() => {
    const axisY = Math.floor(Math.random() * windowSize.height)
    const axisX = Math.floor(Math.random() * windowSize.width)

    return {
      bottom: `${axisY}px`,
      left: `${axisX}px`
    }
  }, [])

  useEffect(() => {
    setWindowSize({ height: screen.height, width: screen.width })
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
