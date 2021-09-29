import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { UserOnboardInfo } from "../../common/types";
import styles from "../../styles/Home.module.css";

const Welcome: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const id = typeof uid === "string" ? parseInt(uid, 10) : -1;

  const completeOnboarding = async (data: UserOnboardInfo) => {
    try {
      await fetch("http://localhost:3000/api/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      router.push("/welcome");
    } catch (err) {
      console.error(err);
    }
  };

  if (id <= 0) {
    return <div>Oops</div>;
  }

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
        <p className={styles.description}>Let&#39;s get onboarded!</p>
        <Formik initialValues={{ name: "", id }} onSubmit={completeOnboarding}>
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <button type="submit">Take me to the thing!</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

export default Welcome;
