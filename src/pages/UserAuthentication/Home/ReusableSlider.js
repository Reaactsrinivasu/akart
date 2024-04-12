import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Imports from "../../../common/Imports";
const ReusableSlider = () => {
  const imageData = [
    {
      img: "assets/imgs/sbc-1.jpg",
    },
    {
      img: "assets/imgs/sbc-1.jpg",
    },
    {
      img: "assets/imgs/sbc-1.jpg",
    },
    {
      img: "assets/imgs/sbc-1.jpg",
    },
    {
      img: "assets/imgs/sbc-1.jpg",
    },
  ];
  return (
    <>
      <Imports.ReusableBox
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Imports.ReusableGrid container>
          {/* <Imports.Grid itme> */}
          <Swiper
            // onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              1440: {
                slidesPerView: 2,
                // autoplay: false,
              },
              // Large devices (lg)
              1024: {
                slidesPerView: 2,
                //   autoplay: false,
              },
              // Medium devices (md)
              768: {
                slidesPerView: 2,
                //   autoplay: false,
              },
              // Small devices (sm)
              576: {
                slidesPerView: 1,
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
            className="mySwiper4"
            style={{
              "--swiper-navigation-size": "10px", // Set the size you desire
            }}
          >
            {imageData?.map((item, index) => (
              <SwiperSlide key={index}>
                <Imports.Paper
                  elevation={0}
                  sx={{
                    // margin: "2px",
                    // backgroundColor: "#111",
                    borderRadius: "8px",
                    // marginBottom: "10px",
                    // border: "1px solid #eee",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    width={"100%"}
                    height="auto"
                    loading="lazy"
                  />
                </Imports.Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Imports.ReusableGrid>
      </Imports.ReusableBox>
    </>
  );
};

export default ReusableSlider;
