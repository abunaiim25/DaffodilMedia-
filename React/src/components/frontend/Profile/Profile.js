import brand from './assets/banner.jpg'
import BioEditModal from './BioEditModal';
import $ from 'jquery';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { PUBLIC_URL } from '../../../PUBLIC_URL';
import BioAddModal from './BioAddModal';
import swal from 'sweetalert';
import Profile_Skeleton from '../../Loading/frontend_loading/profile/Profile_Skeleton';
import ClipLoader from "react-spinners/ClipLoader"; 

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

  //========Auth user=============
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get('/api/me')
      .then(response => {
        setUser(response.data);
      });
  }, []);


const [myProfile, setMyProfile] = useState([]);
const id = props.match.params.id;
useEffect(() => {
    axios.get(`/api/my_profile_view/${id}`).then(res => {
        if (res.data.status === 200) {
          setMyProfile(res.data.myProfile);
           setLoading(false);//loading
        } 
        else if (res.data.status === 404)
        {
          swal("Error", res.data.message, "error");
          console.log(res.data.message)
        }
    });
}, [props.match.params.id]);


const [loading, setLoading] = useState(true);//loading
if (loading)//Loading 3 
{//npm install --save react-spinners
    return <div className='loading_clipLoader'>
        <ClipLoader  color={'36D7B7'} loading={loading} size={100} />
    </div>
}


  var profile_pic = '';
  if (myProfile.profile_image) {
    profile_pic =
      <img class="profile-user" src={`${PUBLIC_URL}/${myProfile.profile_image}`} />
  } else {
    profile_pic =
      <img class="profile-user" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
  }


  var profile_intro = '';
  if (myProfile.status) {
    profile_intro =
      <div className="l-cnt">
        <div className="cnt-label">
          <i className="l-i" id="l-i-i"></i>
          <span>Intro</span>
          <div className="lb-action">
            <BioEditModal 
            /*
            id={myProfile.id} 
            status={myProfile.status} 
            status_id={myProfile.status_id}
            department={myProfile.department}
            batch={myProfile.batch}
            bio={myProfile.bio}
            user_id={myProfile.user_id}
            profile_image={myProfile.profile_image}
            */
           {...myProfile} />
          </div>
        </div>

        <div id="i-box">
          <div id="u-loc"><i className="fa-solid fa-house-user p-2"></i>Status: {myProfile.status}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>ID: {myProfile.status_id}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Department: {myProfile.department}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Batch: {myProfile.batch}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Bio: {myProfile.bio}</div>
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
              {profile_pic }   

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
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile
