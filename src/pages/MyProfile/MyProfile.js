import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import MyProfileDashboard from "./MyProfileDashboard";
import MyProfileDetails from "./MyProfileDetails";

const MyProfile = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box>
          <Box component="main" sx={{ padding: "5px" }}>
            {/* <Typography>Hii</Typography> */}
            {/* <MyProfileDetails /> */}
            <MyProfileDashboard />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default MyProfile;
