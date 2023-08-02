import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/Scroll";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Phase1 from "./pages/Phases/Phase1";
import Phase2 from "./pages/Phases/Phase2";
import Phase3 from "./pages/Phases/Phase3";
import Learn from "./pages/Learn/Learn";
import Solve from "./pages/Learn/Solve";
import Profile from './pages/Profile/Profile';

function App() {
	//DarkMode
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

		//Fetching current user from server
		const [userObject, setUserObject] = useState();

		useEffect(() => {
			axios
				.get("http://localhost:8080/getuser", { withCredentials: true })
				.then((res) => {
					// console.log(res);
					if (res.data) {
						setUserObject(res.data);
					}
				});
		}, []);
	


	return (
		<Router>
			<ScrollToTop />
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} userObject={userObject}/>
			<Routes>
				<Route path="*" element={<Home theme={theme} />} theme={theme} />
				<Route path="/" element={<Home theme={theme} />} />
				<Route path="/phase1" element={<Phase1 theme={theme} />} />
				<Route path="/phase2" element={<Phase2 theme={theme} />} />
				<Route path="/phase3" element={<Phase3 theme={theme} />} />
				<Route path="/learn" element={<Learn theme={theme} />} />
				<Route path="/Solve" element={<Solve theme={theme} />} />
				<Route path="/Profile" element={<Profile theme={theme} userObject={userObject}/>} />
			</Routes>
			<Footer theme={theme} />
		</Router>
	);
}

export default App;
