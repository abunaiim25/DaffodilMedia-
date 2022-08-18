import React from 'react'
import profile from './assets/images/profile-1.jpg'

const Sidebar = () => {
    return (
        <>
        <div className="fixed">
            <a className="profile">
                <div className="profile-photo">
                    <img src={profile} alt="" />
                </div>

                <div className="handle">
                    <h5>Diana Ayi</h5>
                    <small className="text-muted">@dayi</small>
                </div>
            </a>

            <div className="sidebar">
                <a className="menu-item active">
                    <span><i className="uil uil-home"></i></span>
                    <h3>Home</h3>
                </a>
                <a className="menu-item">
                    <span><i className="uil uil-compass"></i></span>
                    <h3>Explore</h3>
                </a>
                <a className="menu-item" id="notifications">
                    <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span>
                    <h3>Notification</h3>


                    <div className="notification-popup">
                        <div>
                            <div className="profile-photo">
                                <img src="./images/profile-2.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Aimona Akter</b> accepced your friend request
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="./images/profile-3.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Zina Akter</b> comment on your post
                                <small className="text-muted">1 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="./images/profile-4.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Anika Akter</b> accepced your friend request
                                <small className="text-muted">1 HOUR AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-photo">
                                <img src="./images/profile-5.jpg" alt="" />
                            </div>
                            <div className="notification-body">
                                <b>Anika Gosh</b> and 345 liked on your post
                                <small className="text-muted">4 MINUTES AGO</small>
                            </div>
                        </div>
                    </div>

                </a>
                <a className="menu-item" id="messeges-notifications">
                    <span><i className="uil uil-envelope"><small className="notification-count">6</small></i></span>
                    <h3>Messages</h3>
                </a>
                <a className="menu-item">
                    <span><i className="uil uil-bookmark"></i></span>
                    <h3>Bookmarks</h3>
                </a>
                <a className="menu-item">
                    <span><i className="uil uil-chart-line"></i></span>
                    <h3>Analytics</h3>
                </a>
                <a className="menu-item" id="theme">
                    <span><i className="uil uil-palette"></i></span>
                    <h3>Theme</h3>
                </a>
                <a className="menu-item">
                    <span><i className="uil uil-setting"></i></span>
                    <h3>Settings</h3>
                </a>
            </div>

            <label for="create-post" className="btn btn-primary">Create Post</label>
            </div>
        </>
    )
}

export default Sidebar