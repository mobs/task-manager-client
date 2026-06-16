import { STORAGE_KEYS } from "./constants";

export function getToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

export function setToken(token: string) {
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);
}

export function removeToken() {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
}

export function isAuthenticated() {
  return !!getToken();
}