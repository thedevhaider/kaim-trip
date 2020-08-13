import axios from "axios";

var Bearer_Token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpZCI6IjVmMzQyMmZhM2M3NjI2MjM5N2Q5NWFiYyIsImlhdCI6MTU5NzI5OTI5NCwiZXhwIjoxNTk3Mzg1Njk0fQ.rXvbIYWK-eIGCUdOzLuIlbzI2sGwIYRm19wZ7T-dboQ"

export const contactForm = async(user) => {
    console.log(user);
    // const { data } = await axios.post(`/api/users/${authUserId}`, user);
    // console.log(data);
  }

export const getDestinations = async(skip,limit) => {
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