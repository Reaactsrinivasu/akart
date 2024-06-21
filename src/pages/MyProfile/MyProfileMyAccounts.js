import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Box, Divider, Paper, Card } from "@mui/material";
import { getUserDetailsInitiate } from "../../redux/actions/updateUserActions";
import MyProfileEditUser from "./MyProfileEditUser";
import MyProfileDashboard from "./MyProfileDashboard";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
const MyProfileMyAccounts = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const closeModal = () => {
    setShow(true);
  };
  const dispatch = useDispatch();

    const getUserData = useSelector((state) => state.myprofileuserdata?.data?.data);
  useEffect(() => {
      dispatch(getUserDetailsInitiate());
  }, [dispatch]);

  console.log("getUserData", getUserData);
  return (
    <>
      <Box
        sx={{
          p: 2,
          width: "100%",
          height: "auto",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontFamily: "Lato", fontSize: "19px" }}
        >
          Personal Information
        </Typography>
        <Grid container spacing={2} mt={1} p={1}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Full Name</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {`${getUserData?.first_name} ${getUserData?.last_name}`}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Mobile Number</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.phone_number}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Email Id</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.email}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Gender</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.gender}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Date of Birth</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.date_of_birth}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Location</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.location}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Alternate Mobile Number</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.alternate_phone_number}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Nick Name</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserData?.nick_name}
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Box
            onClick={handleOpenModal}
            component="button"
            sx={{
              mt: 1,
              width: "20%",
              height: "100%",
              backgroundColor: "#ff9f00",
              border: "1px solid #ff9f00",
              fontWeight: "bold",
              fontSize: "18px",
              whiteSpace: "nowrap",
              padding: "11px 2px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Edit User
          </Box>
        </Box>
      </Box>
      {/* Edit User Details Modal form  */}
      {isModalOpen && (
        <MyProfileEditUser
          // show={show}
          getUserData={getUserData}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
export default MyProfileMyAccounts;
