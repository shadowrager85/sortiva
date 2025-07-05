'use client';

import ThemeSwitch from '@/components/ui/ThemeSwitch';
import { useState } from 'react';

export default function PaymentPage() {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(10);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/mpesa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, amount }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Payment request sent. Check your phone.');
      } else {
        setStatus(`❌ Error: ${data?.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setStatus('❌ Payment failed. Try again later.');
    }

    setLoading(false);
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <ThemeSwitch />
=======
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className=" shadow-lg rounded-lg p-8 w-full max-w-md">
>>>>>>> 0b3e909f010ca65f22d51d17a459c8477ceacd6a
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sortiva Premium Payment</h1>

        <div className="mb-4">
          <label className="block font-semibold mb-2 text-black-100">Phone Number (e.g. 2547...)</label>
          <input
            type="tel"
            placeholder="2547XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black-200"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Amount (KES)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black-200"
          />
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Pay with M-PESA'}
        </button>

        {status && (
          <div className="mt-4 text-center text-sm font-medium text-gray-700">{status}</div>
        )}
      </div>
    </div>
  );
}