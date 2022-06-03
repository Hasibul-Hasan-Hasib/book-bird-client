import React from 'react';
import styles from './BestSelling.module.css'
import { ArrowRight } from 'tabler-icons-react'
import { Container, Loader } from '@mantine/core';
import Card from '../../shared/Card/Card';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';



const BestSellingFiction = (props) => {

    const books = props.books;
    const isLoading = props.isLoading;
    const title = props.title;
    const filteredBooks = books.filter(book => book.Category1 === title)
    const navigate = useNavigate();

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
            <Container size='lg'>
                <div className={styles.titleContainer} onClick={e => navigate(`/category/${title}`)}>
                    <h2 >Bestselling {title}</h2>
                    <div className={styles.titleContainer}>
                        <h4 style={{marginRight:'0.5rem'}}>View More Fiction Books</h4>
                        <ArrowRight />
                    </div>
                </div>
                <Carousel responsive={responsive} className={styles.sliderContainer}>
                    {
                        isLoading === false ? filteredBooks.slice(12).map(book =>
                            <Card key={book.Sku} book={book} />
                        ) : <Loader />
                    }
                </Carousel>
                <hr />
            </Container>
        </>
    );
};

export default BestSellingFiction;