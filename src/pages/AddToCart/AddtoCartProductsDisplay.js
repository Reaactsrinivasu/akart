import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddtoCartCounter from "./AddtoCartcounter";
import ReusableButton from "../../components/Button";
import Imports from "../../common/Imports";
import {
  loadAddProductToCartInitiate,
  deleteAddProductToCartInitiate,
} from "../../redux/actions/addToCart/addProductToCartActions";
import {
  createSaveProductForLaterInitiate,
  loadSaveProductForLaterInitiate,
} from "../../redux/actions/saveProductLater/saveProductForLaterActions";
const AddtoCartProductsDisplay = ({ addtoCartData }) => {
  const dispatch = useDispatch();

  const deleteProductHandler = (itemId) => {
    alert(itemId);
    if (itemId) {
      dispatch(deleteAddProductToCartInitiate(itemId));
      setTimeout(() => {
        dispatch(loadAddProductToCartInitiate());
      }, 500);
    }
  };
  const saveProductForLaterHandler = (itemId) => {
    alert(itemId);
    if (itemId) {
      dispatch(createSaveProductForLaterInitiate(itemId));
      setTimeout(() => {
        dispatch(loadAddProductToCartInitiate());
        dispatch(loadSaveProductForLaterInitiate());
      }, 500);
    }
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", bgcolor: "#FFFFFF" }}>
        <Grid container spacing={1} p={2}>
          {addtoCartData?.map((item, index) => (
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
                  <AddtoCartCounter />
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",
                      // border: "1px solid",
                      // borderColor: "divider",
                      gap: 2.5,
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
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {item.product_name}
                      </Typography>
                      <IconButton onClick={() => deleteProductHandler(item.id)}>
                        <DeleteRoundedIcon
                          color="disabled"
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            display: "hide",
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 2.5,
                      }}
                    >
                      <Box
                        // variant="contained"
                        // component="button"
                        sx={{
                          padding: "4px 10px",
                          backgroundColor: "#3B7E42",
                          borderRadius: "4px",
                          fontSize: "15px",
                          color: "#FFFFFF",
                          "&:hover": { backgroundColor: "#3B7E42" },
                        }}
                      >
                        4.5★
                        {/* {item.rating} */}
                        {/* {item.rating} */}
                      </Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: "#121212" }}
                      >
                        ₹{item.discount_price}
                      </Typography>
                    </Box>
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
                        sx={{ ml: 3, color: "#308150", fontSize: "18px" }}
                      >
                        {item.discount}
                      </Typography>
                    </Box>
                    <Grid container gap={2} p={1} mt={4}>
                      <Grid item>
                        <Box
                          onClick={() => saveProductForLaterHandler(item.id)}
                          component="button"
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#ff9f00",
                            border: "1px solid #ff9f00",
                            fontWeight: "bold",
                            fontSize: "18px",
                            whiteSpace: "nowrap",
                            padding: "11px 20px",
                            cursor: "pointer",
                          }}
                        >
                          Save For Later
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box
                          onClick={() => deleteProductHandler(item.id)}
                          component="button"
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#fb641b",
                            border: "1px solid #fb641b",
                            fontWeight: "bold",
                            fontSize: "18px",
                            whiteSpace: "nowrap",
                            padding: "11px 20px",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#FFFFFF",
          padding: 2,
          boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
          textAlign: "right",
        }}
      >
        <Box
          component="button"
          sx={{
            backgroundColor: "#ff9f00",
            border: "1px solid #ff9f00",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "11px 25px",
            cursor: "pointer",
          }}
        >
          Place Order
        </Box>
      </Box> */}
      <Grid
        container
        gap={2}
        p={1}
        mt={0.5}
        justifyContent="flex-end"
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#FFFFFF",
          padding: 2,
          boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
          textAlign: "right",
        }}
      >
        <Grid item>
          <Box
            component="button"
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ff9f00",
              border: "1px solid #ff9f00",
              fontWeight: "bold",
              fontSize: "18px",
              whiteSpace: "nowrap",
              padding: "11px 25px",
              cursor: "pointer",
            }}
          >
            Place Order
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AddtoCartProductsDisplay;
