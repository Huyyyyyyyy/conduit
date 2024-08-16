import { useState } from "react";
import { TLoginStatus, TUser, TUserLogin, TUserStatus } from "../types/user";
import { getUser, login } from "../apis/user";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export function useUser() {
  const [status, setStatus] = useState<TUserStatus>("idle");
  const [user, setUser] = useState<TUser | null>(null);
  const [userLogin, setUserLogin] = useState<TUserLogin>({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState<TLoginStatus>({
    status: null,
    message: "",
    data: { accessToken: "" },
  });
  const navigate = useNavigate();

  const get = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userLogin) {
      setStatus("loading");
      const response: TLoginStatus = await login(userLogin);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        Cookies.set("accessToken", accessToken, { secure: true, expires: 1 });
        const user = await getUser(accessToken);
        setUser(user);
        setStatus("success");
        navigate("/home");
        setLoginStatus(response);
      } else {
        setLoginStatus(response);
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
    data: {
      user,
      userLogin,
      status,
      loginStatus,
    },
    functions: {
      setUser,
      handleLoginChange,
      get,
    },
  };
}
