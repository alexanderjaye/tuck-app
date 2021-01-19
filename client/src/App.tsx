import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Register from './components/pages/register/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/pages/login/Login';
import FullRecipe from './components/pages/recipe-full/FullRecipe';
import LandingPage from './components/pages/landing-page/LandingPage';

import bgVine from './assets/backgrounds/plant-bg-left.svg'
import EditRecipe from './components/pages/EditRecipe/EditRecipe';
import CreateRecipe from './components/pages/CreateRecipe/CreateRecipe';
import AuthContextProvider from './contexts/Auth';


function App() {
  const [isLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <Navbar/>
        <div className="main-window">
          <img className="bg-vine" src={bgVine} alt="Background Vine"></img>
          <Route exact path="/" 
            component={ isLoggedIn ? Dashboard : LandingPage}
          />
          <Route path="/create" component={CreateRecipe}/>
          <Route path="/edit" component={EditRecipe}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/recipe" component={FullRecipe}/>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
