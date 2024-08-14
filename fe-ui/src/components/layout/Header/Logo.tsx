import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 60,
        display: { xs: "none", md: "flex" },
        fontFamily: "titillium",
        fontWeight: 700,
        color: "#5cb85c",
        textDecoration: "none",
        cursor: "pointer",
        ":hover": {
          color: "#5cb85c",
        },
        fontSize: 25,
      }}
    >
      conduit
    </Typography>
  );
};

export default Logo;
