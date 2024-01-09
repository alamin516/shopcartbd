// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Zip Tote Basket',
      href: '#',
      color: 'Blue',
      price: '$140.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        isStock: 24,
        rating: 4,
    },
    {
      id: 3,
      name: 'Zip High Wall Tote',
      href: '#',
      color: 'Blue',
      price: '$150.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-06.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 4,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$49.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      href: '#',
      color: 'Blue',
      price: '$48.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      color: 'Blue',
      price: '$35.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35.00',
      color: 'Black',
    }
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers for other product-related actions (add, delete, update)
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  // Add other action creators here
} = productSlice.actions;

export default productSlice.reducer;
