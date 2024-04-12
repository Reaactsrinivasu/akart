import React from "react";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
import {
  initialValues,
  generateValidationSchema,
} from "../../../common/Validations";
import { signupWithEmailInitiate } from "../../../redux/actions/emailSignupActions";
const EmailSignUp = () => {
  const navigate = Imports.useNavigate();
  const dispatch = Imports.useDispatch();
  const handleSubmit = async (values) => {
    try {
      dispatch(signupWithEmailInitiate(values,navigate));
    } catch (error) {
    }
  };

  const formFields = ["email"];
  const validationSchema = generateValidationSchema(formFields);
  const formik = Imports.useFormik({
    initialValues: {
      email: "",
      type:"email_account",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <>
      <Imports.ReusableBgBox
        sx={{
          backgroundImage: `url(/assets/imgs/background.jpg)`,
        }}
      >
        <Imports.ReusableContainer component="main" maxWidth="xs">
          <Imports.ReusableBox>
            <Imports.ReusablePaper
              elevation={5}
              variant="elevation"
              square={false}
            >
              <Imports.ReusableTypography
                component="h1"
                variant="h2"
                mt={2}
                sx={{
                  color: "#4f4f4f",
                  margin: "1.5rem 0px",
                }}
              >
                {DataTerms?.SignupButtonText}
              </Imports.ReusableTypography>
              <Imports.ReusableBox sx={{ mt: 1 }}>
                <form
                  onSubmit={formik.handleSubmit}
                  style={{ marginTop: "20px" }}
                >
                  <Imports.FormControl fullWidth>
                    <Imports.FormLabel
                      sx={{
                        marginBottom: "10px",
                        color: "#000",
                        fontWeight: 400,
                        fontSize: "15px",
                      }}
                    >
                      {DataTerms?.EmailIdLabel}
                    </Imports.FormLabel>
                    <Imports.ReusableFormTextField
                      placeholder={DataTerms?.EmailPlaceHolder}
                      id="email"
                      name="email"
                      size="small"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Imports.FormControl>
                  <Imports.ReusableButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2, // margin top
                    }}
                  >
                    {DataTerms?.SendOtpButtonText}
                  </Imports.ReusableButton>
                  <Imports.ReusableGrid
                    container
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    sx={{
                      marginBottom: "8px",
                      gap: 1,
                      color: "#9e9e9e",
                      cursor: "pointer",
                    }}
                  >
                    <Imports.Grid item>
                      <Imports.ReusableTypography variant="body1">
                        {DataTerms?.AlreadyMemeberLinkText}
                      </Imports.ReusableTypography>
                    </Imports.Grid>
                    <Imports.Grid item>
                      <Imports.Link
                        underline="none"
                        variant="body1"
                        onClick={() => navigate("/login")}
                      >
                        {DataTerms?.SigninFormHeading}
                      </Imports.Link>
                    </Imports.Grid>
                  </Imports.ReusableGrid>
                </form>
              </Imports.ReusableBox>
            </Imports.ReusablePaper>
          </Imports.ReusableBox>
        </Imports.ReusableContainer>
      </Imports.ReusableBgBox>
    </>
  );
};

export default EmailSignUp;
