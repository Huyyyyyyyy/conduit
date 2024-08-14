import { Button } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { useContext } from "react";
import UserSigninContext from "../../../context/UserContext";
import { TUserLogin } from "../../../types/user";

const styleButton: CommonProps = {
  style: {
    color: "#222",
    textTransform: "capitalize",
    outline: "none",
  },
};

const userLogin: TUserLogin = {
  email: "gia.huy@gmail.com",
  password: "h0397363542H@",
};

const Menu = () => {
  const { user, get, isLogin } = useContext(UserSigninContext);

  return isLogin ? (
    <>
      {console.log(user)}
      <Button {...styleButton}>Home</Button>
      <Button {...styleButton}>New Article</Button>
      <Button {...styleButton}>Setting</Button>
      <Button {...styleButton}>{user?.userName}</Button>
    </>
  ) : (
    <>
      <Button {...styleButton}>Home</Button>
      <Button {...styleButton} onClick={() => get(userLogin)}>
        Sign in
      </Button>
      <Button {...styleButton}>Sign up</Button>
    </>
  );
};

export default Menu;
