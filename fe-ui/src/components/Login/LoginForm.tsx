import { Button, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const LoginForm = () => {
  const { get, userLogin, handleLoginChange, status, loginStatus } = useUser();
  return (
    <>
      <h1>Sign in</h1>
      <p>
        <Link to={"/home"}>
          <span>Need an account?</span>
        </Link>
      </p>
      <p>{status}</p>
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
            userLogin.email === "" ||
            userLogin.password === "" ||
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
