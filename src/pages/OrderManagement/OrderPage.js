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
  Paper,
} from "@mui/material";
import OrderFilter from "./OrderFilter";
import OrderDetails from "./OrderDetails";
import Searchbar from "../../components/Searchbar";

const OrderPage = () => {
 
    return (
      <>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <Grid container justifyContent="center" spacing={2} p={2}>
            <Grid item xs={10} sm={10} md={10}>
              <OrderDetails />
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default OrderPage;
