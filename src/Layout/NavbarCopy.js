import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  MenuItem,
  Menu,
  Button,
  Fade,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "./Logo";
import LogoText from "./LogoText";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import CartIcon from "./CartIcon";
import More from "./More";
import BecomeSeller from "./BecomeSeller";
import { useNavigate } from "react-router-dom";
import Wish from "./Wish";
import Atc from "./Atc";
import Profile from "./Profile";
import Orders from "./Orders";
import Pm from "./Pm";
const NavbarCopy = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        position="fixed"
        sx={{
          // bgcolor: "#fff",
          bgcolor: "#FCF0E2",
        }}
      >
        <Toolbar>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",

                // flexGrow: 1,
                minHeight: "45px",
                lineHeight: "45px",
              }}
            >
              {/* Logo */}
              <Logo />
              {/* Logo Text */}
              <LogoText />
            </Box>
            {/* <SearchBar />
            <LoginButton />
            <CartIcon /> */}
          </Box>
          {/* Search Bar */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #ff7e00",
              // border: "2px solid #222",
              borderRadius: "5px",
              padding: "6px",
              marginLeft: "8%",
              // width: '100%',
              maxWidth: "30%",
              flexGrow: 1,
            }}
          >
            <SearchBar />
          </Box>
          {/* Login Button */}
          <Box>
            <LoginButton />
          </Box>
          {/* More */}
          {/* <Box>
            <More />
          </Box> */}
          {/* Become a Seller */}
          {/* <Box>
            <BecomeSeller />
          </Box> */}
          {/* Wish list */}
          {/* <Box>
            <Wish />
          </Box> */}
          {/* <Box>
            <Atc />
          </Box> */}
          {/* <Box>
            <Profile />
          </Box> */}
          {/* <Box>
            <Orders />
          </Box> */}
          {/* <Box>
            <Pm />
          </Box> */}
          <Box>
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{textDecoration:'none',textTransform:'none'}}
            >
              Pages
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => { handleClose();navigate("/products"); }}>Products</MenuItem>
              <MenuItem onClick={() => { handleClose();navigate("/wishlist"); }}>Wishlist</MenuItem>
              <MenuItem onClick={() => { handleClose();navigate("/addtocart"); }}>Addtocart</MenuItem>
              <MenuItem onClick={() => { handleClose();navigate("/myprofile"); }}>Profile</MenuItem>
              <MenuItem onClick={() => { handleClose();navigate("/orders"); }}>Orders</MenuItem>
              <MenuItem onClick={() => { handleClose();navigate("/payments"); }}>Payments</MenuItem>
            </Menu>
          </Box>
          {/* Cart Icon */}
          <Box
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CartIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavbarCopy;
