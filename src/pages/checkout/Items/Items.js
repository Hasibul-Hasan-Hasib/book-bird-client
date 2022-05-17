import React, { useEffect, useState } from 'react';
import styles from './Items.module.css'
import { Grid, ScrollArea } from '@mantine/core';
import { CartState } from '../../../context/Context';




const Items = () => {

    const { state: { cart } } = CartState();
    const[total,setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + (parseFloat((curr.book.Price).slice(1)) * curr.qty), 0).toFixed(2));
    }, [cart])


    return (
        <>
            <h2>Products</h2>
            <hr />
            <ScrollArea style={{ height: 200, padding: '0 1rem' }}>
                <Grid>
                    {
                        cart.map(item => <>
                            <Grid.Col span={4}><img src={item.book.Image} alt="book pic" className={styles.bookImg} /></Grid.Col>
                            <Grid.Col span={8} sx={{ textAlign: 'left' }}>
                                <h5>{item.book.Title}</h5>
                                <h5>{item.qty} × {item.book.Price}</h5>
                            </Grid.Col>
                        </>)
                    }
                </Grid>
            </ScrollArea>
            <hr />
            <div className={styles.prices}>
                <h4 className={styles.price}>Subtotal</h4>
                <h4 className={styles.price}>£ {total}</h4>
            </div>
            <hr style={{ width: '90%' }} />
            <div className={styles.prices}>
                <h4 className={styles.price}>Grand total</h4>
                <h4 className={styles.price}>{cart.length > 0 ? `£ ${(Number(total) + 5).toFixed(2)}` : "£ 0.00"}</h4>
            </div>
        </>
    );
};

export default Items;