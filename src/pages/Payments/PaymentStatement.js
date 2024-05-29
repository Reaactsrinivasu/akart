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
const PaymentStatement = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FFFFFF",
          position: "sticky",
          top: "50px",
          marginTop: "1px",
        }}
      ></Box>
    </>
  );
};

export default PaymentStatement;
