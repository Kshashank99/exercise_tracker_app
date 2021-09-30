import React,{useState} from 'react'
import axios from 'axios'

const Profile = ({history}) => {
    const [user,setUser] = useState({
        name:"",
        age:"",
        gender:"Male",
        height:"",
        weight:""
    })
    const [redirect,setRedirect] = useState(false)

    const {name,age,gender,height,weight} = user;
    const handleChange = nameVal => (event)=>{
        setUser({...user, [nameVal]:event.target.value});
        // console.log(nameVal," ",event.target.value)
    }

    const handleSubmit =()=>{
        let profile = JSON.parse(localStorage.getItem('jwt'))
        // console.log(profile)
        axios.put(`http://localhost:8000/api/user/${profile.user._id}`,{name:name,age:age,gender:gender,height:height,weight:weight},{headers:{
                    Authorization: `Bearer ${profile.token}`
                }})
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div className = "col-md-6 col-md-offset-3" style ={{margin: '0 auto'}}>
            <div className="form-group m-4">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChange("name")} className="form-control" value={name}/>
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Age</label>
                <input type="number" onChange={handleChange("age")} className="form-control" value={age}/>
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Gender</label>
                <select onChange={handleChange("gender")} className="form-control">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Height</label>
                <input type="number" onChange={handleChange("height")} className="form-control" value={height} placeholder="in cm"/>
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Weight</label>
                <input type="number" onChange={handleChange("weight")} className="form-control" value={weight} placeholder="in kg"/>
            </div>
            <center><button className="btn btn-outline-success" onClick={handleSubmit}>Update Profile</button></center>
        </div>
    )
}

export default Profile
