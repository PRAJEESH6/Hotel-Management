import React, { Component } from 'react'
import './Service.css'

import { FaBeer, FaCocktail, FaHiking ,FaShuttleVan } from "react-icons/fa";

export default class Service extends Component {

   
  render() {
    return (
        <>

           <h1 id='ser'>Our Service's </h1>

           <div className='container'>
               <div id='cate'>
               <span id='ictails'><FaCocktail/></span>
               <span id='ictails'><FaHiking/></span>
               <span id='ictails'><FaShuttleVan/></span>
               <span id='ictails'><FaBeer/></span>
               </div>
<div id='para'>
               <p>Providing food and drink services to guests in hotels and restaurants, showing attentiveness, and understanding of their needs and expectations.For a memorable meal the quality of the service is something that guests often remember as much as the food and drink served.

                   That means that restaurant servers must show extensive knowledge of all types of cuisine and dishes, especially the ingredients and cooking style of the dishes on an a la carte menu. They will need to know and understand the methods of preparation and serving, along with the tools used.

                   Regardless of whether it is a self-service cafeteria or a five star hotel restaurant good manners, a smart appearance, and impeccable personal hygiene are equally essential.</p>
</div>
           </div>
            <svg id='path' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="darkgoldenrod" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,288C384,299,480,277,576,240C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </>
    )
            }
}
