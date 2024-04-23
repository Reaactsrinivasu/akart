import React from "react";
import Layout from "../../Layout/Layout";
import { Typography, Grid, Button, Divider } from "@mui/material";
import ReusableFormTextField from "../../components/TextField";
import CloseIcon from '@mui/icons-material/Close';

const ShareOrderDetails = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item xs={11} sm={10} md={8} lg={5} sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', padding: { xs: '20px 10px', sm: '20px 30px' } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '19px' }}>Share  Order  Details  :</Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Divider sx={{ border: '2px solid #F5F5F5', borderRadius: '30px' }} />
                        <Grid sx={{ marginTop: '30px', padding: { xs: '0px 10px', sm: '0px 30px' } }}>
                                <Typography sx={{ fontSize: '17px', fontFamily: 'Lato', marginBottom:'5px', fontWeight:'700' }}>Details of the Reciever</Typography>
                            <ReusableFormTextField placeholder='Name' type='text' />
                        </Grid>
                        <Grid sx={{ marginTop: '30px', padding: { xs: '0px 10px', sm: '0px 30px' } }}>
                            <ReusableFormTextField placeholder='Contact Number' />
                        </Grid>
                        <Grid sx={{ marginTop: '30px', padding: { xs: '0px 10px', sm: '0px 30px' }  }}>
                            <Typography sx={{ fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Lato', textAlign: 'center' }}>*Details of the order will be shared to the number. This will give rights to that person to track, exchange/replace the item.</Typography>
                        </Grid>
                        <Grid container sx={{ margin: '20px 0px', justifyContent: 'center' }}>
                            <Button sx={{ textTransform: 'none', color: '#000000', backgroundColor: '#FFA500', fontWeight: 700, padding: '5px 30px', '&:hover': { backgroundColor: '#FFA500' } }}> Share </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export default ShareOrderDetails;