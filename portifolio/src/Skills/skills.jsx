import { useState } from 'react'
import './skills.css'

function Skills() {
 



  return (
    <>
    <section className='skills' >
        <h1>Minhas Especialidades</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae atque reprehenderit illo repellat ad? Saepe, beatae iste illo illum animi in voluptatibus molestiae cum doloremque itaque at iure, placeat dolorum!</p>

        <section className='cards'>
            <div className="card">
                <h1>React.Js</h1>
                <ul>
                    <li>Proos</li>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useMemo</li>
                    <li>useCallback</li>
                    <li>LocalStorage</li>
                    <li>Renderização Condicional</li>
                    <li>Componentes de class</li>
                    
                </ul>
            </div>
            <div className="card">
                <h1>JavsScript</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur distinctio perspiciatis aliquid minima cupiditate excepturi illum quaerat expedita sequi, velit, est sed quia omnis impedit architecto vero fuga laborum?</p>
            </div>
            <div className="card">
                <h1>Css</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur distinctio perspiciatis aliquid minima cupiditate excepturi illum quaerat expedita sequi, velit, est sed quia omnis impedit architecto vero fuga laborum?</p>
            </div>
        </section>
    </section>
       

    

      
    </>
  )
}

export default Skills
