import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  List,
  ListItemIcon,
  ListItem,
  ListItemButton,
  InboxIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
import loadProductDataInitiate from "../../../redux/actions/Product/getProductWithSubCategoryActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import WishlistIcon from "../../../components/WishlistIcon";
import {
  deleteWishListDataInitiate,
  createWishListDataInitiate,
  loadWishListDataInitiate,
} from "../../../redux/actions/wishLIst/wishListDataActions";
const ProductsDisplay = React.memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  console.log("searchParams in product display", searchParams);
  const subCategoryName = searchParams.get("sub_category_name");
  console.log("subCategoryName", subCategoryName);
  const productsData = useSelector((state) => state.productdata?.data?.data || []);
  console.log("productsData", productsData);
 useEffect(() => {
   if (subCategoryName) {
     dispatch(loadProductDataInitiate(subCategoryName));
   }
 }, [dispatch, subCategoryName]);
  const getInnerProductHandler = (productName) => {
    if (productName) {
     const encodedProductNameForRouteParams = productName.toLowerCase()
       .replace(/ /g, "-");
     navigate(
       `/innerproducts/filter_by_product_name?link_name=${encodedProductNameForRouteParams}`
     );
   }
  };
   const wishListData = useSelector((state) => state.wishlistdata?.data?.data?.data || []);
   console.log("wishListData", wishListData);
   useEffect(() => {
     dispatch(loadWishListDataInitiate());
    }, [dispatch]);
    const isInWishlist = wishListData?.some(
      item => item.product_id === productsData?.id
    );
    console.log("isInWishlist", isInWishlist);

  // const addWishListHandler = (itemId) => {
  //       dispatch(createWishListDataInitiate(itemId));
  //       dispatch(loadProductDataInitiate(subCategoryName));
  //   };
  // const deleteWishListHandler = (itemId) => {
  //         dispatch(deleteWishListDataInitiate(itemId));
  //       dispatch(loadProductDataInitiate(subCategoryName));
  //   };
const addWishListHandler = useCallback(
  (itemId) => {
    dispatch(createWishListDataInitiate(itemId));
    setTimeout(() => {
      dispatch(loadProductDataInitiate(subCategoryName));
    }, 200);
  },
  [dispatch]
);

const deleteWishListHandler = useCallback(
  (itemId) => {
    dispatch(deleteWishListDataInitiate(itemId));
      setTimeout(() => {
      dispatch(loadProductDataInitiate(subCategoryName));
    }, 200);
  },
  [dispatch]
);
  return (
    <>
      {/* {productDetails?.map((item, index) => ( */}
      {productsData &&
        productsData?.map((item, index) => (
          <div key={index}>
            <Grid container p={1} columnSpacing={1}>
              <Grid item xs={12} sm={8} md={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    // border: "1px solid",
                    // borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  {/* <IconButton>
                    <FavoriteOutlinedIcon
                      disableRipple
                      sx={{
                        position: "absolute",
                        zIndex: 1,
                        right: "10px",
                        top: "2px",
                        color: "#c2c2c2",
                        width: "35px",
                        height: "35px",
                      }}
                    />
                  </IconButton> */}
                  {/* <WishlistIcon
                    handleWishlistToggle={handleWishlistToggle}
                    cat_name={subCategoryName}
                    id={item.id}
                    isWished={item.in_wishlist}
                  /> */}
                  <IconButton
                    onClick={() => {
                      if (item.in_wishlist) {
                        deleteWishListHandler(item.id);
                      } else {
                        addWishListHandler(item.id);
                      }
                    }}
                  >
                    {item?.in_wishlist ? 
                      <FavoriteIcon
                        sx={{
                          color: "#f50057",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                     : 
                      <FavoriteBorderIcon
                        sx={{ width: "35px", height: "35px" }}
                      />
                    }
                  </IconButton>
                  <Box
                    component="img"
                    // onClick={() => navigate("/innerproducts")}
                    onClick={() => {
                      getInnerProductHandler(
                        // item?.sub_category.sub_category_name,
                        item.product_name
                      );
                    }}
                    src={item?.product_images_urls[0]}
                    alt="1"
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FFFFFF",
                    // display: "flex",
                    // flexDirection: "column",
                    justifyContent: "center",
                    // border: "1px solid",
                    // borderColor: "divider",
                    borderRadius: "8px",
                  }}
                >
                  <Grid
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
                            {item.product_name}
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
                              ₹{item.discount_price}
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
                                ₹{item.actual_price}
                              </Typography>
                              <Typography
                                variant="h4"
                                sx={{ ml: 3, color: "#308150" }}
                              >
                                {item.discount}
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
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#3B7E42",
                            borderRadius: "5px",
                            fontSize: "15px",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#3B7E42" },
                          }}
                        >
                          {item.rating}★
                        </Button>
                        <Typography sx={{ color: "#878787" }}>
                          {item.review_and_rating}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <ReusableListWithDotIcon
                        icon="icon"
                        // list={productDetails[0]?.list}
                        // list={item.description}
                        list={item.description
                          ?.replace(/<br\/>/g)
                          .split("\n")
                          .filter(Boolean)
                          .map((item, index) => ({ item }))}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" sx={{ margin: "10px" }} />
          </div>
        ))}
    </>
  );
});

export default ProductsDisplay;
