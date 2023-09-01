import { ReactNode } from 'react'
import './index.css'

interface MainProps {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return <main className="main">{children}</main>
}
