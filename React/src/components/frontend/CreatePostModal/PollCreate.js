import React from 'react'

const PollCreate = () => {
    return (
        <div>
            <div className="section full-height">
                <input className="modal2-btn" type="checkbox" id="modal2-btn" name="modal2-btn" />
                <label for="modal2-btn">Create Poll  </label>

                <div className="modal2">
                    <div className="modal2-wrap">

                        <div className="space_between ">
                            <h4>Create Poll</h4>
                            <button type='submit' className="btn btn-primary">Post</button>
                        </div>

                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PollCreate