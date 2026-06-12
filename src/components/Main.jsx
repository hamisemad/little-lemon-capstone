import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import { initializeTimes, updateTimes } from "../utils/Times";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { submitAPI } from "../Api";
import { useNavigate } from "react-router-dom";
import Reservations from "../pages/Reservations";




function Main() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const navigate = useNavigate();

  function submitForm(formData) {
    const Success = submitAPI(formData);
    if (Success) {
      const existing = JSON.parse(localStorage.getItem("bookings")) || [];

      // 2. add new booking
      const updated = [...existing, formData];

      // 3. save back to localStorage
      localStorage.setItem("bookings", JSON.stringify(updated));

      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes}
          dispatch={dispatch} submitForm={submitForm} />} />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
        <Route
          path="/reservations"
          element={<Reservations />}
        />

      </Routes>
    </main>
  );
}

export default Main;