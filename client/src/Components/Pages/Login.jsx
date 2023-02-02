/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Log in page displays a form with validation, that allows a user to
 * login with the credentials they used in the sign up process. Axios uses
 * JWT authentication which is later used when accessing functions on the
 * testimonials page.
 */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, makeLoggedIn }) {
  //States that hold email and password sign in details.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //React States
  const errorMessages = useState({});
  const isSubmitted = useState(false);

  //navigation
  const navigate = useNavigate();

  //Handle Submit is called when the user clicks "log in"
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Logged In Successfully");
        makeLoggedIn(true); //set the login state in parent component
        navigate("/"); //return to home page
      })
      .catch((error) => {
        alert("Invalid Login Attempt");
        console.log(error.message);
      });
  };

  // Generate JSX code for error message - shown when username or password is incorrect.
  const renderErrorMessage = (email) =>
    email === errorMessages.email && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form flex flex-col items-center bg-blue-50 my-20 md:py-6 mb-8 lg:w-11/12 xl:rounded-3xl xl:shadow-lg 2xl:w-[40rem] ">
      <h1 className="font-[Rancho] text-6xl py-4 xl:text-left">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container font-[Roboto]">
          <label>Email-Address: </label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container font-[Roboto]">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container ">
          <input
            className="button-container flex  bg-[#143154] text-white w-8/12 rounded-3xl py-3.5 drop-shadow-lg md:w-2/4  xl:w-60 items-center hover:scale-105 ease-in-out duration-300"
            type="submit"
          />
        </div>
      </form>
    </div>
  );

  //Final code for redering this component.
  return (
    <div className="login-form">
      {isSubmitted ? ( //ternary operand renders "user successfully logged in after submission, otherwise shows the form."
        <div classname=" font-[Rancho] text-6xl">
          User is successfully logged in
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
}

export default Login;
