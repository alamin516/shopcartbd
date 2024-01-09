import React from 'react';

const ErrorPage = ({ errorCode = '404', errorMessage = 'Page Not Found' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">{errorCode}</h1>
      <p className="text-xl text-gray-600">{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
