import React, { useState, useEffect } from "react";
import "./Routine.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Axios from "axios";
import axios from "axios";

const getLocalStorage = () => {
	let food = localStorage.getItem("food");
	if (food) {
		return (food = JSON.parse(localStorage.getItem("food")));
	} else {
		return [];
	}
};
const Alert = ({ type, msg, removeAlert, list }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};
const List = ({ exercise, removeItem }) => {
	return (
		<div className='grocery-list'>
			{exercise.map((exercise, ind) => {
				return (
					<article className='grocery-item' key={ind}>
						<h4 className='title'>{exercise}</h4>
						<div className='btn-container'>
							<button
								type='button'
								className='delete-btn'
								onClick={() => removeItem(ind)}>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

const Routine = () => {
	const [name, setName] = useState("");
	const [exercise, setExercises] = useState([]);
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const getExercises = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.get(`https://xercise-tracker.herokuapp.com/user/${user.user._id}`, {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			})
			.then((response) => {
				setExercises(response.data.user.workout_history);
				// console.log(response.data.user.food_history)
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getExercises();
	}, []);
	const updateWorkoutHistory = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.put(
				`https://xercise-tracker.herokuapp.com/user/${user.user._id}`,
				{ workout_history: exercise },
				{
					headers: {
						Authorization: `Bearer ${user.token}`
					}
				}
			)
			.then((response) => {
				// console.log(response)
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const clearWorkoutHistory = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.put(
				`https://xercise-tracker.herokuapp.com/user/${user.user._id}`,
				{ workout_history: [] },
				{
					headers: {
						Authorization: `Bearer ${user.token}`
					}
				}
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, "danger", "please enter value");
		} else {
			setExercises([...exercise, name]);
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setExercises([]);
		clearWorkoutHistory();
	};

	const removeItem = (id) => {
		showAlert(true, "danger", "item removed");
		let ex = [...exercise];
		ex.splice(id, 1);
		setExercises(ex);
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);
	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>Workout Routine</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g push-ups benchpress'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>

			{exercise.length > 0 && (
				<div className='grocery-container'>
					{updateWorkoutHistory()}
					<List exercise={exercise} removeItem={removeItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
};

export default Routine;
