import React from 'react';
import styles from './SideCar.module.css'
import { Button, Grid, NumberInput } from "@mantine/core"



const SideCart = () => {

    return (
        <div>
            <Button className={styles.btn}>Continue to Checkout</Button>
            <hr />
            <div className={styles.orderContainer}>
                <div>
                    <h3 className={styles.title}>Your Order</h3>
                </div>
                <div className={styles.infoContainer}>
                    <h4 className={styles.title}>Subtotal</h4>
                    <h4 className={styles.info}>$3.49</h4>
                </div>
                <div className={styles.infoContainer}>
                    <h3 className={styles.title}>Total</h3>
                    <h3 className={styles.info}>$3.49</h3>
                </div>
            </div>
            <hr />
            <Grid>
                <Grid.Col xs={5}>
                    <img className={styles.bookImg} src='https://productimages.worldofbooks.com/1472154665.jpg' alt="" />
                </Grid.Col>
                <Grid.Col xs={7}>
                    <h5 className={styles.title}>Where the Crawdads Sing By Delia Owens</h5>
                    <div className={styles.infoContainer}>
                        <h5 className={styles.title}>Price</h5>
                        <h5 className={styles.info}>$3.46</h5>
                    </div>
                    <div className={styles.infoContainer}>
                        <h5 className={styles.title}>Condition</h5>
                        <h5 className={styles.info}>Good</h5>
                    </div>
                    <div className={styles.infoContainer}>
                        <h5 className={styles.title}>Category</h5>
                        <h5 className={styles.info}>Fiction Books</h5>
                    </div>
                    <div className={styles.infoContainer}>
                        <h5 className={styles.title}>Qty</h5>
                        <NumberInput
                            defaultValue={1}
                        />
                    </div>
                    <Button color='red' variant='subtle' className={styles.btn} >Remove Item</Button>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default SideCart;