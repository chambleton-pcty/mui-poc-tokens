import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

const PocFeedback = ({ message, type }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getFeedbackTypeStyle = () => {
    if (type === "valid") return "success";
    else if (type === "error") return "error";
    else if (type === "incomplete") return "warning";
    else return "info";
  };

  return (
    <Snackbar
      className={getFeedbackTypeStyle()}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
    />
  );
};

export default PocFeedback;
