import React from "react";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
const SignUp = () => {
   const navigate = Imports?.useNavigate();
  return (
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
                // fontSize: "2.0rem",
                // lineHeight: "2rem",
                margin: "1.5rem 0px",
              }}
            >
              {DataTerms?.SignupButtonText}
            </Imports.ReusableTypography>
            <Imports.ReusableBox sx={{ mt: 1 }}>
              <Imports.ReusableGrid
                container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                sx={{
                  marginBottom: "8px",
                  gap: 1,
                  color: "#9e9e9e",
                  cursor: "pointer",
                }}
              >
                <Imports.Grid item>
                  <Imports.ReusableButton
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={() => navigate("/signup/emailsignup")}
                    sx={{
                      mt: 3,
                      mb: 1, // margin top
                    }}
                  >
                    {DataTerms?.EmailSignupButtonText}
                  </Imports.ReusableButton>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.ReusableDivider
                    // variant="middle"
                    sx={{
                      marginRight: "auto",
                      // marginLeft:'-10px',
                      marginTop: "auto",
                      // marginBottom: "5px",
                      "& .MuiDivider-wrapper": {
                        marginLeft: "-8px",
                        marginRight: "-8px",
                      },
                    }}
                  >
                    <Imports.ReusableChip label="or" size="small" />
                  </Imports.ReusableDivider>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.ReusableButton
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={() => navigate("/signup/mobilesignup")}
                    sx={{
                      mt: 1,
                      mb: 2, // margin top
                    }}
                  >
                    {DataTerms?.MobileSignupButtonText}
                  </Imports.ReusableButton>
                </Imports.Grid>
              </Imports.ReusableGrid>
            </Imports.ReusableBox>
          </Imports.ReusablePaper>
        </Imports.ReusableBox>
      </Imports.ReusableContainer>
    </Imports.ReusableBgBox>
  );
};
export default SignUp;
