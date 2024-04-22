import React from "react";
import { useRef, useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getHomeDiscountCardsDataInitiate } from "../../../redux/actions/home/getHomeDiscountCardsActions";
const DiscountCardsDisplay = () => {
  const dispatch = useDispatch();
  const imgData1 = [
    {
      image: "assets/imgs/cardImg-1.jpg",
    },
    {
      image: "assets/imgs/cardImg-2.jpg",
    },
    {
      image: "assets/imgs/cardImg-3.jpg",
    },

    {
      image: "assets/imgs/cardImg-4.jpg",
    },
  ];
  const imgData2 = [
    {
      image: "assets/imgs/cardImg-5.jpg",
    },
    {
      image: "assets/imgs/cardImg-6.jpg",
    },
    {
      image: "assets/imgs/cardImg-7.jpg",
    },

    {
      image: "assets/imgs/cardImg-8.jpg",
    },
  ];
  const imgData3 = [
    {
      image: "assets/imgs/cardImg-9.jpg",
    },
    {
      image: "assets/imgs/cardImg-10.jpg",
    },
    {
      image: "assets/imgs/cardImg-11.jpg",
    },
    {
      image: "assets/imgs/cardImg-12.jpg",
    },
  ];
  useEffect(() => {
    dispatch(getHomeDiscountCardsDataInitiate());
  }, [dispatch]);
  const homeDiscountCardsData = useSelector(
    (state) => state.homediscountcardsdata?.data?.data
  );
  // console.log("homeDiscountCardsData", homeDiscountCardsData?.data);
  return (
    <>
      <Imports.ReusableBox>
        <Grid container spacing={2} p={0}>
          {[0, 1, 2].map((index) => (
            <Grid item xs={12} md={4} lg={4}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox
                    sx={{
                      backgroundColor: "#FFFFFF",
                      // width: "100%",
                      // height: "auto",
                      borderRadius: "12px",
                      border: "1px solid #9e9e9e",
                      padding: 1,
                    }}
                  >
                    <Imports.ReusableTypography
                      variant="h2"
                      sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                    >
                      Up to 60% off
                    </Imports.ReusableTypography>
                    <Grid container spacing={1} p={1}>
                      {homeDiscountCardsData && homeDiscountCardsData?.data
                        .slice(index * 4, index * 4 + 4)
                        .map((item, imgIndex) => (
                          <Grid item xs={12} sm={6} md={6} key={imgIndex}>
                            <Box
                              component="img"
                              src={item.content_image_id[0]}
                              height={"75%"}
                              width={"75%"}
                              alt=""
                              sx={
                                {
                                  //   padding: "10px",
                                  //   border: "1px solid #9e9e9e",
                                  //   borderRadius: "5px",
                                }
                              }
                            />
                          </Grid>
                        ))}
                      <Imports.ReusableTypography
                        variant="h4"
                        sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                      >
                        Sukkhi Adorable Gold Plated Pearl Choker Necklace Set
                        for Women
                      </Imports.ReusableTypography>
                      <Imports.ReusableTypography
                        variant="h5"
                        sx={{
                          padding: 2,
                          fontWeight: 500,
                          marginLeft: "-5px",
                          color: "#FFA500",
                        }}
                      >
                        Explore more
                      </Imports.ReusableTypography>
                    </Grid>
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Grid>
          ))}
          {/* <Grid item xs={12} md={4} lg={4}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Imports.ReusableBox
                  sx={{
                    backgroundColor: "#FFFFFF",
                    // width: "100%",
                    // height: "auto",
                    border: "1px solid #9e9e9e",
                    padding: 1,
                    borderRadius: "12px",
                  }}
                >
                  <Imports.ReusableTypography
                    variant="h2"
                    sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                  >
                    Up to 40% off
                  </Imports.ReusableTypography>
                  <Grid container spacing={1} p={1}>
                    {imgData1?.map((item, index) => (
                      <Grid item xs={12} sm={6} md={6} key={index}>
                        <img
                          src={item.image}
                          loading="lazy"
                          height={"85%"}
                          width={"85%"}
                          alt=""
                          style={
                            {
                              //   padding: "10px",
                              //   border: "1px solid #9e9e9e",
                              //   borderRadius: "5px",
                            }
                          }
                        />
                      </Grid>
                    ))}
                    <Imports.ReusableTypography
                      variant="h4"
                      sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                    >
                      Crocs Unisex-Adult Bayaband ClogClogs and More
                    </Imports.ReusableTypography>
                    <Imports.ReusableTypography
                      variant="h5"
                      sx={{
                        padding: 2,
                        fontWeight: 500,
                        marginLeft: "-5px",
                        color: "#FFA500",
                      }}
                    >
                      Explore more
                    </Imports.ReusableTypography>
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
                    border: "1px solid #9e9e9e",
                    padding: 1,
                    borderRadius: "12px",
                  }}
                >
                  <Imports.ReusableTypography
                    variant="h2"
                    sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                  >
                    Up to 50% off
                  </Imports.ReusableTypography>
                  <Grid container spacing={1} p={1}>
                    {imgData1?.map((item, index) => (
                      <Grid item xs={12} sm={6} md={6} key={index}>
                        <img
                          src={item.image}
                          height={"85%"}
                          width={"85%"}
                          alt=""
                          style={
                            {
                              //   padding: "10px",
                              //   border: "1px solid #9e9e9e",
                              //   borderRadius: "5px",
                            }
                          }
                        />
                      </Grid>
                    ))}
                    <Imports.ReusableTypography
                      variant="h4"
                      sx={{ padding: 2, fontWeight: 500, marginLeft: "-5px" }}
                    >
                      Maxima Tubo2 1.96" Bluetooth Calling Smart Watch, Biggest
                      Display with 600 Nits Brightness
                    </Imports.ReusableTypography>
                    <Imports.ReusableTypography
                      variant="h5"
                      sx={{
                        padding: 2,
                        fontWeight: 500,
                        marginLeft: "-5px",
                        color: "#FFA500",
                      }}
                    >
                      Explore more
                    </Imports.ReusableTypography>
                  </Grid>
                </Imports.ReusableBox>
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Imports.ReusableBox>
    </>
  );
};

export default DiscountCardsDisplay;
