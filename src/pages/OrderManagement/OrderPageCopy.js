import React from "react";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import OrderFilter from "./OrderFilter";
import OrderDetails from "./OrderDetails";
import Searchbar from "../../components/Searchbar";
const OrderPage = () => {
 
    return (
      <>
        <Box>
          <Grid container p={1} spacing={2} mt={1.5}>
            {/* filter component */}
            <Grid item xs={12} sm={4} md={3}>
              <Grid
                container
                p={0}
                spacing={0}
                sx={{ position: "sticky", top: "70px", marginTop: "1px" }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <OrderFilter />
                </Grid>
              </Grid>
            </Grid>
            {/* description component */}
            <Grid item xs={12} sm={8} md={9}>
              <Grid container p={1} spacing={0.5}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <ListItemText
                    primary="All Orders"
                    secondary="From anytime"
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
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // border: "2px solid #ff7e00",
                      border: "1px solid #eeeeee",
                      // borderColor: "divider",
                      // backgroundColor: "#FFFFFF",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "6px",
                      marginLeft: "8%",
                      width: "auto",
                      position: "relative",
                      overflow: "hidden",
                      // maxWidth: "30%",
                      flexGrow: 1,
                      height: "55px",
                      mt: 1,
                      "&:hover": {
                        border: "1px solid #CEC1C1",
                      },
                    }}
                  >
                    <Searchbar title="Search in orders..." />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #eeeeee",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "10px 5px",
                      marginLeft: "8%",
                      width: "auto",
                      position: "relative",
                      overflow: "hidden",
                      // maxWidth: "20%",
                      // flexGrow: 1,
                      height: "55px",
                      mt: 1,
                      "&:hover": {
                        border: "1px solid #CEC1C1",
                      },
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="assets/imgs/filterIcon.png"
                          sx={{
                            marginLeft: "-4px",
                            width: 30,
                            height: 30,
                            "&.MuiAvatar-root": {
                              borderRadius: 0,
                            },
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Filters"
                        primaryTypographyProps={{
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItem>
                  </Box>
                </Grid>
              </Grid>
              {/* <Divider variant="fullWidth" /> */}
                <Grid container mt={3.5}>
                   <Grid item xs={12} sm={12} md={12}>
                    <OrderDetails />
                   </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default OrderPage;
