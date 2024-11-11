import {useState} from 'react'
import axios from 'axios'
import '../styles.css'

function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    email: '',
    phone: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        formData,
      )
      console.log('Booking response:', response.data)
      alert('Booking successful!')
    } catch (error) {
      console.error('Booking failed:', error)
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Check-In:{' '}
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
        />
      </label>
      <label>
        Check-Out:{' '}
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
        />
      </label>
      <label>
        Adults:{' '}
        <input
          type="number"
          name="adults"
          value={formData.adults}
          onChange={handleChange}
        />
      </label>
      <label>
        Children:{' '}
        <input
          type="number"
          name="children"
          value={formData.children}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:{' '}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Book</button>
    </form>
  )
}

export default BookingForm
