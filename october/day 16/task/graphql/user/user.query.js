const { GraphQLID, GraphQLNonNull } = require("graphql");
const { UserType } = require("./user.type");
const User = require("../../models/User");

const userQueries = {
  getUserById: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) throw createError("User not found", 404);
      return user;
    },
  },
};

module.exports = userQueries;
