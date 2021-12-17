import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Certificate from "./Certificate";
import cer1 from "../images/UC-5c99dd6b-8a13-47e9-9cd0-599fa65d7204.jpg";
import cer2 from "../images/UC-de54c84b-e7c5-41d3-a1d8-f0a3db7cb43b.jpg";
import cer3 from "../images/UC-f29c5711-b486-4139-ac77-0b4b947d68e1.jpg";
import styles from "./styles/CertificatesStyles";

function Certificates({ classes }) {
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <h2>My Certificates: </h2>
      <div className={classes.allCers}>
        <Certificate
          img={cer1}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
        <Certificate
          img={cer2}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
        <Certificate
          img={cer3}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div className={classes.allCersSmall}>
        <Certificate
          img={cer1}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
        <Certificate
          img={cer2}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
        <Certificate
          img={cer3}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
}

export default withStyles(styles)(Certificates);
