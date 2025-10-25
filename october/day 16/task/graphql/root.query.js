const productQueries = require("./product/product.query");
const userQueries = require("./user/user.query");
const { GraphQLObjectType } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...productQueries,
    ...userQueries,
  },
});

module.exports = RootQuery;
