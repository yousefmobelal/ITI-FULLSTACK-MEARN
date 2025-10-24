const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");

const products = require("../data");
const productSchema = require("../schema/product.schema");
const createError = require("../utils/createError");

const Product = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

const input = new GraphQLInputObjectType({
  name: "input",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllProducts: {
      type: new GraphQLList(Product),
      resolve: () => {
        try {
          return products;
        } catch (err) {
          throw createError("Failed to fetch products", 404, err);
        }
      },
    },

    getProduct: {
      type: Product,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => {
        try {
          const product = products.find((p) => p.id === Number(id));
          if (!product) {
            throw createError("Product not found", 404, { id });
          }
          return product;
        } catch (err) {
          if (!err.code) err.code = 400;
          throw err;
        }
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addProduct: {
      type: Product,
      args: {
        input: { type: new GraphQLNonNull(input) },
      },
      resolve: (_, { input }) => {
        try {
          const { error } = productSchema.validate(input);
          if (error) {
            throw createError("Product validation failed", 400, error.details);
          }

          const newProduct = { id: products.length + 1, ...input };
          products.push(newProduct);
          return newProduct;
        } catch (err) {
          if (!err.code) err.code = 400;
          throw err;
        }
      },
    },

    updateProduct: {
      type: Product,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        input: { type: new GraphQLNonNull(input) },
      },
      resolve: (_, { id, input }) => {
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
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
