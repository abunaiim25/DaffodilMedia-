
const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="">
                        <i class="fa-solid fa-a"></i> <span className="align-middle hidden_mobile"> Admin Panel</span>
                    </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item active">
                            <a className="sidebar-link" href="index.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Dashboard</span>
                            </a>
                        </li>

                        <li className="sidebar-item nav-item">
                            <a className="sidebar-link" href="pages-profile.html">
                                <i class="fa-solid fa-user"></i> <span className="align-middle hidden_mobile">Profile</span>
                            </a>
                        </li>

                        <li className="sidebar-item nav-item dropdown active">
                            <a className="sidebar-link nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user"></i> <span className="align-middle hidden_mobile">Dropdown</span>
                            </a>
                            <ul className="sidebar-nav dropdown-menu dropdownItem " aria-labelledby="navbarDropdown">
                                <li className="dropdownHead"><a className="dropdown-item  sidebar-link" href="#">  <i className="fa-solid fa-house"></i> <span className="align-middle">Action</span></a></li>

                                <li><a className="dropdown-item sidebar-link" href="#">  <i className="fa-solid fa-house"></i> <span className="align-middle">Action Here</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item nav-item">
                            <a className="sidebar-link" href="pages-sign-in.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Sign In</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-sign-up.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Sign Up</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-blank.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Blank</span>
                            </a>
                        </li>

                        <li className="sidebar-header">
                            Tools
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-buttons.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Buttons</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-forms.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Forms</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-cards.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Cards</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-typography.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Typography</span>
                            </a>
                        </li>



                    </ul>


                </div>
            </nav>
        </>

    )
}

export default Sidebar
