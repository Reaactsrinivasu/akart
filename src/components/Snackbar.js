import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Slide } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const useSnackbar = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [Transition, setTransition] = React.useState(() => Slide);

  const showSnackbar = (message, Transition) => {
    setMessage(message);
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SnackbarComponent = () => (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      message={message}
      key={Transition.name}
      autoHideDuration={3000}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  // Debounce the showSnackbar function to limit its calls
  const debouncedShowSnackbar = debounce(showSnackbar, 300);
  return [debouncedShowSnackbar, SnackbarComponent];
};

export default useSnackbar;
