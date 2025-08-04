import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export async function handleStripeCheckout(amount: number, currency: string) {
  const stripe = await stripePromise;
  if (!stripe) return;

  try {
    const { data } = await axios.post("/api/create-payment-intent", {
      amount,
      currency,
    });

    const { clientSecret } = data;

    const { error } = await stripe.redirectToCheckout({
      sessionId: clientSecret,
    });

    if (error) {
      console.error("Stripe Checkout error:", error);
    }
  } catch (error) {
    console.error("Error creating payment intent:", error);
  }
}