import React, { useState, useEffect } from "react";
import "./exercise.css";
import { FaEdit, FaTrash } from "react-icons/fa";
// import List from './List';
// import Alert from './Alert';
const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return (list = JSON.parse(localStorage.getItem("list")));
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
const List = ({ items, removeItem, editItem }) => {
	return (
		<div className='grocery-list'>
			{items.map((item) => {
				const { id, title } = item;
				return (
					<article className='grocery-item' key={id}>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button
								type='button'
								className='edit-btn'
								onClick={() => editItem(id)}>
								<FaEdit />
							</button>
							<button
								type='button'
								className='delete-btn'
								onClick={() => removeItem(id)}>
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
			showAlert(true, "success", "item added to the list");
			const newItem = { id: new Date().getTime().toString(), title: name };

			setList([...list, newItem]);
			setName("");
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
			{list.length > 0 && (
				<div className='grocery-container'>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
};

export default Exercise;
