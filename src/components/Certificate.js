import DialogCer from "./DialogCer";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/CertificateStyles";

function Certificate({ img, classes, open, setOpen, handleClose }) {
  return (
    <div>
      <img
        src={img}
        className={classes.smallImg}
        onClick={() => setOpen(!open)}
      />

      <DialogCer img={img} open={open} handleClose={handleClose} onClose />
    </div>
  );
}
export default withStyles(styles)(Certificate);
