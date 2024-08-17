export type TUser = {
  id: number;
  email: string;
  userName: string;
  avatar: string;
  shortBio: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserLogin = {
  email: string;
  password: string;
};

export type TUserStatus = "idle" | "loading" | "error" | "success";

export type TLoginStatus = {
  status: number | null;
  message: string | "";
  data: {
    accessToken: string;
  };
};

export type TUserRegister = {
  userName: string;
  email: string;
  password: string;
};
