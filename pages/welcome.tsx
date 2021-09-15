import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

const Welcome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wubba Lubba Dub-Dub!</title>
        <meta
          name="description"
          content="The same stuff, just event based bruh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Wubba Lubba Dub-Dub!</h1>
        <p className={styles.description}>Now you&apos;re done!</p>
      </main>
    </div>
  );
};

export default Welcome;
