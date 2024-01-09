// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import productReducer from '../features/products/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,

  },
});

export default store;
