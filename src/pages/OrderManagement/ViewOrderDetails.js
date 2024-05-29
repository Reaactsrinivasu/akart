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
import ViewOrderPage from "./ViewOrderPage";
const ViewOrderDetails = () => {
    return (
      <>
        <Box>
          <Grid container p={1} spacing={2} mt={1.5}>
            {/* filter component */}
            <Grid item xs={12} sm={4} md={2.5}>
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
            <Grid item xs={12} sm={8} md={9.5}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  //   bgcolor: "#FFFFFF",
                  //   borderRadius: "12px",
                }}
              >
                <Typography
                    fontWeight="bold"
                  p={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  My Orders {">"} Order details
                </Typography>
                <Typography
                  variant="h4"
                  p={1}
                  mt={0.5}
                  mb={1}
                  sx={{
                    // color: "text.secondary",
                    color: "#121212",
                  }}
                >
                  Ordered on Jan 19 ,2024 | Order Id : #1234-9045-7890
                </Typography>
                {/* <Divider variant="fullWidth" /> */}
                <ViewOrderPage />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default ViewOrderDetails;
