import { instance } from "../API/API";

export const baseURL = async () => {
  const response = await instance.get("/main/flats/");
  return response
};
