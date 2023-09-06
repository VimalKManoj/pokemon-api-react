import Card from "./Card";
import { useEffect, useState } from "react";

function PokemonList({ setPokeName ,search }) {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(20);
  let url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemons = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results);
    } catch {}
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const handleClick = () => {
    setCount(count + 20);
    console.log(count);
  };

  useEffect(() => {
    const nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=20`;
    console.log(nextUrl);
    const getPokemonPage = async () => {
      try {
        const response = await fetch(nextUrl);
        const data = await response.json();
        setPokemon((prevPokemon) => [...prevPokemon, ...data.results]);
        console.log(pokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPokemonPage();
  }, [count]);

  return (
    <>
      <div className="pokemon-wrapper">
        {
        !pokemon?
        <div>Loading...</div>
        :pokemon.length===0?
        <div>No Pokemon Found!!</div>
        :pokemon
        .map((pokemon, index) => {
          return (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              index={index}
              setPokeName={setPokeName}
            />
          );
        })}
        <div className="btn-container" onClick={handleClick}>
          <button className="btn-load">Load More</button>
        </div>
        <img src="./pokeball2.png" className="pokeball1" alt="" />
      </div>
    </>
  );
}
export default PokemonList;
