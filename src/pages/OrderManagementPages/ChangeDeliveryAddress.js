import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ReusableFormTextField from "../../components/TextField";
import Checkbox from '@mui/material/Checkbox';

const ChangerDeliveryAddress = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center',  marginTop: '20px' }}>
                    <Grid item xs={11} sm={10} md={8} lg={5} sx={{  backgroundColor: '#FFFFFF', padding:{xs:'10px 10px', sm:'10px 30px'}, borderRadius:'10px'  }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '19px' }}>Change Delivery Address :</Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Country/Region</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Full name(First and Last name)</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Mobile Number</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Pincode</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Flat,House no,Building,Company,Apartment</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Area, Street, Sector , Village</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Landmark</Typography>
                            <ReusableFormTextField />
                        </Grid>
                        <Grid sx={{ display:{xs:'block', sm:'flex'}, marginTop: '20px' }} gap={2}>
                            <Grid item xs={12} sm={6} >
                                <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>Town/City</Typography>
                                <ReusableFormTextField />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{marginTop:{xs:'20px', sm:'0px'}}}>
                                <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', }}>State</Typography>
                                <ReusableFormTextField />
                            </Grid>
                        </Grid>
                        <Grid sx={{ marginTop: '20px', display:'flex', alignItems:'center' }}>
                            <Checkbox />
                            <Typography sx={{fontSize:'17px', fontFamily:'Lato'}}>make this is my default adress</Typography>
                        </Grid>
                        <Grid sx={{ margin: '20px 0px' }}>
                            <Button sx={{ textTransform:'none', color:'#000000', backgroundColor:'#FFA500', fontWeight:700, padding:'5px 30px', '&:hover':{backgroundColor:'#FFA500'}}}> Add Address </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

export default ChangerDeliveryAddress;