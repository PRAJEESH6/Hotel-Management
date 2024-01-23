import React from 'react'
import './Familyroom.css'
import {Link} from 'react-router-dom'


function Familyroom() {

// This array section can contain 5 varity rooms details...
  const single=[
     { name: "family economy"},
     { slug: "family-economy"},
     { type: "family"},
     { price: 300},
     { size: 500},
     { capacity: 3},
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
        "Comfortable beds"
      ],
    }]
    
   const double=[
     { name: "family basic"},
     { slug: "family-basic"},
     { type: "family"},
     { price: 350},
     { size: 550},
     { capacity: 4},
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
        "Comfortable beds"
      ],
    }]
     
 const thriple=[
     { name: "family standard"},
     { slug: "family-standard"},
     { type: "family"},
     { price: 400},
     { size: 600},
      {capacity: 5},
     { pets: true},
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
        "Comfortable beds"
      ],
    }]
      
  const quardple=[
      {name: "family deluxe"},
      {slug: "family-deluxe"},
      {type: "family"},
     { price: 500},
      {size: 700},
      {capacity: 6},
     { pets: true},
     { breakfast: true},
     { featured: true},
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
      ],
    }]
      
  const quintple=[
      {name: "presidential"},
      {slug: "presidential-" },
      {type: "presidential"},
      {price: 600},
      {size: 1000},
      {capacity: 10},
      {pets: true},
      {breakfast: true},
      {featured: true},
      {description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
    }]

//******************************************Array part is Overed***************************************************** */

    //This is a object creation methods to each and every arrays...
        
const mayil=single[0];
const slug=single[1];
const type=single[2];
const price=single[3];
const size=single[4];
const capacity=single[5];
const pets=single[6];
const breakfast=single[7];
const para=single[9];
const extra=single[10];


const one=double[0];
const two=double[1];
const three=double[2];
const four=double[3];
const five=double[4];
const six=double[5];
const seven=double[6];
const eight=double[7];
const nine=double[9];
const ten=double[10];


const singlee=thriple[0];
const doublee=thriple[1];
const thirple=thriple[2];
const quardplee=thriple[3];
const quentiple=thriple[4];
const sixtple=thriple[5];
const octiple=thriple[6];
const eightple=thriple[7];
const noneple=thriple[9];
const dacuple=thriple[10];

const sone=quardple[0];
const stwo=quardple[1];
const sthree=quardple[2];
const sfour=quardple[3];
const sfive=quardple[4];
const ssix=quardple[5];
const sseven=quardple[6];
const seight=quardple[7];
const snine=quardple[9];
const sten=quardple[10];


const sonee=quintple[0];
const stwoe=quintple[1];
const sthreee=quintple[2];
const sfoure=quintple[3];
const sfivee=quintple[4];
const ssixe=quintple[5];
const ssevene=quintple[6];
const seighte=quintple[7];
const sninee=quintple[9];
const stene=quintple[10];
    
//****************************************Object creation part is Overed*********************************************** */

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

{/* //*********************************************************************************************************** */ }

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

{/* //*********************************************************************************************************** */ }

        <div className='col-10 mx-5 mt-3'>

{/* Single_Standard card was created using bootstrap cards... */}

 <div className='card'>
   <div className='card-img-top'>
     <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg'  alt='pic'/>
   </div>
   <div className='card-body'>
        
   <div className='card-title '>NAME : {singlee.name}</div>
     <span class="list-group-item">SLUG : {doublee.slug}</span> 
     <span class="list-group-item">TYPE : {thirple.type}</span>
     <span class="list-group-item">PRICE : {quardplee.price}</span>
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

{/* //*********************************************************************************************************** */ }


<div className='col-10 mx-5 mt-3'>

{/* Single_Delux card was created using bootstrap cards... */}

<div className='card'>
 <div className='card-img-top'>
   <img id='moon' src='https://www.maldivesislandsresorts.com/uploads/andamanislands/gallery/main/9bbf44bae7ce74a31ee2efe95c1292eb_offer_4.jpg ' alt='pic'/>
 </div>
 <div className='card-body'>
  
 <div className='card-title '>NAME : {sonee.name}</div>
   <span class="list-group-item">SLUG : {stwoe.slug}</span> 
   <span class="list-group-item">TYPE : {sthreee.type}</span>
   <span class="list-group-item">PRICE : {sfoure.price}</span>
   <span class="list-group-item">SIZE : {sfivee.size}</span>
   <span class="list-group-item">CAPACITY : {ssixe.capacity}</span>
   <span class="list-group-item">PETS PERMISSION : {ssevene.pets}</span>
   <span class="list-group-item">BREAKFAST : {seighte.breakfast}</span>
   <p>Little thing..{sninee.description}hii</p>
   <span class="list-group-item">EXTRAS : </span>

 </div>
 </div>
</div>
    </div>
  )
}

export default Familyroom