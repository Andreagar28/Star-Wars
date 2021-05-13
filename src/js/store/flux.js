const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: []
			//allUrlPlanets: "https://www.swapi.tech/api/planets"
			//allUrlPeople: "https://www.swapi.tech/api/people"
		},
		actions: {
			getCharacters: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");

					if (response.ok) {
						let responseAsJson = await response.json();
						console.log(responseAsJson);
						setStore({ characters: responseAsJson.results });
					} else {
						throw new Error(response.statusText, "code: ", response.status);
					}
				} catch (error) {
					console.log("Fail", error);
				}
			},

			getPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets");

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ planets: responseAsJson.results });
					} else {
						throw new Error(response.statusText, "code: ", response.status);
					}
				} catch (error) {
					console.log("Fail", error);
				}
			}
			// setPlanets: async () => {
			// 	let planetsStored = [];
			// 	let response = await fetch("https://www.swapi.tech/api/planets");
			// 	let responseAsJson = await response.json();
			// 	console.log(responseAsJson);

			// 	responseAsJson.results.map(element => {
			// 		planetsStored.push(element);
			// 	});

			// 	setStore({ planets: planetsStored });
			// 	console.log(getStore().planets);
			// },

			// /* 	getPlanets = () => {
			//     getStore().planets;
			// }  */
			// setPlanets: onePlanet => {
			// 	getStore().planets.push(onePlanet);
			// }
		}
	};
};

export default getState;
