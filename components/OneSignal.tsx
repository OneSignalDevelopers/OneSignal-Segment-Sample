import Script from "next/script";
import { OneSignalAppId } from "../common/constants";

const OneSignal = () => (
  <>
    <Script
      id="onesignal-sdk"
      src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
      onLoad={initOneSignal}
    />
  </>
);

const initOneSignal = () => {
  const onesignal = window.OneSignal;
  if (!onesignal) {
    console.warn("OneSignal SDK not loaded.");
    return;
  }

  onesignal.push(() => {
    onesignal.init({
      appId: OneSignalAppId,
      allowLocalhostAsSecureOrigin: true,
      safari_web_id: "web.onesignal.auto.424123c9-df63-4140-aac8-764c37d1fc19",
      notifyButton: {
        enable: true,
      },
    });
  });
};

export default OneSignal;
