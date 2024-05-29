import React from 'react'
import { Box,Grid,Typography,Avatar,Divider, TextField } from '@mui/material';
import MyProfileTabs from './MyProfileTabs';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const MyProfileDetails = () => {
  const profileList = [
    {title:'User Name',content:'A.B.Srinivas'},
    {title:'User Mail Id',content:'srinivas@actimize.in'},
    {title:'User Contact Number',content:'9638528529'},
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <MyProfileTabs />
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <Grid container spacing={2} p={4}>
            <Grid item xs={12} sm={12} md={2.5}>
              <Avatar
                alt="Remy Sharp"
                src="assets/imgs/avatar.png"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9.5}>
              <Box
                sx={{
                  p: 3,
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2.5,
                  mt: 1.5,
                }}
              >
                {profileList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        color: "121212",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} p={4}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Update Your Profile :
          </Typography>
          <Grid container spacing={2} p={4} sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Grid item xs={12} sm={12} md={6}>
              <Box p={2}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  name="first_name"
                  type="text"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box p={2}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  label="Last Name"
                  placeholder="Last Name"
                  variant="outlined"
                  name="last_name"
                  type="text"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box p={2}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  label="Contact Number"
                  placeholder="Contact Number"
                  variant="outlined"
                  name="phone_number"
                  type="text"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box p={2}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  label="Email ID"
                  placeholder="Email ID"
                  variant="outlined"
                  name="email"
                  type="email"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box pl={2}>
                <FormControl>
                  {/* <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
                <Box
                  component="button"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ff9f00",
                    border: "1px solid #ff9f00",
                    fontWeight: "bold",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                    padding: "11px 20px",
                  }}
                >
                  Update Profile
                </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyProfileDetails;