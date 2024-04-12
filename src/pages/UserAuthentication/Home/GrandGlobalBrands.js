import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Imports from "../../../common/Imports";
import { getHomeGrandGlobalDataInitiate } from "../../../redux/actions/home/getHomeGrandGlobalActions";
const GrandGlobalBrands = () => {
  const dispatch = useDispatch();
 
  const imageData = [
    {
      img: "assets/imgs/glb-5.jpg",
      discount: "UpTo 40% Off",
      product: "Hottest Pairs",
    },
    {
      img: "assets/imgs/glb-6.jpg",
      discount: "UpTo 30% Off",
      product: "Stunning Footwear",
    },
    {
      img: "assets/imgs/glb-7.jpg",
      discount: "UpTo 15% Off",
      product: "Sneakers & More",
    },
    {
      img: "assets/imgs/glb-5.jpg",
      discount: "UpTo 40% Off",
      product: "Laid back styles",
    },
    {
      img: "assets/imgs/glb-6.jpg",
      discount: "UpTo 30% Off",
      product: "Fitty Pairs",
    },
    {
      img: "assets/imgs/glb-7.jpg",
      discount: "UpTo 15% Off",
      product: "Big deal day",
    },
  ];

  // const queryString = contentNames
  //   .map((name, index) => `content_name[]=${name}`)
  //   .join("&");

  useEffect(() => {
    dispatch(getHomeGrandGlobalDataInitiate());
  }, [dispatch]);
  const grandGlobalData = useSelector((state) => state.homegrandglobaldata?.data);
  const homeGrandGlobalData = grandGlobalData?.data;
  console.log("homeGrandGlobalData", homeGrandGlobalData);
  return (
    <>
      <Imports.ReusableBox
        sx={{
          mt: 1,
          backgroundColor: "#f3f6f999",
          width: "100%",
          height: "auto",
          padding: "30px",
          marginBottom: "1px",
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
                slidesPerView: 3,
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
            modules={[Navigation, Autoplay]}
            className="mySwiper3"
            style={{
              "--swiper-navigation-size": "10px", // Set the size you desire
            }}
          >
            {/* // console.log("grand", item.content_image_id[0]), */}
            {/* {imageData?.map((item, index) => ( */}
            {homeGrandGlobalData && homeGrandGlobalData?.data.map((item, index) => (
              <SwiperSlide key={index}>
                <Imports.ReusableBox
                  // elevation={1}
                  sx={{
                    margin: "2px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    marginBottom: "50px",
                    border: "1px solid #9e9e9e",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Imports.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <img
                      src={item?.content_image_id[0]}
                      // src={item.img}
                      alt=""
                      width={"70%"}
                      height={"70%"}
                      loading="lazy"
                    />
                    <Imports.ReusableTypography
                      variant="h6"
                      sx={{ fontWeight: 500 }}
                    >
                      {item.product}
                    </Imports.ReusableTypography>
                    <Imports.ReusableTypography
                      variant="h4"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.discount}
                    </Imports.ReusableTypography>
                  </Imports.Box>
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
