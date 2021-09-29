import React, { useEffect, useState } from "react";
import "./exercise.css";
import axios from "axios";
// import { category } from "./catArray.js";
import DispayCategories from "../displaycategory.js";
import SelectedExercise from "../selectedexercise.js";
// import { getExercises, getCategories, signup } from "../core/apiCore.js";
// useEffect(() => {
//     fetchExercise()
//   }, [])

const Exercise = () => {
	const getExercises = (cat) => {
		axios
			.get(`https://xercise-tracker.herokuapp.com/exercise/getExercises/${cat}`)
			.then((response) => {
				// console.log(response.data.data)
				setExercises(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const getCategories = () => {
		axios
			.get(`https://xercise-tracker.herokuapp.com/exercise/categories`)
			.then((response) => {
				const item = response.data.categories;

				setCategories(item);
				// setExercises(item)
				// return item;
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getCategories();
	}, []);
	// console.log(category);
	// const allCategories = [new Set(category.map((item) => category))];
	const [exercises, setExercises] = useState([]);
	const [categories, setCategories] = useState([]);
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Exercise</h2>
					<div className='underline'></div>
				</div>
				<DispayCategories categories={categories} getExercises={getExercises} />
				<SelectedExercise items={exercises} />
			</section>
		</main>
	);
};

export default Exercise;
