import React from 'react';
import styles from './SideCar.module.css'
import { Button, Grid, ScrollArea } from "@mantine/core"
import { Link } from 'react-router-dom';
import { CartState } from '../../../../contexts/CartContext';



const SideCart = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <div>
            <Grid>
                <Grid.Col span={6}>
                    <Link to='/cart'><Button className={styles.btn}>View Cart</Button></Link>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Link to='/checkout'><Button className={styles.btn}>Continue to Checkout</Button></Link>
                </Grid.Col>
            </Grid>
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
            <ScrollArea style={{ height: 550 }} type="scroll" scrollbarSize={2}>
                {
                    cart.map(item => <>
                        <Grid sx={{ marginBottom: '1rem' }}>
                            <Grid.Col xs={5}>
                                <img className={styles.bookImg} src={item.book.Image} alt="" />
                            </Grid.Col>
                            <Grid.Col xs={7}>
                                <h4 className={styles.title}>{item.book.Title}</h4>
                                <div className={styles.infoContainer}>
                                    <h4 className={styles.title}>Price</h4>
                                    <h4 className={styles.info}>£ {item.book.Price.slice(1)}</h4>
                                </div>
                                <div className={styles.infoContainer}>
                                    <h4 className={styles.title}>Condition</h4>
                                    <h4 className={styles.info}>{item.book.Condition}</h4>
                                </div>
                                <div className={styles.infoContainer}>
                                    <h4 className={styles.title}>Category</h4>
                                    <h4 className={styles.info}>{item.book.Category2}</h4>
                                </div>
                                <div className={styles.infoContainer}>
                                    <h4 className={styles.title}>Qty</h4>
                                    <h4 className={styles.info}>1</h4>
                                </div>
                                <Button color='red' variant='subtle' className={styles.btn} onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                    })
                                }}>Remove Item</Button>
                            </Grid.Col>
                        </Grid>
                    </>)
                }
            </ScrollArea>
        </div>
    );
};

export default SideCart;