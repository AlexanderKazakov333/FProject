import { instance } from "../API/API";

export const getFlats = async () => {
  const response = await instance.get("/main/flats/");
  return response
};
