import React from 'react'

const AllOrderDetailCards = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {orderData &&
          orderData.length > 0 &&
          orderData?.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #CEC1C1",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                }}
              >
                <ListItem sx={{ gap: 2 }}>
                  <ListItemAvatar>
                    {/* <Avatar
                  alt="Remy Sharp"
                  src={props.icon}
                  sx={{
                    // marginLeft: "-4px",
                    // width: 38,
                    // height: 38,
                    // "&.MuiAvatar-root": {
                    //   borderRadius: 0,
                    // },
                  }}
                /> */}
                    <Avatar sx={{ width: 56, height: 56 }}>
                      {/* <CloseIcon sx={{ fontSize: "50px" }} /> */}
                      <DeliveryDiningIcon
                        sx={{ width: 40, height: 40, color: "#ffeb3b" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: 600, // Add fontWeight here
                      },
                      color: "#878787",
                      "&:hover": {
                        color: "#2874f0",
                      },
                    }}
                    primaryTypographyProps={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      mb: 0.25,
                      color: "#121212",
                    }}
                    secondaryTypographyProps={{
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                    // primary="Cancelled"
                    // primary={item?.status[0]}
                    primary={item?.status} //not available
                    secondary="We able to reach you soon..."
                    p={2}
                  />
                  <ReusableLink
                    onClick={() => removeOrderHandler(item.id)}
                    variant="h7"
                    underline="none"
                    sx={{
                      cursor: "pointer",
                      color: "blue",
                      // m: 3,
                      transition: "0.3s",
                      fontWeight: 600,
                    }}
                  >
                    Cancell Order
                  </ReusableLink>
                  <KeyboardArrowRightIcon />
                </ListItem>
                <Grid container spacing={1} p={3}>
                  <Grid item xs={12} sm={12} md={3} p={1}>
                    <img
                      // src="assets/imgs/phone-2.png"
                      src={item?.products[0]?.product_images_urls[0]}
                      alt=""
                      style={{
                        width: "85%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Grid container p={2} spacing={0} mt={0}>
                      <Grid item xs={12} sm={12} md={12} p={2}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item?.products[0]?.product_name}
                        </Typography>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "#6B6767", fontWeight: 600 }}
                          >
                            Order Id : #0345-8901-383
                          </Typography>
                        </Grid> */}
                      {/* <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "#6B6767", fontWeight: 600 }}
                          >
                            Seller :Treasure Haul Union
                          </Typography>
                        </Grid> */}
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{ color: "#6B6767", fontWeight: 600 }}
                        >
                          Actual Price : {item.products[0]?.actual_price}/-
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{ color: "#6B6767", fontWeight: 600 }}
                        >
                          Discount : {item.products[0]?.discount}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{ color: "#6B6767", fontWeight: 600 }}
                        >
                          Discouted Price : {item.products[0]?.discount_price}
                          /-
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <ReusableLink
                          onClick={() =>
                            navigate("/vieworders", { state: item })
                          }
                          variant="h7"
                          underline="none"
                          sx={{
                            cursor: "pointer",
                            color: "blue",
                            // m: 3,
                            transition: "0.3s",
                            fontWeight: 600,
                          }}
                        >
                          View Order Details
                        </ReusableLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default AllOrderDetailCards