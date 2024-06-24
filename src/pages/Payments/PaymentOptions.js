import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
import { createPaymentWithCodInitiate } from "../../redux/actions/payments/paymentWithCodActions";
import { LoadNotificationsInitiate } from "../../redux/actions/notifications/loadNotificationsActions";
import { createTransactionInitiate } from "../../redux/actions/payments/transactionActions";
const PaymentOptions = (data) => {
  const orderAndAddressIds = data?.data;
  console.log("orderAndAddressIds", orderAndAddressIds);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [disable, setDisable] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const radioButtonHandler = (event) => {
    const newValue = event.target.value;
    console.log("newValue", newValue);
    setSelectedValue(newValue);
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
  const amount = orderAndAddressIds?.totalPrice;
  // const amount = 1000000;
  const submitHandler = (paymentType) => {
    console.log("paymentType",  paymentType);
    const postParams = {
      ...orderAndAddressIds,
      type: selectedValue,
    };
    
    console.log("amount", amount);
    console.log("postParams", postParams);
    if (paymentType === "CashOnDelivery") {
      // alert("CashOnDelivery");
      dispatch(createPaymentWithCodInitiate(postParams, navigate));
      setTimeout(() => {
        dispatch(createTransactionInitiate(amount, navigate));
        dispatch(LoadNotificationsInitiate());
      }, 100);
    } else if (paymentType === "CreditDebitCard")
      alert("CreditDebitCard");
    // var options = {
    //   // key: "YOUR_KEY_ID",
    //   key: "rzp_test_M2Sb0gJt4nyRVA",
    //   amount: amount * 100,
    //   // currency: "INR",
    //   name: "Actimize's  A-kart", //your business name
    //   description: "Thanking for Purchanging with A-kart",
    //   // image: "https://example.com/your_logo",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR479FWg9YaleiX_ZI76N80c5FfeCg1bBUsqg&s",
    //   // image: orderAndAddressIds?.productImage,
    //   // order_id: "order_9A33XWu170gUtm",
    //   // order_id: "order_OObnLXNcQNnVr0",
    //   order_id: "order_OPHrQOC5ghdqJ7",
    //   invoice_id: "inv_OPHpQuiiUK2hl0",
    //   handler: function (response) {
    //     console.log("response", response);
    //     if (response?.razorpay_payment_id) {
    //       dispatch(createTransactionInitiate(amount, navigate));
    //     }
    //     // navigate("/");
    //     // alert(response.razorpay_payment_id);
    //     // alert(response.razorpay_order_id);
    //     // alert(response.razorpay_signature);
    //   },
    //   prefill: {
    //     name: orderAndAddressIds?.userName,
    //     email: "absv1111@gmail.com",
    //     contact: orderAndAddressIds?.phoneNumber,
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };
    // var rzp = new window.Razorpay(options);
    // rzp.open();
  }
  // const notificationData = useSelector(
  //   (state) => state?.getnotificationdata?.data?.data?.data || []
  // );
  // console.log("notificationData", notificationData);
  // useEffect(() => {
  //   dispatch(LoadNotificationsInitiate());
  // }, [dispatch]);
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
                // onChange={radioButtonHandler}
                sx={{ padding: "15px 30px 8px" }}
              >
                <FormControlLabel
                  value="CreditDebitCard"
                  control={
                    <Radio
                      // disabled
                      onChange={radioButtonHandler}
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
                  // name="radio-buttons-group"
                  sx={{ padding: "15px 30px 8px" }}
                  aria-label="payment method"
                  name="paymentMethod"
                  value={selectedValue}
                  onChange={radioButtonHandler}
                >
                  <FormControlLabel
                    value="CashOnDelivery"
                    control={
                      <Radio
                        onChange={radioButtonHandler}
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
                  // onClick={() => navigate("/paymentstatus")}
                  onClick={() => submitHandler(selectedValue)}
                  component="button"
                  disabled={selectedValue === ""}
                  sx={{
                    backgroundColor: selectedValue ? "#ff9f00" : "disable",
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
