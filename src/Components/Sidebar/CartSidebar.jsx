import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../../features/cart/cartSlice';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Currency from '../Currency/Currency';
import { formattedCurrency } from '../../utils/helpers';


const CartSidebar = ({ isOpen, setIsOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) {
      return;
    }
    dispatch(updateCartItemQuantity({ itemId, newQuantity }));
  };

  // const totalPrice = cartItems?.reduce((prev, next) => prev + parseFloat(next.price.replace("$", " ")), 0);
  const subTotalPrice = cartItems.reduce((total, item) => total + (parseFloat(item?.price?.replace("$", '')) * parseInt(item.quantity)), 0);

  const isEmpty = cartItems?.length === 0;


  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {isEmpty ? (
                              <div className="flex items-center justify-center flex-col">
                                <ShoppingCartIcon style={{ fontSize: 50, color: '#3f51b5' }} />
                                <Typography variant="h5" className="text-gray-600 mt-4">
                                  Your cart is empty.
                                </Typography>
                              </div>
                            ) : (
                              cartItems?.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4"><Currency item={product} /></p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center">
                                        <button
                                          className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                          onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                                          disabled={product.quantity <= 1}
                                        >
                                          <RemoveIcon />
                                        </button>
                                        <span className="text-base px-2 py-1 border border-gray-300 bg-gray-100 text-gray-700">
                                          {product.quantity}
                                        </span>
                                        <button
                                          className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 text-gray-500 hover:bg-gray-200"
                                          onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                                          disabled={product.quantity >= 10}
                                        >
                                          <AddIcon />
                                        </button>
                                      </div>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() => handleRemoveFromCart(product.id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              )))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formattedCurrency(subTotalPrice)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        {isEmpty ? <Link
                          to="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          disabled
                          onClick={() => setIsOpen(false)}
                        >
                          Checkout
                        </Link> : <Link
                          to="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>}
                      </div>
                      <div className="mt-6 flex justify-between text-center text-sm text-gray-500">
                        <div>
                          {/* or {" "} */}
                          <Link to="/shop">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setIsOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </Link>
                        </div>
                        <div>
                          {/* or {" "} */}
                          <Link to="/cart">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setIsOpen(false)}
                            >
                              Cart
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartSidebar;