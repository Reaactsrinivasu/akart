import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Grid, Typography } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const ProductTracking = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center', marginTop: '30px' }}>
                    <Grid item xs={12} md={11} lg={10} sx={{ display: { xs: 'block', sm: 'flex' }, backgroundColor: '#FFFFFF', borderRadius: '5px' }}>
                        <Grid item xs={12} sm={6} sx={{ borderRight: '2px solid grey ', paddingLeft: '30px', paddingTop: '20px', }}>
                            <Grid >
                                <Typography sx={{ fontWeight: 700, fontSize: '19px', fontFamily: 'Lato' }}>Delivered Address</Typography>
                            </Grid>
                            <Grid container sx={{ display: 'flex', marginTop: '10px' }}>
                                <Grid xs={6} >
                                    <Typography sx={{ fontSize: '19px', fontFamily: 'Lato' }}>User Name</Typography>
                                    <Typography sx={{ fontSize: '13px', fontFamily: 'Lato', color: '#6B6767' }}>D.No :2-12-72,Street name, Mandal Name, Location, Landmark, District,
                                        State, Nation, Pin code</Typography>
                                    <Typography sx={{ fontWeight: 700, fontSize: '13px', fontFamily: 'Lato', margin: '15px 0px' }}>Phone Number : <span style={{ color: '#6B6767', fontWeight: 250 }}>7396455771</span></Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Button sx={{ border: '1px solid #D0C5C5', textTransform: 'none', color: '#FFA500', fontFamily: 'Lato', fontSize: '13px', fontWeight: 700, padding: '2px 10px' }}>Change</Button>
                                </Grid>

                                <Typography sx={{ fontWeight: 700, color: '#FFA500', fontSize: '14px', fontFamily: 'Lato', marginBottom: '15px' }}>Change or Add Number</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ paddingLeft: '30px', paddingTop: { xs: '0px', sm: '20px' } }}>
                            <Grid >
                                <Typography sx={{ fontSize: '19px', fontFamily: 'Lato', color: '#000000' }}>More actions</Typography>
                            </Grid>
                            <Grid container sx={{ display: 'flex', marginTop: '10px' }}>
                                <Grid xs={12} sm={6} >
                                    <Typography sx={{ fontSize: '12px', color: '#000000', margin: '20px 0px' }}>Prefer contactless delivery</Typography>
                                    <Typography sx={{ fontSize: '12px', color: '#000000' }}>Share that Order</Typography>
                                </Grid>
                                <Grid xs={12} sm={6} sx={{ display: 'block', marginBottom: '20px', marginTop: { xs: '20px', sm: '0px' } }}>
                                    <Grid>
                                        <Button sx={{ border: '1px solid #D0C5C5', textTransform: 'none', color: '#FFA500', fontFamily: 'Lato', fontSize: '13px', fontWeight: 700, padding: '2px 12px' }}>Pay now</Button>
                                    </Grid>
                                    <Grid>
                                        <Button sx={{ border: '1px solid #D0C5C5', textTransform: 'none', color: '#FFA500', fontFamily: 'Lato', fontSize: '13px', fontWeight: 700, padding: '2px 20px', marginTop: '15px' }}>Share</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ justifyContent: 'center', marginTop:{xs:'30px', sm:'70px' }  }}>
                    <Grid item xs={12} md={11} lg={10} sx={{ padding: '20px 0px', backgroundColor: '#FFFFFF', display: { xs: 'block', sm: 'flex' }, borderRadius:'5px' }}>
                        <Grid item xs={12} sm={4} md={2}  >
                            <img src='./assets/imgs/phone1.png' style={{ maxWidth: '100%', height: 'auto' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Grid item sx={{ display: { xs: 'block', md: 'flex' } }}>
                                <Grid xs={12} md={3}>
                                    <Typography sx={{ fontSize: '19px', fontWeight: 700, fontFamily: 'Lato', textAlign: { xs: 'center', md: 'start' } }}>ONEPLUS NEVER SETTLE  80</Typography>
                                    <Typography sx={{ marginTop: '10px', fontSize: '14px', fontWeight: 700, textAlign: { xs: 'center', md: 'start' } }}>₹ 35000 </Typography>
                                </Grid>
                                <Grid xs={12} md={9} >
                                    <Grid>
                                        <Stepper activeStep={1} alternativeLabel>
                                            <Step>
                                                <StepLabel></StepLabel>
                                            </Step>
                                            <Step>
                                                <StepLabel></StepLabel>
                                            </Step>
                                            <Step>
                                                <StepLabel></StepLabel>
                                            </Step>
                                            <Step>
                                                <StepLabel></StepLabel>
                                            </Step>
                                        </Stepper>
                                    </Grid>
                                    <Grid>
                                        <Typography sx={{ textAlign: 'center', marginTop: '10px', fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Lato', color: '#38B03D', fontWeight: 700 }}>Order confirmed Shipped <span style={{ color: '#6B6767' }}> Out For Delivery Delivered </span></Typography>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', marginTop: '5px' }}>
                                        <Grid item xs={6}>
                                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '10px', sm: '14px' }, fontWeight: 700 }}>Wed 28 Feb Thur, 29 Feb</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '10px', sm: '14px' }, fontWeight: 700 }}>Expected by Sun, 03 Mar</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid sx={{ borderTop: '1px solid #160303', marginTop: '15px' }}>
                                <Typography sx={{ textAlign: { xs: 'center', sm: 'end' }, marginTop: '10px', fontSize: { xs: '13px', sm: '16px' }, color: '#32AC54', fontFamily: 'Lato' }}>Your Item has been Shipped Today at Nearest hub to you</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2} sx={{ display: 'block', paddingLeft: { xs: '10px',sm:'0px', md: '20px' } }} >
                            <Grid sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <CloseIcon sx={{ backgroundColor: '#FFA500', padding: '5px' }} />
                                <Typography sx={{ marginLeft: '10px', color: '#FFA500', fontWeight: 700, fontFamily: 'Lato', fontSize: { xs: '18px', sm: '15px', lg: '18px' } }}>Cancle</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <QuestionMarkIcon sx={{ backgroundColor: '#FFA500', padding: '5px' }} />
                                <Typography sx={{ marginLeft: '10px', color: '#FFA500', fontWeight: 700, fontFamily: 'Lato', fontSize: { xs: '18px', sm: '15px', lg: '18px' } }}>Need help ?</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                <PriorityHighIcon sx={{ backgroundColor: '#FFA500', padding: '5px' }} />
                                <Typography sx={{ marginLeft: '10px', color: '#FFA500', fontWeight: 700, fontFamily: 'Lato', fontSize: { xs: '18px', sm: '15px', lg: '18px' } }}>Change Date</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container sx={{ justifyContent: 'center', marginTop:{xs:'30px', sm:'70px' } }}>
                    <Grid item xs={12} md={11} lg={10} sx={{ padding: '40px 0px', backgroundColor: '#FFFFFF', borderRadius:'5px'}}>
                        <Grid sx={{paddingLeft:'30px'}}>
                            <Typography sx={{fontSize:'18px', fontFamily:'Lato'}}>Help India make good choices</Typography>
                        </Grid>
                        <Grid sx={{paddingLeft:'30px', marginTop:'10px', display:'flex', alignItems:'center'}}>
                            <img src="./assets/imgs/thumb_Icon.png" style={{width:'30px', height:'30px', marginRight:'10px'}}  />
                            <Typography sx={{fontSize:'18px', color:'#FFA500', fontFamily:'Lato'}}>Did you find this page helpful?›</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Layout>
        </>
    )
}

export default ProductTracking;