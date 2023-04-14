import { useEffect, useState } from "react";
import { IMAGES } from "../asset/img";

const FLATMAP = IMAGES.flatMap((image)=>[`a|${image}`,`b|${image}`]).sort( () => Math.random() - 0.5)

export default function Memotest() {

  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelect] = useState<string[]>([])

  useEffect(() => {
    if(selected.length === 2){
      if(selected[0].split("|")[1] === selected[1].split("|")[1] ){
        setGuessed(guessed => guessed.concat(selected))
      }
      setTimeout(()=> setSelect([]),1000)   
    }
  }, [selected])

  useEffect(()=>{
    if(guessed.length === FLATMAP.length){
      alert("You Win 🎉");
      location.reload();
    }
  },[guessed])
  

  console.log({selected,guessed});
  
  return (
    <ul className="">
      {/* <h1 className="encabezado"> Memo Test </h1> */}
      {FLATMAP.map((image, index) => {
        const [,url] = image.split("|")
        return (
          <li key={image}
          onClick={() => selected.length < 2 && setSelect(selected => selected.concat(image)) }>
          {selected.includes(image) || guessed.includes(image) ? (
            <img src={url} alt="icon" />
            ) : (
              <img 
              key={url} 
              src="https://icongr.am/clarity/search.svg?size=128&color=currentColor" 
              alt="icon" />
            )}
        </li>
        ) 
      })}
    </ul>
  );
}
