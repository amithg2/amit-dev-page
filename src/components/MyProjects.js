import React from "react";
import Project from "./Project";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MyProjectsStyles";
import {
  groupMaker,
  lightsOut,
  dadjokes,
  colorPicker,
  meatHome,
  yelpCamp,
} from "../projects";
function MyProjects({ classes }) {
  return (
    <>
      <h2>Projects</h2>
      <div className={classes.allBigProjects}>
        <Project project={yelpCamp} />
        <Project project={meatHome} />
        <Project project={colorPicker} />
      </div>
      <hr className={classes.line} />

      <h2>Fun Projects</h2>
      <div className={classes.allSmallProjects}>
        <Project project={dadjokes} />
        <Project project={lightsOut} />
        <Project project={groupMaker} />
      </div>
    </>
  );
}

export default withStyles(styles)(MyProjects);
