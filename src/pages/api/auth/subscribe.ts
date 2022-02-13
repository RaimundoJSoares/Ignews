import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../components/services/stripe";
import {getSession} from 'next-auth/react'

export default async (req: NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({req});
    const stripeCustomer = await stripe.customers.create({
      email:session.user.email,
      //metadata
    })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection:'required',
      line_items: [
        {
          price: 'price_1KRksYKs7Tu9g7COghBJk3ii' , quantity: 1
        }
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })

    return res.status(200).json({sessionId : stripeCheckoutSession.id})
  }else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not Allowed')
  }
}