Participant = {
    user: (parent, __, { db }) => db.users.find(user => user.id === parent.user_id),
    event: (parent, __, { db }) => db.events.find(event => event.id === parent.event_id)
}

module.exports.Participant = Participant