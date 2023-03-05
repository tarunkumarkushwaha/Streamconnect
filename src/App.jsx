import { useEffect, useState } from 'react'
import Article from '../Components/Article'
import Discription from '../Components/Discription'
import Login from '../Components/Login'
import Sidemenulogged from '../Components/Sidemenulogged'
import Sidemenulogout from '../Components/Sidemenulogout'
import Userloggehead from '../Components/Userloggehead'

import './App.css'

function App() {
  const [authorise, setauthorise] = useState(false)

  // useEffect(() => {
  //   console.log("i am running effect")
  // }, [discdisplay])

  const handleClick = () => {
    setauthorise(true)
  }

  const logout = () => {
    setauthorise(false)
  }

  return (
    <>
      <div className="loginwrapper">
      <Login handleClick={handleClick} logout={logout} authorise={authorise}/>
      </div>
      {authorise?null:<Discription />}
      <div className="flex-row">
        <div className="flex-column">
          <Article />
          <Article />
          <Article />
        </div>
        <div className="sidemenu">
          {authorise?<Sidemenulogged/>:<Sidemenulogout/>}
        </div>
      </div>
    </>
  )
}

export default App
