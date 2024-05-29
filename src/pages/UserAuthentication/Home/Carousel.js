import React from "react";
import { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSlider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { loadHomeCarouselDataInitiate } from "../../../redux/actions/home/getHomeCarouseDataActions";
import { useSelector, useDispatch } from "react-redux";
// import { initiateLoadCarouselData } from '../../../redux/actions/getHomepageReusableActions';
import { useLocation, useNavigate } from "react-router-dom";
const Carousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadHomeCarouselDataInitiate());
  }, [dispatch]);
  const homeCarouselData = useSelector(
    (state) => state?.homecarouseldata?.data?.data || []
  );
  console.log("homeCarouselData", homeCarouselData?.data);
  const getProductHandler = (item) => {
    console.log('item in carousel', item);
    if (item) {
      navigate(`/products/sub_category_filter?sub_category_name=${item}`);
    }
  };
  //  useEffect(() => {
  //    dispatch(initiateLoadCarouselData());
  //  }, [dispatch]);
  //   const homeCarouselData = useSelector((state) => state.homecarouseldata.data);
  //   // console.log("homeCarouselData", homeCarouselData?.data[0].data);
  //   console.log("homeCarouselData", homeCarouselData);
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
        {homeCarouselData &&
          homeCarouselData?.data?.map((item, index) => (
            // console.log("item", item.data[0]),
            <SwiperSlide key={index} style={{ height: "25rem" }}>
              <Box
                component="img"
                src={item.content_image_id[0]}
                loading="lazy"
                alt="1"
                style={{ width: "100%", height: "100%",cursor:'pointer' }}
                onClick={() => {
                  getProductHandler(item.sub_category);
                }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
