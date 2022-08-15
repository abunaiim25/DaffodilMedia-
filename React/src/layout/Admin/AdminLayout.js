
/** 3 */
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminRouteList from "../../routes/AdminRouteList"; //Router -> MasterLayout -> App
import './assets/css/AdminLayout.css';
import './assets/css/AdminLayout.min.css';
//import '../../../public/assets/admin/js/custom.js'
//import './assets/js/bootstrap.bundle.min.js';
//import './assets/js/AdminLayout.js';
//import $ from 'jquery';



const AdminLayout = () => {


  function alertIt() {
    alert("hi")
  }

  return (
    <>


      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">

          <div id="content">
            <Navbar />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
     
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

            <button onClick={alertIt}>Alert</button>

            <main>
              <Switch>
                {AdminRouteList.map((route, index) => {
                  return (
                    route.component && (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component {...props} />
                        )}
                      />
                    )
                  )
                })}
                <Redirect from="/admin" to="/admin/dashboard" />{/** when search /admin, go to  /admin/dashboard*/}
              </Switch>
            </main>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default AdminLayout


