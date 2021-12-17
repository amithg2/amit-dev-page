import sizes from "./sizes";

const styles = {
  main: {
    textDecoration: "none",
    width: "27%",
    transition: "0.2s ease",
    filter: "drop-shadow(9px 12px 9px rgba(0,0,0,0.11))",
    [sizes.down("lg")]: {
      width: "45%",
      marginTop: "2em",
    },
    [sizes.down("md")]: {
      width: "70%",
      marginTop: "2em",
    },
    [sizes.down("sm")]: {
      width: "95%",
      marginTop: "2em",
    },
    "&:hover": {
      filter: "drop-shadow(9px 19px 26px rgba(0,0,0,0.13))",
      transform: "scale(1.02)",
    },
  },
};

export default styles;
