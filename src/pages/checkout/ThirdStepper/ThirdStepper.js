import React from 'react';
import styles from './ThirdStepper.module.css';
import Items from '../Items/Items'; 
import { Button, Container, Grid } from '@mantine/core';


const ThirdStepper = () => {
    return (
        <>
            <Container size="md" sx={{ marginTop: '2rem' }} >
                <Grid columns={12} justify="space-between">
                    <Grid.Col span={12} sm={7} className={styles.box} sx={{ height: 440 }}>
                        <h2 >Shipping Information</h2>
                        <hr />
                        <div >
                            <div className={styles.alignItem}>
                                <span>Name: </span>
                                <span>Hasibul Hasan Hasib</span>
                            </div>
                            <div className={styles.alignItem}>
                                <span>Address: </span>
                                <span>Baparipara, Agrabad, Chittagong</span>
                            </div>
                            <div className={styles.alignItem}>
                                <span>City: </span>
                                <span>Chittagong</span>
                            </div>
                            <div className={styles.alignItem}>
                                <span>Zip/Postal Code:</span>
                                <span>4100</span>
                            </div>
                            <div className={styles.alignItem}>
                                <span>Country</span>
                                <span>Canada</span>
                            </div>
                            <Button>Change Delivery Address</Button>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={12} sm={4} className={styles.box} sx={{ height: 410 }}>
                        <Items />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default ThirdStepper;