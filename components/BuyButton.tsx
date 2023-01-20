import { fetchPostJSON } from '@/utils/api-helpers';
import getStripe from '@/utils/get-stripejs';
import { useState } from 'react';

type BuyButtonProps = {
  priceId: string;
};

export default function BuyButton({ priceId }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetchPostJSON('/api/checkout_sessions', {
      price: priceId,
    });
    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirects to Stripe checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Makes the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={loading} type="submit">
        Buy
      </button>
    </form>
  );
}
