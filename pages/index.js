import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Golden Hour - Aira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <img src="/artist.jpg"></img>
        <h1>Golden Hour</h1>
        <h2>Aira</h2>
      </div>
    </div>
  );
}
