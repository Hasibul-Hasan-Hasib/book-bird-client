import React from 'react';
import styles from './Cart.module.css'
import { Button, Container, Grid, NumberInput } from '@mantine/core';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import TopSearch from '../../shared/TopSearch/TopSearch'
import Footer from '../../shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { Check, Trash} from 'tabler-icons-react';



const Cart = () => {



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
                    <Grid columns={24} sx={{ marginTop: '0.5rem' }}>
                        <Grid.Col span={8} sm={5} >
                            <img className={styles.bookImg} src="https://productimages.worldofbooks.com/1472154665_thumbnail.jpg" alt="book pic" />
                        </Grid.Col>
                        <Grid.Col span={16} sm={19}>
                            <Grid columns={19}>
                                <Grid.Col span={19} sm={9} >
                                    <h3 className={styles.bookInfo}>Where the Crawdads Sing By Delia Owens</h3>
                                    <h3 className={styles.bookInfo}>Sku <span className={styles.colorTitle}>GURo15544665</span></h3>
                                    <h3 className={styles.bookInfo}>Condition <span className={styles.colorTitle}>Very Good</span></h3>
                                    <h3 className={styles.bookInfo}>Category <span className={styles.colorTitle}>Fiction Books</span></h3>
                                </Grid.Col>
                                <Grid.Col span={19} sm={3} >
                                    <h3 className={styles.infoElements}>$3.49</h3>
                                </Grid.Col>
                                <Grid.Col span={19} sm={3} >
                                    <NumberInput
                                        defaultValue={18}
                                        placeholder="Your age"
                                        required
                                        className={styles.numberInput}
                                    />
                                </Grid.Col>
                                <Grid.Col sm={3} >
                                    <h3 className={styles.infoElements}>$17.45</h3>
                                </Grid.Col>
                                <Grid.Col sm={2} sx={{display:'flex'}}>
                                    <Button variant='subtle' leftIcon={<Check/>}>Save</Button>
                                    <Button variant='subtle' color="red" leftIcon={<Trash/>}>Remove</Button>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    </Grid>
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