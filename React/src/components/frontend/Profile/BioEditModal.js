import React from 'react'
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router-dom';
import { PUBLIC_URL } from '../../../PUBLIC_URL';
import BioAddModal from './BioAddModal';

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

    /*
    const [id, setId] = useState(props.id);
    const [status, setStatus] = useState(props.status);
    const [status_id, setStatus_id] = useState(props.status_id);
    const [department, setDepartment] = useState(props.department);
    const [batch, setBatch] = useState(props.batch);
    const [bio, setBio] = useState(props.bio);
    const [image, setImage] = useState('');
*/
    

    const [picture, setPicture] = useState([]);
    const [profileInput, setProfile] = useState({
        status: '',
        status_id: '',
        user_id: '',
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


    //==========Form Submit==========
    const submit_profile_update = (e) => {
        e.preventDefault();

        
        const formData = new FormData();
        //img
        formData.append('profile_image', picture.profile_image);
        //text
        formData.append('user_id', profileInput.user_id);
        formData.append('status', profileInput.status);
        formData.append('status_id', profileInput.status_id);
        formData.append('department', profileInput.department);
        formData.append('batch', profileInput.batch);
        formData.append('bio', profileInput.bio);

        //post
        //const profile_id = profileInput.user_id;
        //const profile_id = props.match.params.id;
        const profile_id = props.id;
        axios.post(`/api/profile-update/${profile_id}`, formData).then(res => {
            //axios.post(`/api/profile-update`, formData).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                history.push('/');
            }
            else if (res.data.status === 422) {
                swal("Oops!", res.data.errors, "error");
            }
        });
    }

    var profile_pic = '';
    if (props.profile_image) {
        profile_pic =
            <img className="profile-pic" src={`${PUBLIC_URL}/${props.profile_image}`}/>
    } else {
        profile_pic =
            <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
    }

   

    var profile_addOrEdit = '';
    if(props.status){
        profile_addOrEdit = 
        <form onSubmit={submit_profile_update} encType='multipart/form-data'>

        <div className="space_between ">
            <h4>Personal Information</h4>
            <button type='submit' className="btn btn-primary">Save</button>
        </div>

        <div className="profile_upload">
            <div className="small-12 medium-2 large-2 columns">
                <div className="circle">
                    {profile_pic}
                </div>
                <div className="p-image">
                    <i className="fa fa-camera upload-button"></i>
                    <input className="file-upload" name='profile_image' onChange={handleImage} type="file" accept="image/*" />
                </div>
            </div>
        </div>

        <div>
            <div className="horizontal_center">
                
                <select name='status' defaultValue={props.status} className='post_input' onChange={handleInput}>
                    <option>Choose your status</option>
                    <option>Student</option>
                    <option>Faculty</option>
                    <option>Offical Member</option>
                    <option>Genaral Person</option>
                </select>
            </div>

            <div className="horizontal_center">
                <input type="hidden" name="user_id" defaultValue={props.user_id} className='post_input' placeholder='user id' onChange={handleInput} />
            </div>

            <div className="horizontal_center">
                <input type="text" name="status_id" defaultValue={props.status_id} className='post_input' placeholder='Student Id / Employee Id' onChange={handleInput} />
            </div>

            <div className="horizontal_center">
                <input type="text" defaultValue={props.department} name='department' className='post_input' placeholder='Department' onChange={handleInput} />
            </div>

            <div className="horizontal_center">
                <input type="text" defaultValue={props.batch} name='batch' className='post_input' placeholder='Batch (only for student)' onChange={handleInput} />
            </div>

            <div className="horizontal_center">
                <textarea className='post_textarea' name="bio" placeholder='Write something about yourself...' rows="3" onChange={handleInput}>{props.bio}</textarea>
            </div>
        </div>
         </form>
    }else{
        profile_addOrEdit =
        <div>Intro Not Found</div>
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
                              {profile_addOrEdit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioEditModal