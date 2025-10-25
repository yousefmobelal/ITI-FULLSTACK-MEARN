const express = require('express');
const graphqlSchema = require('./graphql/schema');
const {createHandler} = require('graphql-http/lib/use/express');
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require("./middlewares/auth");

const app = express();

require('dotenv').config();

app.use(cors())

app.use(express.json())

app.use(authenticate);
const formatError = (err) => {
    if(!err.originalError) { //! UnExpected Errors thrown by graphql itself
        return err;
    }

    const {data, code} = err.originalError;

    const message = err.message;

    return {
        data,
        code,
        message
    }
}
app.all('/graphql', (req, res) => {
    return createHandler({
        schema: graphqlSchema,
        context: () => ({ req }),
        formatError
    })(req, res)
})

app.get('/', (req, res) => {
    res.send("Welcome to my api")
})



mongoose.set('debug', function(collectionName, method, query, doc) {
    console.log(`Mongoose: ${collectionName}.${method}(${JSON.stringify(query)}, ${JSON.stringify(doc)})`)
});

mongoose
    .connect('mongodb://127.0.0.1:27017/DemoApp')
    .then(async() => {
        console.log("DB Connected...")
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`Server started on port ${port}!`)
        })
    })
    .catch(err => console.log(`DB Error: ${err}`))


// In the mongoose.set('debug', function (collectionName, method, query, doc) { ... }) function,
// the doc parameter refers to an additional document or options argument passed to the Mongoose query — depending on the method being called.

// 🔍 Meaning of doc Based on Context
// It varies depending on the type of operation:

//     Mongoose Method	             query	                                          doc
//     Model.find()	                 Filter object	                                  undefined
//     Model.findOne()	             Filter object	                                  undefined
//     Model.updateOne()	         Filter object	                                  Update object (the doc)
//     Model.insertMany()	         Documents to insert	                          undefined
//     Model.save()	                 Filter conditions (e.g., _id)	                  Full document being saved
//     Model.remove()	             Filter object	                                  undefined
