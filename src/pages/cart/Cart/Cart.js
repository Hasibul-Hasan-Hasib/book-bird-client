import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Group, Image, NumberInput, ScrollArea, Text, Title } from '@mantine/core';
import TopSearch from '../../shared/TopSearch/TopSearch'
import Footer from '../../shared/Footer/Footer';
import { Trash } from 'tabler-icons-react';
import { CartState } from '../../../contexts/CartContext';



const Cart = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();


    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + (parseFloat((curr.book.Price).slice(1)) * curr.qty), 0).toFixed(2));
    }, [cart])

    return (
        <>
            <TopSearch />
            <Container size='lg'>


                {/* Cart Product Section */}


                <Grid columns={12} justify="space-around" >
                    <Grid.Col span={8} sx={{ borderRadius: '10px', margin: '1rem 0', padding: '0.5rem 1rem' }}>
                        <ScrollArea scrollbarSize={2} style={{ height: 450}}>
                            {
                                cart.length!==0?cart.map(item => <Grid columns={13} align='center'>
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
                                :
                                <Container style={{padding:'12rem 0'}}>
                                    <Title order={2} align="center">Cart is empty</Title>
                                </Container>
                            }
                        </ScrollArea>
                    </Grid.Col>




                    {/* cart Price Section */}



                    <Grid.Col span={4} style={{ backgroundColor:'lightcyan', borderRadius: '10px', margin: '1rem 0', height: '20%',padding:'2.5% 2.5% 3%'}}>
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
                            {
                                cart.length===0?
                                <Button disabled>CheckOut</Button>
                                :
                                <Button component={Link} to='/checkout'>CheckOut</Button>
                            }
                            <Button  onClick={() => {
                                            dispatch({
                                                type: "EMPTY_CART"
                                            })
                                        }}>EmptyCart</Button>
                        </Group>
                        
                    </Grid.Col>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Cart;