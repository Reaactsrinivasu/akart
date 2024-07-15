import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTransactionInitiate, updateTransactionInitiate } from "../../redux/actions/payments/transactionActions";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};
const ellipsisStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "15%",
  display: "inline-block",
};
const PaymentModal = ({ show, handleClose, productData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allDetails = JSON.parse(localStorage.getItem("allDetails"));
  console.log("allDetails", allDetails);

  const amount = 1;
  const track_id = productData?.track_id;
  const paymentHandler = () => {
    var options = {
      key: "rzp_test_M2Sb0gJt4nyRVA",
      amount: amount * 100,
      // currency: "INR",
      name: "Actimize's  A-kart", //your business name
      order_id: allDetails?.order_id,
      description: "Thanking for Purchanging with A-kart",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR479FWg9YaleiX_ZI76N80c5FfeCg1bBUsqg&s",

      handler: function (response) {
        console.log("response", response);
        // if (response?.razorpay_payment_id && response?.razorpay_invoice_id) {
        //   navigate("/");
        // }
        if (response?.razorpay_payment_id) {
          // products: productData?.products,
          const payment_details = {
            type: "OnLinePayment",
            amount: 100,
            razorpay_payment_id: response?.razorpay_payment_id,
            razorpay_order_id: response?.razorpay_order_id,
            razorpay_signature: response?.razorpay_signature,
          };
          dispatch(updateTransactionInitiate(track_id, payment_details, navigate));
          
        }
        // navigate("/");
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: allDetails?.name,
        email: allDetails?.email,
        contact: allDetails?.contact,
      },
      appname: "A-kart",
      appid: "abc_1234akart",
      notes: {
        app_name: "A-kart",
        app_id: "abc_1234akart",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <Typography
              variant="h6"
              component="h2"
              fontWeight="bold"
              textAlign="center"
            >
              Payment Method Changed
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                backgroundColor: "#f9f9f9",
                mt: 2,
                p: 2,
                borderRadius: 1,
              }}
            >
              <img
                src={productData?.image}
                alt=""
                style={{
                  width: "30%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={ellipsisStyle}>
                  {productData?.product_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  Price:{" "}
                  <span style={{ color: "green" }}>
                    {productData?.discount_price + 100}
                  </span>
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ mt: 2, fontSize: "13px" }}>
              Payment method has been changed to Online Payment
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                paymentHandler();
                handleClose();
              }}
              sx={{
                textTransform: "none",
                mt: 2,
                backgroundColor: "orange",
                ":hover": { backgroundColor: "orange" },
              }}
            >
              {/* hits payments endpoint
                          amount=100,
                          type:'onlinepayment'
                          product_id
                          product_quantity
                          razorpay order_id,payment_id,signature
                          */}
              Pay (₹{productData?.price})
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default PaymentModal;
