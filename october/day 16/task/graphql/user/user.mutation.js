const { AuthPayloadType } = require("./user.type");
const { GraphQLNonNull, GraphQLString } = require("graphql/type");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const createError = require("../../utils/createError");

const UserMutations = {
  register: {
    type: AuthPayloadType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { name, email, password }) => {
      const existing = await User.findOne({ email });

      if (existing) throw createError("User already exists", 400);

      const user = new User({
        name,
        email,
        password,
      });

      await user.save();

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return {
        user,
        token,
      };
    },
  },
  login: {
    type: AuthPayloadType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw createError("Invalid Credentials", 401);

      const isMatch = await user.comparePassword(password);

      if (!isMatch) throw createError("Invalid Credentials", 401);

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return {
        user,
        token,
      };
    },
  },
};

module.exports = UserMutations;
