/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Testimony functional component gets all he testimonials held in mongo 
 * and displays each one on the page. It uses axios to call the API in 
 * the back end and retrieve the information in the database.
 * As per the user story for administrators in our planning document,
 * adminstrators can log in and then be able to add, remove or edit the 
 * testimonials seen on this page, to keep th website up to date.
 * =================================================================
 * NOTE:As per the final development iteration, any logged in user has access to
 * the CRUD funtionality.
 */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//stylised mages to be used on each testimonial card - credit to Dwain for the artwork.
import mother1 from "../images/01-birthMom.jpg";
import mother2 from "../images/02-birthMom.jpg";
import mother3 from "../images/03-birthMom.jpg";
import mother4 from "../images/04-birthMom.jpg";
import mother5 from "../images/05-birthMom.jpg";

//create and populate an array of mother images.
var picsArray = [mother1, mother2, mother3, mother4, mother5];

//Functional component deconstructs the "loggedIn" property to render different options.
function Testimony({ isLoggedIn }) {
  //Uses a webhook to get and set the list of testimonials.
  const [testimonyList, setTestimonyList] = useState([]);

  //navigation or resetting the page after a successful edit.
  const navigate = useNavigate();

  //Using Axios send an http request to get all content..
  useEffect(() => {
    Axios.get("http://localhost:4000/api/content")
      .then((response) => {
        setTestimonyList(response.data);
      })
      .catch((error) => {
        alert("Error retrieving testimonials: " + error);
        console.log(error); 
      });
  }, []);

  /** ADMIN FUNCTION for deleting an article based on article id. 
   * Passes in the authorisation header so only logged in users can do this.  */
  const deleteArticle = (id) => {
    var result = window.confirm( //confirms deletion with user.
      "Are you sure you want to delete this testimony?"
    );
    if (result) {
      //Make a delete request via axios
      Axios.delete(`http://localhost:4000/api/content/${id}`, {
        headers: { 
          "x-access-token": localStorage.getItem("token"),
        },
      });
      //Tells the user the article has been deleted and refreshes the page.
      alert("Article Deleted");
      navigate("/testimony");
    }
    //if for some reason the article is not deleted alert the user.
    alert("Failed to delete article");
    navigate("/testimony");
  };

  //For placement of PICTURE element.
  function placePicture(key) {
    /**this just makes sure the images are automatically and infinitely 
    selected as the 5 images in the array on repeat.
    uses the testmionial key and the remainder when divided by 5.*/
    var pickKey = key % 5;
    return (
      <div className="hidden md:flex px-14">
        <img
          className="flex-shrink-0 rounded-full w-44 h-44"
          src={picsArray[pickKey]}
          alt="Testimonial Mother"
        />
      </div>
    );
  }

  //For placement of TEXT element. Uses blockquote and a svg of a quotation mark.
  function placeText(value) {
    return (
      <div className=" flex-col px-10 py-10 text-left">
        <blockquote class="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
          <svg
            aria-hidden="true"
            class="w-10 h-10 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p>{value.text}</p>
        </blockquote>

        <div className="text-md font-bold pt-10">
          <h3>{value.name}</h3>
          <h3>{value.year}</h3>
        </div>
      </div>
    );
  }

  //ADMIN ONLY For placement of Create button - visible only if logged in.
  function placeCreateButton() {
    return (
      <div className="flex justify-center items-center">
        <Link
          className="bg-[#143154] text-white rounded-2xl py-3.5 px-3.5 drop-shadow-lg hover:scale-105 ease-in-out duration-300"
          to="/create"
        >
          <button className="font-[Roboto] font-medium">Add Testimony</button>
        </Link>
      </div>
    );
  }

  //For placement of ADMIN buttons - edit and delete - visible only if logged in.
  function placeAdminButtons(value) {
    return (
      <div className="flex space-x-4">
        {" "}
        {/**Wrap both buttons in one div and align them horizontally */}
        <div className="flex justify-center items-center">
          {" "}
          {/**Button 1 - Edit Testimony*/}
          <Link
            className="bg-[#143154] text-white rounded-2xl py-3.5 px-3.5 drop-shadow-lg hover:scale-105 ease-in-out duration-300"
            to={{ pathname: `/edit/${value._id}` }}
          >
            <button className="font-[Roboto] font-medium">Edit</button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          {/**Button 2  - Delete Testimony*/}
          <div className="bg-[#143154] text-white rounded-2xl py-3.5 px-3.5 drop-shadow-lg hover:scale-105 ease-in-out duration-300">
            <button
              className="font-[Roboto] font-medium"
              onClick={() => deleteArticle(value._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  //What the component actually returns.
  return (
    <div>
      {/**ADMIN ONLY testimonial creation button (HIDDEN IF NOT LOGGED IN) */}
      <div>{isLoggedIn ? placeCreateButton() : null}</div>
      {/**Header */}
      <div className="flex justify-center items-center pt-12">
        <h1 className="text-6xl py-4 w-[22rem] font-[Rancho] md:text-8xl md:w-[36rem] 2xl:text-8xl">
          Testimonials
        </h1>
      </div>
      <div className="flex justify-center items-center pb-12">
        <p className="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
          Feedback from the people who have used our service
        </p>
      </div>
      {/**Returns all testimonials in the database. */}
      {testimonyList.map((value, key) => {
      /**Each returned value is one testimonial from the DB.
      Checks if the key value is odd or even and swaps the styling appropriately. */
        if (key % 2 === 0) {
          return (
            <div key={key}>
              <div className="flex-col justify-evenly align-items items-center bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-3xl my-10 py-10">
                <div className="flex flex-row justify-evenly align-items items-center">
                  {placePicture(key)}
                  {placeText(value)}
                </div>
                {/** Admin button hidden unless authorised */}
                <div className="flex flex-row justify-evenly align-items items-center">
                  {isLoggedIn ? placeAdminButtons(value) : null}
                </div>
              </div>
            </div>
          );
        }
        //Alternate style  - different background colour & swapped picture/text positions.
        return (
          <div key={key}>
            <div className="flex-col justify-evenly align-items items-center bg-gradient-to-r from-orange-100 to-pink-100 shadow-xl rounded-3xl my-10 py-10">
              <div className="flex flex-row justify-evenly align-items items-center">
                {placeText(value)}
                {placePicture(key)}
              </div>
              <div className="flex flex-row justify-evenly align-items items-center">
                {/** Admin button hidden unless logged in */}
                {isLoggedIn ? placeAdminButtons(value) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Testimony;
