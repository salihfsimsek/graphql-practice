import React, { useState } from 'react'

import { useMutation } from '@apollo/client'

import { NEW_EVENT_MUTATION } from '../queries/Event'

import { useNavigate } from 'react-router-dom'

import bgImage from '../assets/event.jpg'
import Button from '../Components/Button'
import FileInput from '../Components/FileInput'
import Input from '../Components/Input'
import TextArea from '../Components/TextArea'
import Loading from '../Components/Loading'

const CreateEvent = () => {
    const navigate = useNavigate()

    const [saveEvent, { loading, error, data }] = useMutation(NEW_EVENT_MUTATION)

    const [eventTitle, setEventTitle] = useState('')
    const [description, setDescription] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventImage, setEventImage] = useState("https://thumbs.dreamstime.com/z/abstract-poster-event-template-fluid-shapes-composition-modern-event-poster-template-futuristic-design-posters-liquid-color-152203412.jpg")
    const [eventLocation, setEventLocation] = useState('63a0c99e12d2082f1cb35340')
    const [timeFrom, setTimeFrom] = useState('11:00')
    const [timeTo, setTimeTo] = useState('16:00')

    const submitForm = e => {
        e.preventDefault()
        if (loading) return
        saveEvent({
            variables: {
                data: {
                    title: eventTitle,
                    description: description,
                    date: eventDate,
                    poster: eventImage,
                    from: timeFrom,
                    to: timeTo,
                    location: eventLocation,
                    user: "639f686ebb5cb5c25f53eccc"
                }
            }
        }).then(res => {
            setEventTitle('')
            setDescription('')
            setEventDate('')
            navigate('/events')
            // setEventImage('')
            // setEventLocation('')
            // setTimeFrom('')
            // setTimeTo('')
        })
    }

    return (
        <section className='h-[calc(100vh-56px)]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute top-1/2 left-1/2 w-[30%] min-w-[250px] translate-x-[-50%] translate-y-[-50%] h-fit py-10 px-5 bg-[rgba(255,255,255,0.5)] border-2 border-white rounded-lg'>
                <h2 className='mb-10 text-center text-3xl font-medium'>Create Event</h2>
                <form onSubmit={submitForm} className='flex flex-col justify-center items-center gap-y-4'>
                    <Input value={eventTitle} changeValue={setEventTitle} placeholder='Event Title' type='text' required />
                    <TextArea value={description} changeValue={setDescription} placeholder='Event Description' />
                    <Input value={eventDate} changeValue={setEventDate} placeholder='Event Date' type='date' required />
                    <FileInput value={eventImage} changeValue={setEventImage} />
                    <Button type='submit' >
                        {loading ? <Loading /> : <span>Create</span>}
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default CreateEvent