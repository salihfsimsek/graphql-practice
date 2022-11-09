const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { v4: uuidv4 } = require('uuid');

let { events, users, locations, participants } = require('./datas');

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

    input CreateEventInput{
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
    }

    input UpdateEventInput{
        title: String
        desc: String
        date: String
        from: String
        to: String
        location_id: ID
        user_id: ID
    }

    type User{
        id: ID!
        username: String!
        email: String!
        events: [Event!]!
    }

    input CreateUserInput{
        username: String!
        email: String!
    }

    input UpdateUserInput{
        username: String
        email: String
    }

    type Location{
        id: ID!
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    input CreateLocationInput{
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    input UpdateLocationInput{
        name: String
        desc: String
        lat: Float
        lng: Float
    }

    type Participant{
        id: ID!
        event_id: ID!
        user_id: ID!
        user: User!
        event: Event!
    }

    input CreateParticipantInput{
        event_id: ID!
        user_id: ID!
    }

    input UpdateParticipantInput{
        event_id: ID
        user_id: ID
    }

    type DeleteAllOutput{
        count: Int!
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

    type Mutation{
        #User
        createUser(data: CreateUserInput!): User!
        updateUser(id: ID!, data: UpdateUserInput!): User!
        deleteUser(id: ID!): User!
        deleteAllUsers: DeleteAllOutput!

        #Event
        createEvent(data: CreateEventInput!): Event!
        updateEvent(id: ID!, data: UpdateEventInput!): Event!
        deleteEvent(id: ID!): Event!
        deleteAllEvents: DeleteAllOutput!

        #Location
        createLocation(data: CreateLocationInput!): Location!
        updateLocation(id: ID!, data: UpdateLocationInput!): Location!
        deleteLocation(id: ID!): Location!
        deleteAllLocations: DeleteAllOutput!

        #Participant
        createParticipant(data: CreateParticipantInput!): Participant!
        updateParticipant(id: ID!, data: UpdateParticipantInput!): Participant!
        deleteParticipant(id: ID!): Participant!
        deleteAllParticipants: DeleteAllOutput!
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

    Mutation: {
        // User
        createUser: (parent, { data: { username, email } }) => {
            const user = { id: uuidv4(), username, email }

            users.push(user)

            return user
        },
        updateUser: (parent, { id, data }) => {
            const user = users.findIndex(user => user.id === parseInt(id))

            if (user === -1) throw new Error('User not found')

            users[user] = {
                ...users[user],
                ...data
            }

            return users[user]
        },
        deleteUser: (parent, { id }) => {
            const user = users.find(user => user.id === parseInt(id))

            if (!user) throw new Error('User not found')

            users.splice(users.indexOf(user), 1)

            return user
        },
        deleteAllUsers: () => {
            const count = users.length

            users = []

            return { count }
        },

        // Event
        createEvent: (parent, { data: { title, desc, date, from, to, location_id, user_id } }) => {
            const event = { id: uuidv4(), title, desc, date, from, to, location_id, user_id }

            events.push(event)

            return event
        },
        updateEvent: (parent, { id, data }) => {
            const event = events.findIndex(event => event.id === parseInt(id))

            if (event === -1) throw new Error('Event not found')

            events[event] = {
                ...events[event],
                ...data
            }

            return events[event]
        },
        deleteEvent: (parent, { id }) => {
            const event = events.find(event => event.id === parseInt(id))

            if (!event) throw new Error('Event not found')

            events.splice(events.indexOf(event), 1)

            return event
        },
        deleteAllEvents: () => {
            const count = events.length

            events = []

            return { count }
        },

        // Location
        createLocation: (parent, { data: { name, desc, lat, lng } }) => {
            const location = { id: uuidv4(), name, desc, lat, lng }

            locations.push(location)

            return location
        },
        updateLocation: (parent, { id, data }) => {
            const location = locations.findIndex(location => location.id === parseInt(id))

            if (location === -1) throw new Error('Location not found')

            locations[location] = {
                ...locations[location],
                ...data
            }

            return locations[location]
        },
        deleteLocation: (parent, { id }) => {
            const location = locations.find(location => location.id === parseInt(id))

            if (!location) throw new Error('Location not found')

            locations.splice(locations.indexOf(location), 1)

            return location
        },
        deleteAllLocations: () => {
            const count = locations.length

            locations = []

            return { count }
        },

        // Participant
        createParticipant: (parent, { data: { event_id, user_id } }) => {
            const participant = { id: uuidv4(), event_id, user_id }

            participants.push(participant)

            return participant
        },
        updateParticipant: (parent, { id, data }) => {
            const participant = participants.findIndex(participant => participant.id === parseInt(id))

            if (participant === -1) throw new Error('Participant not found')

            participants[participant] = {
                ...participants[participant],
                ...data
            }

            return participants[participant]
        },
        deleteParticipant: (parent, { id }) => {
            const participant = participants.find(participant => participant.id === parseInt(id))

            if (!participant) throw new Error('Participant not found')

            participants.splice(participants.indexOf(participant), 1)

            return participant
        },
        deleteAllParticipants: () => {
            const count = participants.length

            participants = []

            return { count }
        }
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