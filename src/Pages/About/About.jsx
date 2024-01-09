import React from 'react';
import { Grid, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <div>
      <h2 className="text-2xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">About</h2>
      <section className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg">Discover the best products and services just for you.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
