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

const NeedHelp = () => {
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
      <Typography variant="h6" textAlign="justify" sx={{ color: "#000000" }}>
        Need help? Check our 
        <TextLink title="help pages" /> or <TextLink title="contact us" />
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign="justify"
        sx={{ color: "#000000" }}
      >
        When your order is placed, we'll send you an e-mail message
        acknowledging receipt of your order. If you choose to pay using an
        electronic payment method (credit card, debit card or net banking), you
        will be directed to your bank's website to complete your payment. Your
        contract to purchase an item will not be complete until we receive your
        electronic payment and dispatch your item. If you choose to pay using
        Pay on Delivery (POD), you can pay using cash/card/net banking when you
        receive your item.
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "#000000" }}>
        See Actcart's 
        <TextLink title="Return Policy" />
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "#000000", mt: 4, mb: 4 }}>
        Need to add more items to your order? Continue shopping on the 
        <TextLink title="A-Kart.homepage" />
      </Typography>
    </>
  );
};

export default NeedHelp;
