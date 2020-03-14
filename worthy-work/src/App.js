import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './container/LoginSignUp/LoginSignUp'
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Route path="/login" component={Login}/>  
  
    </div>
  );
}

export default App;
