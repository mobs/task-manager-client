import { STORAGE_KEYS } from "./constants";

const AUTH_EVENT = "auth-changed";

export function getToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

export function setToken(token: string) {
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);

  window.dispatchEvent(
    new Event(AUTH_EVENT)
  );
}

export function removeToken() {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);

  window.dispatchEvent(
    new Event(AUTH_EVENT)
  );
}

export function isAuthenticated() {
  return !!getToken();
}

export { AUTH_EVENT };