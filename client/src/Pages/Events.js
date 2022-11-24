import React from 'react'

import { useQuery } from '@apollo/client'

import { GET_EVENTS } from '../queries/Event'

import Loading from '../Components/Loading'
import EventItem from '../Components/EventItem'

const Events = () => {
    const { loading, data } = useQuery(GET_EVENTS)

    if (loading) {
        return <Loading />
    }


    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-4'>Events</h1>
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