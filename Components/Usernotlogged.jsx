import React from 'react'

const Usernotlogged = ({btnclick}) => {
  return (
    <>
    <div id='loginbtn' onClick={btnclick} >Create account. <p className="blue">It’s free!</p><span className='down'>&#10151;</span></div>
    </>
  )
}

export default Usernotlogged