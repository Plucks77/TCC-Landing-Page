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
                <h3>Santiago José Franco Lopes</h3>
                <p>
                  Coordenador de TI com experiência de gestão de projetos de TI, Coordenação e
                  suporte para ambiente ERP SAP, Responsável pela Segurança da Informação,
                  Otimização dos recursos para redução de custos operacionais.
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
                  <h3>Alexya de Souza</h3>
                  <p>
                    Responsável pelo Marketing do projeto Vale Tour. Apaixonada pelo setor
                    responsável por captar novos usuários e manter a satisfação dos clientes.
                  </p>
                </div>
              </div>

              <div className={styles.equipe_container_card}>
                <img src="/fotos/Joyce.png" alt="" />
                <div className={styles.equipe_card_text}>
                  <h3>Joyce Ríbeiro de Almeida Martins</h3>
                  <p>
                    Responsável pelo setor financeiro do aplicativo. Fascinada por buscar novas
                    estratégias de vendas e redução de custos.
                  </p>
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
