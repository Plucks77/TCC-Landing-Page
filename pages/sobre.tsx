import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.image_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Nossa região é linda!</h1>
          </div>
          <img
            className={styles.image_background}
            src="/backgrounds/background_sobre.png"
            alt=""
          />
        </div>

        <div className={styles.explanation}>
          <h3>
            E por isso precisamos incentivar as pessoas a conhecer nossas
            belezas naturais e uma forma de fazer isso é através do turismo.
            Inicialmente, nosso aplicativo contará com duas cidades:
          </h3>
          <div className={styles.city}>
            <img src="/cidades/Resende.png" alt="" />
            <span>
              Localizada às margens da Rodovia Presidente Dutra (BR-116), que
              liga o Rio de Janeiro a São Paulo, Resende é uma das mais belas
              cidades turísticas da Região das Agulhas Negras, no sul do Estado
              do Rio. Portanto, se você procura paz, tranquilidade, belos
              cenários com natureza exuberante e preservada com suas matas,
              rios, cachoeiras, ar puro, o canto dos pássaros e diversidade de
              fauna e flora, você encontrou o seu lugar.
            </span>
          </div>

          <div className={styles.city}>
            <img src="/cidades/Itatiaia.png" alt="" />
            <span>
              Em Itatiaia, o visitante encontra montanhas, com ótimos lugares
              para a prática de escalada e florestas úmidas com cachoeiras. Além
              do Parque Nacional de Itatiaia, Itatiaia conta ainda com outros
              destinos turísticos, como a Usina Hidrelétrica do Funil, a Colônia
              Finlandesa de Penedo e as vilas de Maromba e Maringá.
            </span>
          </div>
        </div>

        <div className={styles.pacote_container}>
          <h3>
            Nossa região tem muitos atrativos turísticos, porém nem todos são
            bem conhecidos e explorados Nosso objetivo com o projeto é divulgar
            nossa região e mostrar para os turistas novos locais que valem a
            pena conhecer, assim como aumentar o alcance do trabalho de
            profissionais da área. Faremos isso através dos nossos pacotes:
          </h3>
          <span>Pacotes:</span>
          <div className={styles.pacotes}>
            <div className={styles.pacote}>
              <img src="/pacotes/Pacote 1.png" alt="" />
            </div>
            <div className={styles.pacote}>
              <img src="/pacotes/Pacote 1.png" alt="" />
            </div>
            <div className={styles.pacote}>
              <img src="/pacotes/Pacote 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
