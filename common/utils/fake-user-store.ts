import { User, UserSignupInfo } from "../types";
import generateId from "./generate-uid";

const users = new Map<string, Partial<User>>();

export function exists(email: string) {
  return users.has(email);
}

export function insert(email: string, user: Partial<User> = {}) {
  const id = generateId();
  users.set(email, user);
  return id;
}

export function update(email: string, user: Partial<User>) {
  users.set(email, { ...user, email });
}
