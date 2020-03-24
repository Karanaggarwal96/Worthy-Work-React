import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './container/Login/Login'
import Layout from './components/Layout/Layout';
import Signup from './container/Signup/Signup';
import rideshare from './container/rideshare/rideshare'
function App() {
  return (
    <div className="App">
      <Layout/>
      <Route path="/login" component={Login}/>  
      <Route path="/signup" component={Signup}/>
      <Route path="/services" component={rideshare}/>
    </div>
  );
}

export default App;
