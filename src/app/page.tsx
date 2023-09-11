import styles from './page.module.css'
import { Experience, Hero, Skills, Stars, AboutMe } from '@/component'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <AboutMe />
          <Skills />
          <Experience />
        </div>
      </main>
      <Stars />
    </>
  )
}
