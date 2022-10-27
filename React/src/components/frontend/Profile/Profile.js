import brand from './assets/banner.jpg'
import BioEditModal from './BioEditModal';
import $ from 'jquery';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { PUBLIC_URL } from '../../../PUBLIC_URL';
import BioAddModal from './BioAddModal';

const Profile = (props) => {

  /********************************Profile Image Jquery*************************** */
  $(document).ready(function () {
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('.profile-pic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $(".file-upload").on('change', function () {
      readURL(this);
    });
    $(".upload-button").on('click', function () {
      $(".file-upload").click();
    });
  });

  //========Auth user
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get('/api/me')
      .then(response => {
        //console.log(response.data.name);
        setUser(response.data);
      });
  }, []);

  //========my_profile_view==========
  const [myProfile, setMyProfile] = useState([]);
  useEffect(() => {
    axios.get(`/api/my_profile_view`).then(res => {
      if (res.data.status === 200) {
        setMyProfile(res.data.myProfile)
      }
    });
  }, []);


  var profile_pic = '';
  if (myProfile) {
    profile_pic =
      <img class="profile-user" src={`${PUBLIC_URL}/${myProfile.profile_image}`} />
  } else {
    profile_pic =
      <img class="profile-user" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
  }

  var profile_intro = '';
  if (myProfile) {
    profile_intro =
      <div className="l-cnt">
        <div className="cnt-label">
          <i className="l-i" id="l-i-i"></i>
          <span>Intro</span>
          <div className="lb-action">

            <BioEditModal />

          </div>
        </div>
        <div id="i-box">
          <div id="intro-line">Front-end Engineer</div>
          <div id="u-occ">I love making applications with Angular.</div>
          <div id="u-loc"><i class="fa-solid fa-house-user"></i>
            <a href="#">Bengaluru</a>, <a href="#">India</a></div>
        </div>
      </div>
  } else {
    profile_intro =
      <div className="l-cnt">
        <BioAddModal />
      </div>
  }

  return (
    <>
      <main className='Profile'>

        <div id="profile-upper">
          <div id="profile-banner-image">
            <img src={brand} alt="Banner image" />

            <div className="user">
              {profile_pic}

              <div className="user-name">
                {user.name}
              </div>
            </div>
          </div>

          <div id="black-grd"></div>
        </div>

        <div id="main-content">
          <div className="tb">
            <div className="td" id="l-col">


              {/**Intro */}
              {profile_intro}

            </div>
            <div className="td" id="m-col">
              <div id="loading"><i className="material-icons">autorenew</i></div>
            </div>

          </div>
        </div>


      </main>
    </>
  )
}

export default Profile
