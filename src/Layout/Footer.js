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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(4, 0),
}));

const FooterItem = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const FooterSocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  "& .MuiIconButton-root": {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xlg" sx={{ bgcolor: "#172337" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6">About</Typography>
              <Typography>About Us</Typography>
              <Typography>Careers</Typography>
            </FooterItem>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6">Help</Typography>
              <Typography>Contact Us</Typography>
              <Typography>FAQs</Typography>
            </FooterItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6">Connect with Us</Typography>
              <FooterSocialIcons>
                <IconButton color="inherit" href="#" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="#" target="_blank">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="#" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </FooterSocialIcons>
            </FooterItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterItem>
              <Typography variant="h6">Customer Policies</Typography>
              <Typography>Payments</Typography>
              <Typography>Shipping</Typography>
            </FooterItem>
          </Grid> */}
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
