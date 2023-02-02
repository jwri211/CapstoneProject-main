/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * App.js is the main react component that draws the background, navbar,
 * footer and renders all other components. The "loggedIn" state is passed
 * down to child components to allow different rendering behavior.
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import all linked pages.
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Donate from "./Components/Pages/Donate";
import Testimony from "./Components/Pages/Testimony";
import SignUp from "./Components/Pages/SignUp";
import Login from "./Components/Pages/Login";
import Logout from "./Components/Pages/Logout";
import Footer from "./Components/Footer";
import Create from "./Components/Pages/CreateTestimony";
import Edit from "./Components/Pages/EditTestimony";

import "./index.css";
import "./App.css";

function App() {

  //This state controls the view of some components based on the user being logged in.
  const [loggedIn, setLoggedIn] = useState();

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={loggedIn}/>
        {/**Routes connect the app to all the other pages. Some routes accept the loggedIn state as properties. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/testimony" element={<Testimony isLoggedIn={loggedIn}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login isLoggedIn={loggedIn} makeLoggedIn={setLoggedIn}/>} />
          <Route path="/logout" element={<Logout isLoggedIn={loggedIn} makeLoggedIn={setLoggedIn}/>} />
          
          {/**Ideally for ADMIN access only */}
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:testimonyID" element={<Edit />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
