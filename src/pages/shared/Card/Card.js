import { Grid, Button, Typography } from '@mui/material';
import styles from './Card.module.css'
import React from 'react';


const Card = (props) => {
    const { Title, Author, Image, Price } = props.book
    return (
        <Grid item xs={6} sm={4} md={3} lg={2} className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={Image} className={styles.cardImg} alt="" />
            </div>
            <div className={styles.textContainer}>
                <h6>{Title}</h6>
                <h6>by {Author}</h6>
                <Typography variant='body1'>{Price}</Typography>
            </div>
            <div className={styles.addCartBtnContainer}>
                <Button>Add to Cart</Button>
                </div>
        </Grid>
    );
};

export default Card;