import { API } from "../config";
// import axios from 'axios'

export const signup = (userVal) => {
    return fetch(`https://xercise-tracker.herokuapp.com/auth/signup`, {
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
    return fetch(`https://xercise-tracker.herokuapp.com/auth/signin`, {
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

  export const signout = (cb) => {
    // console.log("clicked! ");
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      cb();
      return fetch(`${API}/auth/signout`, {
        method: "GET",
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };