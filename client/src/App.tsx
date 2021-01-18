import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Register from './components/pages/register/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import FullRecipe from './components/pages/recipe-full/FullRecipe';
import LandingPage from './components/pages/landing-page/LandingPage';

import bgTree from './assets/backgrounds/lemon-tree.svg';
import bgVine from './assets/backgrounds/plant-bg-left.svg'

function App() {
  const [isLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="main-window">
        <img className="bg-vine" src={bgVine} alt="Background Vine"></img>
        <Route exact path="/" 
          component={ isLoggedIn ? Dashboard : LandingPage}
        />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/recipe" component={FullRecipe}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
