import { Button } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { useContext, useState } from "react";
import UserSigninContext from "../../../context/UserSigninContext";

const styleButton: CommonProps = {
  style: {
    color: "#222",
    textTransform: "capitalize",
    outline: "none",
  },
};

const Menu = () => {
  const { user, isLogin } = useContext(UserSigninContext);
  const [login, setLogin] = useState(isLogin);

  const handleLogin = () => {
    setLogin(login ? false : true);
  };

  return login ? (
    <>
      <Button {...styleButton}>Home</Button>
      <Button {...styleButton}>New Article</Button>
      <Button {...styleButton}>Setting</Button>
      <Button {...styleButton} onClick={handleLogin}>
        {user?.userName}
      </Button>
    </>
  ) : (
    <>
      <Button {...styleButton}>Home</Button>
      <Button {...styleButton} onClick={handleLogin}>
        Sign in
      </Button>
      <Button {...styleButton}>Sign up</Button>
    </>
  );
};

export default Menu;
