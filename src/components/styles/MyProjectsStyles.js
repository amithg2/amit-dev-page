import sizes from "./sizes";

const styles = {
  allBigProjects: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "7em",
    [sizes.down("lg")]: {},
  },
  allSmallProjects: {
    width: "100%",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "3em",
  },
  line: {
    margin: "5em auto",
    marginTop: "40px",
    width: "50%",
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(217, 122, 115, 0), rgba(217, 122, 115, 0.75), rgba(217, 122, 115, 0))",
  },
};

export default styles;
