// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: "pink",
    },
    primary: {
      main: "#1976D2", // Your primary color
    },
    secondary: {
      main: "#FF4081", // Your secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 300,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 200,
    },
  },
  components: {
    // CTRL + SPACE to find the component you would like to override.
    // For most of them you will need to adjust just the root...
  
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#eee", // Navbar background color
          color: "#333", // Navbar text color
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-underline:before": {
            borderBottomColor: "green",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3E68A8",
            },
            "&:hover fieldset": {
              borderColor: "pink",
              borderWidth: "0.15rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3E68A8",
            },
          },
        },
      },
    },
  },
});

export default theme;
