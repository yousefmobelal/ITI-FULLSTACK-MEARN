const { GraphQLNonNull, GraphQLID } = require("graphql");
const { ProductType, CreateProductDto } = require("./product.type");
const productSchema = require("../../../../day 12/task/schema/product.schema");
const Product = require("../../models/Product");
const createError = require("../../utils/createError");

const productMutations = {
  createProduct: {
    type: ProductType,
    args: {
      input: { type: new GraphQLNonNull(CreateProductDto) },
    },
    async resolve(_, { input }, context) {
      const { error } = productSchema.validate(input);
      if (error) {
        throw createError("Product validation failed", 400, error.details);
      }

      try {
        console.log(`This is the user: ${JSON.stringify(context.req.user)}`);
        const newProduct = new Product({
          ...input,
          createdBy: context.req.user.userId,
        });
        return await newProduct.save();
      } catch (err) {
        throw createError("Failed to create product", 500, err);
      }
    },
  },
  updateProduct: {
    type: ProductType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      input: { type: new GraphQLNonNull(CreateProductDto) },
    },
    async resolve(_, { id, input }) {
      const { error } = productSchema.validate(input);
      if (error) {
        throw createError("Product validation failed", 400, error.details);
      }

      try {
        const updatedProduct = await Product.findByIdAndUpdate(id, input, {
          new: true,
          runValidators: true,
        });
        if (!updatedProduct) {
          throw createError("Product not found", 404);
        }
        return updatedProduct;
      } catch (err) {
        throw createError("Failed to update product", 500, err);
      }
    },
  },
};

module.exports = productMutations;
