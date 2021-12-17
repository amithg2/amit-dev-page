import sizes from "./sizes";

const styles = {
  home: {
    overflowX: "hidden",
    background: "rgb(34,193,195)",
    background:
      'linear-gradient(0deg, rgba(34,193,195,0.45451684091605393) 8%, rgba(255,177,93,0.3676821070224965) 78%);    minHeight: "100vh"',
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Merriweather, serif",
    "& h1": {
      fontWeight: "900",
      fontSize: "4em",
      margin: "0.3em",
    },
    "& h3": {
      fontWeight: "300",
      marginBottom: "6em",
    },
    "& h2": {
      letterSpacing: "0.1em",
      marginBottom: "2em",
      fontSize: "1.8em",
      fontWeight: "400",
    },
  },
  main: {
    width: "70%",
    height: "100%",
    background: "rgb(34,193,195)",
    background:
      "linear-gradient(0deg, rgba(34,193,195,0.1856092778908438) 5%, rgba(255,177,93,0.17720591654630602) 97%)",
    padding: "3em 1em",
    [sizes.down("lg")]: {
      width: "100%",
    },
  },
  text: {
    textAlign: "justify",
    width: "60%",
    fontSize: "1.2em",
    lineHeight: "1.5em",
    letterSpacing: "0.05em",
    margin: "auto",
    fontWeight: "300",
    marginBottom: "6em",
    [sizes.down("md")]: {
      width: "90%",
    },
  },
  image: {
    width: "15%",
    borderRadius: "50%",
    padding: "1em",
    backgroundColor: "rgba(217, 122, 115, 0.5)",
    [sizes.down("xs")]: {
      width: "40%",
    },
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
