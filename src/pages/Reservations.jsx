import { useEffect, useState } from "react";

function ReservationHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <h1>Reservation History</h1>

        {bookings.length === 0 ? (
          <p>No reservations yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>{b.guests}</td>
                  <td>{b.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default ReservationHistory;