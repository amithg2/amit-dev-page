import React from "react";
import { withStyles } from "@material-ui/styles";
import facebookImg from "../images/facebook.png";
import instagramImg from "../images/instagram.png";
import gitHubImg from "../images/github.png";
import linkedInImg from "../images/linkedin.png";
import stackOverflowImg from "../images/stack-overflow.png";
import whatsAppImg from "../images/whatsapp.png";
import styles from "./styles/ContactStyles";

function Contact({ classes }) {
  return (
    <div className={classes.contact}>
      <h2 style={{ marginBottom: "0.4em" }}>Keep In touch:</h2>
      <div className={classes.images}>
        <a href="https://www.facebook.com/amit.hagag.3">
          <img src={facebookImg} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/amit_hg2/">
          <img src={instagramImg} alt="instagram" />
        </a>
        <a href="https://github.com/amithg2">
          <img src={gitHubImg} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/amit-hagag-0a5465225/">
          <img src={linkedInImg} alt="linkedIn" />
        </a>
        <a href="https://stackoverflow.com/users/17137370/amit-hagag">
          <img src={stackOverflowImg} alt="stackOverflow" />
        </a>
        <a href="https://wa.me/+972527926733">
          <img src={whatsAppImg} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default withStyles(styles)(Contact);
