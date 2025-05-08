import '../styling/masterCss.css'   
import { data, useParams } from 'react-router-dom';
import trainerData from '../trainerModel.json'
import { useState, useEffect } from 'react';


         const fetchData = (pokemon, setPokemonData) =>
            {
                
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(response => response.json())
                .then(pokemonData => {console.log(pokemonData);
                    setPokemonData(pokemonData);
                })
                .catch(error => console.log(error));
            }

            export const PokemonCard = ({pokemon}) => {
                const [pokemonData, setPokemonData] = useState(null);

                useEffect(()=> {
                   fetchData(pokemon, setPokemonData);
                }, [])

                return (
                     pokemonData === null ?
                     <></>
                     :
                     <>
                          <h3>{pokemonData.name}</h3>
                          <img src={pokemonData.sprites.front_default}/>
                     </>
                );
            }
