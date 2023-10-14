'use client';

import { FormEvent, useState } from 'react';

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your payment service and handle the response
    console.log;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="text-lg font-semibold block"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full border rounded p-2"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-lg font-semibold block"
          >
            Cardholder&apos;s Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="billingAddress"
            className="text-lg font-semibold block"
          >
            Billing Address
          </label>
          <input
            type="text"
            id="billingAddress"
            className="w-full border rounded p-2"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="text-lg font-semibold block"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            className="w-full border rounded p-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="expiryDate"
              className="text-lg font-semibold block"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full border rounded p-2"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="cvv"
              className="text-lg font-semibold block"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full border rounded p-2"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-800 transition-colors duration-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
