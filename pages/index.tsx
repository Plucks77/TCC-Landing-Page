import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <img
          className={styles.image_background}
          src="/background_index.png"
          alt="background"
        />
        <div className={styles.title_container}>
          <h1 className={styles.title}>A sua solução de turismo</h1>
          <h2 className={styles.subtitle}>Compre pacotes de turismo</h2>
          <h2 className={styles.subtitle}>Divulgue seu negócio</h2>
        </div>

        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="/ValeTourLogo.png"
            alt="background"
          />
        </div>

        <div className={styles.lojas}>
          <img className={styles.loja} src="/GooglePlay.png" alt="background" />
          <img className={styles.loja} src="/AppStore.png" alt="background" />
        </div>
      </div>
    </>
  );
}
