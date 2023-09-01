import React, { ReactNode } from 'react'
import './index.css'

interface ContentContainerProps {
  title: string
  children: ReactNode
}

export function ContentContainer({ title, children }: ContentContainerProps) {
  return (
    <section className="content-container">
      <h3>{title}</h3>
      {children}
    </section>
  )
}
