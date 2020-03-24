import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './container/Login/Login'
import Layout from './components/Layout/Layout';
import Signup from './container/Signup/Signup'
function App() {
  return (
    <div className="App">
      <Layout/>
      <Route path="/login" component={Login}/>  
      <Route path="/signup" component={Signup}/>
    </div>
  );
}

export default App;
