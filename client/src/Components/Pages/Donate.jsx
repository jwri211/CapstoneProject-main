/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Donation page is a functional component that allows a user to fill
 * in a form with information about goods they would like to donate to
 * the Foundation. It sends an email to a gmail address used by the foundation
 * with details from the form. This is done via an email webhook.
 */

import React, { useRef } from "react";
//import webhook package from emailJS
import emailjs from "@emailjs/browser";

function Donate() {
  const form = useRef();
  // Function to handle the fom submission
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // service id
        "service_6t3tfwp",
        // template id
        "template_0ajimly",
        form.current,
        // public key
        "7KYv7haKswtvINS0t"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted");
        },
        (error) => {
          console.log(error.text);
          alert("Error with submission");
        }
      );
    // reset for after submition attempt
    e.target.reset();
  };
  // JSX code for donating goods form
  return (
    <div>
      <div className="flex justify-center">
        <div className="form flex flex-col items-center px-4 py-4 my-6 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100  md:rounded-none md:w-full sm:w-3/4 sm:p-20  xl:rounded-3xl xl:shadow-lg  2xl:w-[55rem]">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="font-[Rancho] text-4xl py-4 xl:text-5xl">
              Donating Goods
            </h1>
            <h4 className="p-5  text-center  ">
              Complete the form and someone will be in touch to confirm your
              goods donation.
            </h4>
            <div className="input-container">
              <label>First Name: </label>
              <input type="text" name="f_name" required />
              <label>Last Name: </label>
              <input type="text" name="l_name" required />
            </div>
            <div className="input-container">
              <label>Email-Address: </label>
              <input type="email" name="email" required />
            </div>
            <div className="input-container">
              <label>Contact Number: </label>
              <input type="tel" name="phone" required />
            </div>
            <div className="input-container">
              <label>Contact Address: </label>
              <textarea rows="4" cols="50" name="address" required></textarea>
            </div>
            <div className="input-container">
              <label>Items To Donate: </label>
              <textarea rows="4" cols="50" name="items" required></textarea>
            </div>
            <div className="input-container">
              <label>Additional Information:</label>
              <textarea rows="4" cols="50" name="message" required></textarea>
            </div>
            <div className="button-container">
              <input
                className="button-container flex  bg-[#143154] text-white w-8/12 rounded-3xl py-3.5 drop-shadow-lg md:w-2/4 xl:w-60 items-center hover:scale-105 ease-in-out duration-300"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
