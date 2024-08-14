import { CommonProps } from "@mui/material/OverridableComponent";

const Banner = () => {
  const style: CommonProps = {
    style: {
      width: "100%",
      height: "150px",
      backgroundColor: "#5cb85c",
      textAlign: "center",
    },
  };
  return (
    <div {...style} className="banner">
      <h1>conduit</h1>
      <span>A place to share your knowledge</span>
    </div>
  );
};

export default Banner;
