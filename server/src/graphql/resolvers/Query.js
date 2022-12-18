export const Query = {
    events: async (_, __, { db }) => {
        const events = await db.EventService.list()
        return events
    },
    event: async (_, args, { db }) => {
        const event = await db.EventService.findOne({ _id: args.id })
        return event
    },

    users: async (_, __, { db }) => {
        const users = await db.UserService.list()
        return users
    },
    user: async (_, args, { db }) => {
        const user = await db.UserService.findOne({ _id: args.id })
        return user
    },

    locations: async (_, __, { db }) => {
        const locations = await db.LocationService.list()
        return locations
    },
    location: async (_, args, { db }) => {
        const location = await db.LocationService.findOne({ _id: args.id })
        return location
    },

    participants: async (_, __, { db }) => {
        const participants = await db.ParticipantService.list()
        return participants
    },
    participant: async (_, args, { db }) => {
        // db.participants.find(participant => participant.event_id === parseInt(args.event_id))
        const participant = await db.ParticipantService.findOne({ event: args.event_id })
        return participant
    }
}