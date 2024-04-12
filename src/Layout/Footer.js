// Footer.js
import React from "react";
import {
  styled,
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  // padding: theme.spacing(4, 0),
  margin: theme.spacing(5,0,0,0)
}));

const FooterItem = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: 'flex-start',
  // margin: theme.spacing(0,0,5,0),
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));
const FooterItemTypography = styled("Typography")(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.background.paper,
    transform: "translateX(3px)",
    transition: "all 400ms",
  },
}));

const FooterSocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(-1),
  "& .MuiIconButton-root": {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterContainer>
      <Container maxWidth="xlg" sx={{ bgcolor: "#F39221" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ONLINE SHOPPING
              </Typography>
              <FooterItemTypography>Men</FooterItemTypography>
              <FooterItemTypography>Women</FooterItemTypography>
              <FooterItemTypography>Kids</FooterItemTypography>
              <FooterItemTypography>Home & Living</FooterItemTypography>
              <FooterItemTypography>Beauty</FooterItemTypography>
              <FooterItemTypography>Gift Cards</FooterItemTypography>
            </FooterItem>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                CUSTOMER POLICIES
              </Typography>
              <FooterItemTypography>Contact Us </FooterItemTypography>
              <FooterItemTypography>FAQ</FooterItemTypography>
              <FooterItemTypography>T&C</FooterItemTypography>
              <FooterItemTypography>Terms Of Use</FooterItemTypography>
              <FooterItemTypography>Track Orders</FooterItemTypography>
              <FooterItemTypography>Shipping</FooterItemTypography>
              <FooterItemTypography>Cancellation</FooterItemTypography>
              <FooterItemTypography>Returns</FooterItemTypography>
              <FooterItemTypography>Privacy policy</FooterItemTypography>
            </FooterItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              sx={{
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  },
                }}
              >
                <FooterItem>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    KEEP IN TOUCH
                  </Typography>
                  <FooterSocialIcons
                    sx={{
                      my: 1,
                      [theme.breakpoints.down("sm")]: {
                        display: "flex",
                        justifyContent: "center",
                      },
                      "& svg": {
                        fontSize: "30px",
                        cursor: "pointer",
                        mr: 1,
                      },
                      "& svg:hover": {
                        color: "white",
                        transform: "translateX(5px)",
                        transition: "all 400ms",
                      },
                    }}
                  >
                    {/* icons */}
                    <WhatsAppIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                  </FooterSocialIcons>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginTop: "10px",
                      marginBottom: "18px",
                    }}
                  >
                    EXPERIENCE THE APP
                  </Typography>

                  <img
                    src="assets/imgs/googleFooterIcon.png"
                    alt="1"
                    width="211px"
                    height="58px"
                    loading="lazy"
                    style={{ marginBottom: "15px", marginLeft: "-5px" }}
                  />

                  <img
                    src="assets/imgs/appleFooterIcon.png"
                    alt="1"
                    width="211px"
                    height="58px"
                    loading="lazy"
                    style={{ marginLeft: "-5px" }}
                  />
                </FooterItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  },
                }}
              >
                <FooterItem>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    OUR SERVICES
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "20px",
                      [theme.breakpoints.down("sm")]: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <img
                      src="assets/imgs/original.png"
                      alt="1"
                      loading="lazy"
                      width="100px"
                      height="100px"
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        // fontSize: "18px",
                        // whiteSpace: "nowrap",
                      }}
                    >
                      100% ORIGINAL <br />
                       guarantee for all products.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "20px",
                      [theme.breakpoints.down("sm")]: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <img
                      src="assets/imgs/calender.png"
                      alt="1"
                      loading="lazy"
                      width="100px"
                      height="100px"
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        // fontSize: "18px",
                        // whiteSpace: "nowrap",
                      }}
                    >
                      Return within 14days  <br />
                      of receiving your order
                    </Typography>
                  </Box>
                </FooterItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          p={2}
          spacing={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          
        >
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h4">
              In case of any concern, Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h4">
              {new Date().getFullYear()},www.actimize.in,All rights are reserved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h4">Telephone:6305196668</Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
