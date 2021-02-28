
import axios from 'axios';
let origin = 'https://afternoon-sierra-62737.herokuapp.com/';
if (process.env.NODE_ENV === 'development') {
  console.log("I am executed!");
  origin = 'http://localhost:8082';
} else {
  console.log("I am production!");
}

export default axios.create({
  baseURL: origin,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});