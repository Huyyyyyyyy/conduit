import axios from "axios";
import { TCreateUser, TUserLogin } from "../types/user";
import { BASE_URL } from "../const/const";

export const createUser = async (createUserInput: TCreateUser) => {
  const response = await axios.post(
    `${BASE_URL}/user/register`,
    createUserInput
  );

  return response.data;
};

export const getUser = async (userLoginInput: TUserLogin) => {
  const response = await axios.post(`${BASE_URL}/auth/sign-in`, userLoginInput);
  console.log(response.data);
  return response.data;
};
