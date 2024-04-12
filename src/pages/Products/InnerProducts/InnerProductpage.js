import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../../Layout/Layout";
import InnerProductDetails from "./InnerProductDetails";
const InnerProductpage = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px" }}>
            <InnerProductDetails />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default InnerProductpage;
