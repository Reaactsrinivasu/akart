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
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <Grid container justifyContent="center" spacing={2} p={2}>
            <Grid item xs={10} sm={10} md={10}>
              <ViewOrderPage />
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default ViewOrderDetails;
