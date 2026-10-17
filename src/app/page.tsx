import styles from '@/page.module.css'
import { Hero } from '@/component'
import { AboutMe } from '@/component'
import { Skills } from '@/component'
import { Experience } from '@/component'
import { Stars } from '@/component'
import { heroData, aboutMeData, skillsData } from '@/data/linkedin'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero data={heroData} />
      <AboutMe data={aboutMeData} />
      <Skills data={skillsData} />
      <Experience data={aboutMeData} />
      <Stars />
    </main>
  )
}