import { GraphQLServer } from 'graphql-yoga'

import loaders from './loaders'

import pubSub from './pubsub'

import db from './datas'

//Models
import User from './models/user-model'

import resolvers from '@resolvers'
import typeDefs from '@typeDefs'

loaders()

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubSub, db, _db: { User } } })

server.start(() => console.log('Server is running on localhost:4000'))