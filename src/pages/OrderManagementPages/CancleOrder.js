import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ReusableFormTextField from "../../components/TextField";

const CancleOrder = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item xs={11} sm={11.8} md={11} lg={8} sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', padding: { xs: '20px 10px', sm: '20px 30px' } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '19px' }}>Cancelling Orders</Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Divider sx={{ border: '2px solid #F5F5F5', borderRadius: '30px' }} />
                        <Grid>
                            <Grid sx={{ display: { xs: 'block', sm: 'flex' } }}>
                                <Grid xs={12} sm={3} sx={{ padding: '10px 20px', textAlign: { xs: 'center', sm: 'start' } }}>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}> Order Placed </Typography>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}>Date </Typography>
                                </Grid>
                                <Grid xs={12} sm={3} sx={{ padding: '10px 20px', textAlign: { xs: 'center', sm: 'start' } }}>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}> Total Amount </Typography>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}>$39.00 </Typography>

                                </Grid>
                                <Grid xs={12} sm={3} sx={{ padding: '10px 20px', textAlign: { xs: 'center', sm: 'start' } }}>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}> Ship To </Typography>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}>Username </Typography>

                                </Grid>
                                <Grid xs={12} sm={3} sx={{ padding: '10px 20px', textAlign: { xs: 'center', sm: 'start' } }}>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato' }}> Order ID:#1234-642122 </Typography>
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#FFA500' }}>View order details </Typography>
                                </Grid>
                            </Grid>
                            <Grid sx={{ border: '1px solid #C2BEBE', backgroundColor: '#F5F3F1' }}>
                                <Grid sx={{ padding: '20px 30px',}}>
                                    <Typography sx={{ fontSize: '25px', color: '#FFA500', fontFamily: 'Lato', fontWeight: 'bold' }}>Attempting to cancel</Typography>
                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Lato' }}>Your order has already been sent to the seller for fulfilment. We've requested the seller to cancel it and it typically takes one working day for them to respond. You'll receive an email as soon as the order status changes.</Typography>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', marginBottom:'20px' }}>
                                    <Grid xs={12} sm={6}sx={{display:{xs:'block', sm:'flex'}}}>
                                        <Grid xs={12} sm={6} >
                                            <img src=".\assets\imgs\cardImg-2.jpg" style={{maxWidth:'100%', height:'auto'}} />
                                        </Grid>
                                        <Grid xs={12} sm={6} sx={{padding:{xs:'10px 0px', sm:'50px 0px'}}} >
                                            <Typography sx={{fontSize:'18px', fontFamily:'Lato', textAlign:'center'}}>EARRINGS STONES</Typography>
                                            <Typography sx={{fontSize:'18px', fontFamily:'Lato', textAlign:'center'}}>Rs.500.00</Typography>
                                            <Typography sx={{fontSize:'16px', fontFamily:'Lato', textAlign:'center', color:'#409D5F'}}>20% OFF</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export default CancleOrder;