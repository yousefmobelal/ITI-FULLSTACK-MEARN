const express = require('express');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PubSub } = require('graphql-subscriptions');
const { setTimeout } = require('timers');

(async () => {
    const {useServer} = await import('graphql-ws/lib/use/ws')

    const pubsub = new PubSub();
    
    const typeDefs = `
        type Query {
            hello: String
        }
    
        type CountdownResult {
            countdown: Int!
        }

        type Subscription {
            countdown(from: Int!): CountdownResult!
        }
    `

    const resolvers = {
        Query: {
            hello: () => 'Helloooooooooo!!'
        },
        Subscription: {
            countdown: {
                subscribe: async function* (_, { from }) {
                    for(let i = from; i >= 0; i--) {
                        await new Promise(r => setTimeout(r, 1000))
                        yield { countdown: {countdown: i} }
                    }
                }
            }
        }
    }

    //! Graphql Schema
    const schema = makeExecutableSchema({ typeDefs, resolvers })

    //! exprss
    const app = express()
    app.use(cors())
    app.use(express.json())

    //! http
    app.all('/graphql', createHandler({ schema }))

    //! Attach graphql-ws subscription server
    const server = createServer(app);
    const wsServer = new WebSocketServer({server, path: '/graphql'})
    useServer({schema}, wsServer)

    server.listen(4200, () => {
        console.log("Graphql Server running!")
        console.log("Http -> http://localhost:4200/graphql")
        console.log("WS -> http://localhost:4200/graphql")
    })

})();