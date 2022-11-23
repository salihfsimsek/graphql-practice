export const Subscription = {
    userCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('userCreated'),
    },
    eventCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('eventCreated')
    },
    participantCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('participantCreated')
    }
}