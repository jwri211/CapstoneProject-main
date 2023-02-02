/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * The contact page component is similar to the donate component in that
 * it is a form that will send an email to the foundation with the data that
 * is in the fields of the form. Its purpose is to be able to get in touch
 * with the company to ask questions or make comments. It is coded in much 
 * the same way that the donation form is.
 */

import React, { useRef } from "react";
//import webhook package from emailJS
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  // Function to handle the fom submission
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // service id
        "service_6t3tfwp",
        // template id
        "template_ps4u10g",
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
  // JSX code for contact form
  return (
    <div className="flex flex-col items center">
      <div className="flex flex-col justify-center items-center align-items">
        <div className="flex flex-col justify-center items-center align-items py-6">
          <h1 className="font-[Rancho] my-10 text-5xl lg:text-7xl">
            Get In Touch With Us
          </h1>
          <p className="font-[Roboto] p-5 w-3/4 text-center font-light text-lg md:w-1/2 xl:text-xl  ">
            Got questions? Do you need help or advice? Would you like to know
            more information? Please don’t hesitate to contact us, were happy to
            help answer any questions you might have.
          </p>
        </div>
        <div className="form flex flex-col items-center bg-blue-50 my-8 py-6 2xl:w-3/4 2xl:rounded-3xl sm:w-full md:w-full sm:rounded-none  md:rounded-none xl:shadow-lg 2xl:w-[70rem] ">
          <form ref={form} onSubmit={sendEmail}>
            <h3 classname="font-[Roboto] text-md font-normal xl:text-lg">
              Contact Us
            </h3>
            <h1 className="text-4xl font-[Rancho] py-5 xl:text-5xl">
              Send Us A Message
            </h1>
            <h4 classname="font-[Roboto] font-light form flex flex-col ">
              We will get back to you as soon as we can
            </h4>
            <div className="input-container font-[Roboto]">
              <label>Name:</label>
              <input
                classname=" rounded-[12px]"
                type="name"
                name="name"
                required
              />
            </div>
            <div className="input-container font-[Roboto]">
              <label classname="">Email-Address: </label>
              <input type="email" name="email" required />
            </div>
            <div className="input-container font-[Roboto]">
              <label>Message :</label>
              <textarea rows="4" cols="50" name="message" required></textarea>
            </div>
            <div className="button-container items-center">
              <input
                className="button-container font-[Roboto] flex bg-[#143154] text-white rounded-3xl py-3.5 drop-shadow-lg w-40 xl:w-60 items-center hover:scale-105 ease-in-out duration-300"
                type="submit"
              />
            </div>
          </form>
        </div>
        {/* Donation section */}
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-100 to-pink-100 w-10/12 py-4 my-6 rounded-2xl drop-shadow-lg md:rounded-none md:w-full md:py-12 xl:w-11/12 xl:rounded-3xl xl:shadow-lg 2xl:w-[88rem]">
          <h3 className="text-sm pb-4 font-[Roboto] font-medium xl:text-lg">
            DONATION
          </h3>
          <h1 className="text-6xl py-4 font-[Rancho] md:pt-8">Help Us</h1>
          <p className="text-lg py-4 w-3/4 font-[Roboto] font-light pb-6 xl:text-xl">
            Ruach Elohim Foundation is therefore registered as a Welfare
            Organisation in Namibia with the aim of improving the life of
            abandoned or orphaned babies and babies in need of care and to
            prevent infant mortality, child abuse and neglect. The Foundation
            depends entirely on donations to make a difference in the lives of
            these vulnerable babies and invite the public of Namibia to help
            with donations to this life-saving, important initiative.{" "}
          </p>
          <a
            className="bg-[#143154] text-white w-64 rounded-2xl py-4 drop-shadow-lg md:w-52 hover:scale-105 ease-in-out duration-300"
            href="https://gofund.me/7719fed5"
          >
            <button className="font-sans font-medium">DONATE</button>
          </a>
        </div>

        <div className="py-12">
          <div className="form flex flex-col items-center bg-[#7DA5D366]   sm:w-full md:w-full  drop-shadow-lg md:bg-blue-50  sm:rounded-none  md:rounded-nonel 2xl:rounded-3xl  xl:w-[45rem]">
            <h4 classname="font-[Roboto]">SOCIAL NETWORKS</h4>
            <h1 className="text-4xl font-[Rancho] py-4 xl:text-5xl">
              Connect With Us
            </h1>
            <h5 classname="font-[Roboto]">Follow us on our social networks</h5>
            <a
              href="https://www.facebook.com/people/Ruach-Elohim-Foundation/100066462733417/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./facebook.png" alt="R & E Foundation Facebook Page" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
