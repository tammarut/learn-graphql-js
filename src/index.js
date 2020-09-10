const http = require('http');
const express = require('express');
const { ApolloServer, PubSub } = require('apollo-server-express');

//📂 My modules
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const Subscription = require('./resolvers/subscription')
const users = require('./utils/user')
const typeDefs = require('./schema/schema');

//🟡 New instances
const pubsub = new PubSub()
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    users,
    pubsub
  }
})

const app =  express()
const PORT = 4000;
server.applyMiddleware({app})

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
  
})
