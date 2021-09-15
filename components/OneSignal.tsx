import Head from "next/head";

const OneSignal = () => {
  const scriptSrc = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";

  return (
    <Head>
      <script
        src={scriptSrc}
        type="text/javascript"
        charSet="UTF-8"
        key="onesignal-sdk"
        async
      />
    </Head>
  );
};

export default OneSignal;
