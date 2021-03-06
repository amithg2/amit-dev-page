import React from "react";
import { withStyles } from "@material-ui/styles";
import image from "../images/image.png";
import Certificates from "./Certificates";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import styles from "./styles/HomeStyles";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <div className={classes.main}>
        <img src={image} alt="amit" className={classes.image} />
        <h1>Hi! I'm Amit.</h1>
        <h3>a Full Stack developer.</h3>

        <h2>About Me</h2>
        <p className={classes.text}>
          I'm 24 years old, originally from Jerusalem. Ever since I was young I
          loved computers, programing and video games, of curse. I expanded
          electronics in high school and i knew that one day i will work as a
          developer or software engineer. For the past six months i have been
          studing full stack development with help from friends and udemy
          curses. I love to write code and i'm really looking forward to work as
          a software developer.
        </p>
        <div>
          <hr className={classes.line} />

          <MyProjects />
          <hr className={classes.line} />
          <Certificates />

        <hr className={classes.line} />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
