import React from 'react'
import {
  Experience,
  Footer,
  Hero,
  Main,
  Skills,
  Stars,
  Toolbar
} from '@/component'
import './page.css'

export default function Home() {
  return (
    <>
      {/* TODO */}
      {/* <Toolbar /> */}
      <Main>
        <Hero />
        <div className="home">
          <Skills />
          <Experience />
        </div>
      </Main>
      {/* TODO */}
      {/* <Footer /> */}
      <Stars />
    </>
  )
}
