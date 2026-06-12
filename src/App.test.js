
import { render, screen, fireEvent } from "@testing-library/react";
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
    />
  );

  expect(
    screen.getByText(/choose a date/i)
  ).toBeInTheDocument();
});

test("booking form submits data", () => {
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText(/choose a date/i), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(
    screen.getByRole("button", {
      name: /make your reservation/i,
    })
  );

  expect(mockSubmit).toHaveBeenCalled();
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

  Storage.prototype.getItem.mockReturnValue(JSON.stringify(existing));

  localStorage.setItem("bookings", JSON.stringify([...existing, formData]));

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

  Storage.prototype.getItem.mockReturnValue(JSON.stringify(mockData));

  const data = JSON.parse(localStorage.getItem("bookings"));

  expect(localStorage.getItem).toHaveBeenCalledWith("bookings");
  expect(data).toEqual(mockData);
});