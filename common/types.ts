declare global {
  interface Window {
    OneSignal?: any;
  }
}

export type UserSignupInfo = Pick<User, "email">;

export type UserOnboardInfo = Pick<User, "id" | "name">;

export interface User {
  email: String;
  id: string;
  name: string;
}
