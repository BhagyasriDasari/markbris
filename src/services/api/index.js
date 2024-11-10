import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const submitBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw error;
  }
};