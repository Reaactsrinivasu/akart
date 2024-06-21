import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
import SelectAddress from "./SelectAddress";
import SelectPaymentMethods from "./SelectPaymentMethods";
import PaymentOptions from "./PaymentOptions";
import AddressForm from "./AddressForm";
import PaymentStatement from "./PaymentStatement";
import NeedHelp from "./NeedHelp";
import ItemsAndDelivery from "./ItemsAndDelivery";
const PaymentMethods = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const idsData = location?.state;
   console.log("ids data", idsData);
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    //   padding: theme.spacing(2),
    ...theme.typography.body2,
    //   textAlign: "center",
  }));
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          spacing={1}
          mt={4}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Grid item xs={12} sm={12} md={12} textAlign="center">
            <Typography variant="h2" sx={{ color: "#0F1111", fontWeight: 400 }}>
              Payments
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Box
              sx={{
                mt: 2,
                width: "100%",
                height: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={9}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Grid container spacing={0} p={4}>
                      {/* address */}
                      <Grid item xs={12} sm={12} md={12}>
                        <SelectAddress />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} p={1} ml={1}>
                        <AddressForm />
                      </Grid>
                      {/* credit or debit cards */}
                      <Grid item xs={12} sm={12} md={12}>
                        <SelectPaymentMethods />
                      </Grid>
                      {/* demo paper */}
                      <Grid item xs={12} sm={12} md={12} p={1} ml={1}>
                        <PaymentOptions data={idsData} />
                      </Grid>
                      {/* Items and Address */}
                      <Grid item xs={12} sm={12} md={12}>
                        <ItemsAndDelivery />
                      </Grid>
                      {/* Need help */}
                      <Grid item xs={12} sm={12} md={12}>
                        <NeedHelp />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                {/* payment statement */}
                <Grid item xs={12} sm={12} md={3}>
                  {/* <PaymentStatement /> */}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default PaymentMethods;
