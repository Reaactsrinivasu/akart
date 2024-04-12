import React from 'react';
import { useState } from "react";
import {
    Box,
  Typography,
  Slider,
  Select,
  OutlinedInput,
} from "@mui/material";
const PriceRange = () => {
    const valuetext = (value) => {
      return `${value}°C`;
    };
    const [value, setValue] = useState([0, 100]);
    const [age, setAge] = useState("");
    const handleSelectChange = (event) => {
      setAge(Number(event.target.value) || "");
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
    const [selectedFilters, setSelectedFilters] = useState({
      category: "",
      brand: [],
      price: "",
      rating: "",
      inStock: false,
    });

    // Handler for updating selected filters
    const handleFilterChange = (event) => {
      const { name, value, type, checked } = event.target;
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
    return (
      <>
        <Box sx={{ width: "85%" }} p={2}>
          <Typography variant="h5">PRICE</Typography>
          <Slider
            sx={{
              ml: 2,
              color: "blue",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 15,
                height: 15,
                backgroundColor: "#ffb300",
                "&::before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&::before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "5px 20px 15px 22px",
            gap: "10px",
          }}
        >
          {/* <FormControl sx={{ minWidth: 120 }}> */}
          <Select
            sx={{ minWidth: 100, height: 35 }}
            native
            //   value={age}
            onChange={handleSelectChange}
            input={
              <OutlinedInput
                size="small"
                variant="outlined"
                id="demo-dialog-native"
              />
            }
          >
            <option value="Min">Min</option>
            <option value="250">₹250</option>
            <option value="1000">₹1000</option>
            <option value="2000">₹2000</option>
            <option value="5000">₹5000</option>
            <option value="10000">₹10000</option>
          </Select>

          <Typography sx={{ marginTop: "8px" }}>to</Typography>

          <Select
            sx={{ minWidth: 100, height: 35 }}
            native
            //   value={age}
            onChange={handleSelectChange}
            input={<OutlinedInput size="small" variant="outlined" />}
          >
            <option value="Min">Min</option>
            <option value="250">₹250</option>
            <option value="1000">₹1000</option>
            <option value="2000">₹2000</option>
            <option value="5000">₹5000</option>
            <option value="10000">₹10000</option>
          </Select>
        </Box>
      </>
    );
};

export default PriceRange;