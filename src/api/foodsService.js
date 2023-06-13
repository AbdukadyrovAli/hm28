import { axiosInstance } from "../config/axiosInstance";

export const addFoods = (data) => {

  return axiosInstance.post("/foods", data);
};
