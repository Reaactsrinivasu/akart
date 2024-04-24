import React from "react";
import Layout from "../../Layout/Layout";
import { Grid, Typography, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const NeedHelp = () => {

    const questionsData = [{que:'Where is my Order ?'}, {que:'Get Delivery Agents number ?'},{que:'Is Faster Delivery Possible ?'},{que:'Get my bills or Invoices'},{que:'Where is my Order ?'},{que:'Get my bills or Invoices'},{que:'Is Faster Delivery Possible ?'},{que:'Get Delivery Agents number ?'},]


    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item xs={11} sm={10} md={8} lg={5} sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center', padding: { xs: '20px 10px', sm: '20px 30px' } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Lato', fontSize: '19px' }}>I need help ?</Typography>
                            <CloseIcon sx={{ marginLeft: 'auto' }} />
                        </Grid>
                        <Divider sx={{ border: '2px solid #F5F5F5', borderRadius: '30px' }} />
                        <Grid sx={{maxHeight:'230px', overflowY:'scroll'}}>
                            {questionsData.map((item) => (
                                <>
                                <Typography sx={{fontSize:'16px', color:'#FFA500', fontFamily:'Lato', marginLeft:'30px', padding:'10px 0px'}}>{item.que}</Typography>
                                </>
                            ))}
                        </Grid>
                        

                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export default NeedHelp;