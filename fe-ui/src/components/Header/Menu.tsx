import { Button } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const styleButton: CommonProps = {
  style: {
    color: "#222",
    textTransform: "capitalize",
    outline: "none",
  },
};

const Menu = () => {
  const {
    data: { user, loginStatus },
  } = useContext(UserContext);

  return loginStatus?.status === 200 ? (
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
        <Button {...styleButton}>Sign in</Button>
      </Link>
      <Link to={"/register"}>
        <Button {...styleButton}>Sign up</Button>
      </Link>
    </>
  );
};

export default Menu;
