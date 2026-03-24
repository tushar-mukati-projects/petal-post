import axios from "axios";

const api = axios.create({
  baseURL: typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_SITE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
