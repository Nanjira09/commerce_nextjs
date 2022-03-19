const stripe = require("stripe")(process.env.SECRET_KEY);

export default async (req, res) => {
  const { products } = req.body;

  const items = products.map((product) => ({
    description: product.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: product.price * 100,
      product_data: {
        name: product.title,
        images: [product.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: `${process.env.HOST}/products/success`,
    cancel_url: `${process.env.HOST}/`,
  });

  res.status(200).json({ id: session.id });
};
