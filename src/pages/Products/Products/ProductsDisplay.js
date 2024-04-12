import React from "react";
import {useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  List,
  ListItemIcon,
  ListItem,
  ListItemButton,
  InboxIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
const ProductsDisplay = () => {
  const navigate = useNavigate();
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
            list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "2",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.6★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "3",
            image: "assets/imgs/phone1.png",
            title1:
              "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "3.5★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "4",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "3.8★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "5",
            image: "assets/imgs/phone1.png",
            title1:
              "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.5★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "6",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "7",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "8",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "9",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "10",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "11",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "12",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "13",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "14",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "15",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "16",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "17",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "18",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "19",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "20",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "21",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "22",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "23",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "24",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
          {
            id: "6",
            image: "assets/imgs/laptop1.jpg",
            title1:
              "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
            title2: "",
            title3: "",
            actualPrice: "",
            discount: "",
            discountPrice: "",
            rating: "4.2★",
            ratedes: "1,92,450 Ratings & 10,456 Reviews",
             list: [
              { item: "Supported Apps: Netflix|Prime Video|" },
              { item: "Disney+Hotstar|Youtube" },
              { item: "Operating System: Tizen" },
              { item: "Resolution: HD Ready 1366 x 768 Pixels" },
              { item: "Sound Output: 20 W" },
              { item: "Refresh Rate: 50 Hz" },
            ],
          },
        ];
return (
  <>
    {productDetails?.map((item, index) => (
      <div key={index}>
        <Grid container p={1} columnSpacing={1}>
          <Grid item xs={12} sm={8} md={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                bgcolor: "#FFFFFF",
                justifyContent: "center",
                // border: "1px solid",
                // borderColor: "divider",
                borderRadius: "8px",
              }}
            >
              <img
                onClick={() => navigate("/innerproducts")}
                src={item.image}
                alt="1"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#FFFFFF",
                // display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                // border: "1px solid",
                // borderColor: "divider",
                borderRadius: "8px",
              }}
            >
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
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#3B7E42",
                        borderRadius: "12px",
                        fontSize: "15px",
                        color: "#FFFFFF",
                        "&:hover": { backgroundColor: "#3B7E42" },
                      }}
                    >
                      {item.rating}
                    </Button>
                    <Typography sx={{ color: "#878787" }}>
                      {item.ratedes}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} mt={1}>
                  <ReusableListWithDotIcon icon="icon" list={productDetails[0]?.list} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" sx={{ margin: "10px" }} />
      </div>
    ))}
  </>
);
};

export default ProductsDisplay;