const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB = "mongodb+srv://sriram_venkatesh:asdfghjkl@cluster0.8moomsn.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolver");
const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useBigInt64: true})
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({port: 3000});
    })
    .then((res) => {
        console.log(`The Server is running at ${res.url}`);
    });