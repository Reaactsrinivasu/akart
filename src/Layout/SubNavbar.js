import React from "react";
import Imports from "../../src/common/Imports";


const SubNavbar = () => {
  // const [value, setValue] = Imports.useState(null);
  const [value, setValue] = Imports.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Imports.ReusableBox
      sx={{
        // maxWidth: { xs: 500, sm: 1180 },
        // width: "auto",
        bgcolor: "#fff",
        marginTop: "65px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // "@media (min-width: 1044px)": {
        //   marginLeft: "190px",
        // },
        // "@media (min-width: 1024px) and (max-width: 1024px)": {
        //   marginLeft: "10px", // Center only at 1024px width
        // },
      }}
    >
      <Imports.IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          marginLeft: "10px",
          mr: 2,
        }}
      >
        <Imports.MenuIcon />
      </Imports.IconButton>

      {/* <Imports.MenuIcon
        sx={{
          color: "#000000",
          minHeight: "48px",
          lineHeight: "48px",
          marginLeft: "10px",
        }}
      /> */}
      <Imports.Tabs
        // disableRipple
        TabIndicatorProps={
          {
            //   style: {
            //     display: "none", // Hide the default indicator
            //   },
            //   disableRipple: true, // Remove the ripple effect
          }
        }
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          justifyContent: "center",

          //   '& .MuiTabs-flexContainer': {
          //     backgroundColor: 'lightblue', // Change the background color of the tabs
          //   },
          "& .MuiTab-root": {
            fontSize: "13px",
            fontFamily: "Manrope,sans-serif",
            fontWeight: 500,
            color: "#000000", // Default text color
            transition: "color 0.3s", // Smooth transition for color changes
            "&:hover": {
              color: "orange", // Text color on hover
            },
          },
          "& .MuiTab-root.Mui-selected": {
            color: "orange", // Change the text color of the selected tab
          },
          "& .MuiTabs-indicator": {
            display: "none", // Remove the tab indicator bar
          },
        }}
      >
        <Imports.Tab label="All" />
        <Imports.Tab label="Sell    " />
        <Imports.Tab label="Fashion" />
        <Imports.Tab label="Giftcards" />
        <Imports.Tab label="Buy Again" />
        <Imports.Tab label="Browsing History" />
        <Imports.Tab label="Coupons" />
        <Imports.Tab label="Trending Searches" />
      </Imports.Tabs>
    </Imports.ReusableBox>
  );
};

export default SubNavbar;
