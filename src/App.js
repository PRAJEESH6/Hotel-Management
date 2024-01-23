import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Rooms from './Components/Rooms/Rooms'
import Singleroom from './Components/Single_delux/Singleroom'
import Doubleroom from './Components/Double_Delux/Doubleroom'
import Familyroom from './Components/Family_Delux/Familyroom'
import Error from './Error/Error'
import {Routes,Route}  from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
 <>

    <Navbar/>

   <Routes>
     
      <Route exact path="/" Component={Home}/>
      <Route exact path="/rooms/" Component={Rooms}/>
      <Route exact path="/singledelux" Component={Singleroom}/>
      <Route exact path='/doubledelux' Component={Doubleroom}/>
      <Route exact path='/familydelux' Component={Familyroom}/>
      <Route Component={Error}/>

   </Routes> 
  
   
   
   
  
  </>
    
  )
}

export default App