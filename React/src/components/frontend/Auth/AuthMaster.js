import React from 'react';
import './AuthMaster.css';
import Login from './Login';
import Register from './Register';

const AuthMaster = () => {
  return (
    <>
      <div className='body-auth '>
        <div className="container" id="container">

          <Register />

          <Login />


          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please sign in with your personal info</p>
                <button className="ghost" onClick={window['login']} id="signIn">Sign In</button>
                <span className='loginlogouttop'><small>Double click to sign in page</small></span>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={window['signup']} id="signUp">Register</button>
                <span className='loginlogouttop'><small>Double click to register page</small></span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default AuthMaster

