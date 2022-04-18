import React from 'react';
import styles from './Suggestion.module.css'
import { ChevronLeft, ChevronRight, TruckDelivery, Book, Check } from 'tabler-icons-react';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import useData from '../../../hooks/useData';
import { Container, Grid } from '@mantine/core';



const Suggestion = () => {

    const books = useData();

    return (
        <>
            <Container size="lg">
                <h2>You may also like...</h2>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}>
                            <Grid>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" alt="" />
                            </Grid>
                        </Slide>
                        <Slide index={1}>
                            <img src="https://productimages.worldofbooks.com/152901929X.jpg" alt="" />
                        </Slide>
                        <Slide index={2}>
                            <img src="https://productimages.worldofbooks.com/152901929X.jpg" alt="" />
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

export default Suggestion;