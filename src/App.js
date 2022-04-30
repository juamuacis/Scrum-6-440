import React from 'react';
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Favorites from './pages/Favorites';
import ContactUs from './pages/Contact';
import NewItem from './pages/NewItem';
import Layout from './Components/Navbar/Layout';
import SignInButton from './pages/SignInButton';
import CreateAccount from './pages/CreateAccount';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
      <Routes> 
        <Route path = "/" exact element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Profile" element = {<Profile/>}/>
        <Route path = "/Favorites" element = {<Favorites/>}/>
        <Route path = "/Contact" element = {<ContactUs/>}/>
        <Route path = "/NewItem" element = {<NewItem/>}/>
        <Route path = "/SignInButton" element = {<SignInButton/>}/>
        <Route path = "/CreateAccount" element = {<CreateAccount/>}/>
      </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;
