import React,{useEffect,useState} from 'react'
import { Box, Grid, Typography, Divider,IconButton } from '@mui/material';
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  loadWishListDataInitiate,
  deleteWishListDataInitiate,
} from "../../redux/actions/wishLIst/wishListDataActions";
const WishListProductsDisplay = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.wishlistdata?.data?.data);
  console.log("wishListData", wishListData);
  useEffect(() => {
      dispatch(loadWishListDataInitiate());
  }, [dispatch]);

  const deleteHandler = async (status,itemId) => {
    // const index = wishListData?.data?.findIndex((item) => item.id === itemId);
    alert(itemId);
    alert(status);
     if (status === true && itemId) {
       await dispatch(deleteWishListDataInitiate(itemId));
       setTimeout(() => {
         dispatch(loadWishListDataInitiate());
       }, 500);
      }
  };
    return (
      <>
        <Box>
          <Grid container spacing={1} p={2}>
            {wishListData &&
              wishListData?.data?.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <Grid container columnSpacing={5} mt={0.1} mb={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <img
                        src={item.product_images_urls}
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                      <Box
                        sx={{
                          //   p:1,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            whiteSpace="pre-wrap"
                          >
                            {item.product_name}
                          </Typography>
                          <IconButton onClick={() => deleteHandler(item.in_wishlist,item.id)}>
                            <DeleteRoundedIcon
                              color="disabled"
                              sx={{
                                fontSize: "25px",
                                cursor: "pointer",
                                lineHeight: "50px",
                              }}
                            />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "80%",
                            marginTop: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: 2,
                            }}
                          >
                            <Typography
                              component="div"
                              sx={{
                                padding: "4px 10px",
                                backgroundColor: "#3B7E42",
                                borderRadius: "4px",
                                fontSize: "14px",
                                color: "#FFFFFF",
                                "&:hover": { backgroundColor: "#3B7E42" },
                              }}
                            >
                              {item?.rating ? item.rating : "4.5"}★
                            </Typography>
                            <Typography
                              variant="h4"
                              fontWeight="bold"
                              sx={{ color: "#424242" }}
                            >
                              ₹{item.discount_price}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
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
                              sx={{ ml: 3, color: "#308150", fontSize: "18px" }}
                            >
                              {item.discount}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" />
                </Grid>
              ))}
          </Grid>
        </Box>
      </>
    );
};
export default WishListProductsDisplay;