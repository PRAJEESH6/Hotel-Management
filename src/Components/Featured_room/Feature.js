import React, { Component } from 'react'
import './Feature.css'
import Data from '../Data/Data'
import { Link } from 'react-router-dom'
import {FaHotel} from 'react-icons/fa'



const Feature=()=> {

  // Create array for storing Data.js values....
  const RoomNames=[]

// Store data in a particular variable for values display in seprately... 
 const items=Data;
 
 // Create a foreach loop for display values in seprately to section by section...
 items.forEach((item )=>{

// Each and ever data can stored in this array for using array push() method...
  RoomNames.push(item.fields.name);})

// All single delux values are stored in Single_Delux variable to using array slice() method...
  const Singleroom_Delux=items.slice(0,4);

// All single delux values are stored in Double_Delux variable to using array slice() method...  
  const Double_Delux=items.slice(4,8)
  

// All single delux values are stored in Family_Delux variable to using array slice() method...  
  const Family_Delux=items.slice(8,13)

 // console.log("hoop",Family_Delux)
 


 
  return (
    <div>
        <div id='whole'>
    
    
   <h1 id='future'>Fearured Rooms</h1>


{/* /**Create a 3 boxes and display single, double, family bedrooms... */ }

   <div className='boxess'>
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='blob'>
           <path fill="#6c5ce7"  d="M66.6,-16.6C76.2,7.7,66.7,43.2,46.3,56.3C25.9,69.4,-5.4,60,-29.8,42.1C-54.1,24.1,-71.4,-2.4,-65.3,-22C-59.2,-41.6,-29.6,-54.3,-0.5,-54.2C28.5,-54,57.1,-40.9,66.6,-16.6Z" transform="translate(100 100)" />
       </svg>
   <div className='box1'>
         <div className='card p-2'>
          <img className='card-img -top' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg' alt='pic'/>
          <Link to='/singledelux' className='btn btn-warning' id='ooot'>Features</Link>
         
          <div className='card-title' id='noo' >{RoomNames[3]}  <FaHotel/></div>
         </div>
   </div>


       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='blobo'>
           <path fill="#6c5ce7"  d="M66.6,-16.6C76.2,7.7,66.7,43.2,46.3,56.3C25.9,69.4,-5.4,60,-29.8,42.1C-54.1,24.1,-71.4,-2.4,-65.3,-22C-59.2,-41.6,-29.6,-54.3,-0.5,-54.2C28.5,-54,57.1,-40.9,66.6,-16.6Z" transform="translate(100 100)" />
       </svg>
   <div className='box2'>
   <div className='card p-2'>
          <img className='card-img -top' src='https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.webp?b=1&s=170667a&w=0&k=20&c=I6CS04DMvxKlhD29uLfWWOb4SghqKeMl8pr1rSi0RIU=' alt='pic'/>
           
           <Link to='/doubledelux' className='btn btn-warning' id='ooot'>Features</Link>
          
          <div className='card-title' id='noo'>{RoomNames[7]}  <FaHotel/></div>
          </div>
   </div>


       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='blobp'>
           <path fill="#6c5ce7"  d="M66.6,-16.6C76.2,7.7,66.7,43.2,46.3,56.3C25.9,69.4,-5.4,60,-29.8,42.1C-54.1,24.1,-71.4,-2.4,-65.3,-22C-59.2,-41.6,-29.6,-54.3,-0.5,-54.2C28.5,-54,57.1,-40.9,66.6,-16.6Z" transform="translate(100 100)" />
       </svg>
   <div className='box3'>
   <div className='card p-2'>
          <img className='card-img -top' src='https://c4.wallpaperflare.com/wallpaper/293/206/563/maldives-water-villa-travel-bed-best-hotels-of-2015-wallpaper-preview.jpg' alt='pic'/>
         
        <Link to='/familydelux' className='btn btn-warning' id='ooot'>Features</Link>

          <div className='card-title' id='noo'>{RoomNames[11]}  <FaHotel/></div>
          </div>
   </div>
    </div>
    </div>
    </div>
      
  )
}
    
    export default Feature
    
  
   
  
    

  



    
  




       {/* <Language.Consumer>{(me)=>{

       return <h1>I  am first saying is {me.name} </h1>
         
      }}</Language.Consumer> */}
