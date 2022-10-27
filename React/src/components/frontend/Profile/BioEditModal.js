import React from 'react'
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router-dom';
import { PUBLIC_URL } from '../../../PUBLIC_URL';

const BioEditModal = (props) => {

    /*********************Profile Image Jquery******************** */
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

    //************************************************************* */
    document.title = "Profile - DIU";
    const history = useHistory();

    const [picture, setPicture] = useState([]);
    const [profileInput, setProfile] = useState({
        status: '',
        status_id: '',
        department: '',
        batch: '',
        bio: '',
    });
    //===========Input Fielde============
    const handleInput = (e) => {
        e.persist();
        setProfile({ ...profileInput, [e.target.name]: e.target.value });
    }
    const handleImage = (e) => {
        setPicture({ profile_image: e.target.files[0] });
    }

    //user me take
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('/api/me')
            .then(response => {
                setUser(response.data);
            });
    }, []);


    //========my_profile_view==========
    useEffect(() => {
        axios.get(`/api/my_profile_view`).then(res => {
            if (res.data.status === 200) {
                setProfile(res.data.myProfile);
            }
        });
    }, []);
    
   /*
    const profile_id = props.match.params.id;
    useEffect(() => {
        axios.get(`/api/my_profile_view/${profile_id}`).then(res => {
            if (res.data.status === 200) {
                setProfile(res.data.myProfile);
            }
        });
    }, []);*/

    //==========Form Submit==========
    const submit_profile_update = (e) => {
        e.preventDefault();

        const formData = new FormData();
        //img
        formData.append('profile_image', picture.profile_image);
        //text
        formData.append('user_id', user.id);
        formData.append('status', profileInput.status);
        formData.append('status_id', profileInput.status_id);
        formData.append('department', profileInput.department);
        formData.append('batch', profileInput.batch);
        formData.append('bio', profileInput.bio);

        //post
        //const profile_id = profileInput.user_id;
        const profile_id = props.match.params.id;
        axios.post(`/api/profile-update/${profile_id}`, formData).then(res => {
            //axios.post(`/api/profile-update`, formData).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
            }
            else if (res.data.status === 422) {
                swal("Oops!", res.data.errors, "error");
            }
        });
    }

    var profile_pic = '';
    if (profileInput) {
        profile_pic =
            <img className="profile-pic" src={`${PUBLIC_URL}/${profileInput.profile_image}`} />
    } else {
        profile_pic =
            <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
    }



    return (
        <div>
            <div className="Modal_profile">
                <div className="center">
                    <div className="section full-height">
                        <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                        <label for="modal-btn"><i className="fa-solid fa-pencil"></i></label>

                        <div className="modal">
                            <div className="modal-wrap">

                                <form onSubmit={submit_profile_update} encType='multipart/form-data'>

                                    <div className="space_between ">
                                        <h4>Personal Information</h4>
                                        <button type='submit' className="btn btn-primary">Save</button>
                                    </div>

                                    <div className="profile_upload">
                                        <div className="small-12 medium-2 large-2 columns">
                                            <div className="circle">
                                                {profile_pic}
                                                {profileInput.user_id}
                                            </div>
                                            <div className="p-image">
                                                <i className="fa fa-camera upload-button"></i>
                                                <input className="file-upload" name='profile_image' onChange={handleImage} type="file" accept="image/*" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="horizontal_center">
                                            <select name='status' value={profileInput.status} className='post_input' onChange={handleInput}>
                                                <option>Choose your status</option>
                                                <option>Student</option>
                                                <option>Faculty</option>
                                                <option>Offical Member</option>
                                                <option>Genaral Person</option>
                                            </select>
                                        </div>

                                        <div className="horizontal_center">
                                            <input type="text" name="status_id" value={profileInput.status_id} className='post_input' placeholder='Student Id / Employee Id' onChange={handleInput} />
                                        </div>

                                        <div className="horizontal_center">
                                            <input type="text" value={profileInput.department} name='department' className='post_input' placeholder='Department' onChange={handleInput} />
                                        </div>

                                        <div className="horizontal_center">
                                            <input type="text" value={profileInput.batch} name='batch' className='post_input' placeholder='Batch (only for student)' onChange={handleInput} />
                                        </div>

                                        <div className="horizontal_center">
                                            <textarea value={profileInput.bio} className='post_textarea' name="bio" placeholder='Write something about yourself...' rows="3" onChange={handleInput}>{profileInput.bio}</textarea>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioEditModal