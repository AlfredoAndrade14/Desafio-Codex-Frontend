import { Form } from '../components/Form'
import { ImgWrapper } from '../components/ImgWrapper'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <ImgWrapper />
        <Form />
    </div>
  )
}
