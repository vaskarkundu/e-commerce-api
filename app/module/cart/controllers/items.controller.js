const CartRepo = require("../../cart/repositories/cart.repository");

exports.AddToItem = async (req, res) => {
  //   let cart = { ...req.body, user: req.user._id };
  const cart = req.model;

  try {
    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }
    let item = {
      product: req.body.productID,
      quantity: req.body.quantity,
    };
    // let _cart = await CartRepo.Create(cart);
    cart.items.push(item);
    await cart.save();
    return res.status(200).json({
      message: "Item added in  cart successfully",
      data: cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.RemoveItem = async (req, res, next) => {
  let cart = req.params.id;
  console.log("cart", cart);
  let items = cart.items;
  let productID = req.body.productID;
  console.log("product", productID);

  try {
    const product = await CartRepo.RemoveProduct(cart.id, productID);

    return res
      .status(200)
      .json({ message: "Product removed successfully", data: product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
