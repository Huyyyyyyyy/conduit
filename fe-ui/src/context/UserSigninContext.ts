import { createContext } from "react";
import { TUser } from "../types/user";

export type UserSigninContextType = {
  user: TUser | null;
  isLogin: Boolean;
};

const UserSigninContext = createContext<UserSigninContextType>({
  user: null,
  isLogin: false,
});

export default UserSigninContext;
