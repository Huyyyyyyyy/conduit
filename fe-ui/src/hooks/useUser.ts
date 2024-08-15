import { useState } from "react";
import { TUser, TUserLogin, TUserStatus } from "../types/user";
import { getUser } from "../apis/user";

export function useUser() {
  const [status, setStatus] = useState<TUserStatus>("idle");
  const [user, setUser] = useState<TUser | null>(null);
  const [userLogin, setUserLogin] = useState<TUserLogin>({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState("");

  const get = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userLogin) {
      try {
        setStatus("loading");
        const response = await getUser(userLogin);
        setUser(response.data);
        setLoginStatus(response.data.message);
        setStatus("success");
      } catch (error) {
        console.log(error)
        setStatus("error");
      }
    }
  };

  const handleLoginChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    user,
    setUser,
    userLogin,
    handleLoginChange,
    get,
    status,
    loginStatus,
  };
}
