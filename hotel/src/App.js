import React from 'react'
import './App.css';

import {Route,Routes} from 'react-router-dom'
import Home from "./routes/Home"
import Rooms from "./routes/Rooms"
import About from "./routes/About"
import Event from "./routes/Event"
import Contact from "./routes/Contact"
import Reservation from"./routes/Reservation"
function App() {
  return (
 <div className="App">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
  
  </Routes>

 </div>
  );
}

export default App;
