// import React from 'react';
// import {IconButton,InputBase} from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// const SearchBar = () => {
//   return (
//     <>
//       <IconButton size="small">
//         <SearchIcon />
//       </IconButton>
//       <InputBase
//         placeholder="Search for the Products..."
//         style={{ marginLeft: "4px" }}
//       />
//     </>

//   );
// };
// export default SearchBar;
import React from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = (props) => {
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
export default SearchBar;
