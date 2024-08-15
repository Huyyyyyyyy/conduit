import { Box } from "@mui/material";

import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-form" style={{ padding: "10px 50px" }}>
      <Box>
        <LoginForm></LoginForm>
      </Box>
    </div>
  );
};

export default LoginPage;
