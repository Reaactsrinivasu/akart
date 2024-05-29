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
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useSelector, useDispatch } from "react-redux";
import { fontGrid } from "@mui/material/styles/cssUtils";
const YouMalyLike = () => {
  const dispatch = useDispatch();
  
  const imageData1 = {
    largeImage:{
    img: "assets/imgs/todayImg-2.jpg",
      description: "Best offers on Storite",
        discount: "UpTo 15% Off",
          subdec: "Limited Deal",
    },
  smallImages:[
    {
      img: "assets/imgs/todayImg-2.jpg",
      description: "Best offers on Storite",
      discount: "UpTo 15% Off",
      subdec: "Limited Deal",
    },
    {
      img: "assets/imgs/todayImg-2.jpg",
      description: "Best offers on Puma",
      discount: "UpTo 15% Off",
      subdec: "Limited Deal",
    },
  ],

  }

  const { largeImage, smallImages } = imageData1;
  const imageData = [
    {
      img: "assets/imgs/glb-5.jpg",
      discount: "UpTo 40% Off",
      product: "Hottest Pairs",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
    {
      img: "assets/imgs/glb-6.jpg",
      discount: "UpTo 30% Off",
      product: "Stunning Footwear",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
    {
      img: "assets/imgs/glb-7.jpg",
      discount: "UpTo 15% Off",
      product: "Sneakers & More",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
    {
      img: "assets/imgs/glb-5.jpg",
      discount: "UpTo 40% Off",
      product: "Laid back styles",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
    {
      img: "assets/imgs/glb-6.jpg",
      discount: "UpTo 30% Off",
      product: "Fitty Pairs",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
    {
      img: "assets/imgs/glb-7.jpg",
      discount: "UpTo 15% Off",
      product: "Big deal day",
      subdec: "Limited Deal",
      description: "Best offers on Puma",
    },
  ];
  // useEffect(() => {
  //   dispatch(loadHomeYouMayLikeDataInitiate());
  // }, [dispatch]);
  // const homeYouMayLikeData = useSelector(
  //   (state) => state.homeyoumaylikedata?.data?.data
  // );
  // console.log("homeYouMayLikeData", homeYouMayLikeData?.data);
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
                    borderRadius: "12px",
                    // border: "1px solid #9e9e9e",
                    padding: 1,
                  }}
                >
                  <Imports.ReusableBox
                    sx={{
                      padding: 2,
                      fontWeight: "bold",
                      // marginLeft: "-5px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      
                    }}
                  >
                    <Imports.ReusableTypography variant="h3">
                      You May Also Like....
                    </Imports.ReusableTypography>
                    <Imports.IconButton
                      size="large"
                      edge="start"
                      sx={{
                        color: "#0078db",
                      }}
                    >
                      <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
                    </Imports.IconButton>
                  </Imports.ReusableBox>
                  <Grid container p={1}>
                    <Grid container xs={12} sm={6} md={6}>
                      <Imports.ReusableBox
                        sx={{
                          border: "1px solid",
                          borderColor: "divider",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 1.5,
                          p: 1,
                        }}
                      >
                        <img
                          src="assets/imgs/youmayImg-1.jpg"
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <Imports.ReusableTypography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            whiteSpace: "noWrap",
                          }}
                        >
                          ZAVERI PEARLS For Women
                        </Imports.ReusableTypography>
                        <Imports.ReusableTypography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            color: "#316630",
                          }}
                        >
                          85% OFF
                        </Imports.ReusableTypography>
                      </Imports.ReusableBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                          <Imports.ReusableBox
                            sx={{
                              //   border: "1px solid #9e9e9e",
                              borderTop: "1px solid",
                              borderRight: "1px solid",
                              borderColor: "divider",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 1.5,
                              // p: 1,
                            }}
                          >
                            <img
                              src="assets/imgs/youmayImg-2.jpg"
                              // height={"100%"}
                              // width={"100%"}
                              alt=""
                              style={{
                                width: "80%",
                                height: "100%",
                              }}
                            />

                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                fontWeight: "bold",
                                whiteSpace: "noWrap",
                                //   marginLeft: "-5px",
                              }}
                            >
                              Pink Crystal Shine
                            </Imports.ReusableTypography>
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                fontWeight: "bold",
                                color: "#316630",
                              }}
                            >
                              75% OFF
                            </Imports.ReusableTypography>
                          </Imports.ReusableBox>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Imports.ReusableBox
                            sx={{
                              //   border: "1px solid #9e9e9e",
                              borderBottom: "1px solid",
                              borderTop: "1px solid ",
                              borderRight: "1px solid",
                              borderColor: "divider",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 1.5,
                              // p: 1,
                            }}
                          >
                            <img
                              src="assets/imgs/youmayImg-3.jpg"
                              // height={"100%"}
                              // width={"100%"}
                              alt=""
                              style={{
                                width: "80%",
                                height: "100%",
                              }}
                            />
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                fontWeight: "bold",
                                whiteSpace: "noWrap",
                              }}
                            >
                              Crystal Finger Ring
                            </Imports.ReusableTypography>
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                fontWeight: "bold",
                                color: "#316630",
                              }}
                            >
                              65% OFF
                            </Imports.ReusableTypography>
                          </Imports.ReusableBox>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Imports.ReusableBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Imports.ReusableBox
                  sx={{
                    backgroundColor: "#FFFFFF",
                    // width: "100%",
                    // height: "auto",
                    // border: "1px solid #9e9e9e",
                    borderRadius: "12px",
                    padding: 1,
                    borderRadius: "12px",
                  }}
                >
                  <Imports.ReusableBox
                    sx={{
                      padding: 2,
                      fontWeight: "bold",
                      // marginLeft: "-5px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Imports.ReusableTypography variant="h3">
                      Discounts For You...
                    </Imports.ReusableTypography>
                    <Imports.IconButton
                      size="large"
                      edge="start"
                      sx={{
                        color: "#0078db",
                      }}
                    >
                      <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
                    </Imports.IconButton>
                  </Imports.ReusableBox>
                  <Grid container spacing={1} p={1}>
                    {imageData.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Imports.ReusableBox
                          // elevation={1}
                          sx={{
                            margin: "2px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                            border: "1px solid",
                            borderColor: "divider",
                            transition: "box-shadow 0.3s",
                            "&:hover": {
                              // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            },
                          }}
                        >
                          <Imports.Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "10px",
                            }}
                          >
                            <img
                              src={item.img}
                              alt=""
                              // width={"100%"}
                              // height={"100%"}
                              style={{
                                width: "91%",
                              }}
                              loading="lazy"
                            />
                          </Imports.Box>
                          <Imports.Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              padding: 1,
                            }}
                          >
                            <Imports.Button
                              variant="contained"
                              sx={{
                                height: "25px",
                                color: "#FFFCFC",
                                bgcolor: "#FFA500",
                                borderColor: "#2C7E34",
                                textDecoration: "none",
                                textTransform: "none",
                                borderRadius: "6px",
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                  bgcolor: "#FFA500",
                                },
                              }}
                            >
                              {item.discount}
                            </Imports.Button>
                            <Imports.ReusableTypography
                              variant="subtitle2"
                              sx={{
                                whiteSpace: "nowrap",
                                fontWeight: "bold",
                                color: "orange",
                              }}
                            >
                              {item.subdec}
                            </Imports.ReusableTypography>
                          </Imports.Box>
                          <Imports.Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              // gap: "10px",
                            }}
                          >
                            <Imports.ReusableTypography
                              variant="h6"
                              sx={{
                                fontWeight: "bold",
                                padding: 1,
                                marginLeft: "5px",
                                color: "green",
                              }}
                            >
                              {item.description}
                            </Imports.ReusableTypography>
                          </Imports.Box>
                        </Imports.ReusableBox>
                      </Grid>
                    ))}
                  </Grid>
                </Imports.ReusableBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Imports.ReusableBox>
    </>
  );
};
export default YouMalyLike;
