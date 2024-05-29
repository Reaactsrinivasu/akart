import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector, useDispatch } from "react-redux";
// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Imports from "../../../common/Imports";
import { loadHomeTodayDealsDataInitiate } from "../../../redux/actions/home/getHomeTodayDealsActions";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
const TodaysDeals = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadHomeTodayDealsDataInitiate());
  }, [dispatch]);
  const homeTodayDealsData = useSelector(
    (state) => state.hometodaydealsdata?.data?.data?.data || []
  );
 const getProductHandler = (item) => {
   if (item) {
     navigate(`/products/sub_category_filter?sub_category_name=${item}`);
   }
 };
  return (
    <>
      <Imports.ReusableBox
        sx={{
          mt: 1,
          backgroundColor: "#FFFFFF",
          width: "100%",
          padding: "10px",
        }}
      >
        <Imports.ReusableTypography
          variant="h2"
          sx={{ padding: 3, fontWeight: 500, color: "#222" }}
        >
          TODAY DEALS
        </Imports.ReusableTypography>
        <Imports.ReusableGrid container>
          {/* <Imports.Grid itme> */}
          <Swiper
            // onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={6}
            breakpoints={{
              1440: {
                slidesPerView: 6,
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
            {/* {homeTodayDealsData?.data.map( */}
            {homeTodayDealsData &&
              homeTodayDealsData?.data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Imports.ReusableBox
                    // elevation={1}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      marginBottom: "20px",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "box-shadow 0.3s",
                      "&:hover": {
                        // boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        // boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
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
                        paddingTop: "10px",
                      }}
                    >
                      {/* <IconButton>
                        <FavoriteOutlinedIcon
                          disableRipple
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            left: "76px",
                            top: "2px",
                            color: "#c2c2c2",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </IconButton> */}
                      <Box
                        component="img"
                        // src={item?.content_image_id[0]}
                        src={item?.content_image_id[2]}
                        // src={item.img}
                        alt=""
                        loading="lazy"
                        style={{ width: "94%", height: "11rem" }}
                        onClick={() => {
                          getProductHandler(item.sub_category);
                        }}
                      />
                    </Imports.Box>
                    <Imports.Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {/* <Imports.Link
                      component="button"
                      variant="body2"
                      underline="none"
                      sx={{
                        backgroundColor: "#FFA500",
                        color: "#222",
                        borderRadius: "5px",
                        whiteSpace: "nowrap",
                        padding: "6px 20px",
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.discount}
                    </Imports.Link> */}
                      <Imports.Button
                        variant="contained"
                        sx={{
                          padding: "5px 10px",
                          // height: "25px",
                          color: "#FFFCFC",
                          bgcolor: "#FFA500",
                          borderColor: "#2C7E34",
                          textDecoration: "none",
                          textTransform: "none",
                          borderRadius: "8px",
                          fontSize: "10px",
                          whiteSpace: "nowrap",
                          // boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
                          "&:hover": {
                            bgcolor: "#FFA500",
                            boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
                          },
                        }}
                      >
                        {item.discount}
                      </Imports.Button>
                      <Imports.ReusableTypography
                        // component="span"
                        variant="subtitle2"
                        sx={{ color: "#FFA500" }}
                      >
                        {item.data}
                      </Imports.ReusableTypography>
                    </Imports.Box>
                    <Imports.Box
                      sx={{ display: "flex", justifyContent: "left" }}
                    >
                      <Imports.ReusableTypography
                        variant="body1"
                        sx={{
                          width: "auto",
                          fontWeight: "bold",
                          padding: 2,
                          marginLeft: "5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: "blue",
                        }}
                      >
                        {item.description}
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

export default TodaysDeals;
