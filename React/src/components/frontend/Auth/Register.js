import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'; 

const Register = () => {

  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "", 
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }



  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
      password_confirmation: registerInput.password_confirmation,
    }

    // post using laravel api
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          history.push('/');
        }
        else {
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
          //swal("Failed", "Email or Password not Match", "error");
          swal("Failed", res.data.validation_errors, "error");
        }
      });
    });
  }


  return (
    <>
      <div className="form-container sign-up-container">
      <form onSubmit={registerSubmit}>
            <h2>Create Account</h2>
           
            <div className='margin_top'>
              <label><p>Name:</p></label>
              <input type="text" name='name' onChange={handleInput} value={registerInput.name} />
              <span className="text-danger">{registerInput.error_list.name}</span>
            </div>

            <div className='margin_top'>
              <label><p>Email:</p></label>
              <input type="email" name='email' onChange={handleInput} value={registerInput.email}   />
              <span className="text-danger">{registerInput.error_list.email}</span>
            </div>

            <div className='margin_top'>
              <label><p>Password:</p></label>
              <input type="password" name='password' onChange={handleInput} value={registerInput.password} id="myPassword" />
              <span onClick={window['hideShow']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
              <span className="text-danger">{registerInput.error_list.password}</span>
            </div>

            <div className='margin_top'>
              <label><p>Confirm Password:</p></label>
              <input type="password" name='password_confirmation' onChange={handleInput} value={registerInput.password_confirmation}   id="confirm_password" />
              <span onClick={window['hideShow2']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
              <span className="text-danger">{registerInput.error_list.password}</span>
            </div>
            <button type='submit' className='top'>Register</button>

            <p className='signin_account'  onClick={window['loginMobile']} id="signInMobile"><i class="fa-solid fa-arrow-left"></i>  Sign in your account </p>

          </form>
        </div>
    </>
  )
}

export default Register
