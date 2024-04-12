import React from 'react';
import {
  Typography,
  List,
  ListItemButton,
  Collapse,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Categories = () => {
  const listNames = [
    { dataItem: "Mobiles" },
    { dataItem: "Tablets" },
    { dataItem: "Wireless Gadgets" },
    { dataItem: "Mobile Accessories" },
    { dataItem: "Tablet Accessories" },
  ];
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason !== "backdropClick") {
        setOpen(false);
      }
    };
    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <Typography variant="h5" p={2}>
          CATEGORIES
        </Typography>

        <List
          sx={{
            width: "100%",
          }}
        >
          <ListItemButton
            disableRipple
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {open ? (
              <KeyboardArrowDownIcon onClick={handleClick} />
            ) : (
              <KeyboardArrowLeftIcon onClick={handleClick} />
            )}
            <ListItemText primary="Mobiles & Accessories" sx={{ ml: 1 }} />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* <List sx={{ pl: 5, pt: 0 }}>
              <ListItemText primary="Mobiles" />
            </List> */}
            {listNames?.map((item, index) => (
              <List
                component="div"
                key={index}
                sx={{
                  margin: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <ListItemButton
                  // sx={{ pl: 5, pt: 0 }}
                  disableRipple
                  sx={{
                    pl: 5,
                    pt: 0,
                    pb: 0.1,
                    gap: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {/* <Checkbox edge="start" /> */}
                  <ListItemText primary={item.dataItem} />
                </ListItemButton>
              </List>
            ))}
          </Collapse>
        </List>
      </>
    );
};

export default Categories;