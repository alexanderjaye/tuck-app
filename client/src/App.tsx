import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Dashboard}></Route>
    </BrowserRouter>
  );
}

export default App;
