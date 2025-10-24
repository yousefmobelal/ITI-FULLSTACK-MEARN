const products = require("../data");
const productSchema = require("../schema/product.schema");
const createError = require("../utils/createError");

const resolver = {
  getAllProducts: () => {
    try {
      return products;
    } catch (err) {
      throw createError("Failed to fetch products", 404, err);
    }
  },

  getProduct: ({ id }) => {
    try {
      console.log(id);
      const product = products.find((p) => p.id === Number(id));
      if (!product) {
        throw createError("Product not found", 404, { id });
      }
      return product;
    } catch (err) {
      if (!err.code) {
        err.code = 400;
      }
      throw err;
    }
  },

  addProduct: ({ input }) => {
    try {
      const { error } = productSchema.validate(input);
      if (error) {
        throw createError("Product validation failed", 400, error.details);
      }

      const newProduct = {
        id: products.length + 1,
        ...input,
      };
      products.push(newProduct);
      return newProduct;
    } catch (err) {
      if (!err.code) err.code = 400;
      throw err;
    }
  },

  updateProduct: ({ id, input }) => {
    try {
      const index = products.findIndex((p) => p.id === Number(id));
      if (index === -1) {
        throw createError("Product not found", 404, { id });
      }

      const { error } = productSchema.validate(input);
      if (error) {
        throw createError("Product validation failed", 400, error.details);
      }

      products[index] = { ...products[index], ...input };
      return products[index];
    } catch (err) {
      if (!err.code) err.code = 400;
      throw err;
    }
  },
};

module.exports = resolver;
