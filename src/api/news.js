import axiosInstance from "../utilis/axios";

export const getNews = async (url, params = {}) => {
  try {
    const res = await axiosInstance.get(url, { params });
    return res.data;
  } catch (err) {
    throw err;
  }
};
