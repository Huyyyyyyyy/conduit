import { useState } from "react";
import { TCreateUser, TUser, TUserLogin, TUserStatus } from "../types/user";
import { createUser, getUser } from "../apis/user";

export function useUser() {
  const [status, setStatus] = useState<TUserStatus>("idle");
  const [user, setUser] = useState<TUser | null>(null);
  const [login, setLogin] = useState(false);

  const get = async (userLoginType: TUserLogin) => {
    try {
      setStatus("loading");
      const user = await getUser(userLoginType);
      setUser(user);
      setStatus("success");
      setLogin(true);
    } catch (error) {
      setStatus("error");
    }
  };

  const create = async (userCreateType: TCreateUser) => {
    try {
      setStatus("loading");
      const user = await createUser(userCreateType);
      setUser(user);
      setStatus("success");
      setLogin(true);
    } catch (error) {
      setStatus("error");
    }
  };

  return { user, setUser, get, create, status, isLogin: login };
}
