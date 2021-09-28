import axios from 'axios'
import {API} from '../config.js'

export const signup = (userVal) => {
    return fetch(`${API}/auth/signup`, {
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
  
export const getExercises = (category)=>{
    axios.get(`${API}/exrcise/getExercise/${category}`)
    .then(response=>{
        if(response.length>0){
            return response.data;
        }
        else{
            return ["Invalid Category!"]
        }
    })
    .catch(error=>{
        console.log(error)
    })
}

export const getCategories = ()=>{
  axios.get(`${API}/exercise/categories`)
  .then(response=>{
    return response.categories
  })
  .catch(error=>{
    console.log(error)
  })
}