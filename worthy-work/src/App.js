import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './container/Login/Login'
import Layout from './components/Layout/Layout';
import Signup from './container/Signup/Signup';
import Homepage from './container/Homepage/Homepage'
import rideshare from './container/rideshare/rideshare'
function App() {
  return (
    <div className="App">
      <Layout/>
     
      <Route path="/login" component={Login}/> 
      <Route path="/about" component={Homepage}/> 
      <Route path="/signup" component={Signup}/>
      <Route path="/services" component={rideshare}/>
    </div>
  );
}

export default App;
