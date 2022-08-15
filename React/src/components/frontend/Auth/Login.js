import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const Login = () => {

    const history = useHistory();

    const [loginInput, setLogin] = useState({
      email: "",
      password: "",
      error_list: [],
    });
  
  
    const handleInput = (e) => {
      e.persist();
      setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }
  
  
    const loginSubmit = (e) => {
      e.preventDefault();
  
      const data = {
        email: loginInput.email,
        password: loginInput.password,
      }
  
      // post using laravel api
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/login`, data).then(res => {
          if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            swal("Success", res.data.message, "success");
            if (res.data.role === 'admin') {
              history.push('/admin/dashboard');// 
            }
            else {
              history.push('/');// login to home page
            }
          }
          else if (res.data.status === 401) {
            swal("Warning", res.data.message, "warning");
          }
          else {
            setLogin({ ...loginInput, error_list: res.data.validation_errors });
          }
        });
      });
    }

    return (
        <>
            <div className="form-container sign-in-container">
                <form onSubmit={loginSubmit}>
                    <h2>Sign in</h2>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>

                    <div className='margin_top'>
                        <label><p>Email:</p></label>
                        <input type="email" name='email' onChange={handleInput} value={loginInput.email} />
                        <span>{loginInput.error_list.email}</span>
                    </div>

                    <div className='margin_top'>
                        <label><p>Password:</p></label>
                        <input type="password" name='password' onChange={handleInput} value={loginInput.password} id="checkPassword" />
                        <span onClick={window['hideShow3']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
                        <Link to="/forget-password" className='forget_password'><small> Forgot your password?</small></Link>
                    </div>

                    <button>Sign In</button>

                    <p className='signin_account' onClick={window['signupMobile']} id="signUpMobile">Sign in your account <i class="fa-solid fa-arrow-right"></i></p>
                </form>
            </div>
        </>
    )
}

export default Login
