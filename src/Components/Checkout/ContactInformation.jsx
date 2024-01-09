import React from 'react';

const ContactInformation = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    // Add other contact information fields
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="mb-4">
        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email-address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border rounded-lg py-2 px-3 w-full"
          autoComplete="email"
        />
      </div>
      {/* Add other contact information fields similarly */}
    </div>
  );
};

export default ContactInformation;
