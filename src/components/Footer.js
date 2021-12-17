import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";
function Footer({ classes }) {
  return (
    <>
      <div className={classes.icons}>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        <a
          href="https://www.flaticon.com/authors/laisa-islam-ani"
          title="Laisa Islam Ani"
        >
          Laisa Islam Ani
        </a>{" "}
        <a href="https://www.flaticon.com/authors/vidyavidz" title="vidyavidz">
          vidyavidz
        </a>{" "}
        <a
          href="https://www.flaticon.com/authors/hight-quality-icons"
          title="Hight Quality Icons"
        >
          Hight Quality Icons
        </a>{" "}
        From{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div className={classes.amit}>Made by Amit Hagag &copy;</div>
    </>
  );
}

export default withStyles(styles)(Footer);
