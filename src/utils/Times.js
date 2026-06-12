import { fetchAPI } from "../Api";

export function initializeTimes() {
  const today = new Date();

  return fetchAPI(today);
}

export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}