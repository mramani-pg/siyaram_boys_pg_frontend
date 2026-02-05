import axios from "axios";

const api = axios.create({
  baseURL: "https://siyaram-boys-pg-backend.vercel.app/api" || "https://siyaram-boys-pg-backend-f6u33p4kd-mayurs-projects-e24a35c2.vercel.app/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
