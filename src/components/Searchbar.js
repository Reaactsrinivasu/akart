import React from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Searchbar = (props) => {
  return (
    <>
      <IconButton size="small">
        <SearchIcon sx={{ color: "#4F29F0" }} />
      </IconButton>
      <InputBase
        // placeholder="Search for the Products..."
        placeholder={props.title}
        autoFocus
        required
        sx={{
          color: "#414856",
          marginLeft: "4px",
          ...props.sx,
        }}
      />
    </>
  );
};
export default Searchbar;