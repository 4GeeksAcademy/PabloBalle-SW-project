import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Users } from "./views/Users.jsx";
import { UserDetails } from "./views/UserDetails.jsx";
import { Posts } from "./views/Posts.jsx";
import { Characters } from "./views/Characters.jsx";
import { CharactersDetails } from "./views/CharactersDetails.jsx";
import { Planets } from "./views/Planets.jsx";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";
import { Starships } from "./views/Starships.jsx";
import { StarshipsDetails } from "./views/StarshipsDetails.jsx";


import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<Users />} />
						<Route path="/users/:userId" element={<UserDetails />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:characterId" element={<CharactersDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:uid" element={<PlanetsDetails />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:uid" element={<StarshipsDetails />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
