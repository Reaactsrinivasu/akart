import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../../Layout/Layout";
import InnerProductDetails from "./InnerProductDetails";
import InnerSimilarProducts from "./InnerSimilarProducts";
import InnerProductsBrowsingHistory from "./InnerProductsBrowsingHistory";
import InnerProductsRecommendBrowsingHistory from "./InnerProductsRecommendBrowsingHistory";
import InnerProductMagnifier from "./InnerProductMagnifier";
import InnerComparingProducts from "./InnerComparingProducts";
import InnerProductRatingAndReviews from "./InnerProductRatingAndReviews";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const InnerProductpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log("searchParams in inner product display", searchParams);
  // const productName = searchParams.get("product_name");
  const linkName = searchParams.get("link_name");
  console.log("linkName", linkName);
  // const params = useParams();
  // const productName = params?.product_name;
  // console.log("productName", productName);
  // const id = parseInt(product_id);
  // console.log("productId", id, typeof id);
  // console.log("product_name", product_name);

  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box
            component="main"
            sx={{
              padding: "5px",
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              p: 2,
            }}
          >
            {/* <InnerProductDetails /> */}
            {/* Magnifier component  */}
            <InnerProductMagnifier link_name={linkName} />
            {/* Comparing Products  */}
            {/* <InnerComparingProducts /> */}
            {/* Rating Reviews */}
            {/* <InnerProductRatingAndReviews /> */}
            {/* <InnerSimilarProducts /> */}
            {/* <InnerProductsRecommendBrowsingHistory /> */}
            {/* <InnerProductsBrowsingHistory /> */}
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default InnerProductpage;
