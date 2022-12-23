import React from 'react'

import { useNavigate } from 'react-router-dom'

const EventItem = ({ data }) => {
    const navigate = useNavigate()
    return (
        <li id='event_item' className='border-2 rounded-sm p-5 mb-4 cursor-pointer hover:shadow-lg'
            onClick={() => navigate(`/events/${data.id}`)}
        >
            <div className='flex items-center justify-between mb-4'>
                <div className='text-xl font-medium'>
                    {data.title}
                </div>
                <div className='text-gray-600'>
                    {data.date}
                </div>
            </div>
            <div className='event_item_desc truncate'>
                {data.description}
            </div>
        </li>
    )
}

export default EventItem