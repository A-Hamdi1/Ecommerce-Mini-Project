const Product = require("../../model/Products");

const modifyProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProductData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = modifyProduct;