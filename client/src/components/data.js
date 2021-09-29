import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
	{
		id: 1,
		url: "/dashboard",
		text: "Dashboard"
	},
	{
		id: 2,
		url: "/food",
		text: "Food"
	},
	{
		id: 3,
		url: "/exercise",
		text: "Exercise "
	},
	{
		id: 4,
		url: "/routine",
		text: "Routine"
	},
	{
		id: 5,
		url: "/profile",
		text: "profile"
	},
	{
		id: 6, 
		url: "/signout",
		text: "SignOut"
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


export const auth = [
	{
		id: 1,
		url: "/",
		text: "Home"
	},
	{
		id: 2,
		url: "/signin",
		text: "SignIn"
	},
	{
		id: 3,
		url: "/signup",
		text: "SignUp"
	}
];
