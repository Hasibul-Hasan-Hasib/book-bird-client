import React from 'react';
import styles from './BestSelling.module.css'
import { ArrowRight } from 'tabler-icons-react'
import { Container, Grid, Loader } from '@mantine/core';
import Card from '../../shared/Card/Card';
import { NavLink } from 'react-router-dom';



const BestSellingFiction = (props) => {

    const books = props.books;
    const isLoading = props.isLoading;
    const title = props.title;
    


    return (
        <>
            <Container size='lg'>
                <NavLink to='/about' className={styles.link}>
                    <Grid className={styles.titleContainer}>
                        <h2 className={styles.title}>Bestselling {title} Books</h2>
                        <h3 className={styles.viewMoreBtn}>View More Fiction Books <ArrowRight /></h3>
                    </Grid>
                </NavLink>
                <Grid className={styles.cardContainer}>
                    {
                        isLoading === false ? books.slice(0, 6).map(book =>
                            <Grid.Col span={6} xs={4} sm={3} lg={2} className={styles.card}>
                                <Card key={book.Sku} book={book} />
                            </Grid.Col>):<Loader sx={{margin:"auto"}}></Loader>
                    }
                </Grid>
                <hr />
            </Container>
        </>
    );
};

export default BestSellingFiction;