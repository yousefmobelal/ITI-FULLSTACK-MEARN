const {AuthPayloadType} = require("./user.type");
const {GraphQLNonNull, GraphQLString} = require("graphql/type");
const jwt = require('jsonwebtoken');
const User = require("../../model/user");
const register = {
    type: AuthPayloadType,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (_, { email, password, name}) => {
        const existing = await User.findOne({ email });

        if(existing)
            throw new Error("Email already in use");

        const user = new User({
            email,
            name,
            password
        })

        await user.save();

        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        return {
            token,
            user
        }
    }
}

const login = {
    type: AuthPayloadType,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (_, { email, password }) => {
        const user = await User.findOne({ email })
        if(!user)
            throw new Error("Invalid Credentials")

        const isMatch = await user.matchPassword(password);

        if(!isMatch)
            throw new Error("Invalid Credentials")

        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        return {
            token,
            user
        }
    }
}

module.exports = {
    register,
    login
}