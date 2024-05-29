import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import required modules
import Imports from "../../../common/Imports";
import { Typography, Box ,Grid} from "@mui/material";
const InnerProductsRecommendBrowsingHistory = () => {
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
              Recommended based on your browsing history
            </Imports.ReusableTypography>
            <Grid container spacing={2} mt={0.5}>
              <Grid item xs={12} sm={12} md={3}>
                {/* <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "pink",
                  }}
                ></Box> */}
                <Imports.Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                    // paddingTop: "10px",
                    // backgroundColor: "pink",
                  }}
                >
                  <img
                    src="assets/imgs/phone-2.png"
                    alt=""
                    loading="lazy"
                  />
                  <Typography variant="h4" mt={1}>ONEPLUS NORDE CE2 LITE</Typography>
                  <Typography variant="h4" color="#316630">85% OFF</Typography>
                </Imports.Box>
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <Grid container spacing={1}>
                  {imageData.map((item, index) => (
                    <Grid item xs={12} sm={12} md={4}>
                      {/* <Box
                        sx={{
                          width: "100%",
                          height: "100px",
                          backgroundColor: "pink",
                        }}
                      ></Box> */}
                      <Imports.ReusableBox
                        // elevation={1}
                        sx={{
                          margin: "2px",
                          backgroundColor: "#FFFFFF",
                          borderRadius: "8px",
                          // marginBottom: "50px",
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
                            // paddingTop: "10px",
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
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                          }}
                        >
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
                          <Imports.ReusableTypography
                            component="span"
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
                              fontWeight: "bold",
                              padding: 1.5,
                              marginLeft: "5px",
                            }}
                          >
                            {item.description}
                          </Imports.ReusableTypography>
                        </Imports.Box>
                      </Imports.ReusableBox>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Imports.ReusableBox>
        </Box>
      </Box>
    </>
  );
};

export default InnerProductsRecommendBrowsingHistory;
