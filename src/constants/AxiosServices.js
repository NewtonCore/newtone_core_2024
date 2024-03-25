import { getOfflineData } from "./OfflineStorage";
import { decryptWithAES } from "./utils";

const axios = require("axios");
let username = "test@mail.com";
let password = "dan@1995!";


//get service
const AxiosGetService = async (url,is_open_url=false) => {
  // is_open_url means that the api does not need authorization

  // Get token from the local storage

  // let token=""

  let token = await getOfflineData("@userAccess");
  if(token !==null){
    token = decryptWithAES(token)

  }
  let userLoginType = await getOfflineData("@userLoginType");

  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDQ2ODQyLCJpYXQiOjE2Njg4MzQ4NDIsImp0aSI6IjY3MjcyNzJjYjZjYzQwNTM4MzY4N2UyNWM1MTY0MWZhIiwidXNlcl9pZCI6Mn0.bgsi8uoY9j5q5AbRFfvu4ExF3R4B9Vmchufgeps64iM"
  // console.log(typeof(token))
  // console.log(token)

  let authorization_type =  "Token "

  if (userLoginType !== "default"){
    authorization_type =  "Bearer "
  }

  let headers = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: authorization_type + token },
  };

  if(is_open_url){
    headers = {
      "Content-Type": "multipart/form-data",
    };
  }
  
  const promise = axios.get(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//post service
const AxiosPostService = async (url, data,auth_type=true,is_open_url=false) => {
  // console.log(data, 'IN AXIOS');

  // is_open_url means that the api does not need authorization
  let token = await getOfflineData("@userAccess");
  // console.log(typeof(token))
  // console.log(token)

  if(token){
    token = decryptWithAES(token)

  }

  let userLoginType = await getOfflineData("@userLoginType");

  let authorization_type =  "Token "

  if (userLoginType !== "default"){
    authorization_type =  "Bearer "
  }

  let auth = { Authorization: authorization_type + token }

  if(!auth_type){
    auth = {}
  }


  let headers = {
    "Content-Type": "multipart/form-data",
    headers: auth,
  };

  if(is_open_url){
    headers = {
      "Content-Type": "multipart/form-data",
    };
  }

  // console.log({headers})

  
  const promise = axios.post(url, data, headers);
  const dataPromise = promise.then((response) => response);
  // console.log({dataPromise})
  return dataPromise;
};

// End of post

//put request
const AxiosPutService = async (url, data) => {
  let token = await getOfflineData("@userAccess");
  if(token !==null){
    token = decryptWithAES(token)

  }


  let userLoginType = await getOfflineData("@userLoginType");

  let authorization_type =  "Token "

  if (userLoginType !== "default"){
    authorization_type =  "Bearer "
  }

  let headers = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: authorization_type + token },
  };

  // console.log(data);
  const promise = axios.put(url, data, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//delete request
const AxiosDeleteService = async (url) => {
  let token = await getOfflineData("@userAccess");
  if(token !==null){
    token = decryptWithAES(token)

  }

  let userLoginType = await getOfflineData("@userLoginType");

  let authorization_type =  "Token "

  if (userLoginType !== "default"){
    authorization_type =  "Bearer "
  }

  let headers = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: authorization_type + token },
  };
  const promise = axios.delete(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

export {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
  AxiosDeleteService,
};

