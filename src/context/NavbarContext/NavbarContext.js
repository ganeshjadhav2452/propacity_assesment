
import { useState, useEffect } from "react";
import { createContext } from "react";
import { fetchInititalDataForNavbar } from "../../helpers/apiCallHelper";


// creating context
const NavbarContext = createContext()

const filmApi = 'https://swapi.dev/api/films/';
const peopleApi = 'https://swapi.dev/api/people/';
const planetsApi = 'https://swapi.dev/api/planets/';
const starshipsApi = 'https://swapi.dev/api/starships/';
const vehiclesApi = 'https://swapi.dev/api/vehicles/';
const speciesApi = 'https://swapi.dev/api/species/';

// creating context provider
const NavbarContextProvider = ({ children }) => {
    const [films, setFilms] = useState([])
    const [peoples, setPeoples] = useState([])
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [starships, setStarships] = useState([])
    const [species, setSpecies] = useState([])


    const filmsApiCallHandler = async () => {
        try {
            const filmResponse = await fetchInititalDataForNavbar(filmApi)
            setFilms(filmResponse)
        } catch (error) {
            console.log(error)
        }
    }
    const peopleApiCallHandler = async () => {
        try {
            const peopleResponse = await fetchInititalDataForNavbar(peopleApi)
            setPeoples(peopleResponse)
        } catch (error) {
            console.log(error)
        }
    }
    const planetsApiCallHandler = async () => {
        try {
            const planetsResponse = await fetchInititalDataForNavbar(planetsApi)
            setPlanets(planetsResponse)
        } catch (error) {
            console.log(error)
        }
    }
    const starshipsApiCallHandler = async () => {
        try {
            const starshipsResponse = await fetchInititalDataForNavbar(starshipsApi)
            setStarships(starshipsResponse)
        } catch (error) {
            console.log(error)
        }
    }
    const speciesApiCallHandler = async () => {
        try {
            const speciesResponse = await fetchInititalDataForNavbar(speciesApi)
            setSpecies(speciesResponse)
        } catch (error) {
            console.log(error)
        }
    }
    const vehiclesApiCallHandler = async () => {
        try {
            const vehiclesResponse = await fetchInititalDataForNavbar(vehiclesApi)
            setVehicles(vehiclesResponse)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        filmsApiCallHandler()
        peopleApiCallHandler()
        planetsApiCallHandler()
        vehiclesApiCallHandler()
        speciesApiCallHandler()
        starshipsApiCallHandler()
    }, [])

    return (
        <NavbarContext.Provider value={{ films, planets, peoples, species, vehicles, starships }}>{children}</NavbarContext.Provider>
    )
}
export {
    NavbarContextProvider
}
export default NavbarContext;


