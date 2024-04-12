import React from "react";
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
import ReusableSlider from "./ReusableSlider";
const ShopByCategory = () => {
  return (
    <>
      <Imports.ReusableBox>
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} md={6}>
            <Imports.ReusableBox sx={{ backgroundColor: "#fff" }}>
              <Grid container p={2} rowGap={1} columnSpacing={1}>
                <Imports.ReusableTypography
                  variant="h2"
                  sx={{ padding: 2, fontWeight: 500, marginLeft: "22px" }}
                >
                  SHOP BY CATEGORY
                </Imports.ReusableTypography>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox mb={1}>
                    <ReusableSlider />
                  </Imports.ReusableBox>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox>
                    <ReusableSlider />
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Imports.ReusableBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Imports.ReusableBox
              p={10}
              sx={{
                width: "100%",
                height: "100%",
                // maxHeight:'50%',
                // backgroundColor: "yellow",
              }}
            >
              <Grid container columnSpacing={4}>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox
                    sx={{
                      position: "absolute",
                      marginTop: "8%",
                      marginLeft: "5%",
                      // display: "flex",
                      // flelxDirection: "column",
                      // justifyContent: "center",
                      // alignItems: "center",
                    }}
                  >
                    <Imports.ReusableTypography
                      variant="h2"
                      sx={{
                        marginBottom: "18px",
                      }}
                    >
                      Top Selling Smartphones
                    </Imports.ReusableTypography>
                    <Imports.ReusableTypography
                      variant="h3"
                      sx={{
                        marginBottom: "18px",
                      }}
                    >
                      Latest Technology, Best Brands
                    </Imports.ReusableTypography>
                    <Imports.ReusableButton
                      variant="contained"
                      sx={{
                        fontSize: "22px",
                        width: "50%",
                        backgroundColor: "#fff",
                        color: "#111",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#111",
                        },
                      }}
                      endIcon={<KeyboardArrowRightIcon color="#222" />}
                    >
                      Explore Now
                    </Imports.ReusableButton>
                  </Imports.ReusableBox>
                  <img
                    src="assets/imgs/shopBycatImg.jpg"
                    alt=""
                    width={"100%"}
                    height={"88%"}
                  />
                </Grid>
              </Grid>
            </Imports.ReusableBox>
          </Grid>
        </Grid>
      </Imports.ReusableBox>
    </>
  );
};

export default ShopByCategory;
