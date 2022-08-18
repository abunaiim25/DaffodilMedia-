import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import profile from './assets/images/profile-1.jpg'


const NavBar = () => {

    const history = useHistory();

    //Logout here
    const logoutSubmit = (e) => {
        e.preventDefault(); //for browser not reload

        axios.post('/api/logout').then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        })
    }


    {/** login register logout */ }
    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link btn_border" aria-current="page" to="/authentication">Login</Link>
                </li>

            </ul>
        )
    }
    else {
        AuthButtons = (
            <li className="nav-item">

                { /** Bootstrap on Admin */}
                <ul className="navbar-nav navbar-align profile_dropdown">
                    <li className="nav-item dropdown">
                        <a className="nav-link  d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                            <div className="profile-photo">
                                <img src={profile} alt="" />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown_item">
                            <a className="dropdown-item" href="pages-profile.html"><i class="fa-solid fa-user"></i> Profile</a>
                            <a type='button' className="dropdown-item" onClick={logoutSubmit}><i class="fa-solid fa-arrow-right-from-bracket"></i> Log out</a>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }


    return (
        <>
            <nav>
                <div className="container">
                    <Link to="/"><h2 className="log"><b> Social Media</b></h2></Link>

                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Searching..." />
                    </div>

                    <div className="create">
                        <label className="btn btn-primary" for="create-post">Create</label>

                        {/** login register logout {AuthButtons}*/}
                        {AuthButtons}
                    </div>



                </div>
            </nav>
        </>
    )
}

export default NavBar
