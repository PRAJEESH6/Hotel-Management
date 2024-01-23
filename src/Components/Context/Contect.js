import React, { Component} from 'react'
import Feature from '../Featured_room/Feature';


const Language=React.createContext();

 class RoomProvider extends Component {
    state={

      greeting:'hello praju',
      money:'thank you'

   }
  render() {
return (
    <Language.Provider value={{...this.state}}>
       <Feature/>
    </Language.Provider>
  )
}
}

const RoomConsumer = Language.Consumer;

//export{RoomProvider, Language}
