import sizes from "./sizes";

const styles = {
  allCers: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "6em",
    [sizes.down("md")]: {
      display: "none",
    },
  },
  allCersSmall: {
    display: "none",
    width: "100%",
    background: "rgba(217, 122, 115, 0.1)",
    "& img": {
      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      width: "500px",
      margin: "10px",
    },
    [sizes.down("md")]: {
      display: "flex",
      overflowX: "scroll",
    },
  },
};

export default styles;
