import { Grid, Button } from '@mantine/core';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import React from 'react';


const Card = (props) => {
    const { Title, Condition, Image, Price, ISBN_10 } = props.book
    return (
        <Grid.Col span={6} xs={4} sm={3} lg={2} className={styles.card}>
            <div className={styles.imgContainer}>
                <Link to={`/books/bookDetails`}>
                    <img src={Image} className={styles.cardImg} alt="" />
                </Link>
            </div>
            <div className={styles.textContainer}>
                <Link to={`/books/bookDetails`} className={styles.link}>
                    <h6 className={styles.title}>{Title}</h6>
                </Link>
                <h6 className={styles.condition}>{Condition}</h6>
                <h2 className={styles.price}>£ {Price.slice(1)}</h2>
            </div>
            <div className={styles.addCartBtnContainer}>
                <Button className={styles.addCartBtn}>Add to Cart</Button>
            </div>
        </Grid.Col>
    );
};

export default Card;