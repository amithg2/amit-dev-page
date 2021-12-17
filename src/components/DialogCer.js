import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";

function DialogCer(props) {
  const { handleClose, open, img } = props;

  return (
    <Dialog onClick={handleClose} open={open}>
      <img src={img} style={{ cursor: "pointer" }} />
    </Dialog>
  );
}

DialogCer.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DialogCer;
