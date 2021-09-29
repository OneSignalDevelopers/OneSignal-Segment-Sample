import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { UserSignupInfo } from "../common/types";
import OneSignal from "../components/OneSignal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const signup = async (data: UserSignupInfo) => {
    try {
      const response = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      const { userId } = json;

      await window.OneSignal.setEmail(data.email);
      await window.OneSignal.setExternalUserId(userId);
      router.push(`/onboard/${userId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Wubba Lubba Dub-Dub!</title>
        <meta
          name="description"
          content="The same stuff, just event based bruh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OneSignal />
      <div className={styles.container}>
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
