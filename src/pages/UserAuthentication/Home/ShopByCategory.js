import React from 'react';
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { getHomeShopByCategoryDataInitiate } from '../../../redux/actions/home/getHomeShopByCategoryActions';
const ShopByCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getHomeShopByCategoryDataInitiate());
  }, []);
  const homeShopByCategoryData = useSelector(
    (state) => state?.homeshopbycategorydata?.data?.data?.data || []
  );
  console.table("homeShopByCategoryData", homeShopByCategoryData);
  const getProductHandler = (item) => {
    if (item) {
      navigate(`/products/sub_category_filter?sub_category_name=${item}`);
    }
  };
  return (
    <>
      <Imports.ReusableBox>
        <Grid container spacing={2} p={0} mb={2}>
          {[0, 1].map((index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Imports.ReusableBox
                    sx={{
                      backgroundColor: "#FFFFFF",
                      padding: 1,
                    }}
                  >
                    <Imports.ReusableTypography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        padding: 2,
                        paddingLeft: 2,
                        marginLeft: "-5px",
                      }}
                    >
                      SHOP BY CATEGORY
                    </Imports.ReusableTypography>
                    <Grid container spacing={1} p={1}>
                      {homeShopByCategoryData &&
                        homeShopByCategoryData?.data
                          ?.slice(index * 4, index * 4 + 4)
                          ?.map((item, imgIndex) => (
                            <Grid item xs={12} sm={6} md={6} key={imgIndex}>
                              <Box
                                sx={{
                                  padding: "10px",
                                  border: "1px solid",
                                  borderColor: "divider",
                                  borderRadius: "5px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  // gap: 0.3,
                                }}
                              >
                                {/* <IconButton>
                                  <FavoriteOutlinedIcon
                                    disableRipple
                                    sx={{
                                      position: "absolute",
                                      zIndex: 1,
                                      left: "76px",
                                      top: "2px",
                                      color: "#c2c2c2",
                                      width: "30px",
                                      height: "30px",
                                    }}
                                  />
                                </IconButton> */}
                                <Box
                                  component="img"
                                  src={item.content_image_id[0]}
                                  onClick={() => {
                                    getProductHandler(item.sub_category);
                                  }}
                                  loading="lazy"
                                  alt="1"
                                  sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease",
                                    transform: "scale(0.96)",
                                    "&:hover": {
                                      transform: "scale(0.99)", // Zoom in on hover
                                    },
                                  }}
                                />
                                <Typography
                                  variant="h5"
                                  sx={{ cursor: "pointer" }}
                                >
                                  {item.data}
                                </Typography>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    color: "green",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                  }}
                                >
                                  {item.description}
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

          <Grid item xs={12} md={4} lg={4}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Box
                component="img"
                src="assets/imgs/shopBycatImg2.jpg"
                alt="1"
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Imports.ReusableBox>
    </>
  );
};

export default ShopByCategory;