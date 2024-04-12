import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import Filters from './Filters';
import ProductsDisplay from './ProductsDisplay';
const ProductsPage = () => {
    return (
      <>
        <Box>
          <Grid container p={0} spacing={1}>
            {/* filter component */}
            <Grid item xs={12} sm={4} md={2.5}>
              <Grid
                container
                p={0}
                spacing={0}
                sx={{ position: "sticky", top: "70px", marginTop: "1px" }}
                        >
                    <Grid item xs={12} sm={12} md={12}>             
                      <Filters />
                    </Grid>   
               </Grid>
            </Grid>
            {/* description component */}
            <Grid item xs={12} sm={8} md={9.5}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  //   borderRadius: "12px",
                }}
              >
                <Typography
                  p={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Home {">"} Mobiles & Accessories
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  p={1}
                  mt={1}
                  mb={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Showing 1 – 24 of 749 results for "new launch Laptop"
                </Typography>
                <Divider variant="fullWidth" />

                <ProductsDisplay />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default ProductsPage;