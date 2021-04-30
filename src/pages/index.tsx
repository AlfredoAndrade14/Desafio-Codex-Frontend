import { CardUser } from '../components/CardUser'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <CardUser />
    </div>
  )
}
