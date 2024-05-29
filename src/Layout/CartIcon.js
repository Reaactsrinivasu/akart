import React from 'react'
import {Typography,IconButton,Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartIcon = () => {
    return (
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
      >
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <ShoppingCartIcon
              sx={{
                // color: "#ff7e00",
                color: "blue",
              }}
            />
          </Badge>
        </IconButton>
        <Typography
          variant="body1"
          sx={{ color: "blue", fontWeight: "bold", color: "blue" }}
        >
          Cart
        </Typography>
      </div>
    );
};

export default CartIcon;