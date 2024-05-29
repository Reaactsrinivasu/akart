import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography, Grid, Box, Divider } from "@mui/material";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
import ReactImageMagnify from "react-image-magnify";
import ReusableListwithImgDescription from "../../../components/ListwithImgDescription";
import Imports from "../../../common/Imports";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import loadInnerProductDataInitiate from "../../../redux/actions/InnerProduct/getInnerProductWithId";
import {
  createWishListDataInitiate,
  deleteWishListDataInitiate,
} from "../../../redux/actions/wishLIst/wishListDataActions";
import { createAddProductToCartInitiate } from "../../../redux/actions/addToCart/addProductToCartActions";
const InnerProductMagnifier = (props) => {
  const dispatch = useDispatch();
  // const productName = props?.product_name.replace(/-/g, " ");
  const linkName = props?.link_name
  const innerProductsData = useSelector(
    (state) => state?.innerproductdata?.data?.data[0] || {}
  );
  console.log("innerProductsData", innerProductsData);
  useEffect(() => {
    if (linkName) {
      dispatch(loadInnerProductDataInitiate(linkName));
    }
  }, [dispatch, linkName]);
  const {
    actual_price,
    available_offers,
    discount,
    discount_price,
    id,
    in_wishlist,
    magnifier_images,
    product_name,
    sub_title,
    rating,
    total_ratings,
    total_reviews,
  } = innerProductsData;
  const initialImage =
    magnifier_images && magnifier_images.length > 0
      ? magnifier_images[0]
      : null;
  
  
  const handleWishlistToggle = (status, itemId) => {
    if (status) {
      dispatch(deleteWishListDataInitiate(itemId));
      // dispatch(loadInnerProductDataInitiate(linkName));
    } else {
      dispatch(createWishListDataInitiate(itemId));
      // dispatch(loadInnerProductDataInitiate(linkName));
    }
  };
  const [hoveredImage, setHoveredImage] = useState(initialImage);
  useEffect(() => {
    if (initialImage) {
      setHoveredImage(initialImage);
      dispatch(loadInnerProductDataInitiate(linkName));
    }
  }, [initialImage]);
  // }, [initialImage, handleWishlistToggle]);
  const handleHoverImage = (image) => {
    setHoveredImage(image);
  };

  const addToCartHandler = (id) => {
    alert(id);
    dispatch(createAddProductToCartInitiate(id));
  }
  return (
    <>
      <Grid container p={0} spacing={1}>
        {/*magnifier component */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          // sx={{
          //   "& .MuiGrid-root": {
          //     marginRight: "-23px",
          //   },
          // }}
        >
          <Grid
            container
            p={0}
            spacing={0}
            sx={{ position: "sticky", top: "70px", marginTop: "1px" }}
          >
            <Grid item xs={12} sm={12} md={2}>
              <Grid container spacing={0}>
                {magnifier_images?.map((item, index) => (
                  <Grid
                    item
                    // xs={12}
                    // sm={12}
                    md={10}
                    key={index}
                    sx={{
                      marginBottom: "10px",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      onMouseOver={() => {
                        handleHoverImage(item);
                      }}
                      component="img"
                      src={item}
                      alt="1"
                      sx={{
                        padding: "5px",
                        width: "70px",
                        height: "auto",
                        border: "1px solid lightgrey",
                        cursor: "pointer",
                        transition: "padding 0.3s",
                        "&:hover": {
                          padding: "7px",
                          border: "2px solid blue",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FFFFFF",
                  // border: "1px solid",
                  borderLeft: 0,
                  // borderColor: "divider",
                  // borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // justifyContent:'center'
                  // padding: 1,
                }}
              >
                {magnifier_images && hoveredImage ? (
                  <>
                    <IconButton
                      onClick={() => handleWishlistToggle(in_wishlist, id)}
                      disableRipple
                      sx={{
                        position: "absolute",
                        zIndex: 1,
                        right: "10%",
                        top: "10px",
                        color: "#c2c2c2",
                      }}
                    >
                      {in_wishlist ? (
                        <FavoriteIcon
                          sx={{
                            // color: "red",
                            color: "#f50057",
                            width: "35px",
                            height: "35px",
                            // ...props.sx,
                          }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          sx={{ width: "35px", height: "35px" }}
                        />
                      )}
                    </IconButton>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: hoveredImage,
                          sizes:
                            "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                          // srcSet: this.srcSet,
                          // sizes:
                          //   "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                        },
                        largeImage: {
                          src: hoveredImage,
                          width: 2000,
                          height: 1800,
                          marginLeft: 10,
                        },
                        enlargedImageContainerDimensions: {
                          width: "220%",
                          height: "100%",
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        pressDuration: 0, // set a very high value or disable it
                        hoverDelayInMs: 0, // to activate zoom instantly on hover
                      }}
                    />
                  </>
                ) : (
                  ""
                )}
              </Box>
            </Grid>
            {/* Button component */}
            <Grid item xs={12} sm={12} md={12}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={12} md={2}></Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Imports.Button
                    onClick={()=>addToCartHandler(id)}
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      width: "100%",
                      height: "61px",
                      backgroundColor: "#ff9f00",
                      border: "1px solid #ff9f00",
                      fontWeight: "bold",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                      padding: "11px 20px",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#ff9f00",
                        border: "1px solid #ff9f00",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    ADD TO CART
                  </Imports.Button>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Imports.Button
                    startIcon={<FlashOnIcon />}
                    sx={{
                      width: "100%",
                      height: "61px",
                      backgroundColor: "#fb641b",
                      border: "1px solid #fb641b",
                      fontWeight: "bold",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                      padding: "11px 20px",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#fb641b",
                        border: "1px solid #fb641b",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    BUY NOW
                  </Imports.Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* product description component */}
        <Grid item xs={12} sm={6} md={7}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#FFFFFF",
              borderRadius: "8px",
            }}
          >
            <Typography
              p={1}
              sx={{
                color: "text.secondary",
              }}
            >
              Home {">"} Mobiles & Accessories {">"} Mobiles {">"} OnePlus
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
              Showing 1 – 24 of 749 results for "new launch mobiles"
            </Typography>
            <Divider variant="fullWidth" />
            {/* {receivedInnerProductData?.map((item, index) => ( */}
            <Grid
              // key={index}
              p={1}
              container
              spacing={0}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              // alignItems="center"
            >
              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8} md={8}>
                    <Typography variant="h5" fontWeight="bold">
                      {/* {sub_title} */}
                      {product_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="h4" sx={{ color: "#212121" }}>
                        ₹{discount_price}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{
                            color: "#878787",
                            textDecorationLine: "line-through",
                          }}
                        >
                          ₹{actual_price}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{ ml: 3, color: "#308150" }}
                        >
                          {/* 20% OFF */}
                          {discount}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    // variant="contained"
                    // component="button"
                    sx={{
                      padding: "5px 10px",
                      backgroundColor: "#3B7E42",
                      borderRadius: "5px",
                      fontSize: "15px",
                      color: "#FFFFFF",
                      "&:hover": { backgroundColor: "#3B7E42" },
                    }}
                  >
                    {rating}★
                  </Box>
                  <Typography sx={{ color: "#878787" }}>
                    {/* {review_and_rating} */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} mt={1}>
                <Typography variant="h5" mt={1} fontWeight="bold">
                  Available offers :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} mt={1}>
                {/* <ReusableListWithDotIcon
                    // list={productDetails[0]?.list}
                    list={available_offers
                      ?.replace(/<br\/>/g)
                      .split("\n")
                      .filter(Boolean)
                      .map((item, index) => ({ item }))}
                    title="T&C"
                    icon="icon"
                    maxItemsToShow="6"
                    style={{
                      color: "#212121",
                      fontSize: "0.923rem",
                      margin: 3,
                    }}
                  /> */}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                mt={1}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={1}>
                    <Typography variant="h5" mt={1} color="#878787">
                      Description
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={11}>
                    <Typography
                      variant="h6"
                      mt={1}
                      textAlign="justify"
                      sx={{
                        marginLeft: "10px",
                        color: "#212121",
                        ml: 3,
                        mt: 1,
                      }}
                    >
                      {" "}
                      The weight of the phone is 207 g, and the weight of the
                      screen protector may add an additional 3g. The size and
                      weight of the mobile phone may vary according to
                      configuration, manufacturing process and measurement
                      method. 3. Due to the mobile phone system file occupying
                      space (including Android system and pre-installed apps),
                      the available memory capacity is less than this value.
                      Storage capacity will vary based on software version and
                      may vary from device to device. 4. Photo pixels of
                      different camera modes may vary, please refer to the
                      actual situation. Video pixels of different shooting modes
                      may also vary, please refer to the actual
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} mt={1}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <ReusableListwithImgDescription
                    list={productImages}
                    maxItemsToShow="3"
                    sx={{
                      color: "#212121",
                      fontSize: "0.923rem",
                      margin: 3,
                    }}
                  />
                </Box>
              </Grid> */}
            </Grid>
            {/* ))} */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default InnerProductMagnifier;
