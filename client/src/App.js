import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Exercise from "./components/exercise";
import Food from "./components/food";
// import CreateExercise from "./components/create-exercise.component";
import Userinfo from "./components/user";

function App() {
	return (
		<Router>
			<div className='container'>
				<Navbar />
				<Userinfo />

				<div className='container_body'>
					<Exercise />
					<Food />
				</div>

				{/* <br />
				<Route path='/' exact component={ExercisesList} />
				<Route path='/edit/:id' component={EditExercise} />
				<Route path='/create' component={CreateExercise} />
				<Route path='/user' component={CreateUser} /> */}
			</div>
		</Router>
	);
}

export default App;
