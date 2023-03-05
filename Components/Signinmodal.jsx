import React from 'react'

const Signinmodal = ({handleClick}) => {
  return (
    <>
      <div className="accountlogo">Sign in</div>
      
        <div className="flex-column">
          <input type="email" name="email" id="email" placeholder='email' />
          <input type="password" name="password" id="password" placeholder='password' />
          <button id='signinbtn' onClick={handleClick}>Sign in</button>
          <div className="fbgl"><i className="fa fa-facebook circle"></i>Sign in with Facebook</div>
          <div className="fbgl"><img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />Sign in with Google</div>
        </div>
      
    </>
  )
}

export default Signinmodal