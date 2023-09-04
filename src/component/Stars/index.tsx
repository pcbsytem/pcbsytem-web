'use client'

import { useEffect, useState } from 'react'
import { Star } from '../Star'
import './index.css'

export function Stars() {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 })
  const starList = [...Array(100)].map(() => Math.floor(Math.random() * 100))

  useEffect(() => {
    setWindowSize({
      height: screen?.height || 1080,
      width: screen?.width || 1920
    })
  }, [])

  return (
    <div className="stars">
      {starList.map((_, index) => {
        return <Star key={index} {...windowSize} />
      })}
    </div>
  )
}
