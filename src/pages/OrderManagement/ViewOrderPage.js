import React from 'react'
import {
  Box,
  Typography,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  Collapse,
  ListItemText,
  Avatar,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router-dom";
import ReusableOpenOrdersList from '../../components/OpenOrdersList';
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableLink from '../../components/Link';
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { Navigate } from 'react-router-dom';
const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          mt: 3,
          p: 4,
          width: "100%",
          height: "auto",
          //   height: "100%",
          border: "1px solid #CEC1C1",
          backgroundColor: "#e0e0e0",
          borderRadius: "12px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid #CEC1C1",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              <Grid container spacing={1} p={4}>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Typography variant="h3" fontWeight="bold">
                    Shipping Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Typography variant="h4" color="text.secondary">
                    Shipping to USER NAME : User Address :D.no, Street Name,
                    Mandal Name, City Name, District , Pincode .
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="h3" fontWeight="bold">
                        Payment Method :{" "}
                        <span style={{ fontSize: "25px" }}>
                          Pay on delivery
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} textAlign="center">
                      <ReusableLink
                        variant="h4"
                        underline="none"
                        sx={{
                          mt: 0.5,
                          marginRight: 5,
                          cursor: "pointer",
                          color: "blue",
                          transition: "0.3s",
                          fontWeight: 600,
                        }}
                      >
                        Order Invoice
                      </ReusableLink>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="h3" fontWeight="bold" mb={1}>
                        Order Summary:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Typography variant="h4" color="text.secondary">
                          Items Subtotal : 12,000.00
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          Shipping Cost :100.00
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          Total :12100.00
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          Grand Total :121000.00
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} textAlign="center">
                      <Rating
                        name="size-large"
                        defaultValue={2}
                        sx={{ fontSize: 42 }}
                      />
                      <ReusableLink
                        variant="h4"
                        underline="none"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          marginRight: 5,
                          cursor: "pointer",
                          color: "orange",
                          transition: "0.3s",
                          //   fontWeight: 600,
                        }}
                      >
                        Write Review
                      </ReusableLink>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <ListItem sx={{ gap: 2, ml: 1 }}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <DeliveryDiningIcon
                      sx={{ width: 50, height: 50, color: "#ffeb3b" }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 600, // Add fontWeight here
                    },
                    color: "#878787",
                    "&:hover": {
                      color: "#2874f0",
                    },
                  }}
                  primaryTypographyProps={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    mb: 0.25,
                    color: "green",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  primary="Delivered"
                  secondary="On Wed, 19th Jan 2024"
                  p={2}
                />
                {/* <KeyboardArrowRightIcon /> */}
              </ListItem>
              <Grid container spacing={1} p={3}>
                <Grid item xs={12} sm={12} md={3} p={1}>
                  <img
                    src="assets/imgs/phone-2.png"
                    alt=""
                    style={{
                      width: "70%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <Grid container p={2} spacing={0} mt={0}>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        ONEPLUS 12R Lite PRO
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h4"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Seller :Treasure Haul Union
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h4"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Sale PRICE : 1,30,000/-
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Exchange/Return Window closed on wed,19 Jan 2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default OrderDetails;