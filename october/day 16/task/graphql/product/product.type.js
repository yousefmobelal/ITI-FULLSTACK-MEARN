const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const ProductFilterInput = new GraphQLInputObjectType({
  name: "ProductFilterInput",
  fields: {
    name: { type: GraphQLString },
    minPrice: { type: GraphQLInt },
    maxPrice: { type: GraphQLInt },
    categoryId: { type: GraphQLInt },
  },
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    categoryId: { type: GraphQLNonNull(GraphQLInt) },
    createdBy: { type: GraphQLNonNull(GraphQLID) },
  },
});

const CreateProductDto = new GraphQLInputObjectType({
  name: "CreateProductDto",
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    categoryId: { type: GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = {
  ProductType,
  ProductFilterInput,
  CreateProductDto,
};
