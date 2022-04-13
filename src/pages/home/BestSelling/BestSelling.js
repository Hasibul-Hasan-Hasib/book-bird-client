import React from 'react';
import styles from './BestSelling.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Grid } from '@mui/material';
import Card from '../../shared/Card/Card';
import { NavLink } from 'react-router-dom';



const BestSellingFiction = (props) => {

    const books = props.books;
    const title = props.title;

    
    return (
        <>
            <Container>
                <NavLink to='/about' className={styles.link}>
                    <Grid container className={styles.titleContainer}>
                        <Grid item className={styles.title}>Bestselling {title} Books</Grid>
                        <Grid item className={styles.viewMoreBtn}>View More Fiction Books <ArrowForwardIosIcon /></Grid>
                    </Grid>
                </NavLink>
                <Grid container className={styles.cardContainer}>
                    {
                        books.slice(0,6).map(book => <Card book={book} />)
                    }
                </Grid>
                <hr/>
            </Container>
        </>
    );
};

export default BestSellingFiction;