import axios from "axios";

export const baseURL = import.meta.env.VITE_APP_APIURL as string;

const http = axios.create({
  baseURL,
});

export default http;
