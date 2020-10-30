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
              “Trabalhar em equipe não significa que todos tenham que fazer tudo
              mas sim ter a consciência do todo e do papel de cada um neste
              todo.”
            </h1>
            <h2 className={styles.subtitle}>- Daniel Godri Junior</h2>
          </div>
        </div>
        <div className={styles.equipe}>
          <h1>
            Nossa equipe é formada pela união de um grupo do curso de
            Administração com Sistemas de Informação, de forma a contemplar
            tanto a parte de negócios quanto o desenvolvimento da solução.
            <br />
            Abaixo conheceremos os membros e suas responsabilidades no projeto:
          </h1>
          <div className={styles.equipe_container}>
            <div className={styles.equipe_card}>
              <h2 className={styles.equipe_card_title}>Coordenador</h2>
              <div className={styles.equipe_card_body}>
                <img src="/fotos/Santiago.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Santiago</h3>
                  <h4>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos dolorem cumque ab harum? A veritatis nam, quos molestias
                    suscipit voluptatem labore vitae, quis, illo exercitationem
                    doloribus provident est harum? Iusto.
                  </h4>
                </div>
              </div>
            </div>

            <div className={styles.equipe_card}>
              <h2 className={styles.equipe_card_title}>
                Time de Administração
              </h2>
              <div className={styles.equipe_card_body}>
                <img src="/fotos/Alexya.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Alexa</h3>
                  <h4>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos dolorem cumque ab harum? A veritatis nam, quos molestias
                    suscipit voluptatem labore vitae, quis, illo exercitationem
                    doloribus provident est harum? Iusto.
                  </h4>
                </div>
              </div>

              <div className={styles.equipe_card_body}>
                <img src="/fotos/Joyce.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Joyce</h3>
                  <h4>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos dolorem cumque ab harum? A veritatis nam, quos molestias
                    suscipit voluptatem labore vitae, quis, illo exercitationem
                    doloribus provident est harum? Iusto.
                  </h4>
                </div>
              </div>
            </div>

            <div className={styles.equipe_card}>
              <h2 className={styles.equipe_card_title}>
                Time de Sistemas de Informação
              </h2>
              <div className={styles.equipe_card_body}>
                <img src="/fotos/Vinicius.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Vinicius Rabelo da Silva</h3>
                  <h4>
                    Composição da documentação, processos de escrita e ideias
                    criativas.
                  </h4>
                </div>
              </div>

              <div className={styles.equipe_card_body}>
                <img src="/fotos/Pedro.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Pedro Lucas de Paulo Leoti</h3>
                  <h4>
                    Responsável pelo desenvolvimento dos aplicativos mobile e
                    web. <br /> Entusiasta em tecnologia, desenvolvimento de
                    aplicações e solução de problemas.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
