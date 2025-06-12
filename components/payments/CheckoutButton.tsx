'use client';
import Script from 'next/script';
import { useState } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

export default function CheckoutButton() {

  // console.log('All environment variables:', process.env);

  
  
  const [loading, setLoading] = useState(false);
  
  const handlePayment = async () => {
    setLoading(true);
    
    // API request to create the order
    console.log('Razorpay Key ID:', process.env.RAZORPAY_KEY_ID);
  console.log('Razorpay Key Secret:', process.env.RAZORPAY_KEY_SECRET);
    const res = await fetch('/api/razorpay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 249 }), // Amount in INR (₹99)
    });

    if (!res.ok) {
      // alert('Failed to create Razorpay order');
      setLoading(false);
      return;
    }

    const data: RazorpayOrder = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // Use public key for the frontend
      amount: data.amount,
      currency: data.currency,
      name: 'GreatReact.com',
      description: 'Course Purchase',
      order_id: data.id,
      handler: function (response: any) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Tanuj Bhatt',
        email: 'tanuj@example.com',
        contact: '9000090000',
      },
      theme: {
        color: '#4F46E5',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
    setLoading(false);
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        disabled={loading}
        className=" px-4 py-2 text-sm rounded-full  border w-full hover:bg-muted text-muted-foreground hover:dark:text-white hover:text-black"
      >
        {loading ? 'Processing...' : 'Buy for ₹249'}
      </button>
    </>
  );
}
