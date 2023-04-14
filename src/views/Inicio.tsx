import React from 'react'

export default function Inicio() {
  return (
    <div style={{textAlign:'center'}}>
        Bienvenidos a la pagina de juegos
        <ul style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(238px, 1fr)'}}>
            <li><a href="/memotest">Memotest</a></li>
            <li><a href="/pokemon">Pokemon</a></li>
            <li><a href="/wpm">WordPerMinute</a></li>
        </ul>      

    </div>
  )
}
