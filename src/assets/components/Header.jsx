import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Events from '../pages/Events'
import EventDetails from '../pages/EventDetails'
import arrow_left from '../Images/arrow_left.svg'

const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const getHeading = () => {
    if (location.pathname === '/' || location.pathname === '') return 'Events'
    if (location.pathname.startsWith('/events/') && location.pathname !== '/events') return 'Event Details'
    if (location.pathname.startsWith('/events')) return 'Events'
    return 'Ventixe'
  }

  return (
    <header className='header'>
      {location.pathname.startsWith('/events/') && location.pathname !== '/events' && (
      <button className='arrow' onClick={() => navigate('/events')}>
        <img src={arrow_left}></img>
      </button>
      )}
      <h4>{getHeading()}</h4>
    </header>
  )
}

export default Header