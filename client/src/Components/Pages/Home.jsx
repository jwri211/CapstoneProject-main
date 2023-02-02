/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Functional component that renders the home page of the R&E Foundation.
 * This, like the rest of the site is styled with CDN version of tailwind and 
 * display the information immediately visible to site visitors. Contains all
 * relavant links to donation pages and goFundMe, and a modal of a video explaining
 * the foundations mission.
 */

import React, { useState } from "react";
import Modal from "../Modal";

//importing images for goal section
import Goal1 from "../images/awareness.png";
import Goal2 from "../images/improve.png";
import Goal3 from "../images/save-lives.png";
import BabyHands from "../images/babyHands.png";
import Staff from "../images/staff-2.jpg";
import Sponsor1 from "../images/sponsor-1.png";
import VideoShot from "../images/R&E-video_Moment.jpg";

function Home() {
  //create state to show modal when action set
  const [showModal, setShowModal] = useState(false);

  //function to reset state
  const handleOnClose = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center w-screen">
      {/* Hero section */}
      <div className="flex flex-col items-center xl:flex-row xl:w-3/4 xl:my-8 2xl:w-[74rem]">
        <div className="flex flex-col py-6 items-center w-10/12 sm:w-4/6 xl:items-start">
          <h1 className="text-7xl py-4 font-[Rancho] md:text-8xl xl:text-7xl xl:text-left 2xl:text-8xl">
            Safe Haven Baby Boxes
          </h1>
          <p className="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-left xl:text-xl">
            Ruach Elohim Foundation is a voluntary association focussing on the
            prevention of baby dumping
          </p>
          <a
            className="bg-[#143154] text-white w-8/12 rounded-2xl py-3.5 drop-shadow-lg md:w-2/4 xl:w-44 hover:scale-105 ease-in-out duration-300"
            href="https://gofund.me/7719fed5"
          >
            <button className="font-[Roboto] font-medium">DONATE</button>
          </a>
        </div>
        <img
          className="invisible w-0 h-0 rounded-3xl xl:visible xl:w-2/3 xl:h-4/5"
          src={BabyHands}
          alt="baby hands"
        />
      </div>
      {/* Goal section */}
      <div className="flex flex-col items-center bg-blue-50 my-8 py-6 xl:w-3/4 xl:rounded-3xl xl:shadow-lg 2xl:w-[74rem]">
        <h3 className="text-md py-4 font-[Roboto] font-normal xl:text-lg">
          MORE INFO
        </h3>
        <h1 className="text-6xl py-4 font-[Rancho] xl:text-5xl">Our Goals</h1>
        <p className="text-lg py-4 w-80 font-[Roboto] font-light md:w-1/2 xl:text-xl">
          To accommodate and care for unwanted, abandoned, abused and neglected
          babies from all over Namibia.
        </p>
        {/* Goals container */}
        <div className="flex flex-col md:flex-row items center">
          {/* Goal 1 container */}
          <div className="flex flex-col items-center md:w-2/6">
            <div className="w-28 mt-6 py-4 px-4 bg-white rounded-full md:w-2/6 xl:py-8 xl:px-8 xl:w-32">
              <img src={Goal1} alt="awareness" />
            </div>
            <p className=" text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
              To raise awareness in Namibia of this horrific problem the country
              and innocent babies are facing.
            </p>
          </div>
          {/* Goal 2 container */}
          <div className="flex flex-col items-center md:w-2/6">
            <div className="w-28 mt-6 py-4 px-4 bg-white rounded-full md:w-2/6 xl:py-8 xl:px-8 xl:w-32">
              <img src={Goal3} alt="Save lives" />
            </div>
            <p className="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
              A plan to save the lives of innocent little babies as well as to
              legally give the desperate mother who wants to stay anonymous a
              safe option to surrender her unplanned baby.
            </p>
          </div>
          {/* Goal 3 container */}
          <div className="flex flex-col items-center md:w-2/6">
            <div className="w-28 mt-6 py-4 px-4 bg-white rounded-full md:w-2/6 xl:py-8 xl:px-8 xl:w-32">
              <img src={Goal2} alt="Improve" />
            </div>
            <p className="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
              Improving the life of abandoned or orphaned babies along with
              babies in need of care to prevent infant mortality, child abuse
              and neglect.
            </p>
          </div>
        </div>
      </div>
      {/* founder section */}
      <div className="flex flex-col items-center bg-white my-6 pb-6 pt-2 w-10/12 rounded-2xl drop-shadow-lg md:flex-row md:bg-opacity-0 xl:w-3/4 2xl:w-[74rem]">
        <div className="flex flex-col items-center md:items-start md:text-left md:w-1/2">
          <h3 className="text-sm pb-4 font-[Roboto] font-medium xl:text-lg">
            FOUNDER
          </h3>
          <h1 className="text-6xl py-4 w-3/4 font-[Rancho]">
            Ruach Elohim Foundation
          </h1>
          <p className="text-lg py-4 w-3/4 font-[Roboto] font-light xl:text-xl">
            Your support is much needed to help us raise more awareness to
            prevent baby dumping in Namibia as well as to take care of our
            precious babies
          </p>
            <button className="font-sans font-medium w-full h-full bg-[#143154] text-white w-64 rounded-2xl py-3.5 drop-shadow-lg md:text-center md:w-4/6 xl:w-56 hover:scale-105 ease-in-out duration-300 cursor-pointer"
            onClick={() => setShowModal(true)}
            >
              WATCH VIDEO
            </button>
        </div>
        {/* video section  */}
        <div className="flex items-end">
          <div className="w-fit mt-6 md:ml-12">
            <img
              className="w-[16rem] md:w-[26rem] 2xl:2-[42rem] rounded-xl"
              src={VideoShot}
              alt="video screenshot"
            />
          </div>
        </div>
      </div>
      {/* About us section */}
      <div className="flex flex-col bg-gradient-to-r from-orange-100 to-pink-100 items-center py-5 my-4 md:pb-12 xl:w-11/12 xl:rounded-2xl xl:shadow-lg 2xl:w-[88rem]">
        <h3 className="text-sm pb-4 font-[Roboto] font-medium xl:invisible">
          WHO WE ARE
        </h3>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center md:w-1/2 xl:w-1/2">
            <img
              className="w-80 h-60 rounded-xl drop-shadow-lg xl:w-[36rem] xl:h-[30rem]"
              src={Staff}
              alt="Staff"
            />
          </div>
          <div className="flex flex-col items-center md:w-1/2 md:items-start md:text-left md:ml-10 xl:w-1/3 xl:ml-[12rem]">
            <h3 className="text-md pb-4 font-[Roboto] font-medium invisible xl:visible xl:text-lg">
              WHO WE ARE
            </h3>
            <h1 className="text-5xl py-4 font-[Rancho] xl:text-6xl">
              About Us
            </h1>
            <p className="text-lg py-4 w-3/4 font-[Roboto] font-light md:pt-0 xl:text-xl xl:py-4">
              Ruach Elohim Foundation was established in 2018 and is a Voluntary
              Association in Namibia focussing on the awareness of baby dumping,
              as well as the care of unwanted, abandoned, abused and neglected
              babies in Namibia. Ruach Elohim means “Breath of God.”
            </p>
          </div>
        </div>
      </div>
      {/* Sponsor section */}
      <div className="flex flex-col items-center bg-white w-72 py-4 my-6 rounded-2xl drop-shadow-lg md:w-2/6 xl:w-96">
        <h3 className="text-sm pb-4 font-sans font-medium">OUR SPONSORS</h3>
        <img className="w-60 h-52 mb-4" src={Sponsor1} alt="double century" />
      </div>
      {/* Donation section */}
      <div className="flex flex-col items-center bg-[#7DA5D366] w-10/12 py-4 my-6 rounded-2xl drop-shadow-lg md:bg-blue-50 md:rounded-none md:w-full md:py-12 xl:w-11/12 xl:rounded-3xl xl:shadow-lg xl:bg-[#7DA5D366] 2xl:w-[88rem]">
        <h3 className="text-sm pb-4 font-[Roboto] font-medium xl:text-lg">
          DONATION
        </h3>
        <h1 className="text-6xl py-4 font-[Rancho] md:pt-8">Help Us</h1>
        <p className="text-lg py-4 w-3/4 font-[Roboto] font-light pb-6 xl:text-xl">
          Ruach Elohim Foundation is therefore registered as a Welfare
          Organisation in Namibia with the aim of improving the life of
          abandoned or orphaned babies and babies in need of care and to prevent
          infant mortality, child abuse and neglect. The Foundation depends
          entirely on donations to make a difference in the lives of these
          vulnerable babies and invite the public of Namibia to help with
          donations to this life-saving, important initiative.{" "}
        </p>
        <a
          className="bg-[#143154] text-white w-64 rounded-2xl py-4 drop-shadow-lg md:w-52 hover:scale-105 ease-in-out duration-300"
          href="https://gofund.me/7719fed5"
        >
          <button className="font-sans font-medium">DONATE</button>
        </a>
      </div>
      {/* video player modal */}
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
}

export default Home;
