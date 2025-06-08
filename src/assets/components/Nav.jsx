import React from 'react'
import logotype from '../Images/ventixe_logo.svg'
import { Link, NavLink } from 'react-router-dom'
import event_icon from '../Images/events_icon.svg'

const Nav = () => {
  return (
    <nav className='navbar'>
      <Link className='logotype'>
        <img src={logotype} alt="Ventixe logotype" />
        <span>Ventixe</span>
      </Link>
      <ul>
        <li>
          <NavLink to="/events" className="nav-link"><img src={event_icon} alt=""/><span className='nav-title'>Events</span></NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav