import styles from './page.module.css'
import { Experience, Hero, Skills, Stars } from '@/component'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <Skills />
          <Experience />
        </div>
      </main>
      <Stars />
    </>
  )
}
