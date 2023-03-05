import React from 'react'
import Createacountmodal from './Createacountmodal';
import Signinmodal from './Signinmodal';
import { useEffect, useState } from 'react'
import Usernotlogged from './Usernotlogged';
import Userloggehead from './Userloggehead';

const Login = ({handleClick,logout,authorise}) => {
  const [sign, setsign] = useState(true)
  const [btntext, setbtntext] = useState("Already have a account Sign in")
  const [display, setdisplay] = useState({ display: "none" })

  useEffect(() => {
    spanclick()
  }, [handleClick])

  var modal = document.getElementById("myModal");

  const btnclick = () => {
    setdisplay({ display: "block" })
  }

  const spanclick = () => {
    setdisplay({ display: "none" })
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      setdisplay({ display: "none" });
    }
  }


  const signintrigger = () => {
    sign ? setsign(false) : setsign(true)
    sign ? setbtntext("Don’t have an account yet? Create new for free!") : setbtntext("Already have a account Sign in")
  }

  return (
    <>
      <div className="flex-row">
        <img id='atgimg' src="src\assets\ATGworld.png" alt="ATG-WORLD" />
        <input type="text" name="searchquery" id="search" placeholder='Search for your favorite groups in ATG' />
        {authorise?<Userloggehead logout={logout}/>:<Usernotlogged btnclick={btnclick}/>}
      </div>
      <div id="myModal" className="modal" style={display}>
        <div className="modal-content">
        <div className="createaccountslogan">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
          <span onClick={spanclick} className="close">&times;</span>
          <div className="flex-row">
            <div className="flex-column">
              {sign ? <Createacountmodal handleClick={handleClick}/> : <Signinmodal handleClick={handleClick}/>}
            </div>
            <div className="flex-column">
            <button id='loggerbtn' onClick={signintrigger}>{btntext}</button>
            <img id='loginscreenimage' src="src\assets\loginscreenimage.png" alt="ATG LOGIN" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login