import { DeleteForeverOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { useState } from "react";
import { formattedCurrency } from "../../utils/helpers";
import Currency from "../Currency/Currency";

const OrderSummary = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


    // Calculate total price and total quantity
    let shipping = 50;
    let taxes = 5.52;
    const subTotalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace("$", '')) * parseInt(item.quantity)), 0);
    const totalPrice = subTotalPrice + shipping + taxes;

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            setShowAlert(true)
        } else if (newQuantity > 10) {
            setShowAlert(true)
        }
        dispatch(updateCartItemQuantity({ itemId, newQuantity }));
    };


    if (cartItems.length === 0) {
        navigate('/cart', { replace: true });
        return null;
    }

    return (
        <div className="px-4 py-6 sm:px-0">
            <h2 className="text-lg font-semibold mb-4">Order summary</h2>
            <div className="border border-gray-200 rounded-lg p-4">
                {/* <h3 className="text-base font-medium mb-4">Items in your cart</h3> */}
                <ul className="space-y-6">
                    {/* List Item */}
                    {
                        cartItems.map((item) => (
                            <li key={item.id} className="flex items-center">
                                {/* Product Image */}
                                <div className="mr-4">
                                    <img
                                        src={item.imageSrc}
                                        alt="Product"
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                </div>
                                {/* Product Details */}
                                <div className="flex-1">
                                    <div className="mb-2">
                                        {/* Product Title */}
                                        <h4 className="text-base font-medium">
                                            <a href="#" className="text-blue-500 hover:underline">
                                                {item.name}
                                            </a>
                                        </h4>
                                        {/* Product Options */}
                                        <p className="text-sm text-gray-500">Black</p>
                                        <p className="text-sm text-gray-500">L</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        {/* Product Price */}
                                        <Currency item={item}/>
                                        {/* Quantity Selector */}
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <label htmlFor="quantity" className="mr-2">
                                                    Quantity:
                                                </label>
                                                <div className="flex items-center">
                                                    <button
                                                        className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                                        onClick={() => {
                                                            if (item.quantity <= 1) {
                                                                // Handle minimum quantity reached (if needed)
                                                                return;
                                                            }
                                                            handleQuantityChange(item.id, item.quantity - 1);
                                                        }}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <RemoveIcon />
                                                    </button>
                                                    <span className="text-base px-3 py-1 border border-gray-300 bg-gray-100 text-gray-700">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                                        onClick={() => {
                                                            if (item.quantity >= 10) {
                                                                // Show alert when quantity exceeds 10
                                                                setShowAlert(true);
                                                                return;
                                                            }
                                                            handleQuantityChange(item.id, item.quantity + 1);
                                                        }}
                                                        // disabled={item.quantity >= 10}
                                                    >
                                                        <AddIcon />
                                                    </button>
                                                </div>
                                                {/* Snackbar for displaying the alert */}
                                                <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                                                    <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                                                        Quantity cannot exceed 10.
                                                    </Alert>
                                                </Snackbar>
                                            </div>
                                        </div>
                                        {/* Remove Button */}
                                        <div>
                                            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-md text-gray-500 hover:text-red-500">
                                                <DeleteForeverOutlined />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                    {/* Another List Item */}
                </ul>
                {/* Order Summary Details */}
                <dl className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                        <dt className="text-base font-medium">Subtotal</dt>
                        <dd className="text-base font-medium">{formattedCurrency(subTotalPrice)}</dd>
                    </div>
                    {/* Other Details */}
                    <div className="flex justify-between mb-2">
                        <dt className="text-base font-medium">Shipping</dt>
                        <dd className="text-base font-medium">{formattedCurrency(shipping)}</dd>
                    </div>
                    <div className="flex justify-between mb-2">
                        <dt className="text-base font-medium">Taxes</dt>
                        <dd className="text-base font-medium">{formattedCurrency(taxes)}</dd>
                    </div>
                    <div className="flex justify-between mt-4">
                        <dt className="text-lg font-semibold">Total</dt>
                        <dd className="text-lg font-semibold">{formattedCurrency(totalPrice)}</dd>
                    </div>
                </dl>

            </div>
        </div>
    );
};



export default OrderSummary;
