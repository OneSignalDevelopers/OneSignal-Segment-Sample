import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import OneSignal from "../components/OneSignal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const buttonClicked = async () => {
    const { OneSignal } = window;
    const tags = await OneSignal.getTags();
    const { clicks } = tags;
    const updatedClicks = clicks ? parseInt(clicks, 10) + 1 : 1;
    const tagSent = await OneSignal.sendTags({
      ...tags,
      clicks: updatedClicks,
    });

    console.log("Tags from server", tags);
    console.log("Tags sent to server", tagSent);
  };

  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo of event-based notifications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OneSignal />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Event-based Notifications</h1>

          <p className={styles.description}>Click the button three times...</p>

          <button type="button" onClick={buttonClicked}>
            Click me!
          </button>
        </main>
      </div>
    </>
  );
};

export default Home;
