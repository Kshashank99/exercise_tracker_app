import { API } from "../config";
import axios from 'axios'

export const signup = (userVal) => {
    return axios.post(`${API}/auth/signup`, userVal)
      .then((response) => {
        //  console.log(response)
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const signin = (userVal) => {
    return axios.post(`${API}/auth/signin`,userVal)
      .then((response) => {
        //  console.log(response)
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const authenticate = (data, cb) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      // console.log(localStorage.jwt)
      cb();
    }
  };

  export const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };