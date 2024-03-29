import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import CartSidebar from '../../Components/Sidebar/CartSidebar';
import ProductStyle1 from '../../Components/Cards/Products/ProductStyle/ProductStyle1';
import ProductStyle2 from '../../Components/Cards/Products/ProductStyle/ProductStyle2';



const ShopPage = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (product, quantity) => {
    const updatedProduct = { ...product, quantity };
    const cartQuantity = cartItems.find((item) => item.id === product.id)?.quantity || 0;
    if (cartQuantity + quantity > 10) {
      setShowAlert(true);
    } else {
      dispatch(addToCart(updatedProduct));
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (

    <div>
      <h2 className="text-2xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">Shop</h2>
      <Container maxWidth="xl" sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductStyle1
              key={product.id}
              handleAddToCart={handleAddToCart}
              showAlert={showAlert}
              handleCloseAlert={handleCloseAlert}
              product={product} 
              />
          ))}
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductStyle2 key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>

  );
};

export default ShopPage;
