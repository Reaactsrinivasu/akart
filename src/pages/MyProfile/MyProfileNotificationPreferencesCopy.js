import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Box} from "@mui/material";
import Imports from "../../common/Imports";
import Switch from "@mui/material/Switch";
import ListInNotfications from "../../components/ListInNotfications";
import {
  loadNotificationPreferenceInitiate,
  updateNotificationPreferenceInitiate,
} from "../../redux/actions/notificationPreferences/notificationPreferenceActions";
const label = { inputProps: { "aria-label": "Color switch demo" } };
const smsData = [
  {id:1,item:'Offers',subItem:'Today deals and more'},
  {id:2,item:'My Orders',subItem:'Latest Updates on your Orders'},
  {id:3,item:'Recommendations',subItem:'Receive recommendations based on your shopping activity'},
  {id:4,item:'Remainders',subItem:'Price drops,Back-in products etc'},
];
const emailData = [
  { id: 1, item: "Offers", subItem: "Today deals and more" },
  { id: 2, item: "My Orders", subItem: "Latest Updates on your Orders" },
  {
    id: 3,
    item: "Recommendations",
    subItem: "Receive recommendations based on your shopping activity",
  },
  { id: 4, item: "Remainders", subItem: "Price drops,Back-in products etc" },
];
const WhatsappData = [
  { id: 1, item: "Offers", subItem: "Today deals and more" },
  { id: 2, item: "My Orders", subItem: "Latest Updates on your Orders" },
  {
    id: 3,
    item: "Recommendations",
    subItem: "Receive recommendations based on your shopping activity",
  },
  { id: 4, item: "Remainders", subItem: "Price drops,Back-in products etc" },
];
const notificationData = [
  { id: 1, item: "Your Account", subItem: "Get notified for account alerts" },
  {
    id: 2,
    item: "Your Shipment",
    subItem: "Find out when package ship & arrive",
  },
  {
    id: 3,
    item: "Your Recommendations",
    subItem: "Receive recommendations based on your shipping activity",
  },
];
const MyProfileNotificationPreferencesCopy = () => {
  const dispatch = useDispatch();
  const [notificationPreferences, setNotificationPreferences] = useState({});

  const getNotiPreferData = useSelector(
    (state) => state.notificationpreferencedata?.data?.data[0] || []
  );
  useEffect(() => {
    dispatch(loadNotificationPreferenceInitiate());
  }, [dispatch]);
  console.log("getNotiPreferData", getNotiPreferData);

  return (
    <>
      <Box
        sx={{
          p: 1,
          width: "100%",
          height: "100%",
          // border: "1px solid",
          // borderColor: "divider",
        }}
      >
        <Imports.Paper
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 1,
            mb: 2,
          }}
        >
          <Imports.Typography
            sx={{ fontWeight: 700, fontFamily: "Lato", fontSize: "19px" }}
          >
            Recieve push notifications on your device about your parcel
          </Imports.Typography>
        </Imports.Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2}>
              {notificationData.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <Box>
                    <Imports.Paper
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Imports.Typography
                          sx={{
                            fontSize: "15px",
                            letterSpacing: "0.5px",
                            color: "orange",
                          }}
                        >
                          {item.item}
                        </Imports.Typography>
                        <Switch {...label} defaultChecked color="warning" />
                      </Box>
                      <Imports.Typography
                        variant="h7"
                        sx={{ fontSize: "13px" }}
                      >
                        {item.subItem}
                      </Imports.Typography>
                    </Imports.Paper>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} sm={12} md={12}>
                <Box>
                  <Imports.Paper
                    sx={{
                      mt: 2,
                      width: "100%",
                      height: "auto",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Imports.Typography
                        sx={{
                          fontSize: "15px",
                          letterSpacing: "0.5px",
                          color: "orange",
                        }}
                      >
                        Sms
                      </Imports.Typography>
                      <Switch {...label} defaultChecked color="warning" />
                    </Box>
                    <ListInNotfications list={smsData} />
                  </Imports.Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Box>
                  <Imports.Paper
                    sx={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Imports.Typography
                        sx={{
                          fontSize: "15px",
                          letterSpacing: "0.5px",
                          color: "orange",
                        }}
                      >
                        Learn more about notifications
                      </Imports.Typography>
                    </Box>
                  </Imports.Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box>
                  <Imports.Paper
                    sx={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Imports.Typography
                        sx={{
                          fontSize: "15px",
                          letterSpacing: "0.5px",
                          color: "orange",
                        }}
                      >
                        Email
                      </Imports.Typography>
                      <Switch {...label} defaultChecked color="warning" />
                    </Box>
                    <ListInNotfications list={emailData} />
                  </Imports.Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box>
                  <Imports.Paper
                    sx={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Imports.Typography
                        sx={{
                          fontSize: "15px",
                          letterSpacing: "0.5px",
                          color: "orange",
                        }}
                      >
                        Whatsapp
                      </Imports.Typography>
                      <Switch {...label} defaultChecked color="warning" />
                    </Box>
                    <ListInNotfications list={WhatsappData} />
                  </Imports.Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MyProfileNotificationPreferencesCopy;
