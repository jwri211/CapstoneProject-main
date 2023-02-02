/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Functional component that allows a user to edit one specific testimonial.
 * Gets linked to from the testimonys page and uses the _id field of the 
 * testimony to get the individual content from the database via Axios.
 * Each field of the testimony can be updated individually or all at once, and
 * leaving a field blank will keep the existing field's value intact.
 */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Displays a form with three fields that allows values to be updated.
function Update() {
  const { testimonyID } = useParams(); //get the testimony id from the url
  const [testimony, setTestimony] = useState([]); //set the testimony object, based on id above.
  
  const navigate = useNavigate();

  //Axios call when component first loads to get the testimony.
  useEffect(() => {
    //Ask Axios politely to get just the testimony with this ID number.
    Axios.get(`http://localhost:4000//api/content/${testimonyID}`).then(
      (response) => {
        //assign the result to the the testimony variable
        setTestimony(response.data);
      })
      .catch((error) => {
        alert("Error retrieving testimonial: " + error);
        console.log(error); 
      });
  }, []);

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //call axios, pass in all the fields of the testimony object (except id and vers.)
    Axios.patch(
      `http://localhost:4000/api/content/${testimonyID}`,
      {
        //send all testimony object fields.
        text: testimony.text,
        name: testimony.name,
        year: testimony.year,
      },
      {
        headers: { //send header for pathing authorisation in back end routes.
          "x-access-token": localStorage.getItem("token"),
        },
      }
    ).then(function(response) {
      console.log(response);
      alert("Testimony Updated"); //pop up
      navigate("/testimony"); //return to testimonial page
    });
  };

  return (
    <div>
      {/**Title */}
      <div className="flex justify-center items-center">
        <h1 className="text-6xl py-4 pb-12 w-[22rem] font-[Rancho] md:text-8xl md:w-[36rem] 2xl:text-8xl">
          Edit Testimony
        </h1>
      </div>
      <div className="form flex flex-col items-center  py-4 my-6 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100  md:rounded-none md:w-full sm:w-3/4 sm:p-20  xl:rounded-3xl xl:shadow-lg  2xl:w-[55rem]">
      {/**Form for updating each component. */}
      {/**Each change directly modifies the fields of the testimony object.*/}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/**Replace the text in the quote itself */}
          <div className="input-container">
            <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              Update Quote text:
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder={testimony.text}
                onChange={(e) => {
                  testimony.text = e.target.value;
                }}
              />
            </label>
            <br></br>
          </div>
          {/**Replace the name (or description) of the person quoted.*/}
          <div className="input-container">
            <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              Update Name:
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder={testimony.name}
                onChange={(e) => {
                  testimony.name = e.target.value;
                }}
              />
            </label>
            <br></br>
          </div>
          {/**Replace year associated with the quote.*/}
          <div className="input-container">
            <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              Update Year:
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder={testimony.year}
                onChange={(e) => {
                  testimony.year = e.target.value;
                }}
              />
            </label>
            <br></br>
          </div>
          <div className="flex justify-center">
            <input
              className="button-container flex bg-[#143154] text-white w-8/12 rounded-3xl py-3.5 drop-shadow-lg md:w-2/4  xl:w-60 items-center "
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Update;
