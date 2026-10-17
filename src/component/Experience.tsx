import styles from '@/page.module.css'
import { AboutMeData } from '@/data/linkedin'

interface ExperienceProps {
  data: AboutMeData
}

export function Experience({ data }: { data: AboutMeData }) {
  return (
    <section className={styles['experience-section']}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>Experience</h2>
        
        <div className={styles['experience-list']}>
          <div className={styles['experience-item']}>
            <h3>Frontend Developer</h3>
            <p>GFT Costa Rica - Industry assets management web app</p>
            <p>Developed web applications managing industry assets for a leading IT company</p>
          </div>
          
          <div className={styles['experience-item']}>
            <h3>Mobile Development</h3>
            <p>iOS and Android applications</p>
            <p>Developed cross-platform mobile applications using React Native and native technologies</p>
          </div>
          
          <div className={styles['experience-item']}>
            <h3>Mentorship</h3>
            <p>Mentoring junior and mid-level front-end developers</p>
            <p>Helping improve coding skills and best practices</p>
          </div>
        </div>
      </div>
    </section>
  )
}