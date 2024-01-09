import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    CartTotalQuantity: 0,
    cartTotalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, imageSrc, quantity } = action.payload;
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += quantity;
            } else {
                const tempProduct = { ...action.payload, quantity: quantity }
                state.items.push(tempProduct)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            console.log(action.payload)
            const nextCartItems = state.items.filter(
                (cartItem) => cartItem.id !== action.payload
            )
            state.items = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        clearCart: (state, action) => {
            let cartEmpty = []
            state.items = cartEmpty;
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        updateCartItemQuantity: (state, action) => {
            const { itemId, newQuantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity = newQuantity;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
