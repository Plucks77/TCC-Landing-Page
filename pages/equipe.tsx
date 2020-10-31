import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Equipe.module.css";

export default function Equipe() {
  return (
    <>
      <Head>
        <title>Equipe</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img
            className={styles.image_background}
            src="/backgrounds/background_equipe4.png"
            alt=""
          />
          <div className={styles.title_container}>
            <h1 className={styles.title}>
              “Trabalhar em equipe não significa que todos tenham que fazer tudo mas sim ter a
              consciência do todo e do papel de cada um neste todo.”
            </h1>
            <h2 className={styles.subtitle}>- Daniel Godri Junior</h2>
          </div>
        </div>
        <div className={styles.equipe}>
          <h1>
            Nossa equipe é formada pela união de um grupo do curso de Administração com Sistemas de
            Informação, de forma a contemplar tanto a parte de negócios quanto o desenvolvimento da
            solução.
            <br />
            Abaixo conheceremos os membros e suas responsabilidades no projeto:
          </h1>

          <div className={styles.equipe_container}>
            <h2>Coordenador</h2>

            <div className={styles.equipe_container_card}>
              <img src="/fotos/Santiago.png" alt="" />
              <div className={styles.equipe_card_text}>
                <h3>Santiago</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit
                  molestias iusto cumque ratione odit nesciunt est possimus ex nisi. In quo
                  distinctio mollitia molestias libero sed aliquam quos labore!
                </p>
              </div>
            </div>
          </div>

          <div className={styles.equipe_container}>
            <h2>Time de Administração</h2>
            <div className={styles.equipe_cards}>
              <div className={styles.equipe_container_card}>
                <img src="/fotos/Alexya.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Alexya</h3>
                  <p>Lorem</p>
                </div>
              </div>

              <div className={styles.equipe_container_card}>
                <img src="/fotos/Joyce.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Joyce</h3>
                  <p>Lorem ipsum dolor sit amet c</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.equipe_container}>
            <h2>Time de Sistemas de Informação</h2>
            <div className={styles.equipe_cards}>
              <div className={styles.equipe_container_card}>
                <img src="/fotos/Vinicius.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Vinícius Rabelo da Silva</h3>
                  <p>
                    Composição da documentação, prototipação do MVP, processos de escrita e ideias
                    criativas.
                  </p>
                </div>
              </div>

              <div className={styles.equipe_container_card}>
                <img src="/fotos/Pedro.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Pedro Lucas de Paulo Leoti</h3>
                  <p>
                    Responsável pelo desenvolvimento dos aplicativos mobile e web. <br /> Entusiasta
                    em tecnologia, desenvolvimento de aplicações e solução de problemas técnicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
