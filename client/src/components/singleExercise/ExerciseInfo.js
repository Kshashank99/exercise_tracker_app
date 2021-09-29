import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Exerciseinfo.css";

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
			.get(`https://xer-app.herokuapp.com/exercise/getExercise/${id}`)
			.then((response) => {
				setExercise({ ...response.data.data });
				// console.log(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getExercise();
	}, []);

	const renderExercise = () => (
		<>
			<section className='section cocktail-section'>
				{/* <Link to='/' className='btn btn-primary'>
					back home
				</Link> */}
				<h2 className='section-title'>{exercise.name}</h2>
				<div className='drink'>
					<img
						className='pic'
						src={`https://i.pinimg.com/736x/b8/63/9d/b8639dce878a0077935d168ddd924117.jpg`}
						alt={exercise.name}></img>
					<div className='drink-info'>
						<p style={{ display: "flex" }}>
							<span className='drink-data'>category :</span> {exercise.category}
						</p>
						<p style={{ display: "flex", alignItem: "flex-start" }}>
							<span className='drink-data'>Description:</span>{" "}
							<div>{exercise.description}</div>
						</p>
						<p style={{ display: "flex" }}>
							<span className='drink-data'>Equipments :</span>{" "}
							{exercise.equipments.map((el, i) => (
								<div style={{ display: "flex", margin: "0  10px 0 10px" }}>
									<p key={i}>{el}</p>
								</div>
							))}
						</p>
					</div>
				</div>
			</section>
		</>
	);

	return <div>{renderExercise()}</div>;
};

export default withRouter(ExerciseInfo);
