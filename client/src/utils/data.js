import axios from "axios";

export const contactForm = async (user) => {
  const { data } = await axios.post(
    `http://ec2-52-66-241-0.ap-south-1.compute.amazonaws.com:5000/api/contacts/`,
    user
  );
  return data;
};

export const getDestinations = async (skip, limit) => {
  var { data } = await axios.get(
    `http://ec2-52-66-241-0.ap-south-1.compute.amazonaws.com:5000/api/destinations/popular/?skip=${skip}&limit=${limit}`,
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
    `http://ec2-52-66-241-0.ap-south-1.compute.amazonaws.com:5000/api/places/popular/?skip=${skip}&limit=${limit}`,
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
    `http://ec2-52-66-241-0.ap-south-1.compute.amazonaws.com:5000/api/destinations/${DestinationId}`,
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
    `http://ec2-52-66-241-0.ap-south-1.compute.amazonaws.com:5000/api/places/${PlaceId}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    }
  );
  return data;
};
