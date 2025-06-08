import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookEvent = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState ({ eventId: id, firstName: '', lastName: '', email:'', streetName:'', postalCode:'', city:'', ticketQuantity: 1 })

    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        try {
            const res = await fetch(`https://win24-ventixe-assignment.azurewebsites.net/api/events/${id}`)
            if(!res.ok) throw new Error("Failed to fetch event")

                const data = await res.json()
                console.log("Fetched event data:", data)
                setEvent(data)
            } catch(err) {
                console.error("Error fetching event:", err)
            }
    }
    

    const postBooking = async () => {
        try {
            const res = await fetch(`https://win24-ventixe-bookingservice.azurewebsites.net/api/booking`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
        
            if (!res.ok) {
                console.error('Booking failed')
            } else {
                console.error("Event successfully booked")
                navigate("/")
            }
        } catch {
            console.eroor("Error submitting booking", err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await postBooking()
    }

  return (
    <div>
        <h5>Book Event - {event?.name ?? 'Loading...'}</h5>
        <form className='book-form' onSubmit={handleSubmit} noValidate>
            <div className='form-input-wrapper'>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className='form-input-wrapper'>
                <label>Last name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className='form-input-wrapper'>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='form-input-wrapper'>
                <label>Streetname</label>
                <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
            </div>
            <div className='form-input-wrapper'>
                <label>Postal Code</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required/>
            </div>
            <div className='form-input-wrapper'>
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <button className='btn' type='submit'>Book Event</button>
        </form>
    </div>

  )
}

export default BookEvent