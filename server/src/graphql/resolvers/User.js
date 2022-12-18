export const User = {
    events: (parent, __, { db }) => {
        return db.EventService.find({ createdBy: parent.id })
    }
}