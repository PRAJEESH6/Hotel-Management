import React from 'react'
import './Singleroom.css'
import {Link} from 'react-router-dom'



function Singleroom() {
     
  //First array of Single economy room datas...
  const Single_Economy=[
    
  { name: "single economy"    },
   { slug: "single-economy"   },
   { type: "single"           },
   { price: 100               },
   { size: 200                },
   { capacity: 1              },
   { pets: false              },
   { breakfast: false         },
   { featured: false          },
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
}];

//Object creaion method are doing in this section...
    
const mayil=Single_Economy[0];
const slug=Single_Economy[1];
const type=Single_Economy[2];
const price=Single_Economy[3];
const size=Single_Economy[4];
const capacity=Single_Economy[5];
const pets=Single_Economy[6];
const breakfast=Single_Economy[7];
const para=Single_Economy[9];
const extra=Single_Economy[10];

// -------------First Array Single Economy part is Overed..---------------------------//

//Second array method...

    const Single_Basic=[

     {name: "single basic"      },
     {  slug: "single-basic"},
     { type: "single"},
     { price: 150},
     { size: 250},
     {  capacity: 1},
     {  pets: false},
     {  breakfast: false},
     {  featured: false},
     {  description:
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

        //Object creation part...

const one=Single_Basic[0];
const two=Single_Basic[1];
const three=Single_Basic[2];
const four=Single_Basic[3];
const five=Single_Basic[4];
const six=Single_Basic[5];
const seven=Single_Basic[6];
const eight=Single_Basic[7];
const nine=Single_Basic[9];
const ten=Single_Basic[10];
    
 //--------------Single Basic part is Overed-------------------------------------------//   
   
   const Single_Standard=[

   { name: "single standard"},
   { slug: "single-standard"},
   { type: "single"},
   { price: 250},
   { size: 300},
   { capacity: 1},
  {  pets: true},
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
   
   //Object creation part

const singlee=Single_Standard[0];
const double=Single_Standard[1];
const thirple=Single_Standard[2];
const quardple=Single_Standard[3];
const quentiple=Single_Standard[4];
const sixtple=Single_Standard[5];
const octiple=Single_Standard[6];
const eightple=Single_Standard[7];
const noneple=Single_Standard[9];
const dacuple=Single_Standard[10];

//------------------------Single Standard method is Overed--------------------------------------//
   

//Single Delux method...

  const Single_Delux=[

   { name: "single deluxe"},
   { slug: "single-deluxe"},
   { type: "single"},
   { price: 300},
   { size: 400},
   { capacity: 1},
   { pets: true},
   { breakfast: true},
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

  //Object created part...

  const sone=Single_Delux[0];
  const stwo=Single_Delux[1];
  const sthree=Single_Delux[2];
  const sfour=Single_Delux[3];
  const sfive=Single_Delux[4];
  const ssix=Single_Delux[5];
  const sseven=Single_Delux[6];
  const seight=Single_Delux[7];
  const snine=Single_Delux[9];
  const sten=Single_Delux[10];
//-------------------------------Single Delux-----------------------------------//

  return (
    


    <div id='jungles'>

    {/* Welcome page img */}

   <div id='hoop'>
    <img src='https://w0.peakpx.com/wallpaper/379/868/HD-wallpaper-black-and-white-decor-rug-lamp-window-books-plant-black-vase-silver-bed-furniture-tree-flowers-mirror-reflection-white.jpg' id='kalyani' alt='pic'/>

       <h1 id='thor'>World Class Single Delux Room's</h1>
       <Link to='/' className='btn btn-warning' id='bee'>Back To Home</Link>

   </div>

      <div className='col-10 my-5 mx-5' >

        {/* Single_Economy card was created using bootstrap cards... */}

      <div className='card mx-5 my-5 '  >
        <div className='card-img-top' >
          <img id='moon' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/416924976.jpg?k=9100987fa2259955c8a75161f5d66940040c2387cb4f628a0e668cbb4bc6f7f9&o=&hp=1' alt='pic'/>
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

      <div className='card my-5 mx-5'>
        <div className='card-img-top'>
          <img id='moon' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/416924923.jpg?k=2c9f20930af2e91da76b2e6f36fa583ccf6dfd27f000b5646184939bcf72fec8&o=&hp=1' alt='pic'/>        </div>
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

      <div className='card my-5 mx-5'>
        <div className='card-img-top'>
          <img id='moon' src='https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/72/2018/01/24160647/Room_LuxuryClubking_13.jpg'  alt='pic'/>
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

 {/* ******************************************Single_Standard Overed *************************************       */}     

      <div className='col-10 mx-5 mt-3'>

       {/* Single_Delux card was created using bootstrap cards... */}

      <div className='card mx-5 my-5'>
        <div className='card-img-top'>
          <img id='moon' src='https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/72/2019/02/02061214/Untitled-design-4.png ' alt='pic'/>
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

export default Singleroom