import { json } from "@sveltejs/kit";
import Stripe from "stripe";
//private key
import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

//use this to handle and use the private key
const stripe = new Stripe(STRIPE_API_KEY);
//handle the post request
export async function POST() {
  try {
    //create a stripe session for the checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
    });
    return json({ sessionId: session.id });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
}
