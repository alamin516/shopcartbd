import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCartItemQuantity } from '../../features/cart/cartSlice';
import { Typography, Button, Grid, Container } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { formattedCurrency } from '../../utils/helpers';
import Currency from '../../Components/Currency/Currency';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1 || newQuantity > 10) {
            return;
        }
        dispatch(updateCartItemQuantity({ itemId, newQuantity }));
    };

    const cartEmpty = cartItems.length === 0;

    // Calculate total price and total quantity
    const subTotalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace("$", '')) * parseInt(item.quantity)), 0);
    const totalPrice = subTotalPrice + 50

    return (
        <div>
            <Typography variant="h4" className="text-xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">
                Cart
            </Typography>
            <Container className={`container mx-auto px-4 py-8 ${cartEmpty ? 'empty-cart' : ''}`}>
                <Typography className="text-2xl font-semibold mb-4 text-center" sx={{ fontSize: '26px' }}>
                    Shopping Cart
                </Typography>
                {cartEmpty ? (
                    <div className='text-center py-28'>
                        <Typography variant="body1" className="text-lg text-gray-600 text-center pb-5">
                            Your cart is empty.
                        </Typography>
                        <Link to={`/shop`} >
                            <Button
                                variant="outlined"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                startIcon={<ArrowBack />}
                            >
                                Shopping Now
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Grid container spacing={3} >
                        <Grid item xs={12} className="flex justify-around border-b-2">
                            <Typography variant="subtitle1" sx={{ width: '40%' }}>
                                Product
                            </Typography>
                            <Typography variant="subtitle1" sx={{ width: '20%' }}>
                                Price
                            </Typography>
                            <Typography variant="subtitle1" sx={{ width: '20%' }}>
                                Quantity
                            </Typography>
                            <Typography variant="subtitle1" sx={{ width: '20%', textAlign: 'end' }}>
                                Total
                            </Typography>
                        </Grid>

                        {cartItems?.map((item) => (
                            <Grid key={item.id} container spacing={1} className="flex items-center justify-center py-1 border-b-2" alignItems="flex-start">
                                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '40%', height: '100%' }}>
                                    <img className="w-40 border-2" src={item.imageSrc} alt="" />
                                    <div style={{ marginLeft: '1rem' }}>
                                        <Typography variant="body1" className="mb-6">
                                            {item.name}
                                        </Typography>
                                        <Button
                                            variant="text"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%' }}>
                                    <Typography variant="body1">{formattedCurrency(item.price.replace('$', ""))}</Typography>
                                </Grid>
                                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%' }}>
                                    <div className="flex items-center">
                                        <button
                                            className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <RemoveIcon />
                                        </button>
                                        <span className="text-base px-2 py-1 border border-gray-300 bg-gray-100 text-gray-700">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            disabled={item.quantity >= 10}
                                        >
                                            <AddIcon />
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item sx={{ display: 'flex', alignItems: 'center', width: '20%', height: '100%', justifyContent: 'end' }}>
                                    <Currency item={item}/>
                                </Grid>
                            </Grid>


                        ))}
                    </Grid>
                )}
                {!cartEmpty && (
                    <div className="flex mt-2">
                        <div className='w-8/12'>
                            <Button
                                variant="outlined"
                                className="font-medium text-indigo-600 hover:text-indigo-500 rounded-md"
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </Button>
                        </div>
                        <div className='w-4/12 flex justify-between'>
                            <div className='w-1/2 text-end'>
                                <div className='font-medium mb-2'>Sub-total =</div>
                                <div className='font-medium mb-2'>Shipping =</div>
                                <div className='font-medium border-t-2'>Total =</div>
                                <div className='mt-2'>
                                    <Link to="/shop">
                                        <Button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 capitalize"
                                        >
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='w-1/2 text-end'>
                                <div className='font-medium mb-2'>{formattedCurrency(subTotalPrice)}</div>
                                <div className='font-medium mb-2'>{formattedCurrency(50)}</div>
                                <div className='border-t-2 font-medium'>{formattedCurrency(subTotalPrice)}</div>
                                <div className='mt-2'>
                                    <Link to="/checkout">
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 rounded-md "
                                        >
                                            Checkout
                                            <span aria-hidden="true"> &rarr;</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default CartPage;
