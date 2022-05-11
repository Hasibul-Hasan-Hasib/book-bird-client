import React, { useState } from 'react';
import styles from './Cart.module.css'
import { Button, Container, Grid, NumberInput } from '@mantine/core';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import TopSearch from '../../shared/TopSearch/TopSearch'
import Footer from '../../shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { Check, Trash } from 'tabler-icons-react';
import { CartState } from '../../../context/Context';



const Cart = () => {


    const {
        state: { cart },
        dispatch
    } = CartState();



    return (
        <>
            <NavigationBar />
            <TopSearch />
            <Container size='lg'>
                <div>
                    <Grid columns={24} className={styles.hidden}>
                        <Grid.Col span={14}><h3>Products</h3></Grid.Col>
                        <Grid.Col span={3}><h3>Price</h3></Grid.Col>
                        <Grid.Col span={3}><h3>QTY</h3></Grid.Col>
                        <Grid.Col span={3}><h3>SUBTOTAL</h3></Grid.Col>
                        <Grid.Col span={1}></Grid.Col>
                    </Grid>
                    <hr className={styles.hidden} />
                    {
                        cart.map(item =>
                            <Grid columns={24} sx={{ marginTop: '0.5rem' }}>
                                <Grid.Col span={8} sm={5} >
                                    <img className={styles.bookImg} src={item.book.Image} alt="book pic" />
                                </Grid.Col>
                                <Grid.Col span={16} sm={19}>
                                    <Grid columns={19}>
                                        <Grid.Col span={19} sm={9} >
                                            <h3 className={styles.bookInfo}>{item.book.Title}</h3>
                                            <h3 className={styles.bookInfo}>Sku <span className={styles.colorTitle}>{item.book.Sku}</span></h3>
                                            <h3 className={styles.bookInfo}>Condition <span className={styles.colorTitle}>{item.book.Condition}</span></h3>
                                            <h3 className={styles.bookInfo}>Category <span className={styles.colorTitle}>{item.book.Category2}</span></h3>
                                        </Grid.Col>
                                        <Grid.Col span={19} sm={3} >
                                            <h3 className={styles.infoElements}>£ {item.book.Price.slice(1)}</h3>
                                        </Grid.Col>
                                        <Grid.Col span={19} sm={3} >
                                            <NumberInput
                                                defaultValue={1}
                                                placeholder="Your age"
                                                onChange={1}
                                                className={styles.numberInput}
                                                min={0}
                                            />
                                        </Grid.Col>
                                        <Grid.Col sm={3} >
                                            <h3 className={styles.infoElements}>$17.45</h3>
                                        </Grid.Col>
                                        <Grid.Col sm={2} sx={{ display: 'flex' }}>
                                            <Button variant='subtle' leftIcon={<Check />}>Save</Button>
                                            <Button variant='subtle' color="red" leftIcon={<Trash />} onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item,
                                                })
                                            }}>Remove</Button>
                                        </Grid.Col>
                                    </Grid>
                                </Grid.Col>
                            </Grid>
                        )
                    }
                    <Grid justify="space-between" sx={{ margin: '0.5rem 0' }}>
                        <Grid.Col span={6} sx={{ textAlign: 'left' }}><Button variant='subtle' sx={{ padding: 0 }}>Empty Cart</Button></Grid.Col>
                        <Grid.Col span={6} sx={{ textAlign: 'right' }}><Link to="/checkout"><Button>Checkout Now</Button></Link></Grid.Col>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Cart;