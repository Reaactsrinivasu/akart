import { Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const DropDownData = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosed = (item) => {
        setAnchorEl(null);
        navigate(item)
    };

    return(
        <>
            <Typography 
                sx={{ marginLeft:'10px', cursor: 'pointer' }} 
                onClick={handleClick}
            >
                pages
            </Typography>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClosed('')}
            >
                <MenuItem onClick={() => handleClosed('/orderinvoice')}>Order Invoice</MenuItem>
                <MenuItem onClick={() => handleClosed('/ordermanagement')}>Order Management</MenuItem>
                <MenuItem onClick={() => handleClosed('/producttracking')}>Product Tracking</MenuItem>
                <MenuItem onClick={() => handleClosed('/changedeliveryaddress')}>Change Delivery Address</MenuItem>
                <MenuItem onClick={() => handleClosed('/changecontactnumber')}>Change Contact Number</MenuItem>
                <MenuItem onClick={() => handleClosed('/shareorderdetails')}>Share Order Details</MenuItem>
                <MenuItem onClick={() => handleClosed('/changedate')}>Change Date</MenuItem>
                <MenuItem onClick={() => handleClosed('/needhelp')}>Need Help</MenuItem>
                <MenuItem onClick={() => handleClosed('/didyoufindthispage')}>Did You Find this Page</MenuItem>
                <MenuItem onClick={() => handleClosed('/termsofuse')}>Terms of Use</MenuItem>
                <MenuItem onClick={() => handleClosed('/privacypolicy')}>Privacy Policy</MenuItem>
                <MenuItem onClick={() => handleClosed('/checkout')}>Check Out</MenuItem>
                <MenuItem onClick={() => handleClosed('/cancleorder')}>Cancle Order</MenuItem>
                
                 
            </Menu>
        </>
    );
}

export default DropDownData;
