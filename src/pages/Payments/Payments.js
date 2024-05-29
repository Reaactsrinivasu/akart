import React from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import PaymentMethods from "./PaymentMethods";
const Payments = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px"}}>
             <PaymentMethods/>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Payments;
