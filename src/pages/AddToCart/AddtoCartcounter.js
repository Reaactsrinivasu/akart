import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const AddtoCartCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" sx={{gap:1.5,mt:1,mb:1}}>
      <IconButton
        onClick={handleDecrement}
        sx={{
          borderRadius: "50%",
          margin: "2px",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <RemoveIcon sx={{ fontSize: "20px" }} />
      </IconButton>
      <Box
        sx={{
          padding:'5px',
          width: "60px",
          // width: '100%',
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          // margin: "0 10px",
        }}
      >
        <Typography variant="body1">{count}</Typography>
      </Box>
      <IconButton
        onClick={handleIncrement}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "50%",
          margin: "2px",
        }}
      >
        <AddIcon sx={{ fontSize: "20px" }} />
      </IconButton>
    </Box>
  );
};

export default AddtoCartCounter;
