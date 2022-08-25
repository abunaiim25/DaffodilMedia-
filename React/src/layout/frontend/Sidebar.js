import { useEffect } from 'react'
import profile from './assets/images/profile-1.jpg'

const Sidebar = () => {

    //=============== START JAVASCRIPT ===============

    //=============== ACTIVE SIDEBAR ===============
    useEffect(() => {
        const menuItem = document.querySelectorAll('.menu-item');

        //remove active class from all menu item
        const removeActiveItem = () => {
            menuItem.forEach(item => {
                item.classList.remove('active');
            });
        }
        //ACTIVE NAV ITEM
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                removeActiveItem();//before remove
                item.classList.add('active');//after add

                //NOTIFICATION SHOW
                if (item.id != 'notifications') {
                    document.querySelector('.notification-popup').style.display = 'none';
                }
                else {
                    document.querySelector('.notification-popup').style.display = 'block';
                    //REMOVE NOTIFICATION COUNT
                    document.querySelector('#notifications .notification-count').style.display = 'none';
                }

            });
        });
    }, [])

    //=============== THEME CUSTOMIZE ===============
    useEffect(() => {
        const theme = document.querySelector('#theme');
        const themeModal = document.querySelector('.customize-theme');

        //open modal
        const openThemModel = () => {
            themeModal.style.display = 'grid';
        }
        theme.addEventListener('click', openThemModel);

        //close modal
        const closeThemModel = (e) => {
            if (e.target.classList.contains('customize-theme')) {
                themeModal.style.display = 'none';
            }
        }
        themeModal.addEventListener('click', closeThemModel);
    }, [])

    //=============== MESSAGES ===============
    useEffect(() => {
        const messagesNotification = document.querySelector('#messeges-notifications');
        const messages = document.querySelector('.messages');
        //SEARCH
        const message = messages.querySelectorAll('.message');
        const messageSearch = document.querySelector('#messages-search');

        //SEARCH BAR MESSAGES
        const searchMessage = () => {
            const val = messageSearch.value.toLowerCase();
            message.forEach(user => {
                let name = user.querySelector('h5').textContent.toLowerCase();
                if (name.indexOf(val) != -1) {
                    user.style.display = 'flex';
                }
                else {
                    user.style.display = 'none';
                }
            })
        }
        messageSearch.addEventListener('keyup', searchMessage);//search chat


        //highlight messages card when messages menu  item is clicked
        messagesNotification.addEventListener('click', () => {
            messages.style.boxShadow = '0 0 1rem var(--color-primary)';
            //REMOVE COUNT
            messagesNotification.querySelector('.notification-count').style.display = 'none';
            //time
            setTimeout(() => {
                messages.style.boxShadow = 'none';
            }, 2000);
        });
    }, [])

    //=============== END JAVASCRIPT ===============

    return (
        <>
            <div className="fixed" >

                <a className="profile">
                    <div className="profile-photo">
                        <img src={profile} alt="" />
                    </div>

                    <div className="handle">
                        <h4>Diana Ayi</h4>
                        <small className="text-muted">@dayi</small>
                    </div>
                </a>

                <div className="sidebar">
                    <a className="menu-item active" >
                        <span><i className="uil uil-home"></i></span>
                        <h3>Home</h3>
                    </a>
                    <a className="menu-item">
                        <span><i className="uil uil-user"></i></span>
                        <h3>Profile</h3>
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
                    <a className="menu-item" >
                        <span><i className="uil uil-bookmark"></i></span>
                        <h3>Bookmarks</h3>
                    </a>

                    <a className="menu-item" id="theme">
                        <span><i className="uil uil-palette"></i></span>
                        <h3>Theme</h3>
                    </a>

                    <a className="menu-item" >
                        <span><i className="uil uil-setting"></i></span>
                        <h3>Settings</h3>
                    </a>
                </div>
                <label className="btn btn-primary createBtn-sidebar">Create Post</label>
            </div>
        </>
    )
}

export default Sidebar