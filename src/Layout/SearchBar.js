import React from 'react';
import {IconButton,InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
 <>
      <IconButton size="small">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search for the Products..."
        style={{ marginLeft: "4px" }}
      />
 </>

  );
}

export default SearchBar