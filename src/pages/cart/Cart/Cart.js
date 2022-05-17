import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Group, Image, NumberInput, ScrollArea, Text } from '@mantine/core';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import TopSearch from '../../shared/TopSearch/TopSearch'
import Footer from '../../shared/Footer/Footer';
import { Trash } from 'tabler-icons-react';
import { CartState } from '../../../context/Context';



const Cart = () => {


    const {
        state: { cart },
        dispatch
    } = CartState();
    console.log(cart);

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + (parseFloat((curr.book.Price).slice(1)) * curr.qty), 0).toFixed(2));
    }, [cart])

    return (
        <>
            <NavigationBar />
            <TopSearch />
            <Container size='lg'>
                <Grid columns={12} justify="space-around">
                    <Grid.Col span={8} sx={{ borderRadius: '10px', margin: '1rem 0', padding: '0.5rem 1rem' }}>
                        <ScrollArea scrollbarSize={2} style={{ height: 450 }}>
                            {
                                cart.map(item => <Grid columns={13} align='center'>
                                    <Grid.Col span={2}>
                                        <Image radius={10}
                                            height={140}
                                            fit="contain" src={item.book.Image} alt="" />
                                    </Grid.Col>
                                    <Grid.Col span={5}>
                                        <Text size="xl">{item.book.Title}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={2}>
                                        <Text>£ {item.book.Price.slice(1)}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={2}>
                                        <NumberInput
                                            value={item.qty}
                                            placeholder="qty"
                                            onChange={(value) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        Sku: item.book.Sku,
                                                        qty: value
                                                    }
                                                })
                                            }
                                            className={styles.numberInput}
                                            min={0}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={1}>
                                        <Button variant='subtle' color="red" onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                        }}><Trash /></Button>
                                    </Grid.Col>
                                </Grid>)
                            }
                        </ScrollArea>
                    </Grid.Col>
                    <Grid.Col span={4} sx={{ border: '1px solid gray', borderRadius: '10px', margin: '1rem 0', padding: '0.5rem 1rem', height: '15rem' }}>
                        <Text size="xl"
                            weight={700} sx={{ marginBottom: '1rem' }}>Cart Total</Text>
                        <Group sx={{ justifyContent: 'space-between' }}>
                            <Text size="lg">Subtotal</Text>
                            <Text size="lg">£ {total}</Text>
                        </Group>
                        <hr />
                        <Group sx={{ justifyContent: 'space-between' }}>
                            <Text size="lg">Shipping</Text>
                            <Text size="lg">{cart.length > 0 ? "£ 5.00" : "£ 0.00"}</Text>
                        </Group>
                        <hr />
                        <Group sx={{ justifyContent: 'space-between' }}>
                            <Text size="lg">Total</Text>
                            <Text size="lg">{cart.length > 0 ? `£ ${(Number(total) + 5).toFixed(2)}` : "£ 0.00"}</Text>
                        </Group>
                        <Group sx={{display:'flex',justifyContent:"center",marginTop:'1rem'}}>
                            <Button component={Link} to='/checkout'>CheckOut</Button>
                            <Button>EmptyCart</Button>
                        </Group>
                    </Grid.Col>
                </Grid>

                {/* <div>
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
                                                onChapnge={1}
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
                </div> */}
            </Container>
            <Footer />
        </>
    );
};

export default Cart;