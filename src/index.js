import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import theme from "../src/common/Theme";
const root = ReactDOM.createRoot(document.getElementById("root"));


const theme = createTheme({
  palette: {
    background: {
      // default: "#eee",
      // default: "#d2e3fc",
      default: "#F1F4F7",
    },
  },
});
// root.render(
//   <>
//     <CssBaseline />
//        <BrowserRouter>  
//         <App />
//       </BrowserRouter>
//   </>
// );
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
  </ThemeProvider>
);