import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button, Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { FavoriteBorderOutlined, FavoriteOutlined, StarBorderOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Currency from '../Currency/Currency';

const ProductQuickView = ({ open, handleClose, product, handleAddToWishlist, isFavorite }) => {
  const { id, name, price, imageSrc, rating } = product;
  const [newQuantity, setNewQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    const updatedProduct = { ...product, quantity: newQuantity };
    const cartQuantity = cartItems.find((item) => item.id === id)?.quantity || 0;
    if (cartQuantity + newQuantity > 10) {
      setShowAlert(true);
    } else {
      dispatch(addToCart(updatedProduct));
      handleClose();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const renderRatingStars = () => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = totalStars - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarBorderOutlined className='w-5 h-5' key={`star-filled-${i}`} />);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarBorderOutlined className='w-5 h-5' key={`star-empty-${i}`} />);
    }

    return stars;
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>{name}</DialogTitle>
      <DialogContent dividers>
        <div className='lg:flex'>
          <img src={imageSrc} alt='' style={{ width: '50%', marginRight: 20 }} />
          <div>
            <div className='flex justify-between items-center'>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                Category: Category
              </Typography>
              <Button onClick={handleAddToWishlist} size="small" style={{ color: 'red', marginBottom: '5px', transition: 'all .3s ease' }}>
                {isFavorite ? (
                  // Render the appropriate favorite icon based on whether it's already in the wishlist
                  <FavoriteOutlined className='hover:scale-110 text-rose-500' />
                ) : (
                  <FavoriteBorderOutlined className='hover:scale-110 text-rose-500' />
                )}
              </Button>
            </div>
            <div className="rating flex gap-2">
              Rating:
              {renderRatingStars().map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
              Price: <Currency item={product} />
            </Typography>
            <div className="flex items-center">
              <button
                className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                onClick={() => setNewQuantity(newQuantity - 1)}
                disabled={newQuantity <= 1}
              >
                <RemoveIcon />
              </button>
              <span className="text-base px-2 py-1 border border-gray-300 bg-gray-100 text-gray-700">
                {newQuantity}
              </span>
              <button
                className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                onClick={() => {
                  setNewQuantity(newQuantity + 1);
                }}
                disabled={newQuantity >= 10}
              >
                <AddIcon />
              </button>
              <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                  Quantity cannot exceed 10.
                </Alert>
              </Snackbar>
            </div>
            <Button onClick={handleAddToCart} variant="contained" color="primary" style={{ marginTop: 10 }}>
              Add to Cart
            </Button>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.
            </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;



