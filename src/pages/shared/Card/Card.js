import React from 'react';
import styles from './Card.module.css';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../../../contexts/CartContext';


const Card = (props) => {
    const { Title, Condition, Image, Price, Sku } = props.book

    const {
        state: { cart },
        dispatch
    } = CartState();

    const navigate = useNavigate();


    return (
        <>
            <div className={styles.imgContainer} onClick={e => navigate(`/books/${Sku}`)}>
                <img src={Image} className={styles.cardImg} alt="" />
            </div>
            <div className={styles.textContainer}>
                <h6 onClick={e => navigate(`/books/${Sku}`)} className={styles.title}>{Title}</h6>
                <h6 className={styles.condition}>{Condition}</h6>
                <h2 className={styles.price}>£ {Price.slice(1)}</h2>
            </div>
            <div className={styles.addCartBtnContainer}>
                {
                    cart.some(p => p.book.Sku === Sku) ?
                        (
                            <Button onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: props,
                                })
                            }}
                                color="red" className={styles.addCartBtn} >Remove From Cart</Button>
                        )
                        :
                        (
                            <Button onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: props,
                                })
                            }} >Add to Cart</Button>
                        )
                }
            </div>
        </>
    );
};

export default Card;