import { useState } from "react";
import { TUserRegister, TUserStatus } from "../types/user";
import { createUser } from "../apis/user";
import { useNavigate } from "react-router";

const useRegister = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<TUserStatus>("idle");
  const [statusRegister, setStatusRegister] = useState("");
  const [userRegister, setUserRegister] = useState<TUserRegister>({
    userName: "",
    email: "",
    password: "",
  });

  // functions
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const response = await createUser(userRegister);
    if (response.data.status === 200) {
      setStatus("success");
      navigate("/login");
    } else {
      setStatus("error");
      setStatusRegister(`${JSON.stringify(response.message)}`);
    }
  };

  return {
    data: {
      userRegister,
      status,
      statusRegister,
    },
    functions: {
      register,
      handleInputChange,
    },
  };
};

export default useRegister;
