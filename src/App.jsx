import './App.css'
import { Routes, Route } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import EventsDetails from './assets/pages/EventDetails'
import BookEvent from './assets/pages/BookEvent'


function App() {

  return (
    <Routes>
      <Route path="/" element={<PortalLayout />}>
          <Route index element={<Events />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventsDetails />} />
          <Route path="events/bookevent/:id" element={<BookEvent/>} />
      </Route>
    </Routes>
  )
}

export default App
