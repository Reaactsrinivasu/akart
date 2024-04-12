import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
import ReactImageMagnify from "react-image-magnify";
import ReusableListwithImgDescription from "../../../components/ListwithImgDescription";
import InnerPageBrandsLists from "./InnerPageBrandsLists";
import InnerPageProductList from "./InnerPageProductList";
import Imports from "../../../common/Imports";
const InnerProductDetails = () => {
  const navigate = useNavigate();
  const productImages = [
    {
      id: 1,
      title: "45 W SUPERVOOC Charge with 5000 mAh Massive Battery",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/i/w/-original-imagzk4mfg6zf2fv.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
    {
      id: 2,
      title: "Dimensity 6100+ 6nm 5G",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/t/4/-original-imagzk4majyvsnzp.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
    {
      id: 3,
      title: "12.07 cm (6.72) 120 Hz FHD+ Display",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/1/t/-original-imagzk4mmcfkvh8k.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
    {
      id: 4,
      title: "7.69 mm Ultra-slim Trendy Watch Design",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/7/2/-original-imagzk4mbuee4rek.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
    {
      id: 5,
      title: "50 MP AI Camera",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/c/6/-original-imagzk4m85uc7yvw.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
    {
      id: 6,
      title: "Vapour Chamber Cooling System",
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/o/5/-original-imagzk4maggrh8qa.jpeg?q=70&crop=false",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore, reprehenderit quia recusandae in vero beatae officiis? Odio, necessitatibus! Aperiam eius animi consequuntur blanditiis, unde id odio harum esse consequatur.",
    },
  ];
  const productDetails = [
    {
      id: "1",
      // image: "assets/imgs/phone.jpg",
      image: "assets/imgs/phone1.png",
      title1:
        "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
      title2: "",
      title3: "",
      actualPrice: "",
      discount: "",
      discountPrice: "",
      rating: "4.2★",
      ratedes: "1,92,450 Ratings & 10,456 Reviews",
      descList: [
        "Supported Apps: Netflix|Prime Video|",
        "Disney+Hotstar|Youtube",
        "Operating System: Tizen",
        "Resolution: HD Ready 1366 x 768 Pixels",
        "Sound Output: 20 W",
        "Refresh Rate: 50 Hz",
      ],
      list: [
        { item: "Available offers" },
        {
          item: "Bank Offer 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹10,000 and above",
        },
        // "T&C",
        {
          item: "Bank Offer 10% off on Citi-branded Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above",
        },
        // "T&C",
        {
          item: "Bank Offer Flat ₹750 off on OneCard Credit Card EMI Transactions on orders of ₹12,500 and above",
        },
        // "T&C",
        {
          item: "Partner OfferFlat 1% Instant discount up to ₹ 1,000 on purchase of Flipkart Digital Gift Cards",
        },
        {
          item: "Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000",
        },
        {
          item: "Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!",
        },
        {
          item: "No cost EMI ₹7,333/month. Standard EMI also available",
        },
        {
          item: "Extra 10% Off On Combo Mobile & Casecover- Oct'24",
        },
        {
          item: "Extra 10% off on Combo with Vivo - Oct'24",
        },
        {
          item: "Extra ₹200 off on Noise Pure Pods",
        },
      ],
    },
    // {
    //   id: "2",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.6★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "3",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "4",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.8★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "5",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "6",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.2★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
  ];
  const initialImage = productImages[0]?.image;
  const [hoveredImage, setHoveredImage] = useState(initialImage);
  const handleHoverImage = (image) => {
    setHoveredImage(image);
    // alert()
  }
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
          <Grid container p={0} spacing={1}>
            {/*magnifier component */}
            <Grid item xs={12} sm={6} md={5}>
              <Grid
                container
                p={0}
                spacing={0}
                sx={{ position: "sticky", top: "70px", marginTop: "1px" }}
              >
                <Grid item xs={12} sm={12} md={2}>
                  <Grid container spacing={0}>
                    {productImages?.map((item, index) => (
                      <Grid
                        item
                        // xs={12}
                        // sm={12}
                        md={10}
                        key={index}
                        sx={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Box
                          onMouseOver={() => {
                            handleHoverImage(item.image);
                          }}
                          component="img"
                          src={item.image}
                          alt="1"
                          sx={{
                            padding: "5px",
                            width: "70px",
                            height: "auto",
                            border: "1px solid lightgrey",
                            cursor: "pointer",
                            transition: "padding 0.3s",
                            "&:hover": {
                              padding: "7px",
                              border: "2px solid blue",
                            },
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <Box
                    sx={{
                      // width: "100%",
                      // height: "100%",
                      backgroundColor: "#FFFFFF",
                      // border: "1px solid",
                      borderLeft: 0,
                      // borderColor: "divider",
                      // borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // justifyContent:'center'
                      padding: 1,
                    }}
                  >
                    <Box>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: hoveredImage,
                            sizes:
                              "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                            // srcSet: this.srcSet,
                            // sizes:
                            //   "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                          },
                          largeImage: {
                            src: hoveredImage,
                            width: 2000,
                            height: 1800,
                            marginLeft: 10,
                          },
                          enlargedImageContainerDimensions: {
                            width: "220%",
                            height: "100%",
                          },
                          isHintEnabled: true,
                          shouldHideHintAfterFirstActivation: false,
                          pressDuration: 0, // set a very high value or disable it
                          hoverDelayInMs: 0, // to activate zoom instantly on hover
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* product description component */}
            <Grid item xs={12} sm={6} md={7}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  // border: "1px solid",
                  // borderColor: "divider",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  p={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Home {">"} Mobiles & Accessories {">"} Mobiles {">"} OnePlus
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  p={1}
                  mt={1}
                  mb={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Showing 1 – 24 of 749 results for "new launch mobiles"
                </Typography>
                <Divider variant="fullWidth" />
                {productDetails?.map((item, index) => (
                  <Grid
                    p={1}
                    container
                    spacing={0}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    // alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={12}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} md={8}>
                          <Typography variant="h5" fontWeight="bold">
                            {item.title1}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography variant="h4" sx={{ color: "#212121" }}>
                              ₹2500
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                              }}
                            >
                              <Typography
                                variant="h4"
                                fontWeight="bold"
                                sx={{
                                  color: "#878787",
                                  textDecorationLine: "line-through",
                                }}
                              >
                                ₹2500
                              </Typography>
                              <Typography
                                variant="h4"
                                sx={{ ml: 3, color: "#308150" }}
                              >
                                20% OFF
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box
                          // variant="contained"
                          // component="button"
                          sx={{
                            padding: "5px 10px",
                            backgroundColor: "#3B7E42",
                            borderRadius: "12px",
                            fontSize: "15px",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#3B7E42" },
                          }}
                        >
                          {item.rating}
                        </Box>
                        <Typography sx={{ color: "#878787" }}>
                          {item.ratedes}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <Typography variant="h5" mt={1} fontWeight="bold">
                        Available offers :
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <ReusableListWithDotIcon
                        list={productDetails[0]?.list}
                        title="T&C"
                        icon="icon"
                        maxItemsToShow="6"
                        style={{
                          color: "#212121",
                          fontSize: "0.923rem",
                          margin: 3,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      mt={1}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={1}>
                          <Typography variant="h5" mt={1} color="#878787">
                            Description
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={11}>
                          <Typography
                            variant="h6"
                            mt={1}
                            textAlign="justify"
                            sx={{
                              marginLeft: "10px",
                              color: "#212121",
                              ml: 3,
                              mt: 1,
                            }}
                          >
                            {" "}
                            The weight of the phone is 207 g, and the weight of
                            the screen protector may add an additional 3g. The
                            size and weight of the mobile phone may vary
                            according to configuration, manufacturing process
                            and measurement method. 3. Due to the mobile phone
                            system file occupying space (including Android
                            system and pre-installed apps), the available memory
                            capacity is less than this value. Storage capacity
                            will vary based on software version and may vary
                            from device to device. 4. Photo pixels of different
                            camera modes may vary, please refer to the actual
                            situation. Video pixels of different shooting modes
                            may also vary, please refer to the actual
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <Box
                        sx={{
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        <ReusableListwithImgDescription
                          list={productImages}
                          maxItemsToShow="3"
                          sx={{
                            color: "#212121",
                            fontSize: "0.923rem",
                            margin: 3,
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
          {/* Comparing Products  */}
          <Box
            mt={5}
            p={1}
            sx={{
              backgroundColor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h3" p={3}>
              Comparing Products
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={4}>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={12} sm={10} md={10}>
                    <img
                      src="assets/imgs/phone1.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={8}>
                    <InnerPageProductList />
                    <Divider variant="fullWidth" />
                    <InnerPageBrandsLists />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={12} sm={10} md={10}>
                    <img
                      src="assets/imgs/phone1.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={8}>
                    <InnerPageProductList />
                    <Divider variant="fullWidth" />
                    <InnerPageBrandsLists />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={12} sm={10} md={10}>
                    <img
                      src="assets/imgs/phone1.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={8}>
                    <InnerPageProductList />
                    <Divider variant="fullWidth" />
                    <InnerPageBrandsLists />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          {/* Rating Reviews */}
          <Box
            mt={5}
            p={1}
            sx={{
              backgroundColor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Grid
              container
              spacing={1}
              p={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              <Grid item xs={12} sm={6} md={6}>
                <Typography variant="h3">Rating & Reviews</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Imports.ReusableLink
                  variant="h5"
                  // variant="body2"
                  underline="none"
                  sx={{
                    cursor: "pointer",
                    color: "blue",
                    border: "1px solid",
                    borderColor: "divider",
                    // p: 2,
                  }}
                  // onClick={}
                >
                  Rating & Reviews
                </Imports.ReusableLink>
              </Grid>
            </Grid>
            {/* <Box
              p={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h3">Rating & Reviews</Typography>
              <Imports.ReusableLink
                variant="h5"
                // variant="body2"
                underline="none"
                sx={{
                  cursor: "pointer",
                  color: "blue",
                  border: "1px solid",
                  borderColor: "divider",
                  p:2,
                }}
                // onClick={}
              >
                Rating & Reviews
              </Imports.ReusableLink>
            </Box> */}
            <Grid container spacing={1}></Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default InnerProductDetails;
