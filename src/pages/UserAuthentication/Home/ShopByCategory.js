import React from 'react';
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
import { getHomeShopByCategoryDataInitiate } from '../../../redux/actions/home/getHomeShopByCategoryActions';
const ShopByCategory = () => {
  const shopImages = [
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",
    },
  ];
    const dispatch = useDispatch();
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
   };
  useEffect(() => {
    dispatch(getHomeShopByCategoryDataInitiate());
  }, []);
  const homeShopByCategoryData = useSelector(
    (state) => state?.homeshopbycategorydata?.data?.data
  );
  // console.log("homeShopByCategoryData", homeShopByCategoryData?.data[0]?.data);
  // console.log("homeShopByCategoryData", homeShopByCategoryData?.data[0].data);
  return (
    <>
      <Imports.ReusableBox>
        <Grid container spacing={2} p={0}>
          {/* first four  */}
          {[0, 1].map((index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
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
                      sx={{
                        padding: 2,
                        fontWeight: 500,
                        marginLeft: "-5px",
                      }}
                    >
                      SHOP BY CATEGORY
                    </Imports.ReusableTypography>
                    <Grid container spacing={1} p={1}>
                      {/* {homeShopByCategoryData?.length >> 0 && */}
                      {homeShopByCategoryData && homeShopByCategoryData?.data
                        .slice(index * 4, index * 4 + 4)
                        .map((item, imgIndex) => (
                          <Grid item xs={12} sm={6} md={6} key={imgIndex}>
                            <Box
                              sx={{
                                padding: "10px",
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: "5px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                component="img"
                                src={item.content_image_id[0]}
                                // src={item.img}
                                height={"100%"}
                                width={"100%"}
                                loading="lazy"
                                alt="1"
                                sx={{
                                  cursor: "pointer",
                                  transition: "transform 0.3s ease",
                                  transform: "scale(0.96)",
                                  "&:hover": {
                                    transform: "scale(0.99)", // Zoom in on hover
                                  },
                                }}
                              />
                              <Typography sx={{ color: "green" }}>
                                {item.description}
                              </Typography>
                              <Typography sx={{ fontWeight: "bold" }}>
                                {item.discount}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                    </Grid>
                  </Imports.ReusableBox>
                </Grid>
              </Grid>
            </Grid>
          ))}

          {/* second four */}
          {/* <Grid item xs={12} md={4} lg={4}>
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
          </Grid> */}
          {/* last component */}
          <Grid item xs={12} md={4} lg={4}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Box
                  component="img"
                  src="assets/imgs/shopBycatImg.jpg"
                  alt="1"
                  sx={{ width: "100%", height: "87.5%" }}
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