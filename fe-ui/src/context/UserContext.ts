import { createContext } from "react";
import { TCreateUser, TUser, TUserLogin, TUserStatus } from "../types/user";

export type UserContextType = {
  user: TUser | null;
  isLogin: Boolean;
  get: (userLoginType: TUserLogin) => void;
  create: (userType: TCreateUser) => void;
  status: TUserStatus;
};

const UserContext = createContext<UserContextType>({
  user: null,
  isLogin: false,
  get: () => {},
  create: () => {},
  status: "idle",
});

export default UserContext;
