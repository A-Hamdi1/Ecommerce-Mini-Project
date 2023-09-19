import axios from "axios";

export default async function addToCart(req, res) {
  const { productId, quantity } = req.body;

  try {
    const response = await axios.post("http://localhost:5000/api/addToCart", {
      productId,
      quantity,
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
