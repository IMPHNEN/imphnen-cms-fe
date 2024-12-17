import axios, { AxiosRequestConfig } from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    withCredentials: true,
    Authorization: `Bearer token`,
  },
};

export const api = axios.create(apiConfig);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
