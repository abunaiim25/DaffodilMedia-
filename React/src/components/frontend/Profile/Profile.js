import React from 'react'
import './assets/Profile.css'
import brand from './assets/banner.jpg'
import BioModal from './BioModal';
import $ from 'jquery';

const Profile = () => {

  /********************************Profile Image Jquery*************************** */
  $(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

  return (
    <>
      <main className='Profile'>

        <div id="profile-upper">
          <div id="profile-banner-image">
            <img src={brand} alt="Banner image" />
          </div>

          <div id="profile-d">
            <div class="profile_upload">
              <div class="small-12 medium-2 large-2 columns">
                <div class="circle">
                  <img class="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
                </div>
                <div class="p-image">
                  <i class="fa fa-camera upload-button"></i>
                  <input class="file-upload" type="file" accept="image/*" />
                </div>
              </div>
            </div>

            <div id="u-name">Abu Naiim</div>
          </div>

          <div id="black-grd"></div>
        </div>

        <div id="main-content">
          <div className="tb">
            <div className="td" id="l-col">
              <div className="l-cnt">
                <div className="cnt-label">
                  <i className="l-i" id="l-i-i"></i>
                  <span>Intro</span>
                  <div className="lb-action">

                    <BioModal />

                  </div>
                </div>
                <div id="i-box">
                  <div id="intro-line">Front-end Engineer</div>
                  <div id="u-occ">I love making applications with Angular.</div>
                  <div id="u-loc"><i class="fa-solid fa-house-user"></i>
                    <a href="#">Bengaluru</a>, <a href="#">India</a></div>
                </div>
              </div>
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
