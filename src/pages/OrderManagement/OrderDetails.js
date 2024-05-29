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
import {useNavigate} from "react-router-dom";
import ReusableOpenOrdersList from '../../components/OpenOrdersList';
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableLink from '../../components/Link';
import { Navigate } from 'react-router-dom';
const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          p: 4,
          width: "100%",
          height: "100%",
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
              <ListItem sx={{ gap: 2 }}>
                <ListItemAvatar>
                  {/* <Avatar
                  alt="Remy Sharp"
                  src={props.icon}
                  sx={{
                    // marginLeft: "-4px",
                    // width: 38,
                    // height: 38,
                    // "&.MuiAvatar-root": {
                    //   borderRadius: 0,
                    // },
                  }}
                /> */}
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <CloseIcon sx={{ fontSize: "50px" }} />
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
                    color: "#121212",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  primary="Cancelled"
                  secondary="Since we are unable to deliver your order"
                  p={2}
                />
                <KeyboardArrowRightIcon />
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
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        ONEPLUS NORDE CE3 LiTE
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Order Id : #0345-8901-383
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Seller :Treasure Haul Union
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <ReusableLink
                        onClick={() => navigate("/vieworders")}
                        variant="h5"
                        underline="none"
                        sx={{
                          cursor: "pointer",
                          color: "blue",
                          // m: 3,
                          transition: "0.3s",
                          fontWeight: 600,
                        }}
                      >
                        View Order Details
                      </ReusableLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Sale PRICE : 30,000/-
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
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
              <ListItem sx={{ gap: 2 }}>
                <ListItemAvatar>
                  {/* <Avatar
                  alt="Remy Sharp"
                  src={props.icon}
                  sx={{
                    // marginLeft: "-4px",
                    // width: 38,
                    // height: 38,
                    // "&.MuiAvatar-root": {
                    //   borderRadius: 0,
                    // },
                  }}
                /> */}
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <CloseIcon sx={{ fontSize: "50px" }} />
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
                    color: "#121212",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  primary="Cancelled"
                  secondary="Since we are unable to deliver your order"
                  p={2}
                />
                <KeyboardArrowRightIcon />
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
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        ONEPLUS NORDE CE3 LiTE
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Order Id : #0345-8901-383
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Seller :Treasure Haul Union
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <ReusableLink
                        onClick={() => navigate("/vieworders")}
                        variant="h5"
                        underline="none"
                        sx={{
                          cursor: "pointer",
                          color: "blue",
                          // m: 3,
                          transition: "0.3s",
                          fontWeight: 600,
                        }}
                      >
                        View Order Details
                      </ReusableLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Sale PRICE : 30,000/-
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
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
              <ListItem sx={{ gap: 2 }}>
                <ListItemAvatar>
                  {/* <Avatar
                  alt="Remy Sharp"
                  src={props.icon}
                  sx={{
                    // marginLeft: "-4px",
                    // width: 38,
                    // height: 38,
                    // "&.MuiAvatar-root": {
                    //   borderRadius: 0,
                    // },
                  }}
                /> */}
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <CloseIcon sx={{ fontSize: "50px" }} />
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
                    color: "#121212",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  primary="Cancelled"
                  secondary="Since we are unable to deliver your order"
                  p={2}
                />
                <KeyboardArrowRightIcon />
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
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        ONEPLUS NORDE CE3 LiTE
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Order Id : #0345-8901-383
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="h5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Seller :Treasure Haul Union
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <ReusableLink
                        onClick={() => navigate("/vieworders")}
                        variant="h5"
                        underline="none"
                        sx={{
                          cursor: "pointer",
                          color: "blue",
                          // m: 3,
                          transition: "0.3s",
                          fontWeight: 600,
                        }}
                      >
                        View Order Details
                      </ReusableLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} p={2}>
                      <Typography
                        variant="5"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Sale PRICE : 30,000/-
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