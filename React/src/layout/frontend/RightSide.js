import React from 'react'

const RightSide = () => {
    return (
        <>

            <div className="right">

                <div className="messages">
                    <div className="heading">
                        <h4>Messages</h4>
                        <i className="uil uil-edit"></i>
                    </div>


                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Searching..." id="messages-search" />
                    </div>


                    <div className="category">
                        <h6 className="active">Primary</h6>
                        <h6>General</h6>
                        <h6 className="message-requests">Requests(7)</h6>
                    </div>


                    <div className="message">
                        <div className="profile-photo">
                            <img src="./images/profile-17.jpg" alt="" />
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-muted">Just wake up bruth</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="./images/profile-16.jpg" alt="" />
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Anil Kumar</h5>
                            <p className="text-bold">2 new messages</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="./images/profile-9.jpg" alt="" />
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-muted">lol you are</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="./images/profile-19.jpg" alt="" />
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-bold">Birthbay Tonorrow!</p>
                        </div>
                    </div>

                </div>

                <div className="friend-requests">
                    <h4>Requests</h4>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="./images/profile-14.jpg" alt="" />
                            </div>

                            <div>
                                <h5>Hajia Bintu</h5>
                                <p className="text-muted">8 mutual friends</p>
                            </div>
                        </div>

                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="./images/profile-10.jpg" alt="" />
                            </div>

                            <div>
                                <h5>Alia Bintu</h5>
                                <p className="text-muted">8 mutual friends</p>
                            </div>
                        </div>

                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="./images/profile-8.jpg" alt="" />
                            </div>

                            <div>
                                <h5>Kausar</h5>
                                <p className="text-muted">8 mutual friends</p>
                            </div>
                        </div>

                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default RightSide