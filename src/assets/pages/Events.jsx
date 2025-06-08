import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents= async () => {
        const res = await fetch("https://win24-ventixe-assignment.azurewebsites.net/api/events")

        if(res.ok) {
            const response = await res.json()
            setEvents(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className='events-wrapper'>
        {
            events.map(event => (
                <EventCard key={event.id} event={event} /> 
            ))
        }
    </div>
  )
}

export default Events