import styles from '@/page.module.css'
import { AboutMeData } from '@/data/linkedin'

interface AboutMeProps {
  data: AboutMeData
}

export function AboutMe({ data }: { data: AboutMeData }) {
  return (
    <section className={styles['about-section']}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>About Me</h2>
        <p className={styles.intro}>
          {data.intro}
        </p>
        <p className={styles.about}>
          {data.summary}
        </p>
      </div>
    </section>
  )
}