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
    createEvent: async (_, { data: { title, description, date, from, to, location, user } }, { pubSub, db }) => {
        let event = { title, description, date, from, to, location, user }

        event = await db.EventService.create(event)

        pubSub.publish('eventCreated', { eventCreated: event })

        //Event count functinality add here
        // pubSub.publish('eventCount', { eventCount: db.events.length })

        return event
    },
    updateEvent: async (_, { id, data }, { db }) => {
        const updatedEvent = await db.EventService.update({ _id: id }, data)

        if (!updatedEvent) throw new Error('Event not found')

        return updatedEvent
    },
    deleteEvent: async (_, { id }, { pubSub, db }) => {
        const event = await db.EventService.deleteOne({ _id: id })

        if (event.deletedCount === 0) throw new Error('Event not found')

        //Event count functinality add here
        // pubSub.publish('eventCount', { eventCount: db.events.length })

        return { message: 'Event deleted' }
    },

    // Location
    createLocation: async (_, { data: { name, description, lat, lng } }, { db }) => {
        let location = { name, description, lat, lng, events: [] }

        location = await db.LocationService.create(location)

        return location
    },
    updateLocation: async (_, { id, data }, { db }) => {
        const location = await db.LocationService.update({ _id: id }, data)

        if (!location) throw new Error('Location not found')

        return location
    },
    deleteLocation: async (_, { id }, { db }) => {
        const location = await db.LocationService.deleteOne({ _id: id })

        if (location.deletedCount === 0) throw new Error('Location not found')

        return { message: 'Location deleted' }
    },

    // Participant
    createParticipant: async (_, { data: { user, event } }, { pubSub, db }) => {
        let participant = { user, event }

        participant = await db.ParticipantService.create(participant)

        pubSub.publish('participantCreated', { participantCreated: participant })

        return participant
    },
    updateParticipant: async (_, { id, data }, { db }) => {
        const participant = await db.ParticipantService.update({ _id: id }, data)

        if (!participant) throw new Error('Participant not found')

        return participant
    },
    deleteParticipant: async (_, { id }, { db }) => {
        const participant = await db.ParticipantService.deleteOne({ _id: id })

        if (participant.deletedCount === 0) throw new Error('Participant not found')

        return { message: 'Participant deleted' }
    },
}