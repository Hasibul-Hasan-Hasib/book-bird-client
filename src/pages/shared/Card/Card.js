import { Grid, Button } from '@mantine/core';
import styles from './Card.module.css'
import React from 'react';


const Card = (props) => {
    const { Title, Author, Condition, Image, Price } = props.book
    return (
        <Grid.Col xs={6} sm={4} md={3} lg={2} className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={Image} className={styles.cardImg} alt="" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.link}>
                    <h6 className={styles.title}>{Title}</h6>
                    <h6 className={styles.author}>by {Author}</h6>
                </div>
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