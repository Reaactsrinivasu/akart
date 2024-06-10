import React, { useState, useEffect, useCallback } from "react";
import { Button, Box, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import {
  initialValues,
  generateValidationSchema,
} from "../../../src/common/Validations";
import { updateUserAddressInitiate } from "../../redux/actions/address/userAddressActions";
import Imports from "../../common/Imports";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    boxShadow: "10px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const EditAddressModalForm = ({ closeModal, title, addressData }) => {
    const [accountId, setAccountId] = useState('');
    console.table("addressData", addressData);
  const dispatch = useDispatch();
useEffect(() => {
  if (addressData) {
      formik.setValues(addressData);
      setAccountId(addressData?.account_id);
  }
}, []);
  const formFields = [
    "country",
    "first_name",
    "last_name",
    "phone_number",
    "pincode",
    "house_number",
    "street",
    "landmark",
    "locality",
    "city",
    "state",
  ];
  const validationSchema = generateValidationSchema(formFields);
  const formik = useFormik({
    initialValues: {
      country: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      pincode: "",
      house_number: "",
      street: "",
      landmark: "",
      locality: "",
      city: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values) => {
      console.log("values", values);
    const data = {
      ...values,
      make_default: true,
    };
    console.log("data accountId", accountId, data);
    if (data) {
      dispatch(updateUserAddressInitiate(accountId,data));
      formik.resetForm();
      closeModal();
    }
  };
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
                {title} User Details
              </Typography>
              <CloseIcon
                sx={{ marginLeft: "auto", cursor: "pointer" }}
                onClick={closeModal}
              />
            </Grid>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Country/Region
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="country"
                  name="country"
                  size="small"
                  value={formik.values.country}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  First Name
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="first_name"
                  name="first_name"
                  size="small"
                  value={formik.values.first_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Last Name
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="last_name"
                  name="last_name"
                  size="small"
                  value={formik.values.last_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Mobile Number
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  size="small"
                  value={formik.values.phone_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phone_number &&
                    Boolean(formik.errors.phone_number)
                  }
                  helperText={
                    formik.touched.phone_number && formik.errors.phone_number
                  }
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Pincode
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="pincode"
                  name="pincode"
                  size="small"
                  value={formik.values.pincode}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pincode && Boolean(formik.errors.pincode)
                  }
                  helperText={formik.touched.pincode && formik.errors.pincode}
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Flat,House no,Building,Company,Apartment
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="house_number"
                  name="house_number"
                  size="small"
                  value={formik.values.house_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.house_number &&
                    Boolean(formik.errors.house_number)
                  }
                  helperText={
                    formik.touched.house_number && formik.errors.house_number
                  }
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Area, Street, Sector , Village
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="street"
                  name="street"
                  size="small"
                  value={formik.values.street}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Landmark
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="landmark"
                  name="landmark"
                  size="small"
                  value={formik.values.landmark}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.landmark && Boolean(formik.errors.landmark)
                  }
                  helperText={formik.touched.landmark && formik.errors.landmark}
                />
              </Grid>
              <Grid sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                  Locality
                </Typography>
                <Imports.ReusableFormTextField
                  type="text"
                  id="locality"
                  name="locality"
                  size="small"
                  value={formik.values.locality}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.locality && Boolean(formik.errors.locality)
                  }
                  helperText={formik.touched.locality && formik.errors.locality}
                />
              </Grid>
              <Grid
                sx={{
                  display: { xs: "block", sm: "flex" },
                  marginTop: "20px",
                }}
                gap={2}
              >
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    Town/City
                  </Typography>
                  <Imports.ReusableFormTextField
                    type="text"
                    id="city"
                    name="city"
                    size="small"
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
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
                  <Imports.ReusableFormTextField
                    type="text"
                    id="state"
                    name="state"
                    size="small"
                    value={formik.values.state}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ margin: "20px 0px" }}>
                <Box
                  type="submit"
                  component="button"
                  sx={{
                    cursor: "pointer",
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
                  Update User Address
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </BootstrapDialog>
    </>
  );
};

export default EditAddressModalForm;
