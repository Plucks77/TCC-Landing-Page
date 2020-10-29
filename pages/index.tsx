import Head from 'next/head'
import Header from "../components/Header"
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Header/>
        <div>
          <img className={styles.image_background} src="/background_index.png" alt="background"/>
        </div>
      </>
  )
}
