import React from 'react'

import { useSubscription } from '@apollo/client'

import { EVENT_COUNT_SUBSCRIPTION } from '../queries/Event'

const EventCounter = () => {
    const { loading, data } = useSubscription(EVENT_COUNT_SUBSCRIPTION)

    if (data?.eventCount === 0) return <div></div>

    return (
        <div>
            <span className='text-lg font-bold'>Total Events: </span>
            <span>{data?.eventCount || 0}</span>
        </div>
    )
}

export default EventCounter;