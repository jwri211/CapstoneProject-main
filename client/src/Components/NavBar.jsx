/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Navbar.jsx is the navigation component that sits at the top of the
 * screen on all pages.
 */

import React,{useState} from "react";
import { Link } from "react-router-dom";

import Logo from "./images/logo-REF.jpg"

/**The function takes and deconstructs a property that tells it if 
the user is logged in or not. This is based on the state of app.js*/
function NavBar({isLoggedIn}) {
  //links to be used when *not* logged in
  let Links=[
         {name:"Home", link:"/"},
         {name:"About", link:"/about"},
         {name:"Contact", link:"/contact"},
         {name:"Donate", link:"/donate"},
         {name:"Testimonials", link:"/testimony"},
         {name:"Sign Up", link:"/signup"},
         {name:"Log In", link:"/login"},
       ]
  //links to be used when logged in
  let loggedInLinks=[
        {name:"Home", link:"/"},
        {name:"About", link:"/about"},
        {name:"Contact", link:"/contact"},
        {name:"Donate", link:"/donate"},
        {name:"Testimonials", link:"/testimony"},
        {name:"Log Out", link:"/logout"},
      ]
  
  //This state is used to open and close the nav menu on small screens.
  const [show,setShow] =useState(false)

  //Displays navbar links for medium sized screens and above, based on whether or not the user is logged in.
  function renderBigLinks(){
    if(isLoggedIn){
      return (
        <div className="hidden md:flex items-center justify-between text-base ">
          <ul className="hidden md:flex items-center justify-between text-base px-4.5 space-x-16">
            {
              loggedInLinks.map((link)=>(
              <li key={link.name} className="hover:-translate-y-1 scale-110">
                <Link to={link.link} className="hover:-translate-y-1 scale-110">{link.name}</Link>
              </li>
              ))
          }
          </ul>
        </div>
        )
    }
    //Where the user is not logged in, render different links.
    return (
      <div className="hidden md:flex items-center justify-between text-base ">
        <ul className="hidden md:flex items-center justify-between text-base px-4.5 space-x-16">
        {
          Links.map((link)=>(
            <li key={link.name} className="hover:-translate-y-1 scale-110">
              <Link to={link.link} className="hover:-translate-y-1 scale-110">{link.name}</Link>
            </li>
            ))
        }
        </ul>
      </div>
      )
  }

  //Displays navbar links for small screens, where the menu is vertical and clicking a link closes it.
  function renderSmallLinks(){
    if(isLoggedIn){ //shows different links based on whether the user is logged in or not.
      return(
      show?<div className="mobile-menu md:hidden">
        <ul className="md:block">
          {
            loggedInLinks.map((link)=>(
              <li key={link.name} className="flex justify-center py-4 px-4">
                <Link to={link.link} onClick={()=> setShow(false)}>{link.name}</Link>
              </li>
              ))
          }
        </ul>
      </div>:null
      )
    }
    return(
      show?<div className="mobile-menu md:hidden">
        <ul className="md:block">
          {
            Links.map((link)=>(
              <li key={link.name} className="flex justify-center py-4 px-4">
                <Link to={link.link} onClick={()=> setShow(false)}>{link.name}</Link>
              </li>
              ))
          }
        </ul>
      </div>:null
    )
  }

  return (
    <div > {/** Div that the return function needs for the component.  */}
    {/** Used for the logo that only appears above the navbar on medium screens */}
      <div className="hidden md:flex justify-center pt-5 lg:hidden"> 
        <img src={Logo} className="w-32 h-28 drop-shadow-md rounded-xl" alt="R&E Logo"></img>
      </div>
      <nav>
        {/** wrap everything here. try max-w-7xl. px-24 is max padding. border red is for guidance - remove in prod.*/}
        <div className="max-w-3/4 mx-auto  pt-5 px-4">
          {/** To contain all the items and apply flex styling.  */} 
          <div className="flex justify py-5 space-x-4 text-[#143154] justify-center">
            <div className="flex space-x-2 items-center">
              {/** Logo  */}
              <div className="sm:flex md:hidden lg:flex"> 
                <img src={Logo} className="w-32 h-28 drop-shadow-md rounded-xl" alt="R&E Logo"></img>
              </div>

              {/** Title hidden on md screens only*/}
              <div className="text-2xl px-3 md:hidden lg:flex" >
                R & E FOUNDATION 
              </div>
            </div>

            {/** main links - hidden on small screens but visible on md upwards*/}
            
            {renderBigLinks()}

            {/** Mobile button */}
            <div className="md:hidden flex-items-center">
              <button onClick={()=> setShow(!show)}>
                <svg classname="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
              </button>
            </div>  
          </div>

          {/** Mobile menu */}
          {renderSmallLinks()}
        </div>       
      </nav>
    </div>

  );
  }
export default NavBar;