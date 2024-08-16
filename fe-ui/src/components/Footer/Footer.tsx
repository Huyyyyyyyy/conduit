import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{backgroundColor : "#ececec"}}>
      <Container
      maxWidth = "xl"
        style={{
          backgroundColor: "#ececec",
          padding: "10px 50px",
          display: "flex",
          margin: 0,
        }}
      >
        <span
          style={{ color: "#5cb85c", fontWeight: 600, paddingRight: "20px" }}
        >
          conduit
        </span>
        <span style={{ color: "#222" }}>
          An interactive learning project from Thinkster. Code & design licensed
          under MIT.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
