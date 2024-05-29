import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Imports from "../../../common/Imports";
import { getHomeGrandGlobalDataInitiate } from "../../../redux/actions/home/getHomeGrandGlobalActions";
import { Category } from "@mui/icons-material";
import { Box, textFieldClasses, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
const GrandGlobalBrands = () => {
  const dispatch = useDispatch();
  const navigate = Imports.useNavigate();
  useEffect(() => {
    dispatch(getHomeGrandGlobalDataInitiate());
  }, [dispatch]);
  const grandGlobalData = useSelector((state) => state.homegrandglobaldata?.data?.data);
  const homeGrandGlobalData = grandGlobalData?.data;
  console.log("homeGrandGlobalData", homeGrandGlobalData);
  const getProductHandler = (item) => {
    //  localStorage.setItem("sub_category", item);
    // console.table('redirecting grand global product page',item);
    if (item) {
      navigate(
        `/products/sub_category_filter?sub_category_name=${item}`,
      );
    }
  }
  return (
    <>
      <Imports.ReusableBox
        sx={{
          // mt: 1,
          // backgroundColor: "#f3f6f999",
          backgroundColor: "#FFFFFF",
          width: "100%",
          padding: "10px",
          // height: "auto",
          // padding: "30px",
          // marginBottom: "1px",
        }}
      >
        <Imports.ReusableTypography
          variant="h2"
          sx={{ padding: 3, fontWeight: 500, color: "#222" }}
        >
          GRAND GLOBAL BRANDS
        </Imports.ReusableTypography>
        <Imports.ReusableGrid container>
          {/* <Imports.Grid itme> */}
          <Swiper
            // onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              1440: {
                slidesPerView: 4,
                // autoplay: false,
              },
              // Large devices (lg)
              1024: {
                slidesPerView: 4,
                //   autoplay: false,
              },
              // Medium devices (md)
              768: {
                slidesPerView: 3,
                //   autoplay: false,
              },
              // Small devices (sm)
              576: {
                slidesPerView: 2,
                //   autoplay: true,
              },
              // Extra small devices (xs)
              0: {
                slidesPerView: 1,
                //   autoplay: true,
              },
            }}
            autoplay={true}
            loop={true}
            navigation={true}
            // watchSlidesProgress={true}
            // modules={[Navigation, Autoplay]}
            className="mySwiper3"
            style={{
              "--swiper-navigation-size": "10px", // Set the size you desire
            }}
          >
            {/* // console.log("grand", item.content_image_id[0]), */}
            {/* {imageData?.map((item, index) => ( */}
            {homeGrandGlobalData &&
              homeGrandGlobalData?.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Imports.ReusableBox
                    // elevation={1}
                    sx={{
                      // marginLeft: "0px",
                      backgroundColor: "#FFFFFF",
                      // borderRadius: "8px",
                      marginBottom: "50px",
                      // border: "1px solid #9e9e9e",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "box-shadow 0.3s",
                      "&:hover": {
                        // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    {/* <Link
                      style={{
                        textDecoration: "none",
                      }}
                      // to={params.category=item.sub_category}
                      // to={`/product/sub_category_filter?sub_category_name=${item.sub_category}`}
                    > */}
                    <Imports.Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "30px",
                      }}
                    >                      
                      <Box
                        component="img"
                        // src={item?.content_image_id[0]}
                        src={item?.content_image_id[1]}
                        // src={item.img}
                        alt=""
                        // width={"70%"}
                        // height={"70%"}
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                        onClick={() => {
                          getProductHandler(item.sub_category);
                        }}
                      />
                      <Imports.ReusableTypography
                        variant="h6"
                        sx={{ fontWeight: 500, color: "#222" }}
                      >
                        {item.description}
                      </Imports.ReusableTypography>
                      <Imports.ReusableTypography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "green" }}
                      >
                        {item.discount}
                      </Imports.ReusableTypography>
                    </Imports.Box>
                    {/* </Link> */}
                  </Imports.ReusableBox>
                </SwiperSlide>
              ))}
          </Swiper>
        </Imports.ReusableGrid>
      </Imports.ReusableBox>
    </>
  );
};

export default GrandGlobalBrands;
