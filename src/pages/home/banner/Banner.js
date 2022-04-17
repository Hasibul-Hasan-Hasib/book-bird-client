import React from 'react';
import styles from './Banner.module.css'
import { ChevronLeft,ChevronRight,TruckDelivery,Book,Check } from 'tabler-icons-react';
import bannerImage1 from '../../../assets/image/banner_images/bannerImg1.png';
import bannerImage2 from '../../../assets/image/banner_images/bannerImg2.png'
import bannerImage3 from '../../../assets/image/banner_images/bannerImg3.png'
import { Container, Grid, Text } from '@mantine/core'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';


const Banner = () => {
    return (
        <>
            <Container size='lg'>
                <Grid container className={styles.banner1}>
                    <Grid.Col sm={6} md={4} lg={4}>
                        <div className={styles.title}>
                            <Text className={styles.titleText}>Free Shipping on all orders in the UK</Text>
                            <TruckDelivery className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage1} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} lg={4}>
                        <div className={styles.title}>
                            <Text className={styles.titleText}>Over 7 millions books in stock</Text>
                            <Book className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage2} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} lg={4} className={styles.hidden}>
                        <div className={styles.title}>
                            <Text className={styles.titleText}>Proud to be B-Corp</Text>
                            <Check className={styles.titleIcon} />
                        </div>
                        <div className={styles.bannerImageContainer}>
                            <img src={bannerImage3} className={styles.bannerImg} alt="" />
                        </div>
                    </Grid.Col>
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
                                <Text className={styles.titleText}>Free Shipping on all orders in the UK</Text>
                                <TruckDelivery className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage1} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className={styles.title}>
                                <Text className={styles.titleText}>Over 7 millions books in stock</Text>
                                <Book className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage2} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className={styles.title}>
                                <Text className={styles.titleText}>Proud to be B-Corp</Text>
                                <Check className={styles.titleIcon} />
                            </div>
                            <div className={styles.bannerImageContainer}>
                                <img src={bannerImage3} className={styles.bannerImg} alt="" />
                            </div>
                        </Slide>
                    </Slider>
                    <div className={styles.slideBtns}>
                        <ButtonBack className={styles.backBtn}><ChevronLeft /></ButtonBack>
                        <ButtonNext className={styles.nextBtn}><ChevronRight /></ButtonNext>
                    </div>
                </CarouselProvider>
            </Container>
        </>
    );
};

export default Banner;