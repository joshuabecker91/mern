import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {

    // empty array of pokemon objects
    const [pokemon, setPokemon] = useState([]);

    //runs immediately after the JSX is rendered
    useEffect(() => {
        console.log("this is the axios version of the assignment")

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            // store the api response in state
            .then(response => {
                console.log(response.data.results);
                setPokemon(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    // empty array as second variable specifies no variables, so useEffect runs only once

            // return () => {
            //     cleanup
            // };
            // clean up only required if we have a continuous resource

    return(
        <div className="Pokelist">
            <h2>Names of Pokemon</h2>
            <ul className="Pokemon">
                {
                pokemon.map((pokemonObj, index) => {
                    return (<li key={index}>{pokemonObj.name}</li>)
                })
                }
            </ul>
        </div>
    );
}

export default Pokemon;