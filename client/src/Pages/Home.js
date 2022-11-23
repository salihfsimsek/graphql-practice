import React from 'react'
import { useNavigate } from 'react-router-dom'

import bgImage from '../assets/event.jpg'


const Home = () => {
    const navigate = useNavigate()

    return (
        <section className='h-[calc(100vh-3.8rem)]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute top-1/2 left-1/2 w-[20%] min-w-[250px] translate-x-[-50%] translate-y-[-50%] h-52 bg-[rgba(255,255,255,0.5)] border-2 border-white rounded-lg flex flex-col justify-center items-center gap-y-4'>
                <button onClick={() => navigate('/events')} className='bg-black text-white w-40 h-10 hover:bg-gray-900 rounded-lg'>Events</button>
                <button onClick={() => navigate('/create-event')} className='bg-black text-white w-40 h-10 hover:bg-gray-900 rounded-lg'>Create Event</button>
            </div>
        </section>
    )
}

export default Home