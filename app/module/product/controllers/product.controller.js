const ProductRepo = require("../../product/repositories/product.repository");

exports.Create = async (req, res, next) => {
  try {
    let product = req.body;
    product.slug = `${product.name
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace("--", "-")}-${product.sku.toLowerCase()}`;
    let _product = await ProductRepo.Create(product);
    return res.json({
      message: "Product created successfully",
      data: _product,
    });
  } catch (error) {
    return next(error);
  }
};

exports.Update = async (req, res, next) => {
  let product = req.model;
  try {
    Object.assign(product, req.body);
    await product.save();
    return res.json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.Details = async (req, res, next) => {
  let product = req.model;
  try {
    if (!product) {
      return res.status(404).json({ message: "Product is not avaiable" });
    }
    res.status(200).json({ message: "Here is the product", data: product });
  } catch (error) {
    next(error);
  }
};

exports.Remove = async (req, res, next) => {
  let productID = req.params.id;
  try {
    await ProductRepo.Delete({ _id: productID });

    return res.json({ message: "Product removed successfully" });
  } catch (error) {
    next(error);
  }
};

// exports.Index = async (req, res, next) => {
//   var query = { user: req.user._id },
//     page = 1,
//     size = 10;
//   if ("page" in req.query) page = parseInt(req.query.page);
//   if ("size" in req.query) size = parseInt(req.query.size);
//   let collection, pagination;
//   try {
//     collection = await CollectionRepo.Index(query, page, size);
//     let count = await CollectionRepo.Count(query);
//     pagination = {
//       size: size,
//       totalElements: count,
//       totalPages: Math.ceil(count / size),
//       pageNumber: page,
//     };
//     const data = { page: pagination, data: collection };
//     return res.json(data);
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// };

exports.Index = async (req, res) => {
  res.json(res.paginatedResults);
};
