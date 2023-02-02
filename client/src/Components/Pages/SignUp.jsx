/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Sign up page displays a form that allows any user to sign up to the 
 * website's mongo database of users. Signing up allows the user to then
 * log in. It is a functional component that uses webhooks and axios via
 * our back end API
 */

import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  //State hooks used to set the email and password sent via Axios.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Axios request
  async function addUser() {
    axios
      .post("http://localhost:4000/api/user/signup", {
        email: email,
        password: password,
      })
      //what it does with successfull POST
      .then(function(response) {
        console.log(response);
        console.log("user created successfully");
        alert("User created");
        document.location.href = "/login";
      })
      .catch((error) => {
        alert("other error");
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert("response error");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          alert("request error");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  // JSX code for sign-up form. It is responsive and flexible.
  return (
    <div className="form flex flex-col items-center bg-blue-50 mb-24 xl:rounded-3xl xl:shadow-lg 2xl:w-[40rem] ">
      <form>
        <h1 className="font-[Rancho] text-6xl py-4 xl:text-center">Sign-Up</h1>
        <div className="input-container font-[Roboto]">
          <label>Email-Address: </label>
          <input
            type="email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>
        <div className="input-container font-[Roboto]">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <p className="button-container font-[Roboto]">
          Already registered... <a href="/login">Login?</a>
        </p>
        <div className="button-container items-center">
          <input
            onClick={addUser}
            className="button-container font-[Roboto] flex  bg-[#143154] text-white w-8/12 rounded-3xl py-3.5 drop-shadow-lg md:w-2/4  xl:w-60 items-center hover:scale-105 ease-in-out duration-300"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
