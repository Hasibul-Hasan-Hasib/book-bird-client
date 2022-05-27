import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';

const CartContext = createContext();
const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        cart: []
    })

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
};

export default Context;

export const CartState = () => {
    return useContext(CartContext);
}