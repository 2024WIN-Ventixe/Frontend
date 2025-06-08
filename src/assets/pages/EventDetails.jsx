import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const formattedDate = (isoString) => {
  const date = new Date(isoString);

  const datePart = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timePart = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${datePart} - ${timePart}`;
};

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch(`https://win24-ventixe-assignment.azurewebsites.net/api/events/${id}`);

      if (res.ok) {
        const data = await res.json();
        setEvent(data);
      }
      else {
        console.error("Failed to fetch event");
      }
    };

    if (id) {
      getEvents();
    }
  }, [id]);

    if (!event) return <p>Loading...</p>;

    return (
    <div className='event-details'>
        <div className='image-wrapper'></div>
        <div className='event-info-wrapper'>
          <h4 className='event-name'>{event.name}</h4>
          <p className='event-date'>{formattedDate(event.eventDate)}</p>
          <p className='event-location'><i className="fa-light fa-location-dot"></i> {event.location}</p>
          <p className='event-price'>${event.price}</p>
        </div>
        <div className='event-description'><span className='highlight'>About Event</span>{event.description}</div>
        <Link className='btn' to={`/events/bookevent/${event.id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetails
