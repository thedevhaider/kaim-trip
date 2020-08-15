import axios from "axios";

import jwtDecode from 'jwt-decode';

let Bearer_Token;

export const checkAndAddToken =async()=>{
  if(!localStorage.getItem('Bearer_Token'))
  {
      var user={
          "email": "admin@kaimtrip.com",
          "password": "MZ@/d/305"
      }
    const {data} = await axios.post('http://localhost:5000/api/users/login',user);
    Bearer_Token = data.token;
    localStorage.setItem('Bearer_Token', data.token);
  }
  else{
    var decoded = jwtDecode(localStorage.getItem('Bearer_Token').split(' ')[1]);
    if (Date.now() >= decoded.exp * 1000) {
      var user={
        "email": "admin@kaimtrip.com",
        "password": "MZ@/d/305"
    }
    const {data} = await axios.post('http://localhost:5000/api/users/login',user);
    Bearer_Token = data.token;
    }
    else
      Bearer_Token = localStorage.getItem('Bearer_Token');
  }
}


export const contactForm = async(user) => {
    const { data } = await axios.post(`http://localhost:5000/api/contacts/`,user);
    return data;
  }

export const getDestinations = async(skip,limit) => {
  await checkAndAddToken();
  var {data} = await axios.get(
                `http://localhost:5000/api/destinations/?skip=${skip}&limit=${limit}`,
                {
                  headers: {
                        "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        "Authorization": `${Bearer_Token}`
                      }
                    }
              )
  return data;
}

export const getPlaces = async(skip,limit) => {
  await checkAndAddToken();
  var {data} = await axios.get(
                `http://localhost:5000/api/places/?skip=${skip}&limit=${limit}`,
                {
                  headers: {
                        "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        "Authorization": `${Bearer_Token}`
                      }
                    }
              )
  return data;
}

export const getDestinationDetails = async(DestinationId) => {
  await checkAndAddToken();
  var {data} = await axios.get(
                `http://localhost:5000/api/destinations/${DestinationId}`,
                {
                  headers: {
                        "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        "Authorization": `${Bearer_Token}`
                      }
                    }
              )
  return data;
}
export const getPlaceDetails = async(PlaceId) => {
  await checkAndAddToken();
  var {data} = await axios.get(
                `http://localhost:5000/api/places/${PlaceId}`,
                {
                  headers: {
                        "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        "Authorization": `${Bearer_Token}`
                      }
                    }
              )
  return data;
}