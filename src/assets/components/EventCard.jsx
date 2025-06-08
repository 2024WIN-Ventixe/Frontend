import React from 'react'
import { Link } from 'react-router-dom';


//Nedanstående funktion är genererad med hjälp av ChatGPT för att formatera om ISO-datumsträngen från databasen till önskat format
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


const EventCard = ({event}) => {
  return (
    <Link className="event-card-link" to={`/events/${event.id}`}>
      <div className='event-card'>
        <div className='image-wrapper'></div>
          <div className='event-info-wrapper'>
            <p className='event-date'>{formattedDate(event.eventDate)}</p>
            <p className='event-name'>{event.name}</p>
            <p className='event-location'><i className="fa-light fa-location-dot"></i> {event.location}</p>
          </div>
        <p className='event-price'>${event.price}</p>
      </div>
    </Link>
  )
}

export default EventCard