import React from 'react';
import styles from './Products.module.css'
import useData from '../../../hooks/useData';
import Card from '../../shared/Card/Card';
import { Grid } from '@mantine/core';



const Products = (props) => {
    const items = props.books;
    console.log(items);

    return (
        <>
            <Grid className={styles.cardContainer}>
                {
                    items.map(item => <Grid.Col span={6} xs={4} lg={3} className={styles.card}>
                        <Card book={item} />
                    </Grid.Col>)
                }
            </Grid>
        </>
    );
};

export default Products;