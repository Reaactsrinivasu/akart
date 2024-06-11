import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  ListItem,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const ListInNotfications = (props) => {
  return (
    <>
      <List sx={{ width: "100%" }}>
        {props.list?.map((item, index) => (
          <List
            component="div"
            key={index}
            sx={{
              "&.MuiList-root": {
                paddingTop: 0,
                paddingBottom: 0,
              },
            }}
          >
            <ListItem
              alignItems="flex-start"
              sx={{
                pl: 1,
                pt: 0,
                pb: 0,
                gap: 1,
              }}
            >
              <Checkbox
                edge="start"
                sx={{
                  transform: "scale(0.8)",
                  padding: 0,
                }}
              />
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "0.875rem", lineHeight: 1.2 }}>
                    {item.item}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: "0.75rem", lineHeight: 1.2 }}
                  >
                    {item.subItem}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        ))}
      </List>
    </>
  );
};

export default ListInNotfications;
