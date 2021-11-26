import axios from "axios";

export const api = axios.create({
  baseURL: "https://graph.instagram.com/me/media?access_token=",
});
