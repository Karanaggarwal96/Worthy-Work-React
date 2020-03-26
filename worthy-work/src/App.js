import React from 'react';
import {Route} from 'react-router-dom'
import Login from './container/Login/Login'
import Layout from './components/Layout/Layout';
import Signup from './container/Signup/Signup';
import Homepage from './container/Homepage/Homepage'
import rideshare from './container/rideshare/rideshare'
import PostedAds from './container/PostedAds/PostedAds';
function App() {
  return (
    
    <React.Fragment>
      <Layout/>
     
      <Route path="/login" component={Login}/> 
      <Route path="/about" component={Homepage}/> 
      <Route path="/signup" component={Signup}/>
      <Route path="/services" component={rideshare}/>
      <Route path="/ads" component={PostedAds}/>
    </React.Fragment>
  );
}

export default App;
