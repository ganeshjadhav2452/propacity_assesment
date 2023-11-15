import React, { useEffect, useState, useContext } from 'react'
import '../../styles/Navbar.css'
import PageContent from '../PageContent';
import { resources } from '../../constants';
import { faFolder, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import NavbarContext from '../../context/NavbarContext/NavbarContext';
import ContentCategoryContext from '../../context/ContentCategoryContext';



const Navbar = () => {
    const { films, planets, peoples, species, vehicles, starships } = useContext(NavbarContext)
    const { setCurrentContent } = useContext(ContentCategoryContext)

    console.log(films)

    const [isActive, setIsActive] = useState({});

    const setIsActiveHandler = (index) => {
        setIsActive({
            ...isActive,
            [index]: !isActive[index]
        });
    }

    const filmClickHandler = (films) => {
        setCurrentContent(films)
    }
    const peopleClickHandler = (people) => {
        setCurrentContent(people)
    }
    const starshipsClickHandler = (starships) => {
        setCurrentContent(starships)
    }
    const vehiclesClickHandler = (vehicles) => {
        setCurrentContent(vehicles)
    }
    const planetClickHandler = (planet) => {
        setCurrentContent(planet)
    }
    const speciesClickHandler = (species) => {
        setCurrentContent(species)
    }

    const handleSidebarToggle = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <div>
                {/* Start vertical navbar */}
                <header id="header">
                    <div className="vertical-nav bg-white" id="sidebar">
                        <div className="py-4 px-3 mb-2 mt-2 bg-light">
                            <div className="align-items-center" id="half">
                                <a
                                    className="navbar-brand text-center"
                                    href="http://Commoncentsparty.com"
                                >
                                    <h1>Star Wars Collection</h1>
                                </a>
                            </div>
                        </div>
                        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-3 mb-2 mt-3">
                            Main
                        </p>
                        <ul className="nav flex-column bg-white mb-0 ml-2">
                            {resources.map((resource, index) => {
                                return (
                                    <li className="nav-item nav-link text-dark font-italic bg-light">
                                        {/* displaying parent list  */}
                                        <span onClick={() => setIsActiveHandler(index)}>
                                            <FontAwesomeIcon
                                                icon={faFolder}
                                                className="mr-3 text-primary"
                                            />
                                            {resource}
                                        </span>
                                        {/* displaying child list  */}
                                        {isActive[index] && (
                                            <ul className="child-items nav-link text-dark font-italic bg-light">
                                                {/* Films */}
                                                {resource === "Films" &&
                                                    films.map((film) => (
                                                        <NavLink
                                                            onClick={() => filmClickHandler(films)}
                                                            key={film.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>

                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />
                                                                {film.title}
                                                            </li>
                                                        </NavLink>
                                                    ))}

                                                {/* Planets */}
                                                {resource === "Planet" &&
                                                    planets.map((planet) => (
                                                        <NavLink
                                                            onClick={() => planetClickHandler(planets)}
                                                            key={planet.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />
                                                                {planet.name}
                                                            </li>
                                                        </NavLink>
                                                    ))}
                                                {/* Peoples */}
                                                {resource === "People" &&
                                                    peoples.map((people) => (
                                                        <NavLink
                                                            onClick={() => peopleClickHandler(peoples)}
                                                            key={people.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />{" "}
                                                                {people.name}
                                                            </li>
                                                        </NavLink>
                                                    ))}
                                                {/* Planets */}
                                                {resource === "Species" &&
                                                    species.map((spe) => (
                                                        <NavLink
                                                            onClick={() => speciesClickHandler(species)}
                                                            key={spe.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />
                                                                {spe.name}
                                                            </li>
                                                        </NavLink>
                                                    ))}
                                                {/* Planets */}
                                                {resource === "Starships" &&
                                                    starships.map((Starships) => (
                                                        <NavLink
                                                            onClick={() => starshipsClickHandler(starships)}
                                                            key={Starships.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />{" "}
                                                                {Starships.name}
                                                            </li>
                                                        </NavLink>
                                                    ))}
                                                {/* Planets */}
                                                {resource === "Vehicle" &&
                                                    vehicles.map((Vehicles) => (
                                                        <NavLink
                                                            onClick={() => vehiclesClickHandler(vehicles)}
                                                            key={Vehicles.id}
                                                            href="#"
                                                            className="nav-link text-dark font-italic bg-light"
                                                        >
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faAnglesRight}
                                                                    className="mr-3 text-primary"
                                                                />{" "}
                                                                {Vehicles.name}
                                                            </li>
                                                        </NavLink>
                                                    ))}

                                                {/* Other resources... */}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </header>
                <PageContent />
            </div>
        </>
    );
}

export default Navbar