import axios from "axios";
const ROOT_API = "http://localhost:3333";
const api = axios.create({
  baseURL: ROOT_API,
});
export default api;
