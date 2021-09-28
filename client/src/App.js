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
import Exercise from "./components/exercise";
import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Food from "./components/food";
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
				<PrivateRoute path='/exercise' exact component={Exercise} />
				<PrivateRoute path='/food' exact component={Food} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
