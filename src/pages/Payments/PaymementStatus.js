import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import Imports from "../../common/Imports";
import {
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
const PaymementStatus = () => {
    const navigate = useNavigate();
    return (
      <>
        <Layout>
          <CssBaseline />
            <Grid
              container
              spacing={1}
                    mt={2}
                    textAlign='center'
              display="flex"
              flexDirection="column"
            //   justifyContent="center"
            //   alignItems="center"
            >
              <Grid item md>
                <Box
                  component="img"
                  src="assets/imgs/paymentsuccess.png"
                  alt=""
                  style={{
                    width: "300px",
                    height: "300px",
                    // objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item md>
                <Box
                  onClick={() => navigate("/orders")}
                  component="button"
                  sx={{
                    backgroundColor: "#ff9f00",
                    // backgroundColor: "#FFD814",
                    border: "1px solid #ff9f00",
                    // border: "1px solid #FCD200;",
                    fontWeight: "bold",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    padding: "10px 13px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    ml: 2,
                  }}
                >
                  Go To Orders
                </Box>
              </Grid>
            </Grid>
        </Layout>
      </>
    );
};

export default PaymementStatus;