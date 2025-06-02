import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetails />} />

      </Routes>
    </>
  )
}

export default App
