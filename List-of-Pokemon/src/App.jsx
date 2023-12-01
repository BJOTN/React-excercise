import { useState } from "react"

export default function App(){
    const [pokemonId, setPokemonId] =useState(null)
    const [pokemonList, setPokemonList] =useState([])
    const handleClick = async ()=>{
        try {
            if(pokemonList.length < 10){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            if(response.ok){
                const data =  await response.json();
                if(!pokemonList.find(pokemon=>pokemon.id === data.id)){
                setPokemonList((prev)=>[...prev,data]);
                }else{
                    alert('You already searched this pokemon')
                }
            }
        }else{
            alert('You have search already 10 pokemons')
        }
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <div>
            <label htmlFor="pokemon">Pokemon Id:</label>
            <input name="pokemon" type="number" placeholder="write a number" onChange={(e)=>{return setPokemonId(e.target.value)}} value={pokemonId}/>
            <button onClick={handleClick}>Search Pokemon</button>
            <ul>
                {pokemonList.map((pokemon)=>{ return <li>{pokemon.name}</li>})}
            </ul>
        </div>
    )
}