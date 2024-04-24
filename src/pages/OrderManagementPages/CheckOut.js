import React from "react";
import Layout from "../../Layout/Layout";
import { Grid, Typography } from "@mui/material";

const CheckOut = () => {
    return(
        <>
        <Layout>
            <Grid container sx={{border:'2px solid red', justifyContent:'center'}}>
                <Grid item xs={12} sm={11} md={8} sx={{border:'2px solid'}}>
                    <Grid sx={{padding:'10px', border:'1px solid #DFD3D3', backgroundColor:'#F5F5F5'}}>
                        <Typography sx={{fontSize:'19px', fontFamily:'Lato', fontWeight:700, textAlign:'center'}}>Checkout</Typography>
                    </Grid>
                    <Grid sx={{padding:'20px'}}>
                        <Grid>
                        <Typography sx={{fontSize:'15px', fontFamily:'Lato', color:'#1C48E2'}}>1.Select a delivery address</Typography>
                        </Grid>
                        <Grid sx={{border:'1px solid #645B5B', borderRadius:'5px'}}>
                            <Grid sx={{padding:''}}>
                                <Typography>Your Addresses</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
        </>
    );
}

export default CheckOut;