import React from "react";
import Layout from "../../Layout/Layout";
import { Grid, Typography } from "@mui/material";
import SearchBar from "../../Layout/SearchBar";
import ReusableButton from "../../components/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OrderManagement = () => {

    const cardsData = [{ img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'grey', date: 'Order not placed', update: 'Your payment was not confirmed by bank', rating: '' }, { img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'red', date: 'Order not placed', update: 'Your payment was not confirmed by bank' }, { img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'green', date: 'Delivered on Feb 15th', update: 'Your payment was not confirmed by bank', rating:'★ Rate & Review product' }, { img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'red', date: 'Order not placed', update: 'Your payment was not confirmed by bank' }, { img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'green', date: 'Delivered on Feb 15th', update: 'Your payment was not confirmed by bank', rating:'★ Rate & Review product'  }, { img: './assets/imgs/phone1.png', name: 'ONEPLUS NVERE SETTLE  80', color: 'green', date: 'Delivered on Feb 15th', update: 'Your payment was not confirmed by bank', rating:'★ Rate & Review product' },]

    return (
        <>
            <Layout>
                <Grid container sx={{ justifyContent: 'center'}}>
                    <Grid item xs={12} lg={10} sx={{ marginTop: '10px' }}>
                        <Grid container sx={{}}>
                        <SearchBar />
                        </Grid>
                        <Grid container >
                            {cardsData.map((item) => (
                                <Grid key={item.id} item xs={12} sm={6} md={4} sx={{ margin: '10px 0px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Card sx={{ maxWidth: 350 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="auto"
                                                    image={item.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent sx={{height:'230px'}}>
                                                    <Typography sx={{ fontSize: '14px', textAlign: 'center', fontWeight: 550 }}>ONEPLUS NVERE SETTLE 80</Typography>
                                                    <Typography sx={{ fontSize: '14px', textAlign: 'center', margin: '5px 0px' }}>₹ 35,000</Typography>
                                                    <Grid container alignItems="center" sx={{ justifyContent: 'center' }}>
                                                        <FiberManualRecordIcon sx={{ fontSize: '15px', color: item.color }} />
                                                        <Typography sx={{ fontSize: '13px', textAlign: 'center', marginLeft: '5px', fontWeight: 550 }}>{item.date}</Typography>
                                                    </Grid>
                                                    <Typography sx={{ textAlign: 'center', color: 'grey', fontSize: '13px', marginTop: '5px' }}>{item.update}</Typography>
                                                    <Typography sx={{fontSize:'13px', color:'#FFA500', textAlign:'center', marginTop:'10px'}} >{item.rating}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>




                    </Grid>

                </Grid>
            </Layout>
        </>
    );
}

export default OrderManagement;