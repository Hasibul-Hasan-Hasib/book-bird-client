import React from 'react';
import styles from './Suggestion.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Container } from '@mantine/core';
import Card from '../../shared/Card/Card';
import { Link } from 'react-router-dom';



const Suggestion = (props) => {

    const books = props.books;


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
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imgContainer}>
                            <Link to={`/books/bookDetails`}>
                                <img src="https://productimages.worldofbooks.com/152901929X.jpg" className={styles.cardImg} alt="" />
                            </Link>
                        </div>
                        <div className={styles.textContainer}>
                            <Link to={`/books/bookDetails`} className={styles.link}>
                                <h6 className={styles.title}>hello</h6>
                            </Link>
                            <h6 className={styles.condition}>goood</h6>
                            <h2 className={styles.price}>£ 2.63</h2>
                        </div>
                        <div className={styles.addCartBtnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                        </div>
                    </div>
                </Carousel>
            </Container>
        </>
    );
};

export default Suggestion;