import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Divider } from "@mui/material";
import AddtoCartPriceDetails from "./AddtoCartPriceDetails";
import AddtoCartProductsDisplay from "./AddtoCartProductsDisplay";
import SaveForLaterProductsDisplay from "./SaveForLaterProductsDisplay";
import {
  loadAddProductToCartInitiate,
  deleteAddProductToCartInitiate,
} from "../../redux/actions/addToCart/addProductToCartActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
const AddtoCartPage = () => {
  const dispatch = useDispatch();
  const addtoCartData = useSelector(
    (state) => state?.addtocartdata?.data?.data?.data || []
  );
  useEffect(() => {
    dispatch(loadAddProductToCartInitiate());
  }, [dispatch]);
  console.log("addtoCartData", addtoCartData);
  const totalDiscountPrice = addtoCartData.reduce(
    (total, item) => total + item.discount_price,
    0
  );
  const totalActuralPrice = addtoCartData.reduce(
    (total, item) => total + item.actual_price,
    0
  );
  const deliveryCharges = 100;
  const securedPackageCharges = 100;
  const totalAmount = totalDiscountPrice;
  const itemNumber = addtoCartData?.length;
  console.log("addtoCartData", addtoCartData, totalActuralPrice, itemNumber);
  const paymentData = {
    itemNumber: addtoCartData?.length,
    totalActualPrice: addtoCartData.reduce(
      (total, item) => total + item.actual_price,
      0
    ),
    totalDiscountPrice: addtoCartData.reduce(
      (total, item) => total + item.discount_price,
      0
    ),
    deliveryCharges: 100,
    securedPackageCharges: 100,
  };
  return (
    <>
      <Box>
        <Grid container p={1} spacing={1} mt={0.1}>
          {/* description component */}
          <Grid item xs={12} sm={8} md={9}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  //   borderRadius: "12px",
                }}
              >
                <Typography
                  p={2}
                  variant="h4"
                  sx={{
                    // color: "text.secondary",
                    fontWeight: "bold",
                    color: "#121212",
                  }}
                >
                  {/* Home {">"} Mobiles & Accessories {">"} Wishlist */}
                  AddToCart
                </Typography>
                <Divider variant="fullWidth" />
              </Box>
              {/* <Typography
                variant="h4"
                fontWeight="bold"
                p={1}
                mt={1}
                mb={1}
                sx={{
                  color: "text.secondary",
                }}
              >
                Showing 1 – 24 of 749 results for "new launch Laptop"
              </Typography> */}
              <Box sx={{ mt: 1 }}>
                <Divider variant="fullWidth" />
                {/* <AddtoCartProductsDisplay /> */}
                <AddtoCartProductsDisplay addtoCartData={addtoCartData} />
              </Box>
              <Box sx={{ mt: 8 }}>
                <SaveForLaterProductsDisplay />
              </Box>
              {/* <Box
                  sx={{
                    backgoundColor: "pink",
                    width: "100%",
                    height: "100px",
                  }}
                >sffsfs</Box> */}
            </Box>
          </Grid>
          {/* filter component */}
          <Grid item xs={12} sm={4} md={3}>
            <Grid
              container
              p={0}
              spacing={0}
              sx={{
                position: "sticky",
                top: "60px",
                marginTop: "1px",
                bottom: 0,
              }}
            >
              <Grid item xs={12} sm={12} md={12}>
                {/* <AddtoCartPriceDetails /> */}
                <AddtoCartPriceDetails paymentData={paymentData} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddtoCartPage;
