import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import phoneImg from "./images/phone.svg";
const Home = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<article className='hero-info'>
					<h1>
						Welcome to <br />
						the Exertrack
					</h1>
					<p>
						If you want something you’ve never had, you must be willing to do
						something you’ve never done.So get up and tie your laces and track
						your fitness routine with Exertrack
					</p>
					<button className='btn'>
						<Link style={{ color: "black" }} to='/dashboard'>
							Go to Dashboard
						</Link>
					</button>
				</article>
				<article className='hero-images'>
					<img src={phoneImg} className='phone-img' alt='phone' />
				</article>
			</div>
		</section>
	);
};

export default Home;
