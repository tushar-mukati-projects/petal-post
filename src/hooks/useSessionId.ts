"use client";

import { useSyncExternalStore } from "react";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("petalpost_session");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("petalpost_session", id);
  }
  return id;
}

function subscribe() {
  // Session ID doesn't change after init, no-op
  return () => {};
}

export function useSessionId() {
  return useSyncExternalStore(subscribe, getSessionId, () => "");
}
