import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


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
						<Route path="/" element={<Characters />} /> 
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
