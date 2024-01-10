// wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Retrieve wishlist data from local storage if available
// const savedWishlist = localStorage.getItem('wishlist');
const ITEMS_PER_PAGE = 10;

const initialState = {
  items: localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : [],
  currentPage: 1,
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
    setCurrentWishlistPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setCurrentWishlistPage } = wishlistSlice.actions;
export default wishlistSlice.reducer;
