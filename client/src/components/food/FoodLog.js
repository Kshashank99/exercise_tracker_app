import React, { useState, useEffect } from "react";
import "./foods.css";
import Axios from "axios";
import axios from "axios";
// import List from './List';
// import Alert from './Alert';

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
const List = ({ food, removeItem, editItem }) => {
	return (
		<div className='grocery-list' >
            <table>
                <th>Food</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Protein</th>
                <th>Fat</th>
                {food.map(foodItem=>{
                    const { _id, name, data } = foodItem;
                    return (
                        <tr>
                            <td>{name}</td>
                            <td>{data.calories.quantity.toFixed(2)} {data.calories.unit}</td>
                            <td>{data.carbs.quantity.toFixed(2)} {data.carbs.unit}</td>
                            <td>{data.protein.quantity.toFixed(2)} {data.protein.unit}</td>
                            <td>{data.fats.quantity.toFixed(2)} {data.fats.unit}</td>
                        </tr>
                        
                    )
                })}
            </table>
		</div>
	);
};
const FoodLog = () => {
	const [name, setName] = useState("");
	const [food, setFood] = useState([]);
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const getFood = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.get(`http://localhost:8000/api/user/${user.user._id}`, {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			})
			.then((response) => {
				setFood(response.data.user.food_history);
				// console.log(response.data.user.food_history)
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getFood();
	}, []);
	const updateFoodHistory = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.put(
				`http://localhost:8000/api/user/${user.user._id}`,
				{ food_history: food },
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
	const clearFoodHistory = () => {
		let user = JSON.parse(localStorage.getItem("jwt"));
		axios
			.put(
				`http://localhost:8000/api/user/${user.user._id}`,
				{ food_history: [] },
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
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName("");
			setEditID(null);
			setIsEditing(false);
			showAlert(true, "success", "value changed");
		} else {
			Axios.post("http://localhost:8000/api/food/getFoodVals", {
				item: name
			}).then((response) => {
				console.log("response", response);
				setFood([
					...food,
					{
						id: response.data._id,
						name: response.data.name,
						data: response.data.data
					}
				]);
			});
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setFood([]);
		clearFoodHistory();
	};
	const removeItem = (id) => {
		showAlert(true, "danger", "item removed");
		setList(list.filter((item) => item.id !== id));
	};
	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};
	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);
	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>Food Log</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g eggs, milk'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>

			{food.length > 0 && (
				<div className='grocery-container'>
					{updateFoodHistory()}
					<List food={food} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
};

export default FoodLog;
