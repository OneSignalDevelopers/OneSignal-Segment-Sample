import crypto from "crypto";
import { OneSignalSecretKey } from "../constants";

export function createSecureHash(s: string) {
  const hmac = crypto.createHmac("sha256", OneSignalSecretKey);
  hmac.update(s);
  return hmac.digest("hex");
}
