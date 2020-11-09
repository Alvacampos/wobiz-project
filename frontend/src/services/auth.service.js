import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/admin.localwobiz.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    "Content-Type": "application/json",
  },
});

export default {
  signin(user) {
    console.log('asd')
    return apiClient.post("/login",user);
  },
};
