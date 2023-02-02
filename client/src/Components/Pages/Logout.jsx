/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Log out page is just a confirmation for the user to log out. It
 * leverages the loggedIn state of the parent component which has an
 * effect on rendering navbar and testimony page, and also clears local
 * storage where the authorisation key is held.
 */

import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ isLoggedIn, makeLoggedIn }) {
  //navigation
  const navigate = useNavigate();

  //Fucntion called on log out button click.
  function doLogOut() {
    makeLoggedIn(false); //change parent component state.
    localStorage.clear(); //clear local storage of authorisation key.
    navigate("/"); //return to home page.
  }

  //Page Displays one simple button to change log in state for users.
  return (
    <div>
      <div className="flex flex-col py-12">
        {/**Confirm Log out with two buttons */}
        {/**Log out */}
        <div className="bg-[#143154] text-white w-64 rounded-2xl py-4 drop-shadow-lg md:w-52 hover:scale-105 ease-in-out duration-300">
          <button onClick={doLogOut}>Log Out</button>
        </div>

        {/**Stay Logged In */}
        <div className="bg-[#143154] text-white w-64 rounded-2xl py-4 drop-shadow-lg md:w-52 hover:scale-105 ease-in-out duration-300">
          <button onClick={navigate("/")}>Return</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
