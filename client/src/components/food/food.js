import React, { useState, useEffect } from "react";
import "./foods.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Axios from "axios";
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
		<div className='grocery-list'>
			<div>
				<ul style={{ display: "flex", justifyContent: "space-around" }}>
					<h4 className='title'>Food</h4>
					<h4 className='title'>calorie</h4>
					<h4 className='title'>Fat</h4>
					<h4 className='title'>carbs</h4>
				</ul>
			</div>
			{food.map((foodItem) => {
				const { _id, name, data } = foodItem;
				return (
					<article className='grocery-item' key={_id}>
						<h4 className='title'>{name}</h4>
						<div className='food_data'>
							{data.calories.quantity}
							{data.calories.unit}
						</div>
						<div className='food_data'>
							{data.carbs.quantity}
							{data.carbs.unit}
						</div>
						<div className='food_data'>
							{data.protein.quantity}
							{data.protein.unit}
						</div>
						<div className='food_data'>
							{data.fats.quantity}
							{data.fats.unit}
						</div>
						<div className='btn-container'>
							<button
								type='button'
								className='edit-btn'
								onClick={() => editItem(_id)}>
								<FaEdit />
							</button>
							<button
								type='button'
								className='delete-btn'
								onClick={() => removeItem(_id)}>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};
const Exercise = () => {
	const [name, setName] = useState("");
	const [food, setFood] = useState([]);
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
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
				setFood([
					...food,
					{
						id: response.data._id,
						name: response.data.name,
						data: response.data.data
					}
				]);
				console.log(response.data);
				// const food = { ...response.data };
				console.log(response.data._id);
				console.log(response.data.name);
				console.log(response.data.data);
				console.log(food);
				// setListOfFriends([
				//   ...listOfFriends,
				//   { _id: response.data._id, name: name, age: age },
				// ]);
			});
			//   .then((response) => {
			//     setListOfFriends([
			//       ...listOfFriends,
			//       { _id: response.data._id, name: name, age: age },
			//     ]);
			//   });
			// showAlert(true, "success", "item added to the list");
			// const newItem = { id: new Date().getTime().toString(), title: name };

			// setList([...list, newItem]);
			// setName("");
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
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

				<h3>Exercises</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. push-ups'
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
					<List food={food} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
			{/* <div className="listOfFriends">
        {listOfFriends.map((val) => {
          return (
            <div className="friendContainer">
              <div className="friend">
                <h3>Name: {val.name}</h3>
                <h3> Age: {val.age}</h3>
              </div>
              <button
                onClick={() => {
                  updateFriend(val._id);
                }}
              >
                Update
              </button>
              <button
                id="removeBtn"
                onClick={() => {
                  deleteFriend(val._id);
                }}
              >
                X
              </button>
            </div> */}
		</section>
	);
};

export default Exercise;
