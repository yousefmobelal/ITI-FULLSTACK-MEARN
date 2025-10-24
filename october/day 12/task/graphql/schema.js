const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Product {
    id: ID!
    name: String!
    price: Float!
    categoryId: Int!
  }

  type RootQuery {
    getAllProducts: [Product]
    getProduct(id: ID!): Product
  }


  input CreateProductDto {
    name: String!
    price: Float!
    categoryId: Int!
  }

  type RootMutation {
    addProduct(input: CreateProductDto): Product
    updateProduct(id: ID!, input: CreateProductDto): Product
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
