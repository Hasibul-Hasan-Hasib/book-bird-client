import React from 'react';
import styles from './Suggestion.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  Container } from '@mantine/core';
import Card from '../../shared/Card/Card';



const Suggestion = (props) => {

    const {books} = props;
    console.log(books);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        smallTablet: {
            breakpoint: { max: 800, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    };

    return (
        <>
            <Container size="lg"  >
                <h2 className={styles.titleTop}>You may also like...</h2>
                <Carousel responsive={responsive} className={styles.sliderContainer}>
                    {
                        books?.map(item => <Card key={item.Sku} book={item}/>)
                    }
                </Carousel>
            </Container>
        </>
    );
};

export default Suggestion;