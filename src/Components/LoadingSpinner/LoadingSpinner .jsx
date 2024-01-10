import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
