const { buildSchema } = require("graphql");

const products = [
  { id: 1, name: "iPhone 14", price: 999, categoryId: 1 },
  { id: 2, name: "Samsung Galaxy S22", price: 899, categoryId: 1 },
  { id: 3, name: "MacBook Pro", price: 1999, categoryId: 2 },
];

module.exports = buildSchema(`
  type Product {
    id: Int!
    name: String!
    price: Float!
    categoryId: Int!
  }

  type RootQuery{
  getProducts: [Product]
  getProduct(id: Int!): Product
  }


  input createProductDto {
    id: Int!
    name: String!
    price: Float!
    categoryId: Int!
  }

  type RootMutation {
    addProduct(input: createProductDto): Product
  }
`);
