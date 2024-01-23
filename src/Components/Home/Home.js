import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Service from '../Service/Service'
import Feature from '../Featured_room/Feature'


function Home() {
  return (
    <div id='walls'>
   
    <video  height='603' width='100%' autoPlay loop muted className='back' id='hooo'>
      <source src='./video/Maldives.mp4'  type='video/mp4'/>
    </video>
    <div id='lose'>
      <div id='male'>NACO</div>
      <h1 id='karkil'><i>N</i>aco <i>L</i>uxurious <i>R</i>ooms</h1>
      <div></div>
      <h4 id='pull'>Delux Rooms Starting At $299</h4>
      <Link to='/rooms' className='btn'>Our Rooms</Link>
    </div>
    <Service/>
   <Feature/>
    </div>
  )
}

export default Home