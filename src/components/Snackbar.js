import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import CloseIcon from "@mui/icons-material/Close";
import SnackbarContent from "@mui/material/SnackbarContent";
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const useSnackbar = () => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    Transition: SlideTransition,
  });

  const showSnackbar = (message, transition) => {
    setSnackbarState({
      open: true,
      message,
      Transition: transition || SlideTransition,
    });
  };

  const handleClose = () => {
    setSnackbarState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const SnackbarComponent = () => (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={snackbarState.open}
      onClose={handleClose}
      TransitionComponent={snackbarState.Transition}
      message={snackbarState.message}
      key={snackbarState.Transition.name}
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

  return [showSnackbar, SnackbarComponent];
};

export default useSnackbar;


