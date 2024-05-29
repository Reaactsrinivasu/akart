import React, { useState } from "react";
import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Layout from "../../Layout/Layout";
import Paper from "@mui/material/Paper";
import ReusableLink from "../../components/Link";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

const SelectAddress = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  //   padding: theme.spacing(2),
  ...theme.typography.body2,
  //   textAlign: "center",
}));
    const TextLink = ({ title }) => {
      return (
        <ReusableLink
          variant="subtitle2"
          underline="none"
          sx={{
            cursor: "pointer",
            color: "blue",
            // m: 3,
            transition: "0.3s",
            fontWeight: 500,
            
          }}
        >
          {title}
        </ReusableLink>
      );
    };
    return (
      <>
        <ReusableLink
          variant="h6"
          underline="none"
          sx={{
            cursor: "pointer",
            color: "#000000",
            mb: 2,
            "&:hover": {
              color: "blue",
            },
          }}
        >
          1.Select a delivery address
        </ReusableLink>
        <Divider
          variant="fullWidth"
          sx={{
            backgroundColor: "#e0e0e0", // Set the color to blue
            height: "0.3px", // Increase the height (width in horizontal divider)
            mt: 1, // Add margin to the top for spacing
            mb: 3,
          }}
        />
      </>
    );
};

export default SelectAddress;
