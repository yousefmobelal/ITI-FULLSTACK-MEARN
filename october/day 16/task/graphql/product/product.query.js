const { GraphQLList, GraphQLID, GraphQLNonNull } = require("graphql");
const { ProductType, ProductFilterInput } = require("./product.type");
const Product = require("../../models/Product");
const createError = require("../../utils/createError");

const productQueries = {
  getAllProducts: {
    type: new GraphQLList(ProductType),
    args: {
      filter: { type: ProductFilterInput },
    },
    resolve: async (_, { filter = {} }, context) => {
      try {
        const { name, minPrice, maxPrice, categoryId } = filter;
        const filterBy = {};
        if (name) {
          filterBy.name = { $regex: name, $options: "i" };
        }
        if (minPrice) {
          filterBy.price = { $gte: minPrice };
        }
        if (maxPrice) {
          filterBy.price = { ...filterBy.price, $lte: maxPrice };
        }
        if (categoryId) {
          filterBy.categoryId = categoryId;
        }
        const products = await Product.find({
          ...filterBy,
          createdBy: context.req.user.userId,
        });
        return products;
      } catch (error) {
        throw createError("Failed to fetch products", 404, error);
      }
    },
  },

  getProductById: {
    type: ProductType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, { id }, context) => {
      try {
        const product = await Product.findOne({
          _id: id,
          createdBy: context.req.user.userId,
        });
        if (!product) {
          throw createError("Product not found", 404, { id });
        }
        return product;
      } catch (error) {
        if (!error.code) {
          error.code = 400;
        }
        throw error;
      }
    },
  },
};

module.exports = productQueries;
