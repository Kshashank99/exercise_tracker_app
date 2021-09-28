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
// import Signin from "./components/Signin";
// import Signup from "./components/Signup";
import Food from "./components/food";
// import CreateExercise from "./components/create-exercise.component";
import Userinfo from "./components/user";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
<<<<<<< HEAD
				{/* <Route path='/signin' exact component={Signin} /> */}
				{/* <Route path='/signup' exact component={Signup} /> */}

				{/* <PrivateRoute
          path="/user/dashboard"
          exact
          component={Dashboard}
          /> */}

				<Route path='/exercise' exact component={Exercise} />
				<Route path='/food' exact component={Food} />
=======
				<Route path='/signin' exact component={Signin} />
				<Route path='/signup' exact component={Signup} />
				<PrivateRoute path="/dashboard" exact component={Dashboard} />
				<PrivateRoute path='/exercise' exact component={Exercise} />
				<PrivateRoute path='/food' exact component={Food} />
>>>>>>> 128793044f3edf0d7b000d08e9d26ee56df37c34
			</Switch>
		</BrowserRouter>
	);
}

export default App;
