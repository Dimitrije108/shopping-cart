// Ships to be fetched
const featureShips = [
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d9e",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dc2",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d42",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d65",
];

const capitalShips = [
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d9f",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d6d",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dbe",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dd8",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dc3",
];

const capitalShipDetails = [
	"https://www.swapi.tech/api/starships/3",
	"https://www.swapi.tech/api/starships/15",
	"https://www.swapi.tech/api/starships/27",
	"https://www.swapi.tech/api/starships/63",
	"https://www.swapi.tech/api/starships/23",
];

const transportShips = [
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d8f",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dc2",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dc1",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d9d",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d9e",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1ddb",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d8a",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1df8",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d3c",
];

const transportShipDetails = [
	"https://www.swapi.tech/api/starships/49",
	"https://www.swapi.tech/api/starships/40",
	"https://www.swapi.tech/api/starships/43",
	"https://www.swapi.tech/api/starships/5",
	"https://www.swapi.tech/api/starships/22",
	"https://www.swapi.tech/api/starships/31",
	"https://www.swapi.tech/api/starships/17",
	"https://www.swapi.tech/api/starships/58",
	"https://www.swapi.tech/api/starships/47",
];

const starfighters = [
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1db9",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d6c",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1e3c",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d65",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1df3",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1dc0",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1df6",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d42",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1df9",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d67",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d3a",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1d4d",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1e38",
	"https://starwars-databank-server.vercel.app/api/v1/vehicles/6429291f021f17e13fbc1e3e",
];

const starfighterDetails = [
	"https://www.swapi.tech/api/starships/10",
	"https://www.swapi.tech/api/starships/65",
	"https://www.swapi.tech/api/starships/12",
	"https://www.swapi.tech/api/starships/13",
	"https://www.swapi.tech/api/starships/41",
	"https://www.swapi.tech/api/starships/39",
	"https://www.swapi.tech/api/starships/21",
	"https://www.swapi.tech/api/starships/66",
	"https://www.swapi.tech/api/starships/74",
	"https://www.swapi.tech/api/starships/48",
	"https://www.swapi.tech/api/starships/28",
	"https://www.swapi.tech/api/starships/29",
	"https://www.swapi.tech/api/starships/75",
	"https://www.swapi.tech/api/starships/11",
];

const ships = {
	"6429291f021f17e13fbc1d9f": "https://www.swapi.tech/api/starships/3",
	"6429291f021f17e13fbc1d6d": "https://www.swapi.tech/api/starships/15",
	"6429291f021f17e13fbc1dbe": "https://www.swapi.tech/api/starships/27",
	"6429291f021f17e13fbc1dd8": "https://www.swapi.tech/api/starships/63",
	"6429291f021f17e13fbc1dc3": "https://www.swapi.tech/api/starships/23",
	"6429291f021f17e13fbc1d8f": "https://www.swapi.tech/api/starships/49",
	"6429291f021f17e13fbc1dc2": "https://www.swapi.tech/api/starships/40",
	"6429291f021f17e13fbc1dc1": "https://www.swapi.tech/api/starships/43",
	"6429291f021f17e13fbc1d9d": "https://www.swapi.tech/api/starships/5",
	"6429291f021f17e13fbc1d9e": "https://www.swapi.tech/api/starships/22",
	"6429291f021f17e13fbc1ddb": "https://www.swapi.tech/api/starships/31",
	"6429291f021f17e13fbc1d8a": "https://www.swapi.tech/api/starships/17",
	"6429291f021f17e13fbc1df8": "https://www.swapi.tech/api/starships/58",
	"6429291f021f17e13fbc1d3c": "https://www.swapi.tech/api/starships/47",
	"6429291f021f17e13fbc1db9": "https://www.swapi.tech/api/starships/10",
	"6429291f021f17e13fbc1d6c": "https://www.swapi.tech/api/starships/65",
	"6429291f021f17e13fbc1e3c": "https://www.swapi.tech/api/starships/12",
	"6429291f021f17e13fbc1d65": "https://www.swapi.tech/api/starships/13",
	"6429291f021f17e13fbc1df3": "https://www.swapi.tech/api/starships/41",
	"6429291f021f17e13fbc1dc0": "https://www.swapi.tech/api/starships/39",
	"6429291f021f17e13fbc1df6": "https://www.swapi.tech/api/starships/21",
	"6429291f021f17e13fbc1d42": "https://www.swapi.tech/api/starships/66",
	"6429291f021f17e13fbc1df9": "https://www.swapi.tech/api/starships/74",
	"6429291f021f17e13fbc1d67": "https://www.swapi.tech/api/starships/48",
	"6429291f021f17e13fbc1d3a": "https://www.swapi.tech/api/starships/28",
	"6429291f021f17e13fbc1d4d": "https://www.swapi.tech/api/starships/29",
	"6429291f021f17e13fbc1e38": "https://www.swapi.tech/api/starships/75",
	"6429291f021f17e13fbc1e3e": "https://www.swapi.tech/api/starships/11",
}

export { 
	featureShips,
	capitalShips,
	capitalShipDetails,
	transportShips,
	transportShipDetails,
	starfighters,
	starfighterDetails,
	ships,
};