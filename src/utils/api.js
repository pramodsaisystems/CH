import axios from "axios";
import { REACT_APP_API_URL } from "./urls";

//For CMS API
let CMSApi = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    // "Access-Control-Allow-Headers": "Content-Type",
  },
});

const get = (url) => {
  return CMSApi.get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const post = (url, data) => {
  return CMSApi.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { get, post };
