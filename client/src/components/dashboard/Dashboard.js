import React from "react";
import "./Dashboard.css";
// import phoneImg from "./images/phone.svg";
const Review = () => {
	// const [index, setIndex] = useState(0);
	// const { name, job, image, text } = people[index];
	// const checkNumber = (number) => {
	//   if (number > people.length - 1) {
	//     return 0;
	//   }
	//   if (number < 0) {
	//     return people.length - 1;
	//   }
	//   return number;
	// };
	// const nextPerson = () => {
	//   setIndex((index) => {
	//     let newIndex = index + 1;
	//     return checkNumber(newIndex);
	//   });
	// };
	// const prevPerson = () => {
	//   setIndex((index) => {
	//     let newIndex = index - 1;
	//     return checkNumber(newIndex);
	//   });
	// };
	// const randomPerson = () => {
	//   let randomNumber = Math.floor(Math.random() * people.length);
	//   if (randomNumber === index) {
	//     randomNumber = index + 1;
	//   }
	//   setIndex(checkNumber(randomNumber));
	// };

	return (
		<article className='review'>
			<div className='img-container'>
				<img
					src={`https://i.pinimg.com/736x/b8/63/9d/b8639dce878a0077935d168ddd924117.jpg`}
					alt='name'
					className='person-img'
				/>
				<span className='quote-icon'>{/* <FaQuoteRight /> */}</span>
			</div>
			<h4 className='author'>sahsank</h4>
			<p className='job'>developer</p>
			<p className='info'>Lorem Ipsum</p>
		</article>
	);
};
const Dashboard = () => {
	return (
		<section className='container'>
			<div className='title'>
				<h2>our reviews</h2>
				<div className='underline'></div>
			</div>
			<Review />
		</section>
	);
};

export default Dashboard;
