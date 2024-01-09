import { FavoriteBorderOutlined, FavoriteOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Alert, Button, Card, CardContent, CardMedia, Snackbar, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import ProductQuickView from '../../Popup/ProductQuickView';
import { addToWishlist, removeFromWishlist } from '../../../features/wishlist/wishlistSlice';
import CartSidebar from '../../Sidebar/CartSidebar';
import Currency from '../../Currency/Currency';

const ProductCard = ({ product }) => {
    // const [isFavorite, setIsFavorite] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const [openQuickView, setOpenQuickView] = useState(false);
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);
    const cartItems = useSelector((state) => state.cart.items);
    const [isOpen, setIsOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);



    const loadWishlistFromLocalStorage = () => {
        const savedWishlist = localStorage.getItem('Wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    };

    // Load wishlist from local storage when component mounts
    useEffect(() => {
        const storedWishlist = loadWishlistFromLocalStorage();
        // Dispatch action to update wishlist with items from local storage
        storedWishlist.forEach(item => dispatch(addToWishlist(item)));
    }, [dispatch]);

    const isFavorite = wishlistItems.some(item => item.id === product.id);

    const handleAddToWishlist = () => {
        if (!isFavorite) {
            dispatch(addToWishlist(product));
        } else {
            dispatch(removeFromWishlist(product.id));
        }
    };

    // Save Wishlist to Local Storage after any change
    useEffect(() => {
        localStorage.setItem('Wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);


    const handleQuickViewOpen = () => {
        setOpenQuickView(true);
    };

    const handleQuickViewClose = () => {
        setOpenQuickView(false);
        setShowIcons(false);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleAddToCart = (product_add, quantity) => {
        const updatedProduct = { ...product_add, quantity };
        const cartQuantity = cartItems.find((item) => item.id === product_add.id)?.quantity || 0;
        if (cartQuantity + quantity > 10) {
            setShowAlert(true);
        } else {
            dispatch(addToCart(updatedProduct));
        }
    };

    // const addToWishlist = () => {
    //     console.log('Added to wishlist');
    // };

    // const quickView = () => {
    //     console.log('Quick view');
    // };



    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                Width: 400,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative',
            }}
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
        >
            <CardMedia
                component="img"
                sx={{ height: 200, objectFit: 'cover' }}
                image={product.imageSrc}
                alt={product.name}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography className='text-xs'>
                    {product.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                    <Currency item={product} />
                </Typography>
                <div className='flex lg:mt-[10px]'>
                    <Button variant="contained" className='text-base' onClick={() => handleAddToCart(product, product.quantity)} startIcon={<ShoppingCartIcon />}>
                        Add to Cart
                    </Button>
                    {isOpen && <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </CardContent>
            {showIcons && (
                <div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        right: '0',
                        left: '0',
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'white',
                        rowGap: '5px',
                        backgroundColor: 'transparent'
                    }}
                >
                    <Button onClick={handleAddToWishlist} size="small" style={{ color: 'red', marginBottom: '5px', background: 'rgba(0,0,0,0.3)', transition: 'all .3s ease' }}>
                        {isFavorite ? (
                            // Render the appropriate favorite icon based on whether it's already in the wishlist
                            <FavoriteOutlined className='hover:scale-110 text-rose-500' />
                        ) : (
                            <FavoriteBorderOutlined className='hover:scale-110 text-rose-500' />
                        )}
                    </Button>
                    <Button
                        style={{ background: 'rgba(0,0,0,0.3)', transition: 'all .3s ease' }}
                        onClick={handleQuickViewOpen}
                        size="small">

                        <VisibilityOutlined className=' hover:scale-110 text-white mb-1' />
                    </Button>
                    <ProductQuickView
                        isFavorite={isFavorite}
                        handleAddToWishlist={handleAddToWishlist}
                        open={openQuickView}
                        handleClose={handleQuickViewClose}
                        product={product} />
                    <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                            Quantity cannot exceed 10.
                        </Alert>
                    </Snackbar>
                </div>
            )}
        </Card>
    )
}

export default ProductCard