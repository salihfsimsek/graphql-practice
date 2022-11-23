import { GraphQLServer } from 'graphql-yoga'

import pubSub from './pubsub'

import db from './datas'

import resolvers from '@resolvers'
import typeDefs from '@typeDefs'

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubSub, db } })

server.start(() => console.log('Server is running on localhost:4000'))