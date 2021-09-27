import { API } from "../config";
// import axios from 'axios'

export const signup = (userVal) => {
    return fetch(`http://localhost:8000/api/auth/signup`, {
        method: "POST",
        headers: {
          Accept: "applcation/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userVal),
      })
        .then((response) => {
           console.log(response)
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
  };

export const signin = (userVal) => {
    return fetch(`http://localhost:8000/api/auth/signin`, {
        method: "POST",
        headers: {
          Accept: "applcation/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userVal),
      })
        .then((response) => {
          //  console.log(response)
          return response.json();
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