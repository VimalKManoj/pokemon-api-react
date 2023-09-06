import { useEffect, useState } from "react";

function PokemonDetails({ pokename }) {
  const [details, setDetails] = useState(null);
  const [ability,setAbility] =useState(null);
  const [types,setTypes] =useState(null);

  const pokeDetails = async () => {
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
    let response = await fetch(pokeUrl);
    let pokeData = await response.json();
    console.log(pokeData);
    const { id, name, weight, height, sprites, abilities ,types} = pokeData;
    const frontDefaultImage = sprites?.other["official-artwork"].front_default;
    setDetails({ id, name, weight, height, image: frontDefaultImage });
    setAbility(abilities.map(ability =>ability.ability.name))
    setTypes(types.map(type => type.type.name));
    // console.log(ability)
  };
  useEffect(() => {
    if (pokename) {
      pokeDetails();
    }
  }, [pokename]);

  return (
    <>
      {details ? (
        <div className="details-wrapper " key={details.id}>
          <div className="item-selected">
            <p className="name">{details.name}</p>
            <p className="ability">Abilities<br/> <span className="ability-span">{ability.join(', ')}</span></p>
            <p className="ability types">Types<br /> <span className="ability-span">{types.join(', ')}</span></p>
            <p className="ability ">Height<br /> <span className="ability-span">{details.height}</span></p>
            <p className="ability ">Weight<br /> <span className="ability-span">{details.weight}</span></p>
            <img className="detail-image" src={details.image} />
          </div>
        </div>
      ) : (
        <div className="details-wrapper no-item-selected">
          <p className="description">Select Your Pokemon!!</p>
          {/* <img className="background-image" src="./backgroundpoke.png"/> */}
        </div>
      )}
    </>
  );
}
export default PokemonDetails;
