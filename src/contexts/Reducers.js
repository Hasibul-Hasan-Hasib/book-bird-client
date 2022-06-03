export const cartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter(c => c.book.Sku !== action.payload.book.Sku)
            }
        case "CHANGE_CART_QTY":
            return {...state,
                cart:state.cart.filter(c=>c.book.Sku === action.payload.Sku?c.qty=action.payload.qty:c.qty)
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart:[]
            }
        default:
            return state
    }
}