import React from 'react'
import { Outlet } from 'react-router-dom'

const PortalLayout = () => {
  return (
    <div className='portal-wrapper'>
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout