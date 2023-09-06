import { useEffect, useState } from "react";

function Card({ name, index, setPokeName }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1
      }.png`
    );
  }, [index]);
  return (
    <div className="card" onClick={() => setPokeName(name)}>
      <p className="pokemon-name">{name}</p>
      {image && <img src={image} className="pokemon-image" alt=""/>}
    </div>
  );
}

export default Card;
