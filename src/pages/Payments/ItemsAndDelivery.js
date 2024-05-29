import React, { useState } from "react";
import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Layout from "../../Layout/Layout";
import Paper from "@mui/material/Paper";
import ReusableLink from "../../components/Link";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

const ItemsAndDelivery = () => {
  const TextLink = ({ title }) => {
    return (
      <ReusableLink
        variant="subtitle2"
        underline="none"
        sx={{
          cursor: "pointer",
          color: "blue",
          // m: 3,
          transition: "0.3s",
          fontWeight: 500,
        }}
      >
        {title}
      </ReusableLink>
    );
  };
  return (
    <>
      <Typography variant="h6" sx={{ color: "#000000", mb: 2, mt: 2 }}>
        3.Items and Delivery
      </Typography>
      <Divider
        variant="fullWidth"
        sx={{
          backgroundColor: "#121212", // Set the color to blue
          height: "0.5px", // Increase the height (width in horizontal divider)
          mt: 1, // Add margin to the top for spacing
          mb: 2,
        }}
      />
    </>
  );
};

export default ItemsAndDelivery;
