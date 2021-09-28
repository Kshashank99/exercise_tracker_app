import React from "react";

const displaycategory = ({ categories, getExercises }) => {
	return (
		<div className='btn-container'>
			{categories.map((item,i) => {
				return (
					<button key={i}
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
