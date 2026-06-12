import { useState } from "react";
import "./BookingForm.css";


function BookingForm({ availableTimes, dispatch, submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  function handleSubmit(e) {
    e.preventDefault();

    submitForm({
        date,
        time,
        guests,
        occasion,
      });
  }


  return (
    <form onSubmit={handleSubmit} className="booking-form">

      <label htmlFor="res-date">Choose a date:</label>
      <input type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);

          dispatch({
            type: "DATE_CHANGED",
            date: e.target.value,
          });

        }} />
      <label htmlFor="res-time">
        Choose time
      </label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime} >
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">
        Number of guests
      </label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
      </select>


      <button type="submit">
        Make Your Reservation
      </button>


    </form>
  )
}

export default BookingForm;