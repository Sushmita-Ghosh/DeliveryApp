import camelize from "camelize";

import { locations } from "./location.mock";

// the below function takes in a searched input from user and will return the specific location object
// like "san francisco"  object
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

// the below function will camelize our result(for consitency) and then return the latitute and longitute
//for geocoding
export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
