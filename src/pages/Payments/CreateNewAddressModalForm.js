import React,{useState} from "react";
import {Button,Box,Grid} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ReusableFormTextField from "../../components/TextField";
import Checkbox from "@mui/material/Checkbox";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
      boxShadow:'10px'
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const CreateNewAddressModalForm = ({closeModal,title}) => {
    console.log('closeModal', closeModal);
    return (
      <>
        <BootstrapDialog
          open={true}
          onClose={closeModal}
          //   onClick={closeModal}
          aria-labelledby="customized-dialog-title"
        >
          <Grid container sx={{ justifyContent: "center", marginTop: "20px" }}>
            <Grid
              item
              xs={11}
              sm={10}
              md={12}
              lg={12}
              sx={{
                backgroundColor: "#FFFFFF",
                padding: { xs: "10px 10px", sm: "10px 30px" },
                borderRadius: "10px",
              }}
            >
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ fontWeight: 700, fontFamily: "Lato", fontSize: "19px" }}
                >
                  {title} Delivery Address :
                </Typography>
                <CloseIcon sx={{ marginLeft: "auto" }} onClick={closeModal} />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Country/Region
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Full name(First and Last name)
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Mobile Number
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Pincode
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Flat,House no,Building,Company,Apartment
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Area, Street, Sector , Village
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Landmark
                </Typography>
                <ReusableFormTextField />
              </Grid>
              <Grid
                sx={{ display: { xs: "block", sm: "flex" }, marginTop: "20px" }}
                gap={2}
              >
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    Town/City
                  </Typography>
                  <ReusableFormTextField />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ marginTop: { xs: "20px", sm: "0px" } }}
                >
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    State
                  </Typography>
                  <ReusableFormTextField />
                </Grid>
              </Grid>
              <Grid
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Typography sx={{ fontSize: "17px", fontFamily: "Lato" }}>
                  make this is my default adress
                </Typography>
              </Grid>
              <Grid sx={{ margin: "20px 0px" }}>
                {/* <Button
                  sx={{
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "#FFA500",
                    fontWeight: 700,
                    padding: "5px 30px",
                    "&:hover": { backgroundColor: "#FFA500" },
                  }}
                >
                  {" "}
                  Add Address{" "}
                </Button> */}
                <Box
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
                    borderRadius: "8px",
                    ml: 2,
                  }}
                >
                  Add Address
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* <DialogActions>
            <Button autoFocus onClick={closeModal}>
              Save changes
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </>
    );
};

export default CreateNewAddressModalForm;
