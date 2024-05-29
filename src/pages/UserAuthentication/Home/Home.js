import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import GrandGlobalBrands from "./GrandGlobalBrands";
import ShopByCategory from "./ShopByCategory";
import DiscountCardsDisplay from "./DiscountCardsDisplay";
import TodaysDeals from "./TodaysDeals";
import YouMalyLike from "./YouMalyLike";
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px" }}>
            <Box sx={{ margin: "10px 0px" }}>
              <Carousel />
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              <GrandGlobalBrands />
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              {" "}
              <ShopByCategory />
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              {" "}
              <DiscountCardsDisplay />
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              {" "}
              <TodaysDeals />
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              {" "}
              {/* <YouMalyLike /> */}
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
