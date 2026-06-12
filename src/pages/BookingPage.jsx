import BookingForm from '../components/BookingForm';


function BookingPage({ availableTimes, dispatch, submitForm,
}) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>

      <p>
        Book your table at Little Lemon restaurant.
      </p>
      <BookingForm availableTimes={availableTimes}
        dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default BookingPage;