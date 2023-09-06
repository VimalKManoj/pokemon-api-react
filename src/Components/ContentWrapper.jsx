import { useState } from "react"
import PokemonDetails from "./PokemonDetails"
import PokemonList from "./PokemonList"

const ContentWrapper =(({search}) => {
    const [pokename,setPokeName] =useState('')

   
return (
    <div className="main-wrapper">
    <PokemonList setPokeName={setPokeName} search={search} />
    <PokemonDetails pokename={pokename}/>
    </div>
)
}) 

export default ContentWrapper