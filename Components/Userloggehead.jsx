import React from 'react'

const Userloggehead = ({logout}) => {
  return (
    <>
    <div className='userlogged'>user name</div><img src="https://unsplash.com/photos/HqBB-mXz_GY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc3OTI4ODYz&force=true&w=1920" alt="user1" className='circle2' />
    <button id='logout' onClick={logout}>Logout</button>
    </>
  )
}

export default Userloggehead