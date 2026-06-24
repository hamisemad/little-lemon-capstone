import { useEffect, useState } from "react";
import "../components/BookingForm.css";

function ConfirmedBooking() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    if (data.length > 0) {
      setBooking(data[data.length - 1]); 
    }
  }, []);

  if (!booking) {
    return <h2>No booking found</h2>;
  }

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <h1>Booking Confirmed!</h1>

        <table>
            <caption>Your Reservation Details</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ConfirmedBooking;