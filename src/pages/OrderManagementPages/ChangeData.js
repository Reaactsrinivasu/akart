import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ChangeData = () => {
    return (
        <>
            <Layout>

                <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item xs={11} sm={10} md={8} lg={5} sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', padding: { xs: '20px 10px', sm: '20px 30px' } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '19px' }}>Change Date :</Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Divider sx={{ border: '2px solid #F5F5F5', borderRadius: '30px' }} />
                        <Grid sx={{ marginTop: '30px', padding: { xs: '0px 10px', sm: '0px 30px' } }}>
                            <Typography sx={{ fontSize: '14px', fontFamily: 'Lato', marginBottom: '5px' }}>Dates are subject to confirmation from delivery partners</Typography>
                        </Grid>
                        <Grid sx={{ display: 'flex', padding: { xs: '0px 10px' } }} gap={1}>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Fri</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>19</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Sat</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>20</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Sun</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>21</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Mon</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>22</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Tue</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>23</Typography>
                            </Grid>
                            <Grid item xs={2} sm={1} sx={{ margin: 'auto' }}>
                                <Typography sx={{ border: '1px solid #CEC5C5', borderRadius: '5px', backgroundColor: '#F5F5F5', padding: { xs: '12px 0px', sm: '10px 0px' }, textAlign: 'center', fontSize: { xs: '13px', sm: '16px' } }}>Wed</Typography>
                                <Typography sx={{ marginTop: '5px', textAlign: 'center', fontFamily: 'Lato' }}>24</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ margin: '20px 0px', justifyContent: 'center' }}>
                            <Button sx={{ border:'1px solid #CEC5C5', textTransform: 'none', color: '#000000', backgroundColor: '#F5F5F5', fontWeight: 700, padding: '5px 30px', marginRight:'10px' }}> Cancle </Button>
                            <Button sx={{ textTransform: 'none', color: '#000000', backgroundColor: '#FFA500', fontWeight: 700, padding: '5px 30px', '&:hover': { backgroundColor: '#FFA500' } }}> Save </Button>
                        </Grid>

                    </Grid>
                </Grid>

            </Layout>
        </>
    )
}

export default ChangeData;