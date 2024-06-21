import React,{useEffect,useState} from 'react';
import { Typography, IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { LoadNotificationsInitiate } from '../redux/actions/notifications/loadNotificationsActions';
const Notification = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [decodedProfilePic, setDecodedProfilePic] = useState("");
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const notificationData = useSelector(
    (state) => state?.getnotificationdata?.data?.data?.data || []
  );
  console.log("notificationData in navbar", notificationData);
  useEffect(() => {
    dispatch(LoadNotificationsInitiate());
  }, [dispatch]);

//   useEffect(() => {
//     const storedNotificationsState = localStorage.getItem(
//       "notificationsEnabled"
//     );
//     if (storedNotificationsState !== null) {
//       setNotificationsEnabled(storedNotificationsState === "true");
//     }
//   }, []); // Only run this effect once when the component mounts
  return (
    <>
      <IconButton color="inherit">
        <Badge
          badgeContent={notificationData?.length}
          // badgeContent={unreadNotificationsCount}
          color="error"
        >
          <NotificationsOutlinedIcon
            sx={{
              // color: "#ff7e00",
              color: "blue",
            }}
          />
        </Badge>
      </IconButton>
    </>
  );
};

export default Notification;