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
import { loadHomeYouMayLikeDataInitiate } from "../../../redux/actions/home/getHomeYouMayLikeActions";
const 
YouMalyLike = () => {
  const dispatch = useDispatch();
  
  const imageData = [
    {
      img: "assets/imgs/todayImg-2.jpg",
      data: "small",
      // description: "Best offers on Storite",
      // discount: "UpTo 15% Off",
      // subdec: "Limited Deal",
    },
    {
      img: "assets/imgs/todayImg-2.jpg",
      data: "large",
      // description: "Best offers on Storite",
      // discount: "UpTo 15% Off",
      // subdec: "Limited Deal",
    },
    {
      img: "assets/imgs/todayImg-2.jpg",
      data: "small",
      // description: "Best offers on Puma",
      // discount: "UpTo 15% Off",
      // subdec: "Limited Deal",
    },
    // {
    //   img: "assets/imgs/todayImg-2.jpg",
    //   description: "Best offers from Top Brands",
    //   discount: "UpTo 15% Off",
    //   subdec: "Limited Deal",
    // },
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
          {/* {[0].map((index) => ( */}
          {/* <Grid item xs={12} md={4} lg={4}>
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
                        fontWeight: 500,
                        marginLeft: "-5px",
                        display: "flex",
                        justifyContent: "space-around",
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
                      {homeYouMayLikeData?.data
                        // .slice(index * 4, index * 4 + 4)
                        .map((item, index) => {
                          if (item.data === "large") {
                            return (
                              <Grid item xs={12} sm={6} md={6} key={index}>
                                <Imports.ReusableBox
                                  sx={{
                                    border: "1px solid #9e9e9e",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src={item.content_image_id[0]}
                                    height={"100%"}
                                    width={"100%"}
                                    alt=""
                                    style={
                                      {
                                        //   padding: "10px",
                                        //   border: "1px solid #9e9e9e",
                                        //   borderTop: "1px solid #9e9e9e",
                                        //   borderRight: "1px solid #9e9e9e",
                                        //   borderBottom: "1px solid #9e9e9e",
                                        //   borderRadius: "5px",
                                      }
                                    }
                                  />
                                  <Imports.ReusableTypography
                                    variant="h5"
                                    sx={{
                                      padding: 2,
                                      fontWeight: 500,
                                      //   marginLeft: "-5px",
                                    }}
                                  >
                                    {item.description}
                                  </Imports.ReusableTypography>
                                  <Imports.ReusableTypography
                                    variant="h5"
                                    sx={{
                                      padding: 2,
                                      fontWeight: 500,
                                      //   marginLeft: "-5px",
                                      color: "#316630",
                                    }}
                                  >
                                    {item.discount}
                                  </Imports.ReusableTypography>
                                </Imports.ReusableBox>
                              </Grid>
                            );
                          } else if (item.data === "small") {
                            return (
                              <Grid item xs={12} sm={6} md={6}>
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12}>
                                    <Imports.ReusableBox
                                      sx={{
                                        //   border: "1px solid #9e9e9e",
                                        borderTop: "1px solid #9e9e9e",
                                        borderRight: "1px solid #9e9e9e",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Box
                                        component="img"
                                        src={item.content_image_id[0]}
                                        height={"100%"}
                                        width={"100%"}
                                        alt=""
                                        style={
                                          {
                                            //   padding: "10px",
                                            // borderTop: "1px solid #9e9e9e",
                                            // borderRight: "1px solid #9e9e9e",
                                            //   borderRadius: "5px",
                                          }
                                        }
                                      />

                                      <Imports.ReusableTypography
                                        variant="h5"
                                        sx={{
                                          padding: 2,
                                          fontWeight: 500,
                                          //   marginLeft: "-5px",
                                        }}
                                      >
                                        {item.description}
                                      </Imports.ReusableTypography>
                                      <Imports.ReusableTypography
                                        variant="h5"
                                        sx={{
                                          padding: 2,
                                          fontWeight: 500,
                                          //   marginLeft: "-5px",
                                          color: "#316630",
                                        }}
                                      >
                                        {item.discount}
                                      </Imports.ReusableTypography>
                                    </Imports.ReusableBox>
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={12}>
                                    <Imports.ReusableBox
                                      sx={{
                                        //   border: "1px solid #9e9e9e",
                                        borderTop: "1px solid #9e9e9e",
                                        borderRight: "1px solid #9e9e9e",
                                        borderBottom: "1px solid #9e9e9e",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Box
                                        component="img"
                                        src={item.content_image_id[0]}
                                        height={"100%"}
                                        width={"100%"}
                                        alt=""
                                        style={
                                          {
                                            //   padding: "10px",
                                            //   borderTop: "1px solid #9e9e9e",
                                            //   borderRight: "1px solid #9e9e9e",
                                            //   borderBottom: "1px solid #9e9e9e",
                                          }
                                        }
                                      />
                                      <Imports.ReusableTypography
                                        variant="h5"
                                        sx={{
                                          padding: 1,
                                          fontWeight: 500,
                                          //   marginLeft: "-5px",
                                        }}
                                      >
                                        {item.description}
                                      </Imports.ReusableTypography>
                                      <Imports.ReusableTypography
                                        variant="h5"
                                        sx={{
                                          padding: 1,
                                          fontWeight: 500,
                                          //   marginLeft: "-5px",
                                          color: "#316630",
                                        }}
                                      >
                                        {item.discount}
                                      </Imports.ReusableTypography>
                                    </Imports.ReusableBox>
                                  </Grid>
                                </Grid>
                              </Grid>
                            );
                          }
                        })}                         
                    </Grid>
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Grid> */}
          {/* ))} */}
          {/* <Grid item xs={12} md={4} lg={4}>
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
                      fontWeight: 500,
                      marginLeft: "-5px",
                      display: "flex",
                      justifyContent: "space-around",
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
                          border: "1px solid #9e9e9e",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="assets/imgs/youmayImg-1.jpg"
                          height={"100%"}
                          width={"100%"}
                          alt=""
                          style={
                            {
                              //   padding: "10px",
                              //   border: "1px solid #9e9e9e",
                              //   borderTop: "1px solid #9e9e9e",
                              //   borderRight: "1px solid #9e9e9e",
                              //   borderBottom: "1px solid #9e9e9e",
                              //   borderRadius: "5px",
                            }
                          }
                        />
                        <Imports.ReusableTypography
                          variant="h5"
                          sx={{
                            padding: 2,
                            fontWeight: 500,
                            //   marginLeft: "-5px",
                          }}
                        >
                          ZAVERI PEARLS For Women
                        </Imports.ReusableTypography>
                        <Imports.ReusableTypography
                          variant="h5"
                          sx={{
                            padding: 2,
                            fontWeight: 500,
                            //   marginLeft: "-5px",
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
                              borderTop: "1px solid #9e9e9e",
                              borderRight: "1px solid #9e9e9e",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src="assets/imgs/youmayImg-2.jpg"
                              height={"100%"}
                              width={"100%"}
                              alt=""
                              style={
                                {
                                  //   padding: "10px",
                                  // borderTop: "1px solid #9e9e9e",
                                  // borderRight: "1px solid #9e9e9e",
                                  //   borderRadius: "5px",
                                }
                              }
                            />

                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                padding: 2,
                                fontWeight: 500,
                                //   marginLeft: "-5px",
                              }}
                            >
                              Pink Crystal Shine
                            </Imports.ReusableTypography>
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                padding: 2,
                                fontWeight: 500,
                                //   marginLeft: "-5px",
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
                              borderTop: "1px solid #9e9e9e",
                              borderRight: "1px solid #9e9e9e",
                              borderBottom: "1px solid #9e9e9e",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src="assets/imgs/youmayImg-3.jpg"
                              height={"100%"}
                              width={"100%"}
                              alt=""
                              style={
                                {
                                  //   padding: "10px",
                                  //   borderTop: "1px solid #9e9e9e",
                                  //   borderRight: "1px solid #9e9e9e",
                                  //   borderBottom: "1px solid #9e9e9e",
                                }
                              }
                            />
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                padding: 1,
                                fontWeight: 500,
                                //   marginLeft: "-5px",
                              }}
                            >
                              Crystal Finger Ring
                            </Imports.ReusableTypography>
                            <Imports.ReusableTypography
                              variant="h5"
                              sx={{
                                padding: 1,
                                fontWeight: 500,
                                //   marginLeft: "-5px",
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
          <Grid item xs={12} md={4} lg={4}> */}
          {/* <Grid container>
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
                      fontWeight: 500,
                      marginLeft: "-5px",
                      display: "flex",
                      justifyContent: "space-around",
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
                      <Grid item xs={12} sm={6} md={6} key={index}>
                        <Imports.ReusableBox
                          // elevation={1}
                          sx={{
                            margin: "2px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            marginBottom: "50px",
                            border: "1px solid #9e9e9e",
                            transition: "box-shadow 0.3s",
                            "&:hover": {
                              // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                            },
                          }}
                        >
                          <Imports.Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "30px",
                              paddingTop: "10px",
                            }}
                          >
                            <img
                              src={item.img}
                              alt=""
                              width={"89%"}
                              height={"89%"}
                              loading="lazy"
                            />
                          </Imports.Box>

                          <Imports.Box
                            sx={{
                              display: "flex",
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
                            <Imports.ReusableTypography variant="subtitle2">
                              {item.subdec}
                            </Imports.ReusableTypography>
                          </Imports.Box>
                          <Imports.Box
                            sx={{ display: "flex", justifyContent: "left" }}
                          >
                            <Imports.ReusableTypography
                              variant="h6"
                              sx={{
                                fontWeight: 500,
                                padding: 1,
                                marginLeft: "5px",
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
            </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Imports.ReusableBox>
    </>
  );
};
export default YouMalyLike;
