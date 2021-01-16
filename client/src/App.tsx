import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Register from './components/pages/register/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="main-window">
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route dashboard="/dashboard" component={Dashboard}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
