const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites : [],
			likes: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				// 1. Verifico si tengo los usersLocal en el localStorage
				//   1.1. Si están, actualizo "estado" mediante setUsers() desde los datos del "localStorage"
				//   1.2. Sino no están, realizo el fetch, guardo datos en el "estado" y en el "localStore"
				//     1.2.1. Realizo el fetch()
				//     1.2.2. Almaceno data en el "estado"
				//     1.2.3. Almaceno data en "localStorage"
				if (localStorage.getItem("charactersLocal") === null) {  // 1.
				  const response = await fetch("https://www.swapi.tech/api/people/")  // 1.2.1
				  if (response.ok) {
					const data = await response.json()

					localStorage.setItem('charactersLocal', JSON.stringify(data))  // 1.2.3
				  } else {
					console.log("error: ", response.status, response.statusText);
				  }
				}},
				
				getPlanets: async () => {
					if (localStorage.getItem("planetsLocal") === null) {
						try {
							const response = await fetch("https://www.swapi.tech/api/planets/");
							if (response.ok) {
								const data = await response.json();
								localStorage.setItem("planetsLocal", JSON.stringify(data));
							} else {
								console.log("Error fetching planets:", response.status, response.statusText);
							}
						} catch (error) {
							console.log("Error fetching planets:", error);
						}
					}
				},

				getStarships: async () => {
					if (localStorage.getItem("starshipsLocal") === null) {
						try {
							const response = await fetch("https://www.swapi.tech/api/starships/");
							if (response.ok) {
								const data = await response.json();
								localStorage.setItem("starshipsLocal", JSON.stringify(data));
							} else {
								console.log("Error fetching starships:", response.status, response.statusText);
							}
						} catch (error) {
							console.log("Error fetching starships:", error);
						}
					}
				},
				addCardToLikes: cardName => {
					if (!cardName || cardName.trim() === "") {
					  // Si el nombre de la tarjeta está vacío o es nulo, no hacemos nada
					  return;
					}
					
					const store = getStore();
					const updatedLikes = [...store.likes, cardName];
					console.log("Updated Likes:", updatedLikes);
					setStore({ likes: updatedLikes });
				  },

				  removeCardFromLikes: cardName => {
					const store = getStore();
					const updatedLikes = store.likes.filter(name => name !== cardName);
					setStore({ likes: updatedLikes });
				  },
			}
		};
	};
	
	export default getState;