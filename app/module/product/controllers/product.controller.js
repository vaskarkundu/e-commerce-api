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

// exports.Update = async (req, res, next) => {
//   let collection = req.model;

//   try {
//     Object.assign(collection, req.body);
//     await collection.save();
//     return res.json({
//       message: "Collection updated successfully",
//       data: collection,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.Details = async (req, res, next) => {
//   let collection = req.model;
//   res.json(collection);
// };

// exports.Remove = async (req, res, next) => {
//   let collection = req.model;
//   await collection.remove();
//   return res.json({ message: "Collection removed successfully" });
// };

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
