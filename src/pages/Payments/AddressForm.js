import React, { useState } from "react";
import { Box, Grid, Typography, Divider, IconButton,Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Layout from "../../Layout/Layout";
import Paper from "@mui/material/Paper";
import ReusableLink from "../../components/Link";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import TextLink from "../../components/TextLink";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import CreateNewAddressModalForm from "./CreateNewAddressModalForm";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const AddressForm = () => {
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
    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const DemoPaper = styled(Paper)(({ theme }) => ({
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      //   padding: theme.spacing(2),
      ...theme.typography.body2,
      //   textAlign: "center",
    }));
  return (
    <>
      <DemoPaper variant="outlined">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h6" sx={{ color: "#000000", ml: 3, p: 1 }}>
              Your Addresses
            </Typography>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: "#e0e0e0", // Set the color to blue
                height: "0.3px", // Increase the height (width in horizontal divider)
                mt: 1, // Add margin to the top for spacing
                mb: 1,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ padding: "15px 22px" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <DemoPaper variant="outlined">
                {/* <Typography variant="h6" sx={{ color: "#000000", ml: 1, p: 1 }}>
                Your Addresses
              </Typography> */}
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <FormControl>
                      <RadioGroup
                        value={selectedValue}
                        onChange={handleChange}
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Credit or debit card"
                        name="radio-buttons-group"
                        sx={{
                          padding: "15px 30px 8px",
                          // display: "flex",
                          flexDirection: "row",
                          // justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel
                          value="User Address"
                          control={
                            <Radio
                              disabled
                              sx={{
                                color: "blue",
                                "& .MuiSvgIcon-root": {
                                  fontSize: 18,
                                },
                              }}
                            />
                          }
                          label={
                            <Typography
                              variant="body1" // Adjust the variant as needed
                              sx={{
                                color: "#000000",
                                fontSize: "14px",
                                fontWeight: 600,
                                // marginLeft: 1,
                              }}
                            >
                              User Address:
                            </Typography>
                          }
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "13px", marginLeft: "-10px" }}
                          // component="span"
                        >
                          {/* D.no, Street Name, Mandal Name, City Name, District
                          ,Pincode. */}
                          57-5-7, bade vari street,Jagannadhapuram , Kakinada ,
                          Near chinna Market, East Godavari, ,
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ marginLeft: "17%", color: "#!21212" }}
                          //   component="span"
                        >
                          {/* State Name, Country Name. |{" "} */}
                          Andhra Pradesh, India - 533002. |{" "}
                          <TextLink title="Edit Address" /> |{" "}
                          {/* <TextLink title=" Add Delivery Instructions" /> */}
                        </Typography>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </DemoPaper>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ padding: "6px 21px" }}
              >
                <IconButton>
                  <AddIcon
                    color="disabled"
                    sx={{ fontSize: "20px", color: "green" }}
                  />
                </IconButton>
                <TextLink
                  title="Add New Address"
                  sx={{ color: "green" }}
                  onClick={handleOpenModal}
                />
              </Stack>
            </Box>
          </Grid>
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#e0e0e0", // Set the color to blue
              height: "0.5px", // Increase the height (width in horizontal divider)
              mt: 1, // Add margin to the top for spacing
            }}
          />
          <Box
            sx={{
              p: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "#F0F2F2",
            }}
          >
            <Box
              component="button"
              disabled
              sx={{
                // backgroundColor: "#ff9f00",
                backgroundColor: "disable",
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
              Use this address
            </Box>
          </Box>
        </Grid>
      </DemoPaper>
      {/* Modal form  */}
      {isModalOpen && (
        <CreateNewAddressModalForm
          // show={show}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AddressForm;
