import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function generateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("petalpost_session");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("petalpost_session", id);
  }
  return id;
}
