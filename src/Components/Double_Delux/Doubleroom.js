import React from 'react'
import './Doubleroom.css'
import {Link} from 'react-router-dom'

function Doubleroom() {

  //This is a array section to store our room values...

const economy=[
  
   { name: "double economy"},
   { slug: "double-economy"},
    {type: "double"},
   { price: 200},
    {size: 300},
   { capacity: 2},
   { pets: false},
   { breakfast: false},
    {featured: false},
   { description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds"]
    
}]

const basic=[

    {name: "double basic"},
    {slug: "double-basic"},
    {type: "double"},
   { price: 250},
   { size: 350},
   { capacity: 2},
   { pets: false},
   { breakfast: false},
   { featured: false},
   { description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds"]
}]
    
 const standard=[
   { name: "double standard"},
   { slug: "double-standard"},
   { type: "double"},
   { price: 300},
   { size: 400},
   { capacity: 2},
   { pets: true},
    {breakfast: false},
   { featured: false},
   { description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds"
    ]
}]
    
 const deluxe=[
  {  name: "double deluxe"},
  {  slug: "double-deluxe"},
  {  type: "double"},
  {  price: 400},
  {  size: 500},
  {  capacity: 2},
  {  pets: true},
  {  breakfast: true},
  {  featured: true},
   { description:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds"]
}]

{/* //*********************************************************************************************************** */ }

// This is the object creation part...to call our data's...

const mayil=economy[0];
const slug=economy[1];
const type=economy[2];
const price=economy[3];
const size=economy[4];
const capacity=economy[5];
const pets=economy[6];
const breakfast=economy[7];
const para=economy[9];
const extra=economy[10];


const one=basic[0];
const two=basic[1];
const three=basic[2];
const four=basic[3];
const five=basic[4];
const six=basic[5];
const seven=basic[6];
const eight=basic[7];
const nine=basic[9];
const ten=basic[10];
   

const singlee=standard[0];
const double=standard[1];
const thirple=standard[2];
const quardple=standard[3];
const quentiple=standard[4];
const sixtple=standard[5];
const octiple=standard[6];
const eightple=standard[7];
const noneple=standard[9];
const dacuple=standard[10];

const sone=deluxe[0];
  const stwo=deluxe[1]
  const sthree=deluxe[2];
  const sfour=deluxe[3];
  const sfive=deluxe[4];
  const ssix=deluxe[5];
  const sseven=deluxe[6];
  const seight=deluxe[7];
  const snine=deluxe[9];
  const sten=deluxe[10];

 {/* //*********************************************************************************************************** */ }
 

  return (
    
    <div>
    <div id='ghj'>
    <Link to='/' className='btn btn-warning'  >Back To Home</Link>
    </div>

    <div className='col-10 mt-3 mx-5' >

{/* Single_Economy card was created using bootstrap cards... */}

<div className='card ' >
<div className='card-img-top' >
  <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg' alt='pic'/>
</div>

<div className='card-body'>
  <div className='card-title '>NAME : {mayil.name}</div>
  <span class="list-group-item">SLUG : {slug.slug}</span> 
  <span class="list-group-item">TYPE : {type.type}</span>
  <span class="list-group-item">PRICE : {price.price}</span>
  <span class="list-group-item">SIZE : {size.size}</span>
  <span class="list-group-item">CAPACITY : {capacity.capacity}</span>
  <span class="list-group-item">PETS PERMISSION : {pets.pets}</span>
  <span class="list-group-item">BREAKFAST : {breakfast.breakfast}</span>
  <p>Little thing..{para.description}hii</p>
  <span class="list-group-item">EXTRAS : </span>
</div>
</div>
</div>



{/* ******************************************Single_Economy Overed *************************************       */}

<div className='col-10 mx-5 mt-3'>
       
{/* Single_Basic card was created using bootstrap cards... */}

<div className='card'>
<div className='card-img-top'>
 <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg' alt='pic'/>        </div>
<div className='card-body'>

<div className='card-title '>NAME : {one.name}</div> 
<span class="list-group-item">SLUG : {two.slug}</span> 
<span class="list-group-item">TYPE : {three.type}</span>
 <span class="list-group-item">PRICE : {four.price}</span>
 <span class="list-group-item">SIZE : {five.size}</span>
 <span class="list-group-item">CAPACITY : {six.capacity}</span>
 <span class="list-group-item">PETS PERMISSION : {seven.pets}</span>
 <span class="list-group-item">BREAKFAST : {eight.breakfast}</span>
 <p>Little thing..{nine.description}hii</p>
 <span class="list-group-item">EXTRAS : </span>

 
</div>
</div>
</div>

{/* ******************************************Single_Delux Overed *************************************       */}     

     <div className='col-10 mx-5 mt-3'>

     {/* Single_Standard card was created using bootstrap cards... */}

      <div className='card'>
        <div className='card-img-top'>
          <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg'  alt='pic'/>
        </div>
        <div className='card-body'>
             
        <div className='card-title '>NAME : {singlee.name}</div>
          <span class="list-group-item">SLUG : {double.slug}</span> 
          <span class="list-group-item">TYPE : {thirple.type}</span>
          <span class="list-group-item">PRICE : {quardple.price}</span>
          <span class="list-group-item">SIZE : {quentiple.size}</span>
          <span class="list-group-item">CAPACITY : {sixtple.capacity}</span>
          <span class="list-group-item">PETS PERMISSION : {octiple.pets}</span>
          <span class="list-group-item">BREAKFAST : {eightple.breakfast}</span>
          <p>Little thing..{noneple.description}hii</p>
          <span class="list-group-item">EXTRAS : </span>

        </div>
        </div>
      </div>

 {/* //*********************************************************************************************************** */ }
     

      <div className='col-10 mx-5 mt-3'>

{/* Single_Delux card was created using bootstrap cards... */}

<div className='card'>
 <div className='card-img-top'>
   <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg ' alt='pic'/>
 </div>
 <div className='card-body'>
  
 <div className='card-title '>NAME : {sone.name}</div>
   <span class="list-group-item">SLUG : {stwo.slug}</span> 
   <span class="list-group-item">TYPE : {sthree.type}</span>
   <span class="list-group-item">PRICE : {sfour.price}</span>
   <span class="list-group-item">SIZE : {sfive.size}</span>
   <span class="list-group-item">CAPACITY : {ssix.capacity}</span>
   <span class="list-group-item">PETS PERMISSION : {sseven.pets}</span>
   <span class="list-group-item">BREAKFAST : {seight.breakfast}</span>
   <p>Little thing..{snine.description}hii</p>
   <span class="list-group-item">EXTRAS : </span>

 </div>
 </div>
</div>
    
   </div>
  )
}

export default Doubleroom