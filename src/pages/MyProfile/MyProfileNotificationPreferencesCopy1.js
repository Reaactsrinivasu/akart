import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Box } from "@mui/material";
import Imports from "../../common/Imports";
import Switch from "@mui/material/Switch";
import ListInNotfications from "../../components/ListInNotfications";
import {
  loadNotificationPreferenceInitiate,
  updateNotificationPreferenceInitiate,
} from "../../redux/actions/notificationPreferences/notificationPreferenceActions";
const label = { inputProps: { "aria-label": "Color switch demo" } };


const MyProfileNotificationPreferences1 = () => {
  const dispatch = useDispatch();
  const [notificationPreferences, setNotificationPreferences] = useState({});
  // const toggleHandler = (id, preference) => {
  //   dispatch(updateNotificationPreferenceInitiate(id, preference));
  //   dispatch(loadNotificationPreferenceInitiate());
  // };

  const getNotiPreferData = useSelector(
    (state) => state.notificationpreferencedata?.data?.data[0] || {}
  );
  useEffect(() => {
    dispatch(loadNotificationPreferenceInitiate());
  }, [dispatch]);
  console.log("getNotiPreferData", getNotiPreferData);
   useEffect(() => {
     if (getNotiPreferData) {
       setNotificationPreferences(getNotiPreferData);
     }
   }, [getNotiPreferData]);
  const notificationData = [
    {
      id: notificationPreferences?.id,
      item: "Your Account",
      type: "your_account",
      checked: notificationPreferences?.your_account,
      subItem: "Get notified for account alerts",
    },
    {
      id: notificationPreferences?.id,
      item: "Your Shipment",
      type: "shipments",
      checked: notificationPreferences?.shipments,
      subItem: "Find out when packages ship & arrive",
    },
    {
      id: notificationPreferences?.id,
      item: "Your Recommendations",
      type: "recommendations",
      checked: notificationPreferences?.recommendations,
      subItem: "Receive recommendations based on your shipping activity",
    },
  ];

const smsData = [
  {
    id: notificationPreferences?.id,
    item: "Offers",
    type: "sms_offers",
    checked: notificationPreferences?.sms_offers,
    subItem: "Today's deals and more",
  },
  {
    id: notificationPreferences?.id,
    item: "My Orders",
    type: "sms_orders",
    checked: notificationPreferences?.sms_orders,
    subItem: "Latest updates on your orders",
  },
  {
    id: notificationPreferences?.id,
    item: "Recommendations",
    type: "sms_recommendations",
    checked: notificationPreferences?.sms_recommendations,
    subItem: "Receive recommendations based on your shopping activity",
  },
  {
    id: notificationPreferences?.id,
    item: "Reminders",
    type: "sms_reminders",
    checked: notificationPreferences?.sms_reminders,
    subItem: "Price drops, back-in-stock products, etc.",
  },
];

const emailData = [
  {
    id: notificationPreferences?.id,
    item: "Offers",
    type: "email_offers",
    checked: notificationPreferences?.email_offers,
    subItem: "Today's deals and more",
  },
  {
    id: notificationPreferences?.id,
    item: "My Orders",
    type: "email_orders",
    checked: notificationPreferences?.email_orders,
    subItem: "Latest updates on your orders",
  },
  {
    id: notificationPreferences?.id,
    item: "Recommendations",
    type: "email_recommendations",
    checked: notificationPreferences?.email_recommendations,
    subItem: "Receive recommendations based on your shopping activity",
  },
  {
    id: notificationPreferences?.id,
    item: "Reminders",
    type: "email_reminders",
    checked: notificationPreferences?.email_reminders,
    subItem: "Price drops, back-in-stock products, etc.",
  },
];

const whatsappData = [
  {
    id: notificationPreferences?.id,
    item: "Offers",
    type: "whatsapp_offers",
    checked: notificationPreferences?.whatsapp_offers,
    subItem: "Today's deals and more",
  },
  {
    id: notificationPreferences?.id,
    item: "My Orders",
    type: "whatsapp_orders",
    checked: notificationPreferences?.whatsapp_orders,
    subItem: "Latest updates on your orders",
  },
  {
    id: notificationPreferences?.id,
    item: "Recommendations",
    type: "whatsapp_recommendations",
    checked: notificationPreferences?.whatsapp_recommendations,
    subItem: "Receive recommendations based on your shopping activity",
  },
  {
    id: notificationPreferences?.id,
    item: "Reminders",
    type: "whatsapp_reminders",
    checked: notificationPreferences?.whatsapp_reminders,
    subItem: "Price drops, back-in-stock products, etc.",
  },
];

  const handleToggle = (id, key) => {
    console.log("id,key", id, key);
    const updatedPreference = { [key]: !notificationPreferences[key] };
    setNotificationPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    dispatch(updateNotificationPreferenceInitiate(id, updatedPreference));
  };
  
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
                        {/* <Switch
                          {...label}
                          onChange={() => toggleHandler(item.id,{[item.type]:!item.checked})}
                          checked={item.checked}
                          color="warning"
                        /> */}
                        <Switch
                          {...label}
                          onChange={() => handleToggle(item.id, item.type)}
                          checked={!!item.checked}
                          color="warning"
                        />
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
                        SMS
                      </Imports.Typography>
                      {/* <Switch {...label} defaultChecked color="warning" /> */}
                      <Switch
                        {...label}
                        onChange={() =>
                          handleToggle(
                            notificationPreferences?.id,
                            "sms"
                          )
                        }
                        checked={!!notificationPreferences?.sms}
                        color="warning"
                      />
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
                      {/* <Switch {...label} defaultChecked color="warning" /> */}
                      <Switch
                        {...label}
                        onChange={() =>
                          handleToggle(
                            notificationPreferences?.id,
                            "email"
                          )
                        }
                        checked={!!notificationPreferences?.email}
                        color="warning"
                      />
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
                      {/* <Switch {...label} defaultChecked color="warning" /> */}
                      <Switch
                        {...label}
                        onChange={() =>
                          handleToggle(
                            notificationPreferences?.id,
                            "whatsapp"
                          )
                        }
                        checked={
                          !!notificationPreferences?.whatsapp
                        }
                        color="warning"
                      />
                    </Box>
                    <ListInNotfications list={whatsappData} />
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

export default MyProfileNotificationPreferences1;
