import React from 'react'

const CreateVideo = () => {
  return (
    <>
      <div className="section full-height">
        <input className="modal3-btn" type="checkbox" id="modal3-btn" name="modal3-btn" />
        <label for="modal3-btn">Create Video </label>

        <div className="modal3">
          <div className="modal3-wrap">

            <div className="space_between ">
              <h4>Create Video</h4>
              <button type='submit' className="btn btn-primary">Post</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateVideo