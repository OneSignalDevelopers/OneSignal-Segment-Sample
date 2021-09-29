declare global {
  interface Window {
    OneSignal?: any;
  }
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export type UserSignupInfo = Pick<User, "email">;

export type UserOnboardInfo = Pick<User, "id" | "name">;
