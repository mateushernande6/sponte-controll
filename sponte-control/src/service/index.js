import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sponte.herokuapp.com/",
});

export default api;
