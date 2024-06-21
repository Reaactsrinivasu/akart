import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Divider,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import Imports from "../../common/Imports";
import { LoadNotificationsInitiate } from "../../redux/actions/notifications/loadNotificationsActions";
const MyProfileAllNotifications = () => {
  const dispatch = useDispatch();
  const pushnoteData = useSelector(
    (state) => state?.getnotificationdata?.data?.data?.data || []
  );
  console.log("pushnoteData", pushnoteData);
  useEffect(() => {
    dispatch(LoadNotificationsInitiate());
  }, [dispatch]);
  return (
    <>
      <Imports.Box
        sx={{
          height: "500px", // Adjust the height as needed
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#FFFFFF",
            position: "sticky",
            top: "0.5px",
            p: 1,
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Imports.Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Lato",
              fontSize: "19px",
              display: "flex",
              mb: 1,
              position: "sticky",
              top: "20px",
            }}
          >
            All Notifications
          </Imports.Typography>
        </Box>
        <Imports.Grid container sx={{ marginTop: "10px" }}>
          {pushnoteData &&
            pushnoteData.length >= 0 &&
            pushnoteData?.map((item, index) => (
              <Imports.Grid item xs={12} sm={12} md={12} key={index}>
                {/* <Imports.Box
                  sx={{
                    p: 2,
                    width: "100%",
                    height: "auto",
                    // margin: 1,
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent:'flex-start',
                    gap: 3,
                    backgroundColor: "#FFFFFF",
                    borderBottom: "1px solid #f0f0f0",
                    // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      bgcolor: "#f5faff",
                    },
                  }}
                >
                  <Imports.Box
                    component="img"
                    loading="lazy"
                    src="/assets/imgs/actimizeLogo.png"
                    alt="1"
                    sx={{ width: "60px", height: "60px" }}
                  />
                  <Imports.Box
                    sx={{ gap: 1.5, display: "flex", flexDirection: "column" }}
                  >
                    <Typography color="text.primary" fontWeight="600">
                      {item.headings}
                    </Typography>
                    <Imports.Box
                      sx={{
                        width:'100%',
                        // gap: 3,
                        display: "flex",
                        flexDirection: "row",
                       justifyContent:'space-between'
                      }}
                    >
                      <Typography color="text.secondary">
                        {item.contents}
                      </Typography>
                      <Typography  color="text.secondary">
                        {item.created_at}
                      </Typography>
                    </Imports.Box>
                  </Imports.Box>
                </Imports.Box> */}
                <Imports.Box
                  sx={{
                    p: 2,
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    backgroundColor: "#FFFFFF",
                    borderBottom: "1px solid #f0f0f0",
                    "&:hover": {
                      bgcolor: "#f5faff",
                    },
                  }}
                >
                  <Imports.Box
                    component="img"
                    loading="lazy"
                    src="/assets/imgs/actimizeLogo.png"
                    alt="1"
                    sx={{ width: "60px", height: "60px" }}
                  />
                  <Imports.Box
                    sx={{
                      gap: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <Typography color="text.primary" fontWeight="600">
                      {item.headings}
                    </Typography>
                    <Imports.Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography color="text.secondary">
                        {item.contents}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.created_at}
                      </Typography>
                    </Imports.Box>
                  </Imports.Box>
                </Imports.Box>

                {/* <Divider
                  sx={{
                    width: "100%",
                    borderBottomWidth: 1,
                    borderColor: "divider",
                  }}
                /> */}
              </Imports.Grid>
            ))}
        </Imports.Grid>
      </Imports.Box>
    </>
  );
};

export default MyProfileAllNotifications;
