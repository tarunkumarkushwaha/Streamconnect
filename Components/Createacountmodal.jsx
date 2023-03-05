import React from 'react'

const Createacountmodal = ({ handleClick }) => {

    return (
        <>
            <div className="accountlogo">Create Account</div>

            <div className="flex-column">
                <div className="flex-row">
                    <input type="text" name="firstname" id="firstname" placeholder='Firstname' />
                    <input type="text" name="lastname" id="lastname" placeholder='Lastname' />
                </div>
                <div className="flex-column">
                    <input type="email" name="email" id="email" placeholder='email' />
                    <input type="password" name="password" id="password" placeholder='password' />
                    <input type="password" name="passwordreenter" id="passwordreenter" placeholder='Confirm password' />
                    <button onClick={handleClick} id='createaccountbtn' >Create Account</button>
                </div>
                <div className="fbgl"><i className="fa fa-facebook circle"></i>Sign up with Facebook</div>
                <div className="fbgl"><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />Sign up with Google</div>
            </div>



        </>
    )
}

export default Createacountmodal