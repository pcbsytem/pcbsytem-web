import styles from '@/page.module.css'
import { SkillsData } from '@/data/linkedin'

interface SkillsProps {
  data: SkillsData
}

export function Skills({ data }: { data: SkillsData }) {
  return (
    <section className={styles['skills-section']}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>Skills</h2>
        <ul className={styles['skills-list']}>
          {data.technical.map((skill, index) => (
            <li key={index} className={styles['skill-item']}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}