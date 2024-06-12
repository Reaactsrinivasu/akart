import React from "react";
import {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import {Box,Paper } from "@mui/material";
import { loadPrivacyAndPolicyInitiate } from "../../redux/actions/others/privacyAndPolicyActions";
const PrivacyPolicy = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadPrivacyAndPolicyInitiate());
   }, [dispatch]);
   const privacyData = useSelector(
     (state) => state?.privacyandpolicydata?.data?.data[0] || []
   );
   console.log("privacyData", privacyData);
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box sx={{ p: 5, marginTop: "20px" }}>
          <Paper
            elevation={2}
            sx={{ p: 3, backgroundColor: '#fff', }}
            variant="contained"
            component="div"
            dangerouslySetInnerHTML={{ __html: privacyData?.data }}
          />
        </Box>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
