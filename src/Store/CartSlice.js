import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: []
    },
    reducers: {
        updateCart: (state, data) => {
            state.cart.push(data.payload)
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
        },
    }
})

export const { updateCart, removeFromCart } = CartSlice.actions
export default CartSlice