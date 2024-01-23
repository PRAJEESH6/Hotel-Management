import React ,{Component, createContext}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './Components/Data/Data';

const Language=createContext()
 

const user={
  name:"praju"
   
  };



//    componentDidMount=() =>{
//    let rooms=this.formatData(Data)
//    console.log(rooms)
//    }
//   const formatData=(item)=>{
//      const tree= item.map(item =>{

//       let id=item.sys.id;
//       let img=item.fields.images.map(image=> image.fields.file.url);
//       let rooms={...item.fields,img,id}
//       return rooms;
    

//      })
//      return tree
//   }
// formatData();

ReactDOM.render(
  
  <React.StrictMode>
   
   <Language.Provider value={{...user}} >
    
    <Router>
   
    <App />
  
    </Router>
   
   
    </Language.Provider>

  </React.StrictMode>,
  document.getElementById('root')
  
);

export {Language}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
