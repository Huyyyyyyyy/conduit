import { Form, Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import useRegister from "../../hooks/useRegister";

const RegisterForm = () => {
  const {
    data: { userRegister, status, statusRegister },
    functions: { register, handleInputChange },
  } = useRegister();

  return (
    <>
      <h1>Sign up</h1>
      <p>
        <Link to={"/login"}>
          <span>Have an account?</span>
        </Link>
      </p>
      {statusRegister !== "" ? (
        <p style={{ color: "#ff1744" }}>{statusRegister}</p>
      ) : null}
      <Form onSubmit={register}>
        <TextField
          id="outlined-basic username-input"
          label="Your name"
          variant="outlined"
          type="text"
          name="userName"
          value={userRegister.userName}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic email-input"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={userRegister.email}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic password-input"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={userRegister.password}
          onChange={handleInputChange}
        />
        <Button type="submit" disabled={status === "loading" ? true : false}>
          {status === "loading" ? "Loading..." : "Sign up"}
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
