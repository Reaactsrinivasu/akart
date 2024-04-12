import React from 'react';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Imports from "../../../common/Imports";
import ReusableSlider from "./ReusableSlider"
const ShopByCategory = () => {
  const UserGrid = () => {
    return (
      <Grid item xs={12} sm={6} md={6}>
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70"
          height={"100%"}
          width={"100%"}
          loading="lazy"
          alt="1"
          style={{
            padding: "10px",
            border: "1px solid #9e9e9e",
            borderRadius: "5px",
          }}
        />
      </Grid>
    );
  }
    return (
      <>
        <Imports.ReusableBox>
          <Grid container spacing={2} p={0}>
            <Grid item xs={12} md={4} lg={4}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox
                    sx={{
                      backgroundColor: "#FFFFFF",
                      // width: "100%",
                      // height: "auto",
                      // border: "1px solid #9e9e9e",
                      padding: 1,
                    }}
                  >
                    <Imports.ReusableTypography
                      variant="h2"
                      sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                    >
                      SHOP BY CATEGORY
                    </Imports.ReusableTypography>
                    <Grid container spacing={1} p={1}>
                      <UserGrid />
                      <UserGrid />
                      <UserGrid />
                      <UserGrid />
                    </Grid>
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox
                    sx={{
                      backgroundColor: "#FFFFFF",
                      // width: "100%",
                      // height: "auto",
                      // border: "1px solid #9e9e9e",
                      padding: 1,
                    }}
                  >
                    <Imports.ReusableTypography
                      variant="h2"
                      sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                    >
                      SHOP BY CATEGORY
                    </Imports.ReusableTypography>
                    <Grid container spacing={1} p={1}>
                      <UserGrid />
                      <UserGrid />
                      <UserGrid />
                      <UserGrid />
                    </Grid>
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <img
                    src="assets/imgs/shopBycatImg.jpg"
                    alt="1"
                    style={{width:'100%',height:'94%'}}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Imports.ReusableBox>
      </>
    );
};

export default ShopByCategory;