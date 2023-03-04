import React from 'react'
import Createacountmodal from './Createacountmodal';
import Signinmodal from './Signinmodal';
import { useState } from 'react'

const Login = () => {
  const [sign, setsign] = useState(true)
  const [btntext, setbtntext] = useState("Sign in")
  const [display, setdisplay] = useState({display:"none"})

  var modal = document.getElementById("myModal");

  const btnclick = () => {
    setdisplay({display:"block"})
  }

  const spanclick = () => {
    setdisplay({display:"none"})
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      setdisplay({display:"none"});
    }
  }

  
  const signintrigger = ()=>{
   sign?setsign(false):setsign(true)
   sign?setbtntext("Create account"):setbtntext("Sign in")
  }

  return (
    <>
      <div className="flex-row">
        <img id='atgimg' src="src\assets\ATGworld.png" alt="ATG-WORLD" />
        <input type="text" name="searchquery" id="search" placeholder='Search for your favorite groups in ATG' />
        <button id='loginbtn' onClick={btnclick} >Create account. <p className="blue">It’s free!</p><i className="arrow down"></i></button>
      </div>
      <div id="myModal" className="modal" style={display}>
        <div className="modal-content">
          <span onClick={spanclick} className="close">&times;</span>
          <button onClick={signintrigger}>{btntext}</button>
          {sign?<Createacountmodal/>:<Signinmodal/>}
        </div>
      </div>

    </>
  )
}

export default Login