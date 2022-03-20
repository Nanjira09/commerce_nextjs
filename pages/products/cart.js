import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product";

function Cart() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const state = useSelector((state) => state.products);
  const cart = state.filter((product) => product.cart === true);
  const total = cart
    .map((product) => product.price)
    .reduce((sum, product) => sum + product, 0);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setClicked(true);
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      products: cart,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  useEffect(() => {
    if (cart.length === 0) {
      router.replace("/");
    }
  });
  return (
    <>
      <div className="grid p-2 mt-8 gap-1 md:grid-cols-3 lg:grid-cols-4">
        {cart.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <div className="flex items-center justify-around my-4 max-w-lg">
        <p className="font-semibold">Total:$ {total.toFixed(2)}</p>
        <button
          disabled={clicked}
          className="p-1 bg-green-600 text-white border-2 rounded-xl disabled:opacity-20 disabled:cursor-not-allowed"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
