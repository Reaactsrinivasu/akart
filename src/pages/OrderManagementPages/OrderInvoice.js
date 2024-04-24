import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../Layout/Layout";
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const OrderInvoice = () => {
    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12} sm={10} sx={{ marginTop: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px', }}>
                        <Grid sx={{ padding: '10px 5px 20px 0px', display: 'flex', justifyContent: 'flex-end', cursor:'pointer' }}>
                            <FileDownloadIcon sx={{color: 'green', marginRight:'20px' }}  />
                            <CloseIcon sx={{  color: 'grey' }} />
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={12} md={5.5}>
                                <Grid>
                                    <img style={{ Width: '80px', height: '80px' }} src="./assets/imgs/actimizeLogo.png" />
                                </Grid>
                                <Grid sx={{ width: '260px', marginLeft: '10px' }}>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Lato' }}> <span style={{ fontWeight: 550, fontSize: '18px' }}> Sold By :</span>R K WorldInfocom pvt ltd*GMR Airport City, Survey No. 99/1, MamidipallyVillage, ShamshabadHyderabad, Telangana, 500108INPAN No:AAECR0564MGST Registration No:36AAECR0564M3Z2</Typography>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Grid sx={{ marginTop: '10px' }}>
                                    <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: '700', color: '#00000' }}>Tax Invoice/Bill of Supply/Cash Memo (Original for Recipient)</Typography>
                                </Grid>
                                <Grid sx={{ marginTop: '10px' }}>
                                    <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: '700', color: '#00000' }}>Billing Address :</Typography>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', color: '#00000' }}>User Name,8-71, besides srinivas floor mills, no-2 schoolstreet, No-2 school street,kutukuluruANAPARTHY, ANDHRA PRADESH, 533264IN State/UT Code:37</Typography>
                                </Grid>
                                <Grid sx={{ marginTop: '10px' }}>
                                    <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: '700', color: '#00000' }}>State/UT Code:37</Typography>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', color: '#00000' }}> <span style={{ fontWeight: '550' }}>Shipping Address :</span>Teja BharathiTeja Bharathi8-71, besides srinivas floor mills, no-2 schoolstreet, No-2 school street, kutukuluruANAPARTHY, ANDHRA PRADESH, 533264IN</Typography>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', color: '#00000', fontWeight: '550' }}>State/UT Code:37</Typography>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Place of supply :</span> ANDHRA PRADESH</Typography>
                                    <Typography sx={{ fontSize: '15px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Place of delivery :</span> ANDHRA PRADESH</Typography>
                                </Grid>
                                <Grid sx={{ marginTop: '10px' }}>
                                    <Typography sx={{ fontSize: '18px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Invoice Number :</span> HYD8-7292936Order</Typography>
                                    <Typography sx={{ fontSize: '18px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Date :</span> 15.02.2023</Typography>
                                    <Typography sx={{ fontSize: '18px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Invoice Details :</span>TG-HYD8-1293787125-2223</Typography>
                                    <Typography sx={{ fontSize: '18px', fontFamily: 'Lato', color: '#00000' }} ><span style={{ fontWeight: '550' }}>Invoice Date :</span>16.02.2023</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ marginTop: '50px', justifyContent: 'center' }}>
                            <Grid item xs={12} md={11} sx={{ border: '1px solid #000000' }}>
                                <Grid sx={{ display: 'flex', backgroundColor:'#D9D9D9', color:'#000000', }}>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>SI.NO</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Description</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Unit Price</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Qty</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Net Amount</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Tax Rate</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Tax Type</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Tax Amount</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ border: '1px solid black', padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Total Amount</Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', color:'#000000' }}>
                                    <Grid item xs={1} sx={{  padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>1</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>ONEPLUS NORD CE3 Lite</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>130.00</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>1 Unit</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>130.00</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>10%.00</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>CGST</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>200.00</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}>330.00</Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', backgroundColor:'#D9D9D9', color:'#000000' }}>
                                    <Grid item xs={1} sx={{  padding:'5px' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'12px', fontFamily:'Lato'}}>Total :</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{  padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{  padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{padding:'5px' }}>
                                        <Typography sx={{ fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{ padding:'5px' }}>
                                        <Typography sx={{fontSize:'12px', fontFamily:'Lato'}}></Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{  padding:'5px' }}>
                                        <Typography sx={{ fontSize:'12px', fontFamily:'Lato'}}>200.00</Typography>
                                    </Grid>
                                    <Grid item xs={1} sx={{  padding:'5px' }}>
                                        <Typography sx={{ fontSize:'12px', fontFamily:'Lato'}}>300.00</Typography>
                                    </Grid>
                                </Grid>
                                <Grid>
                                <Grid item xs={12} sx={{  padding:'5px', display:'flex' }}>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Amount in Words :</Typography>
                                        <Typography sx={{fontWeight:700, fontSize:'14px', fontFamily:'Lato'}}>Three Hundred Thirty only</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom:'50px', justifyContent:'center', marginTop:'10px'}}>
                            <Grid item xs={12} md={11}>
                                <Typography sx={{fontSize:'16px', fontFamily:'Lato', }}>Whether tax is payable under reverse charge - No</Typography>
                                </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

export default OrderInvoice