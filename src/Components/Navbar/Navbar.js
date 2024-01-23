import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  
  return (
    <div>

<nav className='navbar navbar-expand-lg ' id='heep'>

  <div class="container-fluid">
   
    <div className='navbar-brand' id='bee'><b>B</b>EACH <b>R</b>ESSORT'S</div>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#menus"  aria-controls="basic-navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div className='collapse navbar-collapse'  id='menus' >
        <ul className= "navbar-nav ms-auto">
           <li className='nav-item'>
            <Link to="/" className='nav-link' id='thor' ><b id='op'>H</b>ome</Link>
           </li>

           <li className='nav-item'>
            <Link to="/rooms" className='nav-link' id='thors'><b id='op'>R</b>ooms</Link>
           </li>
        </ul>

    </div>
    </div>
   
</nav>






    </div>
  )
}
