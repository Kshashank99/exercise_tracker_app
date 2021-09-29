import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ExerciseInfo = ({ location }) => {
	const [exercise, setExercise] = useState({
		name: "",
		description: "",
		category: "",
		equipments: []
	});
	const getExercise = () => {
		const id = location.pathname.replace("/exercise/exerciseInfo/", "");
		axios
			.get(`http://localhost:8000/api/exercise/getExercise/${id}`)
			.then((response) => {
				setExercise({ ...response.data.data });
				console.log(response.data.data);
			})
			.catch((error) => {
				console.lof(error);
			});
	};
	useEffect(() => {
		getExercise();
	}, []);

	const renderExercise = () => (
		<div>
			<h3>{exercise.name}</h3>
			<p>{exercise.category}</p>
			<h4>Description</h4>
			<p>{exercise.description}</p>
			<h4>Equipments</h4>
			{exercise.equipments.map((el, i) => (
				<p key={i}>{el}</p>
			))}
		</div>
	);

	return <div>{renderExercise()}</div>;
};

export default withRouter(ExerciseInfo);
