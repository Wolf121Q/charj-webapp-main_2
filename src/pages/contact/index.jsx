import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "all" });

  const contactForm = useRef();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {

      setLoading(true);
    console.log(event)
    emailjs
      .sendForm(
        "service_g6o7fam",
        "template_z6bjfcp",
        contactForm.current,
        "7Hq5OshcW8yrj2bxw"
      )
      .then(
        function (response) {
          setMessage({ type: "success" });
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message Send Successfully!!", {
            position: "top-center",
            autoClose: 2000,
            className: "custom-toast",
          });
          reset();
          setLoading(false);
        },
        function () {
          setMessage({ type: "error" });
          toast.error("FAILED...", message);
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 shadow-lg border-2 rounded-lg">
      <div className="md:w-4xl">
        <div className="">
          <div className="bg-white   text-center p-4">
            <h4 className="text-2xl font-semibold">Join Us & See Results</h4>
            <div className="pt-7">
              <p className="text-lg ">We Have a Plan For You To Thrive.</p>
              <p className="text-lg">
                Contact us, We Will Help You Achive Your Goals
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex flex-col lg:flex-row gap-3 lg:justify-between my-5 md:max-w-4xl">
                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <AiOutlinePhone className="text-3xl" />
                  <p className="text-md font-normal">+1 437 438 5000</p>
                </div>

                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <MdLocationOn className="text-3xl" />
                  <p className="text-md font-normal">
                    1115 Crestlawn Dr C1, Mississauga, ON L4W 1A7, Canada
                  </p>
                </div>

                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <HiOutlineMail className="text-3xl" />
                  <p className="text-md font-normal">info@charj.co</p>
                </div>
              </div>
            </div>

            <p className="text-lg py-5">
              Cross Continent EV Revolution Drive All Roads in the US, Canada,
              Europe and Middle East
            </p>
          </div>
        </div>
        <div className="bg-gray-50 bg-opacity-60 p-10 w-full min-h-[21rem] overflow-auto">
          <form
            className="flex flex-col py-3"
            ref={contactForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row md:gap-3 ">
              <div className="relative z-0 w-full group min-h-[4.7rem]">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                  placeholder=" "
                  // value={contactData.name}
                  // onChange={handleInputChange}
                  {...register("firstName", {
                    required: "First Name is required  ",
                    minLength: 3,
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Name cannot be a number",
                    },
                  })}
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  First Name
                </label>
                {errors.firstName && (
                  <p role="alert" className="text-left text-red-500">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full group min-h-[4.7rem]">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                  placeholder=" "
                  // value={contactData.name}
                  // onChange={handleInputChange}
                  {...register("lastName", {
                    required: "Last Name is required  ",
                    minLength: 3,
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Name cannot be a number",
                    },
                  })}
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Lastname*
                </label>
                {errors.lastName && (
                  <p role="alert" className="text-left text-red-500">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="relative z-0 w-full  group min-h-[4.7rem]">
              <input
                type="email"
                id="email"
                name="email"
                className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                placeholder=" "
                // value={contactData.email}
                // onChange={handleInputChange}
                {...register("email", {
                  required: "Please enter a valid email",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid Email",
                  },
                })}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email*
              </label>
              {errors.email && (
                <p role="alert" className="text-left text-red-500">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="relative z-0 w-full  group min-h-[4.7rem]">
              <input
                type="number"
                id="phone"
                name="phone"
                className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                placeholder=" "
                {...register("phone", {
                  required: "Phone is required  ",
                  // minLength: 3,
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Phone cannot be a string",
                  },
                })}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Phone
              </label>
              {errors.phone && (
                <p role="alert" className="text-left text-red-500">
                  {errors.phone?.message}
                </p>
              )}
            </div>

            <div className="relative z-0 w-full group min-h-[8.5rem] max-h-[12rem] overflow-y-auto ">
              <textarea
                id="interest"
                name="message"
                className="border border-gray-400  block w-full py-2 px-4 placeholder-gray-700 rounded-md text-gray-700 focus:outline-none"
                rows="4"
                placeholder="I'm interested in*"

                {...register("message", {
                  required: "Message is required",
                })}
              ></textarea>
              {errors.message && (
                <p role="alert" className="text-left text-red-500">
                  {errors.message?.message}
                </p>
              )}
            </div>
            <div className="my-3">
              <button
                disabled={loading}
                type="submit"
                className={`${
                  loading ? "bg-opacity-50 cursor-none" : "bg-opacity-100"
                } text-white bg-black hover:bg-opacity-80 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center`}
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
              <p className="my-3">
                This site is protected by reCAPTCHA and the Google
                <span className="text-gray-700"> Privacy Policy</span> and{" "}
                <span className="text-gray-700">Terms of Service </span>
                apply.
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ContactUs;
