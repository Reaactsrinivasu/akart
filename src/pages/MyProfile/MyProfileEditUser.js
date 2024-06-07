import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { useNavigate} from "react-router-dom";
import {Button,Box,Grid} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Imports from "../../common/Imports";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import {
  initialValues,
  generateValidationSchema,
} from "../../../src/common/Validations";
import {
  updateMyProfileUserDetailsInitiate,
  getUserDetailsInitiate,
} from "../../redux/actions/updateUserActions";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
      boxShadow:'10px'
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const MyProfileEditUser = React.memo(
  ({ closeModal, getUserData}) => {
    const [userInfo, setUserInfo] = useState({});
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      if (getUserData) {
        setEditMode(true);
        setUserInfo(getUserData);
        formik.setValues(getUserData);
      }
    }, []);
    const formFields = [
      "first_name",
      "last_name",
      "phone_number",
      "alternate_phone_number",
      "email",
      "location",
      "date_of_birth",
      "nick_name",
      "gender",
    ];
    const validationSchema = generateValidationSchema(formFields);
    const formik = useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        phone_number: "",
        alternate_phone_number: "",
        email: "",
        location: "",
        date_of_birth: "",
        nick_name: "",
        gender: "",
      },
      validationSchema: validationSchema,
      enableReinitialize: true,
      onSubmit: (values) => handleSubmit(values),
    });
    // const handleSubmit = async (values, resetForm) => {
    //   const userId = getUserData?.id;
    //   console.log("values", values);
    //   const data = {
    //     ...values,
    //     password_digest: getUserData?.password_digest,
    //   };
    //   console.log("data", data);
    //   dispatch(updateMyProfileUserDetailsInitiate(userId, data));
    //   handleClose();
    // };
const handleSubmit = useCallback(
  async (values) => {
    const userId = getUserData?.id;
    const data = {
      ...values,
      password_digest: getUserData?.password_digest,
    };
        dispatch(updateMyProfileUserDetailsInitiate(userId, data));
        formik.resetForm();
        dispatch(getUserDetailsInitiate());
        closeModal();
  },
  [dispatch, getUserData]
);
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
                  Edit User Details :
                </Typography>
                <CloseIcon
                  sx={{ marginLeft: "auto", cursor: "pointer" }}
                  onClick={closeModal}
                />
              </Grid>
              <Box component="form" onSubmit={formik.handleSubmit}>
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
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
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
                    Alternate Mobile Number
                  </Typography>
                  <Imports.ReusableFormTextField
                    type="text"
                    id="alternate_phone_number"
                    name="alternate_phone_number"
                    size="small"
                    value={formik.values.alternate_phone_number}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.alternate_phone_number &&
                      Boolean(formik.errors.alternate_phone_number)
                    }
                    helperText={
                      formik.touched.alternate_phone_number &&
                      formik.errors.alternate_phone_number
                    }
                  />
                </Grid>
                <Grid sx={{ marginTop: "20px" }}>
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    Email
                  </Typography>
                  <Imports.ReusableFormTextField
                    type="email"
                    id="email"
                    name="email"
                    size="small"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid sx={{ marginTop: "20px" }}>
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    Location
                  </Typography>
                  <Imports.ReusableFormTextField
                    type="text"
                    id="location"
                    name="location"
                    size="small"
                    value={formik.values.location}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.touched.location && formik.errors.location
                    }
                  />
                </Grid>
                <Grid sx={{ marginTop: "20px" }}>
                  <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                    Nick Name
                  </Typography>
                  <Imports.ReusableFormTextField
                    type="text"
                    id="nick_name"
                    name="nick_name"
                    size="small"
                    value={formik.values.nick_name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.nick_name &&
                      Boolean(formik.errors.nick_name)
                    }
                    helperText={
                      formik.touched.nick_name && formik.errors.nick_name
                    }
                  />
                </Grid>
                <Grid
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    marginTop: "20px",
                  }}
                  gap={2}
                >
                  {/* <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                      Gender
                    </Typography>
                    <FormControl
                      component="fieldset"
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    >
                      <RadioGroup
                        row
                        aria-labelledby="gender-radio-buttons-group-label"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                      {formik.touched.gender && formik.errors.gender && (
                        <Typography variant="caption" color="error">
                          {formik.errors.gender}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                      Gender
                    </Typography>
                    <FormControl
                      component="fieldset"
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    >
                      <RadioGroup
                        row
                        aria-labelledby="gender-radio-buttons-group-label"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                      {formik.touched.gender && formik.errors.gender && (
                        <Typography variant="caption" color="error">
                          {formik.errors.gender}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ marginTop: { xs: "20px", sm: "0px" } }}
                  >
                    <Typography sx={{ fontSize: "15px", fontFamily: "Lato" }}>
                      Date of Birth
                    </Typography>
                    <Imports.ReusableFormTextField
                      type="text"
                      id="date_of_birth"
                      name="date_of_birth"
                      size="small"
                      value={formik.values.date_of_birth}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.date_of_birth &&
                        Boolean(formik.errors.date_of_birth)
                      }
                      helperText={
                        formik.touched.date_of_birth &&
                        formik.errors.date_of_birth
                      }
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
                    Update User
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </BootstrapDialog>
      </>
    );
  }
);

export default MyProfileEditUser;
