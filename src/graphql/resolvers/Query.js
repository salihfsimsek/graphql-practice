export const Query = {
    events: (_, __, { db }) => db.events,
    event: (_, args, { db }) => db.events.find(event => event.id === parseInt(args.id)),

    users: (_, __, { db }) => db.users,
    user: (_, args, { db }) => db.users.find(user => user.id === parseInt(args.id)),

    locations: (_, __, { db }) => db.locations,
    location: (_, args, { db }) => db.locations.find(location => location.id === parseInt(args.id)),

    participants: (_, __, { db }) => db.participants,
    participant: (_, args, { db }) => db.participants.find(participant => participant.id === parseInt(args.id))
}