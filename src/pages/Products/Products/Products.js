import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../../Layout/Layout";
import ProductsPage from './ProductsPage';
const Products = () => {
    return (
      <>
        <Layout>
          <CssBaseline />
          <Box>
            <Box component="main" sx={{padding: "5px"}}>
            <ProductsPage />
            </Box>
          </Box>
        </Layout>
      </>
    );
};

export default Products;