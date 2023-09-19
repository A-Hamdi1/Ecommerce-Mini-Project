const Product = require("../../model/Products");

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    await Product.findByIdAndDelete(productId);
    res.send("Le produit a été supprimé avec succès.");
  } catch (error) {
    res
      .status(500)
      .send("Une erreur s'est produite lors de la suppression du produit.");
  }
};

module.exports = deleteProduct;
