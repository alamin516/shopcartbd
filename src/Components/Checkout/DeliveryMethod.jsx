import React from 'react';
import { formattedCurrency } from '../../utils/helpers';

const DeliveryMethod = () => {
  const [selectedMethod, setSelectedMethod] = React.useState('standard');

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
      <div className="flex gap-5">
        <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 relative w-1/2">
          <input
            type="radio"
            id="standard"
            name="deliveryMethod"
            value="standard"
            checked={selectedMethod === 'standard'}
            onChange={handleMethodChange}
            className="hidden"
          />
          <label
            htmlFor="standard"
            className={`cursor-pointer block mb-2 ${
              selectedMethod === 'standard' ? 'text-blue-500' : 'text-gray-700'
            }`}
          >
            <span className="font-semibold">Standard</span>
            <br />
            <span className="text-xs">4-10 business days</span>
            <br />
            <span className="text-sm">{formattedCurrency(5)}</span>
            {selectedMethod === 'standard' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 absolute top-2 right-2 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </label>
        </div>
        <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 relative w-1/2">
          <input
            type="radio"
            id="express"
            name="deliveryMethod"
            value="express"
            checked={selectedMethod === 'express'}
            onChange={handleMethodChange}
            className="hidden"
          />
          <label
            htmlFor="express"
            className={`cursor-pointer block mb-2 ${
              selectedMethod === 'express' ? 'text-blue-500 font-bold border-blue-500' : 'text-gray-700 font-bold '
            }`}
          >
            <span className="font-semibold">Express</span>
            <br />
            <span className="text-xs">2-5 business days</span>
            <br />
            <span className="text-sm">{formattedCurrency(16)}</span>
            {selectedMethod === 'express' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 absolute top-2 right-2 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </label>
        </div>
        {/* Add other delivery methods similarly */}
      </div>
    </div>
  );
};

export default DeliveryMethod;




















// import React from 'react';

// const DeliveryMethod = () => {
//   const [selectedMethod, setSelectedMethod] = React.useState('standard');

//   const handleMethodChange = (e) => {
//     setSelectedMethod(e.target.value);
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
//       <div className="flex gap-5">
//         <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 relative w-1/2">
//           <input
//             type="radio"
//             id="standard"
//             name="deliveryMethod"
//             value="standard"
//             checked={selectedMethod === 'standard'}
//             onChange={handleMethodChange}
//             className="hidden"
//           />
//           <label
//             htmlFor="standard"
//             className={`cursor-pointer block mb-2 ${
//               selectedMethod === 'standard' ? 'text-blue-500' : 'text-gray-700'
//             }`}
//           >
//             <span className="font-semibold">Standard</span>
//             <br />
//             <span className="text-xs">4-10 business days</span>
//             <br />
//             <span className="text-sm">$5.00</span>
//           </label>
//         </div>
//         <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 relative w-1/2">
//           <input
//             type="radio"
//             id="express"
//             name="deliveryMethod"
//             value="express"
//             checked={selectedMethod === 'express'}
//             onChange={handleMethodChange}
//             className="hidden"
//           />
//           <label
//             htmlFor="express"
//             className={`cursor-pointer block mb-2 ${
//               selectedMethod === 'express' ? 'text-blue-500' : 'text-gray-700'
//             }`}
//           >
//             <span className="font-semibold">Express</span>
//             <br />
//             <span className="text-xs">2-5 business days</span>
//             <br />
//             <span className="text-sm">$16.00</span>
//           </label>
//         </div>
//         {/* Add other delivery methods similarly */}
//       </div>
//     </div>
//   );
// };

// export default DeliveryMethod;






// import React from 'react';

// const DeliveryMethod = () => {
//   const [selectedMethod, setSelectedMethod] = React.useState('standard'); // State to track selected method

//   const handleMethodChange = (e) => {
//     setSelectedMethod(e.target.value);
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
//       <div className="space-y-4">
//         <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
//           <label
//             htmlFor="standard"
//             className={`flex items-center cursor-pointer ${
//               selectedMethod === 'standard' ? 'text-blue-500' : 'text-gray-700'
//             }`}
//           >
//             <input
//               type="radio"
//               id="standard"
//               name="deliveryMethod"
//               value="standard"
//               checked={selectedMethod === 'standard'}
//               onChange={handleMethodChange}
//               className="mr-2 cursor-pointer"
//             />
//             Standard (4-10 business days) - $5.00
//           </label>
//         </div>
//         <div className="bg-white border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
//           <label
//             htmlFor="express"
//             className={`flex items-center cursor-pointer ${
//               selectedMethod === 'express' ? 'text-blue-500' : 'text-gray-700'
//             }`}
//           >
//             <input
//               type="radio"
//               id="express"
//               name="deliveryMethod"
//               value="express"
//               checked={selectedMethod === 'express'}
//               onChange={handleMethodChange}
//               className="mr-2 cursor-pointer"
//             />
//             Express (2-5 business days) - $16.00
//           </label>
//         </div>
//         {/* Add other delivery methods similarly */}
//       </div>
//     </div>
//   );
// };

// export default DeliveryMethod;
