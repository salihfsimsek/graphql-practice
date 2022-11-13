const { GraphQLServer } = require('graphql-yoga')

const pubSub = require('./pubsub')

let db = require('./datas');

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/type-defs')

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubSub, db } })

server.start(() => console.log('Server is running on localhost:4000'))