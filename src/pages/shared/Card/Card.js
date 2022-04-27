import { Button } from '@mantine/core';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import React from 'react';


const Card = (props) => {
    const { Title, Condition, Image, Price, Sku } = props.book

    return (
        <>
            <div className={styles.imgContainer}>
                <Link to={`/books/bookDetails/${Sku}`}>
                    <img src={Image} className={styles.cardImg} alt="" />
                </Link>
            </div>
            <div className={styles.textContainer}>
                <Link to={`/books/bookDetails/${Sku}`} className={styles.link}>
                    <h6 className={styles.title}>{Title}</h6>
                </Link>
                <h6 className={styles.condition}>{Condition}</h6>
                <h2 className={styles.price}>£ {Price.slice(1)}</h2>
            </div>
            <div className={styles.addCartBtnContainer}>
                <Button className={styles.addCartBtn}>Add to Cart</Button>
            </div>
        </>
    );
};

export default Card;