import React, { useState } from "react";
import { POKEMONS } from "../utils";

const MATCH = Math.floor(Math.random() * POKEMONS.length);

//con este type me saco logico aplicada abajo
type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, setHasWon] = useState(false);

  // function handleSubmit(event:React.FormEvent<HTMLFormElement>){
  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    // const {pokemon} = event.target as typeof event.target & {
    //   pokemon:{value:string}
    // };
    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLocaleLowerCase() === POKEMONS[MATCH]) {
      setHasWon(true);
      alert("You Won!🎉");
    }else{
    alert("Wrog answer!❌")}
  }
  return (
    <div style={{textAlign:'center'}}>
      <img
        width={512}
        height={512}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        alt=""
      />
      {hasWon ? (
        <button style={{width:"100%"}} onClick={()=> location.reload()}>Play again</button>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <input autoFocus name="pokemon" type="text" />
          <button style={{margin:"20px",}} type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
