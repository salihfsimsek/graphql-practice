const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { events, users, locations, participants } = require('./datas');

const typeDefs = gql`
    type Event{
        id: ID!
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
        user: User!
        location: Location!
        participants: [Participant!]!
    }

    type User{
        id: ID!
        username: String!
        email: String!
        events: [Event!]!
    }

    type Location{
        id: ID!
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    type Participant{
        id: ID!
        event_id: ID!
        user_id: ID!
        user: User!
        event: Event!
    }

    type Query{
        events: [Event!]!
        event(id: ID!): Event!

        users: [User!]!
        user(id: ID!): User!

        locations: [Location!]!
        location(id: ID!): Location!

        participants: [Participant!]!
        participant(id: ID!): Participant!
    }
`

const resolvers = {
    Query: {
        events: () => events,
        event: (parent, args) => events.find(event => event.id === parseInt(args.id)),

        users: () => users,
        user: (parent, args) => users.find(user => user.id === parseInt(args.id)),

        locations: () => locations,
        location: (parent, args) => locations.find(location => location.id === parseInt(args.id)),

        participants: () => participants,
        participant: (parent, args) => participants.find(participant => participant.id === parseInt(args.id))
    },

    User: {
        events: (parent) => events.filter(event => event.user_id === parent.id)
    },

    Event: {
        user: parent => users.find(user => user.id === parent.user_id),
        location: parent => locations.find(location => location.id === parent.location_id),
        participants: parent => participants.filter(participant => participant.event_id === parent.id),
    },

    Participant: {
        user: parent => users.find(user => user.id === parent.user_id),
        event: parent => events.find(event => event.id === parent.event_id)
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})