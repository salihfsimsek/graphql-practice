import { GraphQLServer } from 'graphql-yoga'

import loaders from './loaders'

import pubSub from './pubsub'

import db from './datas'

//Services
import UserService from './services/user-service'
import EventService from './services/event-service'
import LocationService from './services/location-service'
import ParticipantService from './services/participant-service'

import resolvers from '@resolvers'
import typeDefs from '@typeDefs'

loaders()

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubSub, db: { UserService, EventService, LocationService, ParticipantService } } })

server.start(() => console.log('Server is running on localhost:4000'))