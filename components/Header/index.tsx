import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/sobre">
        <a className={styles.link}>Sobre</a>
      </Link>
      <Link href="/equipe">
        <a className={styles.link}>Equipe</a>
      </Link>
    </div>
  );
}
