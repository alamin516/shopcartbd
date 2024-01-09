// wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Retrieve wishlist data from local storage if available
// const savedWishlist = localStorage.getItem('wishlist');
const initialState = {
  items: localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : []
};

console.log(initialState.items)

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem("Wishlist", JSON.stringify(state.items))
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("Wishlist", JSON.stringify(state.items))
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
