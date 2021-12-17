import sizes from "./sizes";

const styles = {
  contact: {
    marginBottom: "5em",
    width: "100%",
    background: "rgba(34,193,195,0.8)",
    background:
      'linear-gradient(0deg, rgba(34,193,195,0.03) 5%, rgba(34,193,195,0.04) 94%);    minHeight: "1em"',
    "& h2": {
      padding: "1em",
    },
  },
  images: {
    "& img": {
      width: "3.5em",
      background: "white",
      padding: "0.2em",
      borderRadius: "50%",
      margin: "0 0.5em",
      transition: "0.2s ease-in",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
        background: "none",
      },
      "&:active": {
        transform: "scale(0.8)",
      },
      [sizes.down("sm")]: {
        margin: "1em 0.5em",
      },
    },
  },
};
export default styles;
