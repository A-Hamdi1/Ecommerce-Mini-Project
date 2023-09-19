const Cart = require("../../model/Cart");

async function getCart(req, res) {
  const { userId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({ userId, items: [] });
    }

    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getCart;
