import { v4 as uuidv4 } from 'uuid';

export const Mutation = {
    // User
    createUser: async (_, { data: { username, email, password, profilePhoto } }, { pubSub, db }) => {
        let user = { username, password, profilePhoto, email, events: [] }

        // I am gonna add password crypting here

        user = await db.UserService.create(user)

        pubSub.publish('userCreated', { userCreated: user })

        return user
    },
    updateUser: async (_, { id, data }, { db }) => {
        const updatedUser = await db.UserService.update({ _id: id }, data)

        if (!updatedUser) throw new Error('User not found')

        return updatedUser
    },
    deleteUser: async (_, { id }, { db }) => {
        const user = await db.UserService.deleteOne({ _id: id })

        if (user.deletedCount === 0) throw new Error('User not found')

        return { message: 'User deleted' }
    },
    // Event
    createEvent: (_, { data: { title, desc, date, from, to, location_id, user_id } }, { pubSub, db }) => {
        const event = { id: uuidv4(), title, desc, date, from, to, location_id, user_id }

        db.events.unshift(event)

        pubSub.publish('eventCreated', { eventCreated: event })
        pubSub.publish('eventCount', { eventCount: db.events.length })

        return event
    },
    updateEvent: (_, { id, data }, { db }) => {
        const event = db.events.findIndex(event => event.id === parseInt(id))

        if (event === -1) throw new Error('Event not found')

        db.events[event] = {
            ...db.events[event],
            ...data
        }

        return db.events[event]
    },
    deleteEvent: (_, { id }, { pubSub, db }) => {
        const event = db.events.find(event => event.id === parseInt(id))

        if (!event) throw new Error('Event not found')

        db.events.splice(db.events.indexOf(event), 1)

        pubSub.publish('eventCount', { eventCount: db.events.length })

        return event
    },
    deleteAllEvents: (_, __, { pubSub, db }) => {
        const count = db.events.length

        db.events = []

        pubSub.publish('eventCount', { eventCount: db.events.length })

        return { count }
    },

    // Location
    createLocation: (_, { data: { name, desc, lat, lng } }, { db }) => {
        const location = { id: uuidv4(), name, desc, lat, lng }

        db.locations.unshift(location)

        return location
    },
    updateLocation: (_, { id, data }, { db }) => {
        const location = db.locations.findIndex(location => location.id === parseInt(id))

        if (location === -1) throw new Error('Location not found')

        db.locations[location] = {
            ...db.locations[location],
            ...data
        }

        return db.locations[location]
    },
    deleteLocation: (_, { id }, { db }) => {
        const location = db.locations.find(location => location.id === parseInt(id))

        if (!location) throw new Error('Location not found')

        db.locations.splice(db.locations.indexOf(location), 1)

        return location
    },
    deleteAllLocations: (_, __, { db }) => {
        const count = db.locations.length

        db.locations = []

        return { count }
    },

    // Participant
    createParticipant: (_, { data: { event_id, user_id } }, { pubSub, db }) => {
        const participant = { id: uuidv4(), event_id, user_id }
        db.participants.unshift(participant)

        pubSub.publish('participantCreated', { participantCreated: participant })

        return participant
    },
    updateParticipant: (_, { id, data }, { db }) => {
        const participant = db.participants.findIndex(participant => participant.id === parseInt(id))

        if (participant === -1) throw new Error('Participant not found')

        db.participants[participant] = {
            ...db.participants[participant],
            ...data
        }

        return db.participants[participant]
    },
    deleteParticipant: (_, { id }, { db }) => {
        const participant = db.participants.find(participant => participant.id === parseInt(id))

        if (!participant) throw new Error('Participant not found')

        db.participants.splice(db.participants.indexOf(participant), 1)

        return participant
    },
    deleteAllParticipants: (_, __, { db }) => {
        const count = db.participants.length

        db.participants = []

        return { count }
    }
}