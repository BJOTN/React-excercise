import { useState } from "react"

export default function Counter(){
    const[counter,setConter]=useState(0)
    const[randomCharacter, setRandomCharacte] = useState(null)
    
    const handleGenerator = async()=>{
        try {
            const randomNum = Math.floor(Math.random()*100)+1;
            const response = await fetch(`https://swapi.dev/api/people/${randomNum}`)
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setConter((counter)=>counter +1);
                setRandomCharacte(data);
            }else{
                throw new Error('Error')
            }
        } catch (error) {
            console.log('error')
        }
    }
    return(
        <>
        <h1>Star wars counter</h1>
        <p>{counter}</p>
        <button onClick={handleGenerator}>Generate character</button>
        {randomCharacter && (
        <div>
          <h2>Personaggio Casuale:</h2>
          <p>Nome: {randomCharacter.name}</p>
          <p>Altezza: {randomCharacter.height} cm</p>
          <p>Peso: {randomCharacter.mass} kg</p>
        </div>)}
        </>
    )
}