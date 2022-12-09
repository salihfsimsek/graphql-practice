import { withFilter } from 'graphql-yoga'

export const Subscription = {
    userCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('userCreated'),
    },
    eventCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('eventCreated')
    },
    participantCreated: {
        subscribe: withFilter(
            (_, __, { pubSub }) => pubSub.asyncIterator('participantCreated'),
            (payload, variables) => {
                console.log(variables)
                if (variables.event_id)
                    return payload.participantCreated.event_id === variables.event_id
                return true
            }
        )
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