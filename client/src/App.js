import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import Navbar from "./components/navbar";
import Exercise from "./components/exercise/exercise";
import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
// import Food from "./componenets/food/Food"
import FoodLog from "./components/food/FoodLog";
import ExerciseInfo from "./components/singleExercise/ExerciseInfo";
import Profile from "./components/Profile";
import Routine from "./components/Routine/Routine";
// import CreateExercise from "./components/create-exercise.component";
import Userinfo from "./components/user";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/signin' exact component={Signin} />
				<Route path='/signup' exact component={Signup} />
				<PrivateRoute path='/dashboard' exact component={Dashboard} />
				<Route path='/exercise' exact component={Exercise} />
				<Route
					path='/exercise/exerciseInfo/:id'
					exact
					component={ExerciseInfo}
				/>
				<PrivateRoute path='/food' exact component={FoodLog} />
				<PrivateRoute path='/profile' exact component={Profile} />
				<PrivateRoute path='/routine' exact component={Routine} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
