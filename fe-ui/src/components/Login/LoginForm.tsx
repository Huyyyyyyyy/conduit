import { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import UserContext from "../../context/UserContext";

const LoginForm = () => {
  const {
    data: { userLogin, status, loginStatus },
    functions: { get, handleLoginChange },
  } = useContext(UserContext);

  return (
    <>
      <h1>Sign in</h1>
      <p>
        <Link to={"/register"}>
          <span>Need an account?</span>
        </Link>
      </p>
      {loginStatus?.status !== null && loginStatus?.message !== "" ? (
        <p>
          code : {loginStatus?.status}, message : {loginStatus?.message}
        </p>
      ) : null}
      <Form onSubmit={get}>
        <TextField
          id="outlined-basic email-input"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={userLogin?.email}
          onChange={handleLoginChange}
        />
        <TextField
          id="outlined-basic password-input"
          label="Password"
          variant="outlined"
          name="password"
          value={userLogin?.password}
          type="password"
          onChange={handleLoginChange}
        />
        <Button
          type="submit"
          disabled={
            userLogin?.email === "" ||
            userLogin?.password === "" ||
            status === "loading"
              ? true
              : false
          }
        >
          {status === "loading" ? "Loading..." : "Sign in"}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
