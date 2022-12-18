export const Event = {
    user: async (parent, __, { db }) => {
        const user = await db.UserService.findOne({ _id: parent.createdBy })
        return user
    },
    location: async (parent, __, { db }) => {
        const location = await db.LocationService.findOne({ _id: parent.location_id })
        return location
    },
    participants: async (parent, __, { db }) => {
        const participants = await db.ParticipantService.find({ event: parent.id })
        return participants
    },
}
