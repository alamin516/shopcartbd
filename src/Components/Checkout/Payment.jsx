import React from 'react';
import { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    paymentType: 'credit-card',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    cvc: '',
    // Add other payment fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData)

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Payment</h2>
      <div className="mb-4">
        <fieldset className="space-y-2">
          <div className="flex gap-5">
            <div className="flex items-center">
              <input
                type="radio"
                id="credit-card"
                name="paymentType"
                value="credit-card"
                checked={formData.paymentType === 'credit-card'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="credit-card" className="text-sm font-medium text-gray-700">Credit card</label>
            </div>
            <div className="flex items-center ml-0">
              <input
                type="radio"
                id="paypal"
                name="paymentType"
                value="paypal"
                checked={formData.paymentType === 'paypal'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="paypal" className="text-sm font-medium text-gray-700">PayPal</label>
            </div>
            <div className="flex items-center ml-0">
              <input
                type="radio"
                id="on-cash-delivery"
                name="paymentType"
                value="on-cash-delivery"
                checked={formData.paymentType === 'on-cash-delivery'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="on-cash-delivery" className="text-sm font-medium text-gray-700">On Cash Delivery</label>
            </div>
            {/* Add other payment options similarly */}
          </div>
        </fieldset>
      </div>
      {/* Payment details */}
      {formData.paymentType === 'credit-card' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 mb-4">
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card number</label>
              <input
                type="text"
                id="card-number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                autoComplete="cc-number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700 mb-2">Name on card</label>
              <input
                type="text"
                id="name-on-card"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                autoComplete="cc-name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration date (MM/YY)</label>
              <input
                type="text"
                id="expiration-date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                autoComplete="cc-exp"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                autoComplete="csc"
              />
            </div>
            {/* Add other payment fields if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
