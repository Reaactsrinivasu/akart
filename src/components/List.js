import React from "react";
import { List, ListItemButton, Collapse, ListItemText } from "@mui/material";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const ReusableList = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List sx={{ width: "100%" }}>
      <ListItemButton
        onClick={handleClick}
        disableRipple={true}
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ListItemText primary={props.title} p={2} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.list?.map((item, index) => (
          console.log('props',props),
          <List
            component="div"
            key={index}
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <ListItemButton
              disableRipple
              sx={{
                pl: 5,
                pt: 0,
                pb: 0,
                gap: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Checkbox edge="start" />
              <ListItemText primary={item.item} secondary={item.subItem} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
  );
};
export default ReusableList;
