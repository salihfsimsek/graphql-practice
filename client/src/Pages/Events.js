import React, { useEffect } from 'react'

import { useQuery } from '@apollo/client'

import { GET_EVENTS, EVENTS_SUBSCRIPTION } from '../queries/Event'

import Loading from '../Components/Loading'
import EventItem from '../Components/EventItem'
import EventCounter from '../Components/EventCounter'

const Events = () => {
    const { loading, data, subscribeToMore } = useQuery(GET_EVENTS)

    useEffect(() => {
        subscribeToMore({
            document: EVENTS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                const newEvent = subscriptionData.data.eventCreated
                return {
                    ...prev,
                    events: [newEvent, ...prev.events],
                }
            }
        })
    }, [subscribeToMore])

    if (loading) {
        return <Loading />
    }


    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold text-center mb-4'>Events</span>
                <EventCounter />
            </div>
            <div id='event_container'>
                <ul id='event_list'>
                    {data.events.map((event, index) => (
                        <EventItem key={index} data={event} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Events