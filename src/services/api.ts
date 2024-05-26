//https://scrap-fake-api.onrender.com

import axios from "axios";

export const api = axios.create({
  baseURL: "https://scrap-fake-api.onrender.com",
  timeout: 8 * 1000,
});
