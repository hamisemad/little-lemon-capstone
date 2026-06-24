import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./utils/Times";

beforeEach(() => {
Storage.prototype.setItem = jest.fn();
Storage.prototype.getItem = jest.fn();
});

test("renders booking form date label", () => {
render(
<BookingForm
availableTimes={["17:00", "18:00"]}
dispatch={() => {}}
submitForm={() => {}}
/>
);

expect(
screen.getByText(/choose a date/i)
).toBeInTheDocument();
});

test("initializeTimes returns an array of times", () => {
const times = initializeTimes();

expect(Array.isArray(times)).toBe(true);
expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for selected date", () => {
const result = updateTimes([], {
type: "DATE_CHANGED",
date: "2026-06-12",
});

expect(Array.isArray(result)).toBe(true);
expect(result.length).toBeGreaterThan(0);
});

test("saves booking data to localStorage", () => {
const formData = {
date: "2026-01-01",
time: "17:00",
guests: 2,
occasion: "Birthday",
};

const existing = [];

Storage.prototype.getItem.mockReturnValue(
JSON.stringify(existing)
);

localStorage.setItem(
"bookings",
JSON.stringify([...existing, formData])
);

expect(localStorage.setItem).toHaveBeenCalledWith(
"bookings",
JSON.stringify([formData])
);
});

test("reads booking data from localStorage", () => {
const mockData = [
{
date: "2026-01-01",
time: "18:00",
guests: 2,
occasion: "Birthday",
},
];

Storage.prototype.getItem.mockReturnValue(
JSON.stringify(mockData)
);

const data = JSON.parse(
localStorage.getItem("bookings")
);

expect(localStorage.getItem).toHaveBeenCalledWith(
"bookings"
);

expect(data).toEqual(mockData);
});

test("date input is required", () => {
render(
<BookingForm
availableTimes={["17:00", "18:00"]}
dispatch={() => {}}
submitForm={() => {}}
/>
);

const dateInput = screen.getByLabelText(
/choose a date/i
);

expect(dateInput).toHaveAttribute("required");
});

test("time select is required", () => {
render(
<BookingForm
availableTimes={["17:00", "18:00"]}
dispatch={() => {}}
submitForm={() => {}}
/>
);

const timeSelect = screen.getByLabelText(
/choose time/i
);

expect(timeSelect).toHaveAttribute("required");
});

test("guest input has min and max values", () => {
render(
<BookingForm
availableTimes={["17:00", "18:00"]}
dispatch={() => {}}
submitForm={() => {}}
/>
);

const guestInput = screen.getByLabelText(
/number of guests/i
);

expect(guestInput).toHaveAttribute("min", "1");
expect(guestInput).toHaveAttribute("max", "10");
});


test("occasion select is required", () => {
render(
<BookingForm
availableTimes={["17:00", "18:00"]}
dispatch={() => {}}
submitForm={() => {}}
/>
);

const occasionSelect = screen.getByLabelText(
/occasion/i
);

expect(occasionSelect).toHaveAttribute("required");
});


test("does not submit the form when inputs are invalid", () => {
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={mockSubmitForm}
    />
  );

  const submitButton = screen.getByRole("button", { name: /Confirm Reservation/i });
  
  submitButton.click();

  expect(mockSubmitForm).not.toHaveBeenCalled();
})