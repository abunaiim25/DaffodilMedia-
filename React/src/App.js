import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Admin/Dashboard';
import AuthMaster from './components/frontend/Auth/AuthMaster';
import ForgetPassword from './components/frontend/Auth/ForgetPassword';
import Page403 from './components/errors/Page403';
import Page404 from './components/errors/Page404';

import FrontendPublicRoute from './routes_items/FrontendPublicRoute';


function App() {
  return (
    <>
      <Router>
        <Switch>

          {/** Auth */}
          <Route exact path={"/authentication"} component={AuthMaster} />
          <Route exact path={"/forget-password"} component={ForgetPassword} />

          {/** Error */}
          <Route path={"/403"} component={Page403} />
          <Route path={"/404"} component={Page404} />


          {/** Frontend */}
          <FrontendPublicRoute path='/' name="Home" /> {/** 1 */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
