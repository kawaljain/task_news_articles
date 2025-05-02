import axios from "axios";

const axiosInstance = axios.create({});

export const BASE_URL = process.env.REACT_APP_BASE_API_URL;

axiosInstance.interceptors.request.use(
  async function (config) {
    config.headers["Content-Type"] = "application/json";
    config.baseURL = BASE_URL;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
