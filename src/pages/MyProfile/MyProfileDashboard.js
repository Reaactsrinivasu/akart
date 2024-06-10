import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { Typography, Grid, Box, Divider, Paper, Card } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import { getUserDetailsInitiate } from "../../redux/actions/updateUserActions";
const MyProfileDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
 const getUser = useSelector(
   (state) => state.myprofileuserdata?.data?.data
 );
 useEffect(() => {
   dispatch(getUserDetailsInitiate());
 }, [dispatch]);

 console.log("getUser", getUser);
  useEffect(() => {
    navigate(`/myprofile/accounts`);
  }, []);
  const listData = [
    {
      id: 1,
      listName: "My Orders",
      icon: <ShoppingCartIcon />,
      path: "orders",
    },
    {
      id: 2,
      listName: "My Accounts",
      icon: <AccountBoxIcon />,
      path: "accounts",
    },
    {
      id: 3,
      listName: "Address",
      icon: <SwitchAccountIcon />,
      path: "address",
    },
    {
      id: 4,
      listName: "All Notifications",
      icon: <NotificationsNoneIcon />,
      path: "allnotifications",
    },
    {
      id: 5,
      listName: "Notification prefeferences",
      icon: <CircleNotificationsIcon />,
      path: "notificationprefereances",
    },
    {
      id: 6,
      listName: "About Us",
      icon: <InfoIcon />,
      path: "aboutus",
    },
    {
      id: 7,
      listName: "Terms of Use",
      icon: <HourglassEmptyIcon />,
      path: "termsofuse",
    },
    {
      id: 8,
      listName: "Privacy Policy",
      icon: <LockIcon />,
      path: "privacypolicy",
    },
    {
      id: 9,
      listName: "Logout",
      icon: <LogoutIcon />,
      path: "",
    },
  ];
    const handleListItemClick = (index, path,name) => {
      if (
        path !== "orders" &&
        path !== "termsofuse" &&
        path !== "privacypolicy"
      ) {
        navigate(`/myprofile/${path}`);
      } else if (path === "") {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload(false);
      } else if (path === "orders") {
        navigate("/orders");
      } else if (path === "termsofuse") {
        navigate("/termsofuse");
      } else if (path === "privacypolicy") {
        navigate("/privacypolicy");
      }
      setSelectedIndex(index);
    };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "95%",
            height: "auto",
            backgroundColor: "#f1f3f6",
            borderRadius: "8px",
            boxShadow: "sm",
          }}
        >
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} sm={4} md={3}>
              <Paper
                elevation={1}
                // variant='outlined'
                sx={{
                  borderRadius: "2px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  backgroundColor: "orange",
                  p: 2.5,
                  mb: 1,
                  gap: 2,
                }}
              >
                {getUser ? (
                  <>
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {/* Bhagya Srinivasu Aripaka */}
                      {`${getUser?.first_name} ${getUser?.last_name}`}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {/* 9440609464 */}
                      {`${getUser?.phone_number}`}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      Loading...
                    </Typography>
                  </>
                )}
              </Paper>
              <Paper elevation={1}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    // bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  {listData.map((item, index) => (
                    <ListItemButton
                      key={index}
                      // onClick={handleClick}
                      // disableRipple={true}
                      selected={selectedIndex === index}
                      onClick={() =>
                        handleListItemClick(index, item.path, item.listName)
                      }
                      disableRipple
                      sx={{
                        "&:hover": {
                          // backgroundColor: "orange",
                          color: "orange",
                          "& .MuiListItemIcon-root, & .MuiListItemText-primary":
                            {
                              color: "orange", // Change icon and text color on hover
                            },
                        },
                        "&.Mui-selected": {
                          // backgroundColor: "orange",
                          color: "orange",
                          "& .MuiListItemIcon-root, & .MuiListItemText-primary":
                            {
                              color: "orange", // Change icon and text color when selected
                            },
                        },
                      }}
                      // sx={{
                      //   "&:hover": {
                      //     backgroundColor: "transparent",
                      //   },
                      // }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        onClick={
                          item.listName === "Logout"
                            ? () => {
                                localStorage.removeItem("token");
                                window.location.reload(false);
                              }
                            : null
                        }
                        primary={item.listName}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Paper
                elevation={1}
                sx={{
                  p: 4,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "2px",
                }}
              >
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default MyProfileDashboard;
