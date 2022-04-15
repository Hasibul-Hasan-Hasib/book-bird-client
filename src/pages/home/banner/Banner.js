import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckIcon from '@mui/icons-material/Check';
import styles from './Banner.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import bannerImage1 from '../../../assets/image/banner_images/bannerImg1.png';
import bannerImage2 from '../../../assets/image/banner_images/bannerImg2.png'
import bannerImage3 from '../../../assets/image/banner_images/bannerImg3.png'
import { Container, Grid, Typography } from '@mui/material'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';

const Banner = () => {
    return (
        <>
            <Container>
                <Grid container className={styles.banner1}>
                    <Grid item sm={6} md={4}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Free Shipping on all orders in the UK</Typography>
                            <LocalShippingIcon className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage1} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Over 7 millions books in stock</Typography>
                            <MenuBookIcon className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage2} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                    <Grid item sm={4} md={4} className={styles.hidden}>
                        <div className={styles.title}>
                            <Typography className={styles.titleText}>Proud to be B-Corp</Typography>
                            <CheckIcon className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage3} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid>
                </Grid>

                {/* Responsive carousel */}

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    className={styles.banner2}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className={styles.title}>
                                <Typography className={styles.titleText}>Free Shipping on all orders in the UK</Typography>
                                <LocalShippingIcon className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage1} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className={styles.title}>
                                <Typography className={styles.titleText}>Over 7 millions books in stock</Typography>
                                <MenuBookIcon className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage2} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className={styles.title}>
                                <Typography className={styles.titleText}>Proud to be B-Corp</Typography>
                                <CheckIcon className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage3} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                    </Slider>
                    <div className={styles.slideBtns}>
                        <ButtonBack className={styles.backBtn}><ArrowBackIosNewIcon /></ButtonBack>
                        <ButtonNext className={styles.nextBtn}><ArrowForwardIosIcon /></ButtonNext>
                    </div>
                </CarouselProvider>
            </Container>
        </>
    );
};

export default Banner;