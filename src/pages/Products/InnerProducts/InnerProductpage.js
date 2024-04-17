import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../../Layout/Layout";
import InnerProductDetails from "./InnerProductDetails";
import InnerSimilarProducts from "./InnerSimilarProducts";
const InnerProductpage = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px" }}>
            <InnerProductDetails />
            <InnerSimilarProducts />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default InnerProductpage;
