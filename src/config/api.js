import axios from "axios";

export const apiConnection = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
