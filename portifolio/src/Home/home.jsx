import { useState } from 'react'
import './style.css'
import Instagram from '../../img/instagram.png'
import GitHub from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'

function Home() {
 



  return (
    <>
    <header>
        <ul className='top' >
            <li><a href="">Home</a></li>
            <li><a href="">About-Me</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            <button>Contact</button>
        </ul>
    </header>

    <main>
      <section className='home'>
         <section>
           <ul className='left' >
            <li><a href="#"><img src={Instagram} alt=""/></a></li>
            <li><a href="#"><img src={GitHub} alt=""/></a></li>
            <li><a href="#"><img src={Linkedin} alt=""/></a></li>
           </ul>
        </section>

         <section className='center' >
             <h1>I'M Willian Reis</h1>
           <p>Web Developer</p>
  
      </section>
      </section>

      
    

    </main>
    

      
    </>
  )
}

export default Home
