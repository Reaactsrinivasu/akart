// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div>AboutUs</div>
//   )
// }

// export default AboutUs;
// loadAboutUsInitiate;

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Paper } from "@mui/material";
import { loadAboutUsInitiate } from "../../redux/actions/others/aboutUsActions";
const PrivacyPolicy = () => {
//       const htmlContent = `
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Welcome to A-Kart - Your Ultimate Online Shopping Destination</title>
//         <style>
//             body {
//                 // font-family: Arial, sans-serif;
//                 line-height: 1.6;
//                 background-color: white;
//                padding:0;
//                margin:0
//             }
//             .header{
//                 background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s') no-repeat center center; /* Replace with your image URL */
//                 background-size: cover;
//             }
//             .content{
//                 background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s') no-repeat center center; /* Replace with your image URL */
//                 background-size: cover;
//             }
//             .footer{
//                 background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s') no-repeat center center; /* Replace with your image URL */
//                 background-size: cover;
//             }
//              h2 {
//                 color: #FF6B00;
//             }
//             ul {
               
//                 padding: 0;
//             }
//             ul li {
//                 // margin-bottom: 10px;
//             }
//             .contact-details, .social-media {
//                 margin-top: 20px;
//             }
//             .social-media a {
//                 display: inline-block;
//                 margin-right: 10px;
//                 text-decoration: none;
//                 color: #333;
//             }
//         </style>
//     </head>
//     <body>
 
//             <div class="header">
//                 <div style="background-color: rgba(0, 0, 0, 0.8);padding: 20px; ">
//                     <div style="background-color: white; border-radius: 100%; height: 100px; width: 100px; display: flex; justify-content: center; align-items: center; margin: auto;">
//                         <img src="https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480" alt="Italian Trulli" style="height: 80px; width: 80px; border-radius: 100%;">
//                     </div>
//                     <h2 style="text-align: center;font-size: 22px;">Welcome to A-Kart - Your Ultimate Online Shopping Destination</h2>
//                     <h3 style="text-align: center;font-size: 28px;color:white">About Us</h3>
//                     <p style="font-size: 20px;color: white;">At A-Kart, we revolutionize the shopping experience by offering a seamless and convenient online platform. Our mission is to provide customers with a vast selection of high-quality products at competitive prices, combined with exceptional customer service. Whether you are looking for the latest fashion trends, cutting-edge electronics, or everyday essentials, A-Kart is your one-stop shop for all your needs.</p>
//                 </div>
//             </div>
 
//             <div style="margin-left:16px;margin-right:16px">
//                 <h2>Features</h2>
//                 <ul style="margin-left:16px;margin-right:16px;list-style-type: number;">
//                     <li style="margin-bottom: 10px;"><strong>Wide Range of Products:</strong> Explore an extensive collection of items across various categories, including clothing, electronics, home appliances, beauty products, and more. Our user-friendly interface ensures you can easily find what you're looking for.</li>
//                     <li style="margin-bottom: 10px;"><strong>Secure and Easy Payments:</strong> Enjoy a hassle-free checkout process with multiple secure payment options, including credit/debit cards, digital wallets, and net banking. Your privacy and security are our top priorities.</li>
//                     <li style="margin-bottom: 10px;"><strong>Fast and Reliable Delivery:</strong> Experience swift delivery services that bring your purchases right to your doorstep. We partner with trusted logistics providers to ensure your orders arrive on time and in perfect condition.</li>
//                     <li style="margin-bottom: 10px;"><strong>Customer Support:</strong> Our dedicated customer support team is here to assist you with any queries or issues. Reach out to us via live chat, email, or phone, and we'll ensure you have a smooth shopping experience.</li>
//                     <li style="margin-bottom: 10px;"><strong>Exclusive Offers and Discounts:</strong> Stay updated with our latest deals and promotions. Sign up for our newsletter to receive exclusive offers, discounts, and early access to sales events.</li>
//                 </ul>
//             </div>
 
 
//             <div class="content">
//                 <div style="background-color: rgba(0, 0, 0, 0.8);">
//                     <div style="margin-left:16px;margin-right:16px;">
//                         <h2 style="padding-top:20px">How to Use A-Kart</h2>
//                         <ul style="margin-left:16px;margin-right:16px;">
//                             <li style="color:white;list-style-type: decimal; margin-bottom: 4px;">
//                                 <strong>Sign Up or Log In:</strong>
//                                 <ul style="margin: 0; padding-left: 10px; color:white; list-style-type: disc;">
//                                     <li style="margin-bottom:12px">Create a new account or log in to your existing account to start shopping.</li>
//                                 </ul>
//                             </li>
//                             <li style="color:white;list-style-type: decimal; margin-bottom: 4px;">
//                                 <strong>Browse and Select Products:</strong>
//                                 <ul style="margin: 0; padding-left: 10px; color:white; list-style-type: disc;">
//                                     <li style="margin-bottom:12px">Navigate through various categories or use the search bar to find specific items. Add desired products to your cart.</li>
//                                 </ul>
//                             </li>
//                             <li style="color:white;list-style-type: decimal; margin-bottom: 4px;">
//                                 <strong>Checkout:</strong>
//                                 <ul style="margin: 0; padding-left: 10px; color:white; list-style-type: disc;">
//                                     <li style="margin-bottom:12px">Review your cart, apply any discount codes, and proceed to checkout. Choose your preferred payment method and enter shipping details.</li>
//                                 </ul>
//                             </li>
//                             <li style="color:white;list-style-type: decimal; margin-bottom: 4px;">
//                                 <strong>Track Your Order:</strong>
//                                 <ul style="margin: 0; padding-left: 10px; color:white; list-style-type: disc;">
//                                     <li style="margin-bottom:12px">Once your order is placed, you can track its status in real-time through your account dashboard.</li>
//                                 </ul>
//                             </li>
//                             <li style="color:white;list-style-type: decimal; margin-bottom: 4px;">
//                                 <strong>Receive and Review:</strong>
//                                 <ul style="margin: 0; padding-left: 10px; color:white; list-style-type: disc;">
//                                     <li style="padding-bottom:14px">Receive your order and leave a review to help other customers make informed decisions.</li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
 
 
//             <div style="margin-left:16px;margin-right:16px">
//                 <h2>Why Choose A-Kart?</h2>
//                 <ul style="margin-left:16px;margin-right:16px">
//                     <li style="margin-bottom:8px"><strong>Diverse Product Range:</strong> From fashion to gadgets, we offer products for all your needs.</li>
//                     <li style="margin-bottom:8px"><strong>Convenience:</strong> Shop anytime, anywhere from the comfort of your home.</li>
//                     <li style="margin-bottom:8px"><strong>Trust:</strong> Our secure platform ensures your personal information is protected.</li>
//                     <li style="margin-bottom:8px"><strong>Customer-Centric:</strong> We prioritize customer satisfaction with reliable service and support.</li>
//                 </ul>
//             </div>
 
 
//             <div class="footer">
//                 <div style="background-color: rgba(0, 0, 0, 0.8);">
//                     <div style="margin-left:16px;">
//                         <h2 style="color:white;padding-top:16px">Contact Us</h2>
//                             <div class="contact-details">
//                                 <p style="color:white">For any inquiries or assistance, please contact us:</p>
//                                 <p style="color:white;">Email: <a href="mailto:contact@actimize.in"style="font-size:14px;text-decoration: none;color: white;">contact@actimize.in</a><br>
//                                 <p style="margin-top:12px;color:white">Phone: 6305196668</p><p style="margin-top:12px;color:white">
//                                 Live Chat: Available 24/7 on our website</p></p>
//                             </div>
//                             <h3 style="color:white;font-size:16px;">Follow us on social media for updates & promotions:</h2>
//                         <div >
//                             <ul style="color:white;margin-left:16px;font-size:14px;">
//                                 <li style="margin-top:12px;">Facebook: <a href="https://facebook.com/ActimizeSoftwareSolutions" target="_blank" style="font-size:14px;text-decoration: none;color: white;">facebook.com/Actimize Software Solutions</a></li>
//                                 <li style="margin-top:12px;">Instagram: <a href="https://instagram.com/ActimizeSoftwareSolutions" target="_blank" style="font-size:14px;text-decoration: none;color: white;">instagram.com/Actimize Software Solutions</a></li>
//                                 <li style="margin-top:12px;">Twitter: <a href="https://twitter.com/ActimizeSoftwareSolutions" target="_blank" style="font-size:14px;text-decoration: none;color: white;">twitter.com/Actimize Software Solutions</a></li>
//                             </ul>
//                         </div>
 
           
//                     </div>
//                         <hr>
//                         <div style=" display: flex;justify-content: center;padding-bottom:12px">
//                             <span style="color:white;"><a href="https://actimize.in/" target="_blank" style="font-size:14px;text-decoration: none;color: white;"> 🌐 : www.actimize.in</a></span>
//                         </div>
//                 </div>
//             </div>
       
//     </body>
// </html>
//   `;
  const dispatch = useDispatch();   
  useEffect(() => {
    dispatch(loadAboutUsInitiate());
  }, [dispatch]);
  const aboutUsData = useSelector(
    (state) => state?.aboutusdata?.data?.data[0] || []
  );
  console.log("aboutUsData", aboutUsData);
  return (
    <>
      <Layout>
        <CssBaseline />
        <Box sx={{ marginTop: "20px" }}>
          <Paper
            elevation={2}
            sx={{backgroundColor: "#fff" }}
            variant="contained"
            component="div"
            dangerouslySetInnerHTML={{ __html: aboutUsData?.data }}
            // dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </Box>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
