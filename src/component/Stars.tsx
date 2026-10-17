import styles from '@/page.module.css'

export function Stars() {
  return (
    <section className={styles.stars}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>Stars</h2>
        <p>0 stars</p>
      </div>
    </section>
  )
}