import { Box } from "@mui/material";
import RegisterForm from "../components/Register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="register-form" style={{ padding: "10px 50px" }}>
      <Box>
        <RegisterForm></RegisterForm>
      </Box>
    </div>
  );
};

export default RegisterPage;
