import axios from "axios";

export const API_PlayerList = async () => {
  const BASE_PATH = "https://abhay-cricket.herokuapp.com/api/users";
  const objRequest = {};
  let data = await axios.post(BASE_PATH, objRequest);
  return data;
};
