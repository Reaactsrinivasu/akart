import React, { useEffect, useState } from "react";
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
import {
  createWishListDataInitiate,
  deleteWishListDataInitiate,
} from "../../../redux/actions/wishLIst/wishListDataActions";
const ProductsDisplay = () => {
  const [wishlist, setWishlist] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  //  const [iconClicked, setIconClicked] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  console.log("searchParams in product display", searchParams);
  const subCategoryName = searchParams.get("sub_category_name");
  console.log("subCategoryName", subCategoryName);
  //       const productDetails = [
  //         {
  //           id: "1",
  //           // image: "assets/imgs/phone.jpg",
  //           image: "assets/imgs/phone1.png",
  //           title1:
  //             "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "4.2★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //           list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  //         {
  //           id: "2",
  //           image: "assets/imgs/laptop1.jpg",
  //           title1:
  //             "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "4.6★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //            list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  //         {
  //           id: "3",
  //           image: "assets/imgs/phone1.png",
  //           title1:
  //             "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "3.5★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //            list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  //         {
  //           id: "4",
  //           image: "assets/imgs/laptop1.jpg",
  //           title1:
  //             "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "3.8★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //            list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  //         {
  //           id: "5",
  //           image: "assets/imgs/phone1.png",
  //           title1:
  //             "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "4.5★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //            list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  //         {
  //           id: "6",
  //           image: "assets/imgs/laptop1.jpg",
  //           title1:
  //             "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
  //           title2: "",
  //           title3: "",
  //           actualPrice: "",
  //           discount: "",
  //           discountPrice: "",
  //           rating: "4.2★",
  //           ratedes: "1,92,450 Ratings & 10,456 Reviews",
  //            list: [
  //             { item: "Supported Apps: Netflix|Prime Video|" },
  //             { item: "Disney+Hotstar|Youtube" },
  //             { item: "Operating System: Tizen" },
  //             { item: "Resolution: HD Ready 1366 x 768 Pixels" },
  //             { item: "Sound Output: 20 W" },
  //             { item: "Refresh Rate: 50 Hz" },
  //           ],
  //         },
  // ];
  const initialProductsData = useSelector(
    (state) => state.productdata?.data?.data
  );
  console.log("initialProductsData", initialProductsData);
  useEffect(() => {
    if (subCategoryName) {
      dispatch(loadProductDataInitiate(subCategoryName));
    }
  }, [dispatch, subCategoryName]);
  const getInnerProductHandler = (productName) => {
    if (productName) {
      const encodedProductNameForRouteParams = productName
        .toLowerCase()
        .replace(/ /g, "-");
      // navigate(`/innerproducts/sub_category_filter?sub_category_name=${item}/${id}`);
      navigate(
        `/innerproducts/filter_by_product_name?link_name=${encodedProductNameForRouteParams}`
      );
      // navigate(
      //   `/innerproducts/sub_category_filter?sub_category_name=${subCategoryName}/${id}`
      // );
    }
  };
  const [productsData, setProductsData] = useState(initialProductsData); // initialProductsData is your initial data array
  const [iconClicked, setIconClicked] = useState(
    new Array(initialProductsData?.length).fill(false)
  );
  // const [iconClicked, setIconClicked] = useState(
  //   Array(productsData?.length).fill(false)
  // );
  const wishListHandler = async (status, itemId) => {
    const index = productsData.findIndex((item) => item.id === itemId);
    try {
    if (status === false && itemId) {
      await dispatch(createWishListDataInitiate(itemId));
    } else if (status === true && itemId) {
      await dispatch(deleteWishListDataInitiate(itemId));
    }
    // Update both states together to ensure consistency
    setProductsData((prevState) => {
      const newState = [...prevState];
      newState[index].in_wishlist = !status;
      console.log('data newState', newState);
      return newState;
    });
    setIconClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      console.log("clicked newState", newState);
      return newState;
    });
  } catch (error) {
    console.error('Wishlist operation failed:', error);
    // Optionally handle the error state here
  }
  };
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
                  {/* <IconButton onClick={() => toggleWishlist(item.id)}> */}
                  <IconButton
                    key={item.id}
                    onClick={() => wishListHandler(item.in_wishlist, item.id)}
                  >
                    <FavoriteOutlinedIcon
                      disableRipple
                      sx={{
                        position: "absolute",
                        zIndex: 1,
                        right: "10px",
                        top: "2px",
                        color:
                          item.in_wishlist || iconClicked[index]
                            ? "red"
                            : "#c2c2c2",
                        // color: item.in_wishlist === true && iconClicked[index]
                        //   ? "red"
                        //   : "#c2c2c2",
                        width: "35px",
                        height: "35px",
                      }}
                    />
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
                            {/* {item.sub_title} */}
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
};

export default ProductsDisplay;
