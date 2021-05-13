import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext.js";
//import { Navbar } from "../component/navbar.js";
import { CharactersCard } from "../component/charactersCard.js";
import { GenericCard } from "../component/card.js";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);
	const [charactersList, setCharactersList] = useState([]);

	console.log(store.characters);
	// useEffect(
	// 	() => {
	// 		if (store.characters) {
	// 			setCharactersList(
	// 				store.characters.map((character, index) => {
	// 					//return <li key={index.toString()}>{character.name}</li>;
	// 					return <GenericCard key={index} />;
	// 				})
	// 			);
	// 		} else {
	// 			{
	// 				<h1>Esta vacio</h1>;
	// 			}
	// 		}
	// 	},
	// 	[store.characters]
	// );

	return (
		<>
			<h1>Home</h1>
			{store.characters.map((character, index) => {
				//return <li key={index.toString()}>{character.name}</li>;
				return <GenericCard key={index} />;
			})}
			<Link to="/planets">
				<button className="">Ver más</button>
			</Link>
		</>
	);
};

export default Home;
