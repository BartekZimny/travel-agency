/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - TODO - filter by duration
  if (filters.duration) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // DONE - TODO - filter by tags
  if (filters.tags) {
    output = output.filter(trip => filters.tags.every(tag => trip.tags.indexOf(tag) > -1));
  }
  // DONE - TODO - sort by cost descending (most expensive goes first)
  const getValueFromString = costString => {
    const parsed = parseInt(
      costString /* string argument to parse*/
        .split('') /* split a string into an array of substrings (string is split between each character) */
        .filter(element => !isNaN(element)) /* creates a new array of elements that are numbers (removes all elements that are not numbers) */
        .join('') /* combines all elements of an array into one string */
    );
    return parsed;
  };
  output.sort((a, b) => getValueFromString(b.cost) - getValueFromString(a.cost)); /* sorting results (descending) */

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  // DONE - TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  // DONE - TODO - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
