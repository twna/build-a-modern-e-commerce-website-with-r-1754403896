import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the checkout data here
    console.log('Checkout Data:', formData);
    // You would typically send this data to a backend server for processing
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
{
  "checklist": [
    {"item": "Create a functional component for the checkout form", "completed": true},
    {"item": "Use useState to manage form data state", "completed": true},
    {"item": "Include input fields for full name, email, address, card number, expiry date, and CVV", "completed": true},
    {"item": "Implement handleChange to update state on input change", "completed": true},
    {"item": "Implement handleSubmit to process form submission", "completed": true},
    {"item": "Ensure form fields are required for submission", "completed": true}
  ]
}