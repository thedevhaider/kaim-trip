import axios from "axios";

export const contactForm = async (user) => {
  const { data } = await axios.post(
    `/api/contacts/`,
    user
  );
  return data;
};

export const getDestinations = async (skip, limit) => {
  var { data } = await axios.get(
    `/api/destinations/popular/?skip=${skip}&limit=${limit}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    }
  );
  return data;
};

export const getPlaces = async (skip, limit) => {
  var { data } = await axios.get(
    `/api/places/popular/?skip=${skip}&limit=${limit}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    }
  );
  return data;
};

export const getDestinationDetails = async (DestinationId) => {
  var { data } = await axios.get(
    `/api/destinations/${DestinationId}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    }
  );
  return data;
};
export const getPlaceDetails = async (PlaceId) => {
  var { data } = await axios.get(
    `/api/places/${PlaceId}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    }
  );
  return data;
};
