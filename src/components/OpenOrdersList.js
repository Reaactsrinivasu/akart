import React from "react";
import {
  List,
  ListItemAvatar,
  ListItemButton,
  Collapse,
  ListItemText,
  Avatar,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ReusableOpenOrdersList = (props) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  // const handleColorWhenClick = (index) => {
  //   setSelectedItem(index);
  // };
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <List
          sx={{
            borderRadius: "12px",
            width: "100%",
            backgroundColor: "background.paper",
            ...props.sx,
          }}
        >
          <ListItemButton
            onClick={handleClick}
            disableRipple={true}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <ListItem sx={{ gap: 2 }}>
              <ListItemAvatar>
                {/* <Avatar
                  alt="Remy Sharp"
                  src={props.icon}
                  sx={{
                    // marginLeft: "-4px",
                    // width: 38,
                    // height: 38,
                    // "&.MuiAvatar-root": {
                    //   borderRadius: 0,
                    // },
                  }}
                /> */}
                <Avatar sx={{ width: 56, height: 56 }}>
                  <CloseIcon sx={{ fontSize: "50px" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: 600, // Add fontWeight here
                  },
                  color: "#878787",
                  "&:hover": {
                    color: "#2874f0",
                  },
                }}
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
                primary={props.primaryTitle}
                secondary={props.secondaryTitle}
                p={2}
              />
            </ListItem>

            {/* {props.status === true && (
              <>
                {open ? (
                  <KeyboardArrowRightIcon  />
                ) : (
                  <KeyboardArrowRightIcon  />
                )}
              </>
            )} */}
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
          {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
          {props.list?.map((item, index) => (
            <List
              component="div"
              key={index}
              sx={{
                paddingTop: 1,
                paddingBottom: 0,
              }}
            >
              <ListItemButton
                //   selected={selectedItem === index}
                //   onClick={() => handleColorWhenClick(index)}
                disableRipple
                sx={{
                  pl: 5,
                  ml: 7,
                  pt: 0,
                  pb: 0,
                  // gap:10,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "3498db",
                  },
                  // "&.Mui-selected": {
                  //   backgroundColor: "#2196f3", // Blue color when selected
                  //   color: "#fff", // Text color when selected
                  // },
                }}
              >
                {/* <Checkbox edge="start" /> */}
                {/* <ListItemText
                    sx={{
                      "&:hover": {
                        color: "#2874f0",
                      },
                    }}
                    primary={item.item}
                  /> */}
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="assets/imgs/phone-2.png" />
                </ListItemAvatar>
              </ListItemButton>
            </List>
          ))}
          {/* </Collapse> */}
        </List>
      </Box>
    </>
  );
};
export default ReusableOpenOrdersList;
