import React, { useState } from "react";
import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
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
const PaymentOptions = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  const imageList = [
    { img: "assets/imgs/visa.png" },
    { img: "assets/imgs/rupay.png" },
    { img: "assets/imgs/master.png" },
    { img: "assets/imgs/visa.png" },
    { img: "assets/imgs/visa.png" },
  ];
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    //   padding: theme.spacing(2),
    ...theme.typography.body2,
    //   textAlign: "center",
  }));
    const TextLink = ({ title }) => {
      return (
        <ReusableLink
          variant="subtitle2"
          underline="none"
          sx={{
            cursor: "pointer",
            color: "blue",
            // m: 3,
            transition: "0.3s",
            fontWeight: 500,
          }}
        >
          {title}
        </ReusableLink>
      );
    };
  return (
    <>
      <DemoPaper variant="outlined">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl>
              <RadioGroup
                value={selectedValue}
                onChange={handleChange}
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="Credit or debit card"
                name="radio-buttons-group"
                sx={{ padding: "15px 30px 8px" }}
              >
                <FormControlLabel
                  value="Credit or debit card"
                  control={
                    <Radio
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
                      Credit or debit card
                    </Typography>
                  }
                />
              </RadioGroup>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                pl={7}
              >
                {imageList?.map((item, index) => (
                    <img
                      key={index}
                      src={item.img}
                      alt="1"
                      width="6%"
                      height="40%"
                      style={{ objectFit: "cover" }}
                    />
                ))}
              </Stack>
              {selectedValue ? (
                <>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    pl={7}
                  >
                    <IconButton>
                      <AddIcon color="disabled" sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <img
                      src="assets/imgs/visa.png"
                      alt="1"
                      width="4%"
                      height="30%"
                      style={{ objectFit: "cover" }}
                    />
                    <TextLink title="Enter card details >" />
                    <Typography variant="subtitle2">
                      Amazon accepts all major credit & cards
                    </Typography>
                  </Stack>
                </>
              ) : (
                ""
              )}
            </FormControl>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: "#e0e0e0", // Set the color to blue
                height: "0.5px", // Increase the height (width in horizontal divider)
                mt: 1, // Add margin to the top for spacing
              }}
            />
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="Net Banking"
                name="radio-buttons-group"
                sx={{ padding: "15px 30px 8px" }}
              >
                <FormControlLabel
                  value="Net Banking"
                  control={
                    <Radio
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
                      Net Banking
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: "#e0e0e0", // Set the color to blue
                height: "0.5px", // Increase the height (width in horizontal divider)
                mt: 1, // Add margin to the top for spacing
              }}
            />
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              display="flex"
              flexDirection="column"
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  //   defaultValue="Other UPI Apps"
                  name="radio-buttons-group"
                  sx={{ padding: "15px 30px 8px" }}
                >
                  <FormControlLabel
                    value="Other UPI Apps"
                    control={
                      <Radio
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
                        Other UPI Apps
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  //   defaultValue="EMI Availability Why ?"
                  name="radio-buttons-group"
                  sx={{ padding: "15px 30px 8px" }}
                >
                  <FormControlLabel
                    value="EMI Availability Why ?"
                    control={
                      <Radio
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
                          fontWeight: 500,
                          // marginLeft: 1,
                        }}
                      >
                        EMI Availability <TextLink title="Why ?" />
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  //   defaultValue="Cash on delivery/Pay on delivery"
                  name="radio-buttons-group"
                  sx={{ padding: "15px 30px 8px" }}
                >
                  <FormControlLabel
                    value="Cash on delivery/Pay on delivery"
                    control={
                      <Radio
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
                        Cash on delivery/Pay on delivery
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
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
                  sx={{
                    backgroundColor: "#ff9f00",
                    border: "1px solid #ff9f00",
                    fontWeight: "bold",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    padding: "10px 13px",
                    borderRadius: "8px",
                    ml: 2,
                  }}
                >
                  Use this payment method
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </DemoPaper>
    </>
  );
};

export default PaymentOptions;
