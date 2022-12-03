export const Subscription = {
    userCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('userCreated'),
    },
    eventCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('eventCreated')
    },
    participantCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('participantCreated')
    },
    eventCount: {
        subscribe: (_, __, { pubSub, db }) => {
            setTimeout(() => {
                pubSub.publish('eventCount', { eventCount: db.events.length })
            }, 0)
            return pubSub.asyncIterator('eventCount')
        }
    }
}