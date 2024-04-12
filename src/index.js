import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./redux/store";
// import theme from "./common/Theme"
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
// import theme from "../src/common/Theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const theme = createTheme({
//   palette: {
//     background: {
//       // default: "#eee",
//       // default: "#d2e3fc",
//       default: "#F1F4F7",
//       // default: "#ffe57f",
//       // default: 'palette.primary.light',
//     },
//   },
// });
// const theme = createTheme({
//   palette: {
//     background: {
//       default: "#F1F4F7", // Set default background color
//     },
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         // Apply background image to the body
//         body: {
//           backgroundImage: 'url("/assets/images/background.jpg")', // Replace with your image path
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         },
//       },
//     },
//   },
// });

let theme = createTheme({
  palette: {
    background: {
      // default: "#f3f6f999",
      default: "#f1f3f6",
    },
    primary: {
      main: "#FF5733", // Your primary color
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
      lineHeight: 1,
      fontWeight: 500,
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
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "#eee", // Navbar background color
  //         color: "#333", // Navbar text color
  //       },
  //     },
  //   },
  // },
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
          // "& label": {
          //   color: "#3E68A8",
          // },
          // "& label.Mui-focused": {
          //   color: "#3E68A8",
          // },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3E68A8",
            },
            "&:hover fieldset": {
              borderColor: "#3E68A8",
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
// let theme = createTheme();
theme = responsiveFontSizes(theme);
console.log("theme", theme);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);