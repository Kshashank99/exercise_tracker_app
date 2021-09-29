import React from "react";
import { Link } from "react-router-dom";
const selectedexercise = ({ items }) => {
	return (
		<div className='section-center'>
			{items.map((exerItem) => {
				const { _id, name, category, description } = exerItem;
				return (
					<article key={_id} className='menu-item'>
						<img
							src={`https://i.pinimg.com/736x/b8/63/9d/b8639dce878a0077935d168ddd924117.jpg`}
							alt={name}
							className='photo'
						/>
						<div className='item-info'>
							<header>
								<h4>{name}</h4>
								<h4 className='price'>{category}</h4>
							</header>
							<p className='item-text'>
								{description.substring(0, 40)}...
								<Link to={`/exercise/exerciseInfo/${_id}`}>see more</Link>
							</p>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default selectedexercise;
