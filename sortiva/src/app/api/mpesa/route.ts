// app/api/mpesa/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';
import dayjs from 'dayjs';

export async function POST(req: Request) {
  const { phone, amount } = await req.json();

  const shortcode = process.env.MPESA_SHORTCODE!;
  const passkey = process.env.MPESA_PASSKEY!;
  const consumerKey = process.env.MPESA_CONSUMER_KEY!;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET!;
  const callbackURL = process.env.MPESA_CALLBACK_URL!;

  const timestamp = dayjs().format('YYYYMMDDHHmmss');
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

  try {
    const tokenRes = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        auth: {
          username: consumerKey,
          password: consumerSecret,
        },
      }
    );

    const access_token = tokenRes.data.access_token;

    const stkRes = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: callbackURL,
        AccountReference: 'Sortiva',
        TransactionDesc: 'Premium Subscription',
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return NextResponse.json({ success: true, message: 'STK Push initiated', data: stkRes.data });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data || error.message);
      return NextResponse.json({ success: false, error: error.response?.data || error.message }, { status: 500 });
    } else if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      console.error('An unknown error occurred');
      return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
