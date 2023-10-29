import axios from "axios";

const CURRENT_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const clientAxios = axios.create({
  baseURL: CURRENT_API_URL
});

