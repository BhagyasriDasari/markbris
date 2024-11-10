import React from 'react';
import BookingForm from '../../components/BookingForm';
import Services from '../Services';
import './index.css';

const Home = () => (
  <div className="home-page">
    <BookingForm />
    <section className="discover">
      <h2>Discover</h2>
      <p>Experience the beauty and culture of Ladakh while working remotely in a comfortable and inspiring environment.</p>
    </section>
    <Services />
  </div>
);

export default Home;
