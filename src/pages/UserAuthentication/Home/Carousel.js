import React from 'react';
import { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Typography } from '@mui/material';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSlider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getHomeCarouselDataInitiate } from '../../../redux/actions/home/getHomeCarouseDataActions';
import { useSelector, useDispatch } from "react-redux";
  const items = [
    {
      image:
        "https://backendd.s3.ap-southeast-2.amazonaws.com/xg83quywfh3r1h8mdg082n4qajnr?response-content-disposition=inline%3B%20filename%3D%22flowers-276014_640.jpg%22%3B%20filename%2A%3DUTF-8%27%27flowers-276014_640.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVRUVVKJKA3V6YXTF%2F20240401%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240401T095846Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=198aeec4abb268863aa3ad67a8e0e6b46137a2305984b7366d2f5759106c9a83",
      caption: "Slide 1",
    },
    {
      image: "assets/imgs/background.jpg",
      caption: "Slide 1",
    },
    {
      image: "assets/imgs/mainSigninBg.jpg",
      caption: "Slide 2",
    },
    {
      image: "assets/imgs/background.jpg",
      caption: "Slide 3",
    },
    // {
    //   image: "assets/imgs/carousel1.jpg",
    //   caption: "Slide 4",
    // },
    {
      image: "assets/imgs/carousel2.jpg",
      caption: "Slide 5",
    },
  ];  
const Carousel = () => {
  const dispatch = useDispatch();
  // const contentNames = [
  //   "home_carousel_data1",
  //   "home_carousel_data2",
  //   "home_carousel_data3",
  //   "home_carousel_data4",
  //   "home_carousel_data5",
  //   "home_carousel_data6",
  // ];
  
  // const queryString = contentNames
  //   .map((name, index) => `content_name[]=${name}`)
  //    .join("&");

     useEffect(() => {
       dispatch(getHomeCarouselDataInitiate());
     }, [dispatch]);
      const homeCarouselData = useSelector((state) => state.homecarouseldata.data);
      // console.log("homeCarouselData", homeCarouselData?.data[0].data);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay, Navigation]}
        className="mySwiper1"
      >
        {homeCarouselData?.data.map(
          (item, index) => (
            // console.log("item", item.data[0]),
            (
              <SwiperSlide key={index} style={{ height: "30rem" }}>
                <img
                  src={item.content_image_id[0]}
                  loading="lazy"
                  alt="1"
                  style={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            )
          )
        )}
      </Swiper>
    </>
  );
}

export default Carousel;