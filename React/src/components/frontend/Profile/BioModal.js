import React from 'react'

const BioModal = () => {

    function preview() {//onChange
        let fileInput = document.getElementById("file-input");
        let imageContainer = document.getElementById("images");
        let numOfFiles = document.getElementById("num-of-files");

        imageContainer.innerHTML = "";
        numOfFiles.textContent = `${fileInput.files.length} Image Selected`;

        for (let i of fileInput.files) {
            let reader = new FileReader();
            let figure = document.createElement("figure");
            let figCap = document.createElement("figcaption");
            figCap.innerText = i.name;
            figure.appendChild(figCap);
            reader.onload = () => {
                let img = document.createElement("img");
                img.setAttribute("src", reader.result);
                figure.insertBefore(img, figCap);
            }
            imageContainer.appendChild(figure);
            reader.readAsDataURL(i);
        }
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

                                <div className="space_between ">
                                    <h4>Personal Information</h4>
                                    <button type='submit' className="btn btn-primary">Save</button>
                                </div>

                                <div className="horizontal_center " >
                                    <select id="cars" className='post_input'>
                                        <option>Choose your status</option>
                                        <option>Student</option>
                                        <option>Faculty</option>
                                        <option>Offical Member</option>
                                        <option>Genaral Person</option>
                                    </select>
                                </div>

                                <div className="horizontal_center">
                                    <input type="text" className='post_input' placeholder='Student Id / Employee Id' />
                                </div>

                                <div className="horizontal_center">
                                    <input type="text" className='post_input' placeholder='Department' />
                                </div>

                                <div className="horizontal_center">
                                    <input type="text" className='post_input' placeholder='Batch (only for student)' />
                                </div>

                                <div className="horizontal_center">
                                    <textarea className='post_textarea' placeholder='Write something about yourself...' name="" rows="3"></textarea>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioModal