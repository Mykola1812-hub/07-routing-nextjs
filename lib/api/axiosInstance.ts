import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

export function getAuthHeaders() {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  return {
    Authorization: `Bearer ${token}`,
  };
}
