import React from 'react';
import './index.css';

const BookingForm = () => (
  <div className="booking-form">
    <h2>Work from Ladakh</h2>
    <p>India’s first true digital tourism ecosystem</p>
    <div className="form-fields">
      <input type="date" placeholder="Check-in" />
      <input type="date" placeholder="Check-out" />
      <input type="number" min="1" max="10" placeholder="Rooms" />
      <button className="book-button">Book</button>
    </div>
  </div>
);

export default BookingForm;
