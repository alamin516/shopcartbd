import React from 'react';

const ShippingInformation = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    // Add other shipping information fields
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
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full"
            autoComplete="given-name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full"
            autoComplete="family-name"
          />
        </div>
        <div className="col-span-2 mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full"
            autoComplete="street-address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full"
            autoComplete="address-level2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full"
            autoComplete="country-name"
          />
        </div>
        {/* Add other shipping information fields similarly */}
      </div>
    </div>
  );
};

export default ShippingInformation;
