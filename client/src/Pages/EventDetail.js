import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GET_EVENT } from '../queries/Event'

import EventParticipants from '../Components/EventParticipants'
import Loading from '../Components/Loading'

const EventDetail = () => {
    const { id } = useParams()

    const { loading, data, error } = useQuery(GET_EVENT, {
        variables: { id }
    })

    console.log(error)

    if (loading) {
        return <Loading />
    }

    return (
        <div className='container mx-auto flex justify-center items-center h-[calc(100vh-56px)] pt-3'>
            <div className='p-5 h-full border-2 flex justify-start'>
                <img src={data.event?.poster} alt='event' className='w-1/2 h-full' />
                <div id='event_detail' className='ml-3 w-1/2'>
                    <div className='flex justify-between items-center'>
                        <span className='font-normal text-2xl'>
                            Event Name: {data.event?.title}
                        </span>
                        <span className='font-normal text-xl text-gray-600'>
                            Date: {data.event?.date}
                        </span>
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <span className='font-normal text-xl text-gray-600'>
                            Owner: {data.event?.user?.username}
                        </span>
                        <span className='font-normal text-xl text-gray-600'>
                            Location: {data.event?.location?.name}
                        </span>
                    </div>
                    <div className='mt-5 flex flex-col justify-start items-center'>
                        <span className='font-normal text-lg text-gray-700 mb-5'>Event Description</span>
                        <span>{data.event?.description}</span>
                    </div>
                    <EventParticipants />
                </div>
            </div>
        </div>
    )
}

export default EventDetail