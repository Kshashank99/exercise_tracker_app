import React,{useState,useEffect} from "react";
import axios from 'axios'
import "./Dashboard.css";
import { withRouter } from "react-router";
// import phoneImg from "./images/phone.svg";
const Review = ({user}) => {
	return (
		<article className='review'>
			<div className='img-container'>
				<img
					src={`https://i.pinimg.com/736x/b8/63/9d/b8639dce878a0077935d168ddd924117.jpg`}
					alt='name'
					className='person-img'
				/>
				<span className='quote-icon'>{/* <FaQuoteRight /> */}</span>
			</div>
			{/* <h4 className='author'>sahsank</h4> */}
			<p className='info'>Height: {user.height} Cm</p>
			<p className='info'>Weight: {user.weight} Kg</p>
			<div style={{margin:'0 auto'}}>
				<p className='info'>Workout Routine</p>
				<ul style={{margin:'0 auto'}}>
				{user.workout_history.map((el,i)=>(
					<li key={i}>{el}</li>
				))}
				</ul>
			</div>
		</article>
	);
};
const Dashboard = ({location}) => {

	const [user,setUser] = useState({name:"",workout_history:[],height:"",weight:""})
	const getUser=()=>{
		let userJWT=JSON.parse(localStorage.getItem('jwt'))
		axios.get(`https://xer-app.herokuapp.com/user/${userJWT.user._id}`,{headers:{
			Authorization: `Bearer ${userJWT.token}`
		}})
		.then(response=>{
			let User = response.data.user
			setUser(User)
			console.log(response.data.user)
		})
		.catch(error=>{
			console.log(error)
		})
	}
	useEffect(()=>{
		if (!location.hash) {
			window.location = window.location + '#loaded';
			window.location.reload();
		}
		getUser()
		
	},[])
	return (
		<section className='container'>
			<div className='title'>
				<h2>{user.name}</h2>
				<div className='underline'></div>
			</div>
			<Review user={user}/>
		</section>
	);
};

export default withRouter(Dashboard);
