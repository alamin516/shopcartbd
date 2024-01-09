import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

const ProductStyleOne = () => {
    const products = useSelector((state) => state.product.products)

    return (
        <div>

            <Container maxWidth="xl" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                <h2 className='text-xl font-medium uppercase my-5'>Popular Product</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-5'>
                    {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </div >
    );
};

export default ProductStyleOne;
