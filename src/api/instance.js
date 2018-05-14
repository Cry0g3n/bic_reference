import axios from "axios";

axios.defaults.headers.post["Accept"] = "*/*";
const baseURL = "http://localhost:4000/";

export const jsonInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});
