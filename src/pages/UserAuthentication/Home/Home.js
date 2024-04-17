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
            <Carousel />
            <GrandGlobalBrands />
            <ShopByCategory />
            <DiscountCardsDisplay />
            <TodaysDeals />
            <YouMalyLike />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
