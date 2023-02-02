/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Create Testimony is a class based component that allows a signed in
 * user to add a testimony to the website via axios and mongo db. It 
 * uses a form with three fields that accept any input type.
 */

import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

//We use a class based component to create the form
export default class Create extends React.Component {
  //Class object constructor method sets up the variable for the different states of the articles.
  constructor(props) {
    super(props);
    //note - these have to match the 'name' fields on the form.
    this.state = {
      text: "",
      name: "",
      year: "",
    };
    //sets the handlers for event changers.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Updates the values of the forms fields when user types in them.
  handleChange(event) {
    //maps the events to their respective targets using the name fields.
    this.setState({ [event.target.name]: event.target.value });
  }
  //this is where the call to the database will be made when the submit button is clicked.
  handleSubmit(event) {
    //prevents default values being used
    event.preventDefault();
    //attempt to send post request to server
    axios
      .post(
        "http://localhost:4000/api/content",
        {
          text: this.state.text,
          name: this.state.name,
          year: this.state.year,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      //what it does with successfull POST
      .then(function(response) {
        console.log(response);
        alert("Testimony created");
        Navigate("/testimony");
      })
      //What it does with errors.
      .catch(function(error) {
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
  //Render deals with displaying the form to the user.
  render() {
    return (
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-6xl py-4 pb-12 w-[22rem] font-[Rancho] md:text-8xl md:w-[36rem] 2xl:text-8xl">
            Add Testimony
          </h1>
        </div>
        <div className="form flex flex-col items-center  py-4 my-6 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100  md:rounded-none md:w-full sm:w-3/4 sm:p-20  xl:rounded-3xl xl:shadow-lg  2xl:w-[55rem]">
          {/*Links the form submission to the above handle.*/}
          <form onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                Text:
                <input
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Insert quote here"
                  value={this.state.text}
                  onChange={this.handleChange}
                  name="text"
                />
              </label>
            </div>
            <br></br>

            <div className="input-container">
              <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                Name:
                <input
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="i.e 19 year old birth mother"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                />
              </label>
            </div>
            <br></br>

            <div className="input-container">
              <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                Year:
                <input
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="i.e. 2022"
                  value={this.state.year}
                  onChange={this.handleChange}
                  name="year"
                />
              </label>
            </div>
            <br></br>
            <input
              className="button-container flex bg-[#143154] text-white w-8/12 rounded-3xl py-3.5 drop-shadow-lg md:w-2/4  xl:w-60 items-center "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
