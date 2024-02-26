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
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff", // Navbar background color
          color: "#333", // Navbar text color
        },
      },
    },
  },
});

export default theme;
