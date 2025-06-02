import React from 'react'

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents= async () => {
        const res = await fetch("")

        if(res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div>
        <h1>Events</h1>
        {
            events.map(event => (
                <EventCard key={event.id} event={event} /> 
            ))
        }
    </div>
  )
}

export default Events