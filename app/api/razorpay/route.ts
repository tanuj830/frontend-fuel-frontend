import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

interface CreateOrderOptions {
  amount: number;
  currency: string;
  receipt: string;
}

export async function POST(req: Request) {
  const { amount } = await req.json();

  if (!amount) {
    return new Response(JSON.stringify({ message: 'Amount is required' }), { status: 400 });
  }

  const options: CreateOrderOptions = {
    amount: amount * 100, // in paise
    currency: 'INR',
    receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
