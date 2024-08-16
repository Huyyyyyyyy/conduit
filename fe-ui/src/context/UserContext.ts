import { createContext } from "react";
import {
  TLoginStatus,
  TUser,
  TUserLogin,
  TUserStatus,
} from "../types/user";

export type UserContextType = {
  data: {
    user: TUser | null;
    status: TUserStatus;
    loginStatus: TLoginStatus | null;
    userLogin: TUserLogin | null;
  };
  functions: {
    get: (e : React.FormEvent) => void;
    handleLoginChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
};

const UserContext = createContext<UserContextType>(undefined!);

export default UserContext;
