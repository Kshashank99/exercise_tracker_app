import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
	{
		id: 1,
		url: "/",
		text: "Dashboard"
	},
	{
		id: 2,
		url: "/about",
		text: "Food"
	},
	{
		id: 3,
		url: "/projects",
		text: "Exercise "
	},
	{
		id: 4,
		url: "/contact",
		text: "Routine"
	},
	{
		id: 5,
		url: "/profile",
		text: "profile"
	},
	{
		id: 6,
		url: "/signin",
		text: "SignIn"
	},
	{
		id: 7,
		url: "/singup",
		text: "SignUp"
	}
];

export const social = [
	{
		id: 1,
		url: "https://www.twitter.com",
		icon: <FaFacebook />
	},
	{
		id: 2,
		url: "https://www.twitter.com",
		icon: <FaTwitter />
	},
	{
		id: 3,
		url: "https://www.twitter.com",
		icon: <FaLinkedin />
	},
	{
		id: 4,
		url: "https://www.twitter.com",
		icon: <FaBehance />
	}
];
