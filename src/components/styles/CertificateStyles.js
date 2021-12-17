import sizes from "./sizes";

const styles = {
  smallImg: {
    width: "95%",
    cursor: "pointer",
    transition: "0.2s ease",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
    [sizes.down("md")]: {
      "&:hover": {
        transform: "none",
      },
    },
  },
};

export default styles;
