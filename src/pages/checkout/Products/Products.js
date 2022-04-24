import React from 'react';
import styles from './Products.module.css'
import {  Grid,  ScrollArea } from '@mantine/core';




const Products = () => {
    return (
        <>
            <h2>Products</h2>
            <hr />
            <ScrollArea style={{ height: 200, padding: '0 1rem' }}>
                <Grid>
                    <Grid.Col span={4}><img src="https://productimages.worldofbooks.com/1472154665_thumbnail.jpg" alt="book pic" className={styles.bookImg} /></Grid.Col>
                    <Grid.Col span={8} sx={{ textAlign: 'left' }}>
                        <h5>Where the Crawdads Sing By Delia Owens</h5>
                        <h5>2 × $3.4</h5>
                    </Grid.Col>
                    <Grid.Col span={4}><img src="https://productimages.worldofbooks.com/1472154665_thumbnail.jpg" alt="book pic" className={styles.bookImg} /></Grid.Col>
                    <Grid.Col span={8} sx={{ textAlign: 'left' }}>
                        <h5>Where the Crawdads Sing By Delia Owens</h5>
                        <h5>2 × $3.4</h5>
                    </Grid.Col>
                    <Grid.Col span={4}><img src="https://productimages.worldofbooks.com/1472154665_thumbnail.jpg" alt="book pic" className={styles.bookImg} /></Grid.Col>
                    <Grid.Col span={8} sx={{ textAlign: 'left' }}>
                        <h5>Where the Crawdads Sing By Delia Owens</h5>
                        <h5>2 × $3.4</h5>
                    </Grid.Col>
                </Grid>
            </ScrollArea>
            <hr />
            <div className={styles.prices}>
                <h4 className={styles.price}>Subtotal</h4>
                <h4 className={styles.price}>$12.25</h4>
            </div>
            <hr style={{ width: '90%' }} />
            <div className={styles.prices}>
                <h4 className={styles.price}>Grand total</h4>
                <h4 className={styles.price}>$12.25</h4>
            </div>
        </>
    );
};

export default Products;