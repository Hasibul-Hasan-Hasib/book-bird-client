import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckIcon from '@mui/icons-material/Check';
import styles from './Banner.module.css'
import bannerImage1 from '../../../assets/image/banner_images/bannerImg1.png'
import bannerImage2 from '../../../assets/image/banner_images/bannerImg2.png'
import bannerImage3 from '../../../assets/image/banner_images/bannerImg3.png'
import { Container, Grid, Typography } from '@mui/material'

const Banner = () => {
    return (
        <>
            <Container>
                <Grid container className={styles.bannerContainer}>
                    <Grid item xs={4}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Free Shipping on all orders in the UK</Typography>
                            <LocalShippingIcon className={styles.titleIcon}/>
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage1} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Over 7 millions books in stock</Typography>
                            <MenuBookIcon className={styles.titleIcon}/>
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage2} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Proud to be B-Corp</Typography>
                            <CheckIcon className={styles.titleIcon}/>
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage3} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;