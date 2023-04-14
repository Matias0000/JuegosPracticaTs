import React, { useEffect, useState } from "react";
import { WORDS } from "../utils";

export default function WordPerMinute() {
  // crear reset, penalizacion, avatar,
  
  const [characterCount, setCharacterCount] = useState(0)
  const [buffer, setBuffer] = useState("")
  const [word, setWord] = useState(()=> WORDS[Math.random() * WORDS.length | 0 ])
  const [time,setTime] = useState(0)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()

    // const target = event.target as typeof event.target & {
    //   input:{value:string}
    // }
    if(buffer === word){
      setWord(WORDS[Math.random() * WORDS.length | 0 ])
      setCharacterCount((characterCount)=> characterCount + word.length);
    }
    setBuffer("");
  }

  useEffect(()=>{
    if ( time !== 0){
      const timeOut = setTimeout(() => setTime(time -1 ), 1000)

      return () => clearTimeout(timeOut)
    }

  },[time]);

  
  
  return (
  <div style={{display:"flex",flexDirection:"column",gap:14,textAlign:"center"}}>
    {Boolean(time) && <h1 style={{fontSize:48}} >{word}</h1>}
    <h2>Character typed:{characterCount}</h2>
    <h3>Remaining time:{time}</h3>
    {time !== 0 ? (
      <form action="" onSubmit={handleSubmit}>
      <input type="text"
      autoFocus
      onChange={(event)=> setBuffer(event.target.value)}
      value={buffer}
      
      />
      <button type="submit">Submit</button>
    </form>
    ):(
      <button onClick={() => setTime(20)}>Play</button>
    )}

    </div>
  )
}
