import React from 'react';
import styles from './BestSellingFiction.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Grid } from '@mui/material';
import Card from '../../shared/Card/Card';
import useData from '../../../hooks/useData';
import { NavLink } from 'react-router-dom';



const BestSellingFiction = () => {
    const books = useData();
    return (
        <>
            <Container>
                <NavLink to='/about' className={styles.link}>
                    <Grid container className={styles.titleContainer}>
                        <Grid item className={styles.title}>Bestselling Fiction Books</Grid>
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