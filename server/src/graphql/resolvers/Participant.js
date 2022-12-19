export const Participant = {
    user: async (parent, __, { db }) => {
        const user = await db.UserService.findOne({ _id: parent.user })
        return user
    },
    event: async (parent, __, { db }) => {
        const event = await db.EventService.findOne({ _id: parent.event })
        return event
    }
}
