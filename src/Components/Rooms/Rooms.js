import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Rooms.css'
import Singleroom from '../Single_delux/Singleroom'
import Doubleroom from '../Double_Delux/Doubleroom'
import Familyroom from '../Family_Delux/Familyroom'


function Rooms() {

     const [selected, setselected]= useState('all')
     function Moved(e){
      
      setselected(e.target.value)
       
     }

  return (
    <>
    <div id='img'>
       <img src='./img/roo.jpg' id='img'/>
       <div id='bed'>
        <h1>Our Rooms</h1>
        <div id='line'></div>
        <Link to='/' className='btn btn-info'>Return Home</Link>
       </div>
    </div>
          
          <h1>Search Luxurious Rooms</h1>

    <div id='options'>

     <div id='decuple'>
      <h4>Room Type</h4>
      <select className='form-select form-select-lg' value={selected} onChange={Moved}>
      <option>all</option>
      <option value='Singleroom'>Single type Room</option>
      <option value='Doubleroom'>Double type Room</option>
      <option value='Familyroom'>Family type Room</option>
      </select>
</div>

<div id='eive'>
      <h4>Guests</h4>
      <select >
      <option>All</option>
      <option>01</option>
      <option>02</option>
      <option>04</option>
      </select>
</div>

<div id='tie'>
      <h4>Room Price $ 400</h4>
      <input type="range" min="1" max="500" value="100"/>
</div>

<div id='lily'>
      <h4>Room Size</h4>
      <input type='number' min='1' max='50'></input>
      <input type='number' min='1' max='50'></input>
</div>

    <div id='sophia'>
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="radio" class="btn-check" name="btnradio" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btncheck1">Breakfasts</label>

        <div className='btn-group'>
          <input  type='radio' className='btn-check' autoComplete='off'/>
          <label className='btn btn-primary' for='btncheck2'>Pet's Allow</label>
        </div>
      
       </div>
     
      
</div>
     <h1>Featured Single Rooms</h1>
     <Singleroom />
     <h1>Featured Double Rooms</h1>
     <Doubleroom/>
     <h1>Featured Family Rooms</h1>
     <Familyroom/>

    </div>
    </>
  )
}

export default Rooms