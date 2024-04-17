import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box, Divider, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Imports from "../../../common/Imports";

const Reviews = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const reviewData = [
        {
            rating: "4.2★",
            review: "Excellent",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 123,
            dislikes: 29,
        },
        {
            rating: "3.4★",
            review: "Terrific",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks.click much but the photos are good. Battery life is awesome. good haptic feedback.",
            likes: 445,
            dislikes: 91,
        },
        {
            rating: "4.6★",
            review: "Splendid",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 852,
            dislikes: 89,
        },
        {
            rating: "3.9★",
            review: "Awesome",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 654,
            dislikes: 89,
        },
        {
            rating: "4.5★",
            review: "Incredible",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 962,
            dislikes: 89,
        },
        {
            rating: "4.3★",
            review: "Fantabulas",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 369,
            dislikes: 89,
        },
        {
            rating: "2.2★",
            review: "Average",
            content:
                "I have spent 3 days with this phone and absolutely love it. Great screen both inside and outside, One will really enjoy reading the content with the phone open, front screen is sufficient for all the tasks. I click much but the photos are good. Battery life is awesome. good haptic feedback. Ankit Dixit ,Certified Buyer, Indore,1 month ago",
            likes: 951,
            dislikes: 89,
        },
    ];
    const maxItemsToShow = 2;
    return (
        <>
            <Box
                p={2}
                sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "#FFFFFF",
                }}
            >
                <Grid container spacing={2} mt={0.5}>
                    {reviewData
                        ?.slice(
                            0,
                            showAll ? reviewData?.length : maxItemsToShow
                        )
                        .map((item, index) => (
                            <Grid item xs={12} sm={12} md={12} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        // variant="contained"
                                        // component="button"
                                        sx={{
                                            padding: "2px 8px",
                                            backgroundColor: "#3B7E42",
                                            borderRadius: "5px",
                                            fontSize: "15px",
                                            color: "#FFFFFF",
                                            "&:hover": { backgroundColor: "#3B7E42" },
                                        }}
                                    >
                                        {item.rating}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Typography>{item.review}</Typography>
                                        <Typography
                                            sx={{
                                                color: "#878787",
                                                fontSize: "12px",
                                                textAlign: "justify",
                                            }}
                                        >
                                            {item.content}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                gap: 5,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <IconButton>
                                                    <ThumbUpOffAltIcon
                                                        color="disabled"
                                                        sx={{ fontSize: "20px" }}
                                                    />
                                                </IconButton>
                                                <Typography
                                                    color="#c2c2c2"
                                                    sx={{ fontSize: "14px" }}
                                                >
                                                    {item.likes}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {/* color="disabled" */}
                                                <IconButton>
                                                    <ThumbDownOffAltIcon
                                                        color="disabled"
                                                        sx={{ fontSize: "20px" }}
                                                    />
                                                </IconButton>
                                                <Typography
                                                    color="#c2c2c2"
                                                    sx={{ fontSize: "14px" }}
                                                >
                                                    {item.dislikes}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    {maxItemsToShow ? (
                        <>
                            <Imports.ReusableLink
                                onClick={toggleShowAll}
                                variant="body2"
                                underline="none"
                                sx={{
                                    cursor: "pointer",
                                    color: "blue",
                                    m: 3,
                                    transition: "0.3s",
                                }}
                            >
                                {showAll ? "Show less" : "Show more"}
                            </Imports.ReusableLink>
                        </>
                    ) : (
                        ""
                    )}
                </Grid>

                <Typography
                    textAlign="center"
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                >
                    Have doubts regarding this product?
                </Typography>
            </Box>
        </>
    );
}
export default Reviews;
