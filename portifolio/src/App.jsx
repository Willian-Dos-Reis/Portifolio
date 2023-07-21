import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
 
  const [nome,setNome]=useState(20)



  return (
    <>
    <h1>digite uma palavra</h1>
   <button
   onClick={(e)=>setNome(nome+10)}
   >10</button>
    <p>{props.nome}</p>
    <p>{nome}</p>
      
    </>
  )
}

export default App
