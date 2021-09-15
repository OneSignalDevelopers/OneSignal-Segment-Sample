import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import { UserSignupInfo } from "../common/types";
import { createSecureHash } from "../common/utils/secure-hash";
import useOneSignal from "../components/hooks/useOneSignal";
import OneSignal from "../components/OneSignal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  useOneSignal();

  const signup = async (data: UserSignupInfo) => {
    const response = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    const { id } = json;
    const hash = createSecureHash(id);
    await window.OneSignal.setExternalUserId(id, hash);
    router.push(`/onboard/${id}`);
  };

  return (
    <>
      <OneSignal />
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
          <h1 className={styles.title}>Welcome to Wubba Lubba Dub-Dub!</h1>

          <p className={styles.description}>
            Get started by singing up for my app!
          </p>

          <Formik initialValues={{ email: "" }} onSubmit={signup}>
            <Form>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <button type="submit">Sign up!</button>
            </Form>
          </Formik>
        </main>
      </div>
    </>
  );
};

export default Home;
