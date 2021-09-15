import { useEffect } from "react";
import { OneSignalAppId } from "../../common/constants";

const useOneSignal = () =>
  useEffect(() => {
    const onesignal = window.OneSignal;
    if (!onesignal) {
      console.warn("OneSignal SDK not loaded.");
      return;
    }

    onesignal.push(function () {
      onesignal.init({
        appId: OneSignalAppId,
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

export default useOneSignal;
