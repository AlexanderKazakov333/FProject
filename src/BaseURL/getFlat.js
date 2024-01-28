import { instance } from "../API/API";

export const getFlat = async (id) => {
  const response = await instance.get(`/main/flats/${id}`);
  return response
};