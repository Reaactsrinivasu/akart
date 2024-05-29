// import React from 'react'
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
const LoginButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [myToken, setMyToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setMyToken(token);
    setLoggedIn(!!token);

  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    if (path === "/logout") {
      localStorage.removeItem("token");
      setLoggedIn(false);
      setMyToken(!myToken);
      navigate("/");
      return;
    }
    navigate(path);
  };
  // const token = localStorage.getItem("token");
  return (
    <>
      {!myToken ? (
        <>
          <Button
            onClick={() => navigate("/login")}
            sx={{
              // color: "#ff7e00",
              lineHeight: "2%",
              color: "blue",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <Button
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            onMouseOver={handleMenuOpen}
            sx={{
              // color: "#ff7e00",
              lineHeight: "2%",
              color: "blue",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            My Profile
          </Button>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* <MenuItem onClick={() => handleMenuItemClick("/signup")}>
              SignUp
            </MenuItem> */}
            <MenuItem onClick={() => handleMenuItemClick("/myprofile")}>
              My Profile
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/orders")}>
              Orders
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/wishlist")}>
              WishList
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/addtocart")}>
              Cart
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/payments")}>
              Payments
            </MenuItem>
            {loggedIn && (
              <MenuItem onClick={() => handleMenuItemClick("/logout")}>
                Logout
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </>
  );
}

export default LoginButton