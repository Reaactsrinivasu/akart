import React from 'react';
import { Typography, Grid, Box, Divider } from "@mui/material";
import WishListFilters from './WishListFilters';
import WishListProductsDisplay from './WishListProductsDisplay';
const WishListPage = () => {
    return (
      <>
        <Box>
          <Grid container p={1} spacing={2} mt={1.5}>
            {/* filter component */}
            <Grid item xs={12} sm={4} md={3}>
              <Grid
                container
                p={0}
                spacing={0}
                sx={{ position: "sticky", top: "70px", marginTop: "1px" }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <WishListFilters />
                </Grid>
              </Grid>
            </Grid>
            {/* description component */}
            <Grid item xs={12} sm={8} md={9}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  //   borderRadius: "12px",
                }}
              >
                <Typography
                  p={2}
                  variant='h4'
                  sx={{
                    // color: "text.secondary",
                    fontWeight:'bold',
                    color: "#121212",
                  }}
                >
                  {/* Home {">"} Mobiles & Accessories {">"} Wishlist */}
                  My Wishlist (3)
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
                  {/* Showing 1 – 24 of 749 results for "new launch Laptop" */}
                </Typography>
                <Divider variant="fullWidth" />
                <WishListProductsDisplay />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};
export default WishListPage;