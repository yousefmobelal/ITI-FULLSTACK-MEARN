const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});

const AuthPayloadType = new GraphQLObjectType({
    name: 'AuthPayload',
    fields: () => ({
        token: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: UserType }
    })
});

module.exports = { UserType, AuthPayloadType };
