/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * The about page component is styled similarly to the home page and contains
 * much more information about the foundation. It uses a package that hides some
 * of the text in the large paragraph section in the middle for accessinbility.
 */

import React from "react";
import { Link } from "react-router-dom";

import ShowMoreText from "react-show-more-text";

import Staff1 from "../images/staff-1.jpg";
import Staff3 from "../images/staff-3.jpg";
import Baby1 from "../images/Baby-sleep.jpg";
import BabyBox from "../images/baby-box.jpg";
import Founder1 from "../images/Ronel-Headshot.png";
import Founder2 from "../images/Dick-Headshot.png";

function About() {
  return (
    <div className="flex flex-col items-center">
      {/* hero section */}
      <div className="flex items-center py-12">
        <h1 className="text-6xl py-4 w-[22rem] font-[Rancho] md:text-8xl md:w-[36rem] 2xl:text-8xl">
          About Ruach Elohim Foundation
        </h1>
      </div>
      {/* About section */}
      <div className="flex flex-col items-center bg-blue-50 w-screen py-4 pb-14 lg:w-10/12 lg:rounded-xl lg:shadow-lg xl:w-3/4 2xl:w-[74rem]">
        <div className="flex flex-col items-center pb-10">
          <div className="flex flex-col items-center">
            <h3 className="text-md py-4 font-[Roboto] font-normal 2xl:text-xl">
              ABOUT US
            </h3>
            <h1 className="text-5xl py-4 font-[Rancho] xl:pb-8 xl:text-6xl">
              The Founders
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-16">
            <div className="flex flex-col items-center">
              <img
                className="w-[20rem] h-[16rem] rounded-2xl my-4"
                src={Founder1}
                alt="Ronel (Founder)"
              />
              <h3 className="text-md py-2 font-[Roboto] font-medium xl:text-lg">
                CO-FOUNDER
              </h3>
              <p className="text-xl py-2 font-[Roboto] font-light xl:text-2xl">
                Ronel Peters
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-[20rem] h-[16rem] rounded-2xl my-4"
                src={Founder2}
                alt="Dick (Founder)"
              />
              <h3 className="text-md py-2 font-[Roboto] font-medium xl:text-lg">
                CO-FOUNDER
              </h3>
              <p className="text-xl py-2 font-[Roboto] font-light xl:text-2xl">
                Dick Peters
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-3/4">
          <h1 className="text-5xl py-4 font-[Rancho] xl:pb-8 xl:text-6xl">
            Who We Are
          </h1>
          {/* Collapsible component with paragraph nested */}
          <ShowMoreText
            className="text-lg py-2 font-[Roboto] font-light text-left 2xl:text-xl"
            lines={20}
            more="Read More"
            less="...Show Less"
            anchorClass="text-blue-500 cursor-pointer"
            // onClick={this.executeOnClick}
            expanded={false}
            width={0}
          >
            {
              <p>
                Ruach Elohim Foundation was established in 2018 and is a
                Voluntary Association in Namibia focussing on the awareness of
                baby dumping, as well as the care of unwanted, abandoned, abused
                and neglected babies in Namibia. Ruach Elohim means “Breath of
                God.”
                <br /> <br />
                The founders of this Foundation, Dick and Ronel Peters has
                opened their hearts and their home to accommodate and care for
                unwanted, abandoned, abused and neglected babies from all over
                Namibia. They have also been registered by the Directorate Child
                Welfare Services as Foster Parents and by the Ministry of Gender
                Equality and Child Welfare as a Place of Safety. <br /> <br />
                They have started an awareness campaign in 2019 and travelled
                through Namibia to raise awareness of this horrific problem the
                country and innocent babies are facing. Namibia has
                decriminalized baby dumping in February 2019, which means
                mothers are allowed to leave their unharmed babies anonymously
                at a safe place like a hospital, police station or safe haven
                like Ruach Elohim Foundation without facing prosecution.
                Although the law has changed specifically to prevent baby
                dumping, several dumping sadly still occurred. <br /> <br /> The
                “Baby Saver Box” initiative was born in October 2019 due to the
                constant rise of baby dumping in Namibia. Since 2016 more than
                200 babies have been abandoned by dumping, most of them not
                surviving. Because of this shocking figure, a plan was needed to
                save the lives of innocent little babies as well as to legally
                give the desperate mother who wants to stay anonymous a safe
                option to surrender her unplanned baby. The Baby Saver Box is
                therefore a safe alternative option for mothers who does not
                want their babies or cannot care for them to leave their babies
                safely and anonymously instead of killing or recklessly dumping
                them. <br /> <br /> The Baby Saver Box is situated on the corner
                of Dr Schwietering- and Bottle Tree Str in Ocean View,
                Swakopmund and is available to desperate mothers 24 hours of
                every day. Should a baby be placed in the Box, the box will lock
                automatically, the door will not be able to open from the
                outside anymore. The baby is safe inside. A message will be sent
                via sms to eight different recipients who will immediately
                respond. Within minutes the baby will be removed and taken to a
                hospital to be examined by a Medical Doctor to make sure the
                baby is healthy and in good condition and given treatment if
                need be. A Social Worker will be informed and once the baby is
                discharged from hospital, the baby will be put into a Place of
                Safety until all legal procedures are done and the baby can be
                adopted into a loving family. Free transportation to and from
                the Baby Saver Box is also available for desperate mommies who
                cannot afford transportation costs. <br />
                <br /> Ruach Elohim Foundation acts as one of several Places of
                Safety in Namibia, but focus specifically on vulnerable babies
                between the ages of 0 – 2 years. Apart from providing in their
                basic needs, they thrive to give and maintain high standard of
                care to meet every baby’s spiritual, emotional, educational,
                physical, medical and social needs. Raising constant awareness
                is priority and apart from the growing costs involved in these,
                time and effort to do awareness in the community plays a huge
                part in this important initiative. Schools are visited with
                educational talks. Police stations, hospitals, maternity wards,
                pre-natal clinics, doctors, nurses and social workers are being
                informed about new legislation and encouraged to raise awareness
                on baby dumping and the safe alternatives. <br /> <br /> They
                also have a “baby bag project” where gift bags filled with baby
                items clothes and products are delivered to new mommies in
                maternity wards. Inside the bag is a letter to the new mommy
                which congratulates her on the birth of her baby, but also a
                contact number for assistance if she does not want her baby,
                cannot take care of the baby or silently considers dumping or
                killing. Since the inception date of this Foundation, more than
                40 babies in need of care have found their way to this
                Foundation. Most of them were adopted into approved loving
                families while others have been reunited with their families.
                Seven babies came through the Baby Saver Box.
              </p>
            }
          </ShowMoreText>
        </div>
      </div>
      {/* gallery section */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center bg-white my-8 py-2 px-2 rounded-xl shadow-lg w-11/12 md:py-2 md:px-2 md:w-fit">
          <div className="flex flex-col items-center md:flex-row md:space-x-2 md:my-1">
            <img
              className="my-4 rounded-xl shadow-lg md:w-[18rem] h-[14rem] md:my-0 lg:w-[22rem] lg:h-[18rem]"
              src={Staff1}
              alt="Staff 1"
            />
            <img
              className="my-4 rounded-xl shadow-lg md:w-[18rem] h-[14rem] md:my-0 lg:w-[22rem] lg:h-[18rem]"
              src={Staff3}
              alt="Staff 2"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-2 md:my-1">
            <img
              className="my-4 rounded-xl shadow-lg md:w-[18rem] h-[14rem] md:my-0 lg:w-[22rem] lg:h-[18rem]"
              src={Baby1}
              alt="Sleeping Baby"
            />
            <img
              className="my-4 rounded-xl shadow-lg md:w-[18rem] h-[14rem] md:my-0 lg:w-[22rem] lg:h-[18rem]"
              src={BabyBox}
              alt="Baby Box"
            />
          </div>
        </div>
      </div>
      {/* Donation section */}
      <div className="flex flex-col items-center bg-gradient-to-r from-orange-100 to-pink-100 w-screen py-8 mb-8 md:py-12 lg:w-10/12 lg:rounded-xl lg:shadow-lg xl:w-3/4 2xl:w-[88rem]">
        <div className="flex flex-col items-center w-3/4">
          <h3 className="text-md font-[Roboto] font-normal 2xl:text-xl">
            DONATION
          </h3>
          <h1 className="text-6xl font-[Rancho] py-6">Help Us</h1>
          <p className="text-lg font-[Roboto] font-light pb-6 xl:text-xl">
            Ruach Elohim Foundation is therefore registered as a Welfare
            Organisation in Namibia with the aim of improving the life of
            abandoned or orphaned babies and babies in need of care and to
            prevent infant mortality, child abuse and neglect. The Foundation
            depends entirely on donations to make a difference in the lives of
            these vulnerable babies and invite the public of Namibia to help
            with donations to this life-saving, important initiative.
          </p>
          <Link
            className="bg-[#143154] text-white w-64 rounded-2xl py-4 drop-shadow-lg md:w-52 hover:scale-105 ease-in-out duration-300"
            to="/donate"
          >
            <button className="font-sans font-medium">DONATE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
