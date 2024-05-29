import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import AddtoCartPage from "./AddtoCartPage";
const AddtoCart = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px" }}>
            <AddtoCartPage />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default AddtoCart;
