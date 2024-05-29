import React from 'react';
import {Box} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import ViewOrderDetails from './ViewOrderDetails';
const ViewOrder = () => {
    return (
      <>
        <Layout>
          <CssBaseline />
            <Box>
                <Box component="main" sx={{ padding: "5px" }}>
                  <ViewOrderDetails/>
                </Box>
            </Box>
        </Layout>
        
      </>
    );
};
export default ViewOrder;