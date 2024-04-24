import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ReusableFormTextField from "../../components/TextField";
import Radio from '@mui/material/Radio';

const DidYouFindThisPage = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item xs={11} sm={10} md={8} lg={5} sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', padding: { xs: '20px 10px', sm: '20px 30px' } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '16px' }}>What was the reason of your visit to the order details page? </Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Divider sx={{ border: '2px solid #F5F5F5', borderRadius: '30px' }} />
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>I want to track my order</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>I want to cancel my order</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>I want to make changes on my order</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>I want to return my order</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>I want to reach my support</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 0px' }}>
                                    <Radio size="small" />
                                    <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', color: '#6B6767' }}>Others</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

export default DidYouFindThisPage;