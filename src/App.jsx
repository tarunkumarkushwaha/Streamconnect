import { useState } from 'react'
import Article from '../Components/Article'
import Discription from '../Components/Discription'
import Login from '../Components/Login'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  var x = document.getElementById("location");
  function getlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
      alert("Sorry! your browser is not supporting")
    }
  }

  function showPosition(position) {
    var x = "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude;
    document.getElementById("location").innerHTML = x;
  }
  
  return (
    <>
      <Login />
      <Discription />
      <div className="flex-row">
        <div className="flex-column">
          <Article />
          <Article />
          <Article />
        </div>
        <div className="sidemenu">
          <div id='location' className="location">{x}</div><button onClick={getlocation}>!</button>
          <p>Your location will help us serve better and extend a personalised experience.</p>
        </div>
      </div>
    </>
  )
}

export default App
