import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector, useDispatch } from "react-redux";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Imports from "../../../common/Imports";
import { Typography, Box } from "@mui/material";
import "../../UserAuthentication/Home/ImageSlider.css";

const InnerProductsBrowsingHistory = () => {
    const imageData = [
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Storite",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Storite",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Puma",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers from Top Brands",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Storite",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Storite",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Puma",
        discount: "UpTo 15% Off",
        subdec: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers from Top Brands",
        discount: "UpTo 15% Off",
        subdec: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Puma",
        discount: "UpTo 15% Off",
        subdec: "Limited Time Deal",
      },
      {
        img: "assets/imgs/todayImg-2.jpg",
        description: "Best offers on Puma",
        discount: "UpTo 15% Off",
        data: "Limited Time Deal",
      },
    ];
    return (
      <>
        <Box sx={{ p: 0.5 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              p: 2,
            }}
          >
            {/* <Typography variant="h3" fontWeight="600">
            Similar Products bought Together
          </Typography> */}
            <Imports.ReusableBox
              sx={{
                mt: 1,
                //   backgroundColor: "#f3f6f999",
                backgroundColor: "#FFFFFF",
                width: "100%",
                height: "auto",
                padding: "30px",
                marginBottom: "1px",
              }}
            >
              <Imports.ReusableTypography
                variant="h2"
                sx={{ padding: 2, fontWeight: 500, color: "#222" }}
              >
                Your browsing history
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
                  modules={[Navigation, FreeMode]}
                  className="mySwiper5"
                  style={{
                    "--swiper-navigation-size": "10px", // Set the size you desire
                  }}
                >
                  {imageData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Imports.ReusableBox
                        // elevation={1}
                        sx={{
                          margin: "2px",
                          backgroundColor: "#FFFFFF",
                          borderRadius: "8px",
                          marginBottom: "50px",
                          border: "1px solid #9e9e9e",
                          // transition: "box-shadow 0.3s",
                          // "&:hover": {
                          //   // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                          //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                          // },
                        }}
                      >
                        <Imports.Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "30px",
                            paddingTop: "10px",
                          }}
                        >
                          <img
                            src={item.img}
                            alt=""
                            width={"50%"}
                            height={"50%"}
                            loading="lazy"
                          />
                        </Imports.Box>

                        <Imports.Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            // gap: "20px",
                            mb:2
                          }}
                        >
                          <Imports.ReusableTypography
                            variant="body1"
                            sx={{
                              fontWeight: "bold",
                              padding: 1,
                              marginLeft: "5px",
                            }}
                          >
                            {item.description}
                          </Imports.ReusableTypography>
                          <Imports.Button
                            variant="contained"
                            sx={{
                              height: "25px",
                              color: "#FFFCFC",
                              bgcolor: "#FFA500",
                              borderColor: "#2C7E34",
                              textDecoration: "none",
                              textTransform: "none",
                              borderRadius: "6px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              "&:hover": {
                                bgcolor: "#FFA500",
                              },
                            }}
                          >
                            {item.discount}
                          </Imports.Button>

                          {/* <Imports.ReusableTypography
                            component="span"
                            sx={{ color: "#FFA500" }}
                          >
                            {item.data}
                          </Imports.ReusableTypography> */}
                        </Imports.Box>
                        {/* <Imports.Box
                          sx={{ display: "flex", justifyContent: "left" }}
                        >
                          <Imports.ReusableTypography
                            variant="body1"
                            sx={{
                              fontWeight: "bold",
                              padding: 2,
                              marginLeft: "5px",
                            }}
                          >
                            {item.description}
                          </Imports.ReusableTypography>
                        </Imports.Box> */}
                      </Imports.ReusableBox>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Imports.ReusableGrid>
            </Imports.ReusableBox>
          </Box>
        </Box>
      </>
    );
};

export default InnerProductsBrowsingHistory;
