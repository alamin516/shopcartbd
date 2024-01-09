import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductStyle2 = ({ product }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="relative">
      <div
        className="group aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        {showCart && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-90 hover:opacity-100 z-20">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => {
                // Add to cart logic here
                console.log('Added to cart:', product.name);
              }}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductStyle2