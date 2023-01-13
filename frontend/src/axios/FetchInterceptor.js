import axios from "axios";
import { Constants } from "@utils/Constants";

const service = axios.create({
  baseURL: Constants.BASE_URL,
  timeout: 60000,
  withCredentials: true,
});

export default service;
