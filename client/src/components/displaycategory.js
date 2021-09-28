import React from "react";

const displaycategory = ({ categories, getExercises }) => {
	return (
		<div className='btn-container'>
			{categories.map((item) => {
				return (
					<button
						type='button'
						className='filter-btn'
						// key={index}
						onClick={() => getExercises(item)}>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default displaycategory;
