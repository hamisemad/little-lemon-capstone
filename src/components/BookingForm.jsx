import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  
  const [touchedTime, setTouchedTime] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = date ? new Date(date) : null;
  const isDateValid = selectedDate && selectedDate >= today;
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isTimeValid = time !== "";

  const isFormValid = isDateValid && isTimeValid && isGuestsValid && occasion;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) return;

    submitForm({ date, time, guests, occasion });
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {/* Date Field */}
      <label htmlFor="res-date">Choose a date:</label>
      <input
        type="date"
        id="res-date"
        required
        aria-label="Reservation Date"
        min={new Date().toISOString().split("T")[0]}
        value={date}
        onChange={(e) => {
          const newDate = e.target.value;
          setDate(newDate);
          dispatch({ type: "DATE_CHANGED", date: newDate });
        }}
      />
      {date && !isDateValid && (
        <p className="error-message">Please select today or a future date.</p>
      )}

      {/* Time Field */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        aria-label="Reservation Time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setTouchedTime(true);
        }}
        onBlur={() => setTouchedTime(true)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {/* Only show this if they actually touched the dropdown and left it blank */}
      {touchedTime && !isTimeValid && (
        <p className="error-message">Please select a reservation time.</p>
      )}

      {/* Guests Field */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        required
        aria-label="Number of Guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      {!isGuestsValid && (
        <p className="error-message">Number of guests must be between 1 and 10.</p>
      )}

      {/* Occasion Field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        aria-label="Occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
      </select>

      {/* REMOVED disabled={!isFormValid} so native HTML validation triggers */}
      <button type="submit" aria-label="Confirm Reservation">
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;