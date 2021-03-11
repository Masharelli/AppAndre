import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/css/Styles.css';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Webpage/Layout';
import WebAppLayout from './components/WebApp/WebAppLayout';
import { Switch} from 'react-router-dom';
import AboutUs from './components/Webpage/AboutUsPage';
import Contact from './components/Webpage/ContactPage';
import Index from './components/Webpage/Index';
import Login from './components/WebApp/Login';
import Register from './components/WebApp/Register';
import Welcome from './components/WebApp/FirstLogin';
import RouteWithLayout from './components/RouteWithLayout';
import Dashboard from './components/WebApp/Dashboard';
import Profile from './components/WebApp/Profile';
import Tests from './components/WebApp/Tests';
import Test from './components/WebApp/Test';
import TestRegister from './components/WebApp/webapp-components/RegisterTest';
import Stats from './components/WebApp/Statistics';
import Settings from './components/WebApp/Settings';
import AdminLayout from './components/Admin/AdminLayout';
import Users from './components/WebApp/Users';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  return (
      <Router>
        <ScrollToTop/>
            <Switch>
                  <RouteWithLayout exact path="/" layout={Layout} component={Index}/>
                  <RouteWithLayout exact path="/about-us" layout={Layout} component={AboutUs} />
                  <RouteWithLayout exact path="/contact" layout={Layout} component={Contact} />
                  <RouteWithLayout exact path="/login" layout={Layout} component={() => <Login/>}/>
                  <RouteWithLayout exact path="/register" layout={Layout} component={Register} />
                  <RouteWithLayout exact path="/welcome" layout={WebAppLayout} component={Welcome} />
                  <RouteWithLayout exact path="/dashboard" layout={WebAppLayout} component={Dashboard} />
                  <RouteWithLayout exact path="/profile" layout={WebAppLayout} component={Profile} />
                  <RouteWithLayout exact path="/tests" layout={WebAppLayout} component={Tests} />
                  <RouteWithLayout exact path="/test" layout={WebAppLayout} component={Test} />
                  <RouteWithLayout exact path="/register-test" layout={WebAppLayout} component={TestRegister} />
                  <RouteWithLayout exact path="/statistics" layout={WebAppLayout} component={Stats} />
                  <RouteWithLayout exact path="/settings" layout={WebAppLayout} component={Settings} />
                  <RouteWithLayout exact path="/users" layout={WebAppLayout} component={Users} />
                  <RouteWithLayout exact path="/admin/dashboard" layout={AdminLayout} component={AdminDashboard} />
                  <RouteWithLayout exact path="/admin/users" layout={AdminLayout} component={AdminDashboard} />
                  <RouteWithLayout exact path="/admin/tests" layout={AdminLayout} component={AdminDashboard} />   
            </Switch> 
        
      </Router>
  );
}

export default App;
