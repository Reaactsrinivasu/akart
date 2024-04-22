import { Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const DropDownData = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item) => {
        navigate(item)
        setAnchorEl(null);
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
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose('/orderinvoice')}>Order Invoice</MenuItem>
                <MenuItem onClick={() => handleClose('/ordermanagement')}>Order Management</MenuItem>
                 
            </Menu>
        </>
    );
}

export default DropDownData;
