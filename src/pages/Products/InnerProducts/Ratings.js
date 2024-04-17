import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Slider,
} from "@mui/material";
import { styled } from "@mui/system";
const Ratings = () => {
    const ratingData = [
      { rating: 5, color: "#64dd17", value: 10, users: 23 },
      { rating: 4, color: "#76ff03", value: 8, users: 35 },
      { rating: 3, color: "#ffff00", value: 6, users: 45 },
      { rating: 2, color: "#ffab00", value: 4, users: 59 },
      { rating: 1, color: "#ff5722", value: 3, users: 68 },
    ];
    const CustomSlider = styled(Slider)({
      width: "100%",
      height: 4, // Height of the slider track
      borderRadius: 2, // Border radius to make the track rounded
      "& .MuiSlider-thumb": {
        display: "none", // Hide the slider thumb
      },
      "& .MuiSlider-rail": {
        backgroundColor: "#bdbdbd", // Background color of the slider track
        opacity: 1, // Opacity of the track
      },
      "& .MuiSlider-track": {
        backgroundColor: "#2962ff", // Color of the filled part of the slider track
      },
    });
    return (
      <>
        <Box
          p={2}
          sx={{
            width: "100%",
            height: "100%",
            // border: "1px solid",
            // borderColor: "divider",
            backgroundColor: "#FFFFFF",
          }}
        >
          {ratingData?.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: 1.5,
                mb: 0.5,
              }}
              key={index}
            >
              <Typography variant="h5">{item.rating}</Typography>
              <Typography variant="h3">★</Typography>
              <CustomSlider
                value={item.value} // Initial value of the slider
                aria-label="Custom slider" // Accessible label for the slider
                min={0} // Minimum value of the slider
                max={10} // Maximum value of the slider
                step={1} // Increment/decrement step
                sx={{
                  "& .MuiSlider-track": {
                    backgroundColor: item.color, // Set background color of the slider track
                  },
                }}
              />
              <Typography variant="body1">{item.users}</Typography>
            </Box>
          ))}
        </Box>
      </>
    );
};
    
export default Ratings;