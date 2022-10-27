import React, { useEffect } from 'react'
import CreatePost from './CreatePost'
import CreateVideo from './CreateVideo'
import PollCreate from './PollCreate'

const CreatePostModal = () => {

    useEffect(() => {


    }, [])

    return (
        <>
            <div className="Modal">
                <div className="center">
                    
                    <CreatePost />
                    <PollCreate />
                    <CreateVideo />

                </div>
            </div>
        </>
    )
}

export default CreatePostModal
