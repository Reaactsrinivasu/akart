import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box, Divider } from "@mui/material";
import InnerPageBrandsLists from "./InnerPageBrandsLists";
import InnerPageProductList from "./InnerPageProductList";
import Imports from "../../../common/Imports";

const InnerComparingProducts = () => {
    return (
      <>
        <Box
          mt={5}
          p={1}
          sx={{
            backgroundColor: "#FFFFFF",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="h3" p={3}>
            Comparing Products
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={4}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <img
                    src="assets/imgs/phone1.png"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <InnerPageProductList />
                  <Divider variant="fullWidth" />
                  <InnerPageBrandsLists />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <img
                    src="assets/imgs/phone1.png"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <InnerPageProductList />
                  <Divider variant="fullWidth" />
                  <InnerPageBrandsLists />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={10} md={10}>
                  <img
                    src="assets/imgs/phone1.png"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <InnerPageProductList />
                  <Divider variant="fullWidth" />
                  <InnerPageBrandsLists />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};
export default InnerComparingProducts;
