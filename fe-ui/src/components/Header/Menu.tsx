import { Button } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TUserLogin } from "../../types/user";
import UserContext from "../../context/UserContext";

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
  const { user, get, isLogin } = useContext(UserContext);

  return isLogin ? (
    <>
      <Link to={"/home"}>
        <Button {...styleButton}>Home</Button>
      </Link>
      <Button {...styleButton}>New Article</Button>
      <Button {...styleButton}>Setting</Button>
      <Button {...styleButton}>{user?.userName}</Button>
    </>
  ) : (
    <>
      <Link to={"/home"}>
        <Button {...styleButton}>Home</Button>
      </Link>
      <Link to={"/login"}>
        <Button {...styleButton} onClick={() => get(userLogin)}>
          Sign in
        </Button>
      </Link>
      <Button {...styleButton}>Sign up</Button>
    </>
  );
};

export default Menu;
