import React from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<Link to="/users">Users</Link>
			<Link to="/posts">
				Posts
			</Link>
			<Link to="/characters">
				char
			</Link>

		</nav>
	);
};