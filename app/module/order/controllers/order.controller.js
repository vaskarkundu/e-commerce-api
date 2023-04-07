const OrderRepo = require("../../order/repositories/order.repository");

exports.Create = async (req, res) => {
  let _order = { ...req.body, user: req.user._id };
  try {
    let order = await OrderRepo.Create(_order);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Update = async (req, res) => {
  let order = req.model;
  try {
    Object.assign(order, req.body);
    await order.save();
    return res.json({
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Read = async (req, res) => {
  const orderID = req.params.id;
  try {
    let order = await OrderRepo.Single(orderID);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Order is here", data: order });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Remove = async (req, res) => {
  let orderID = req.params.id;
  try {
    await OrderRepo.Delete({ _id: orderID });
    return res.status(200).json({ message: "Order removed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
