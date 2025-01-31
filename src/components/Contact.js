"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button } from "@mui/material";
import Link from "next/link";
function Contact() {
  // snackbar

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et75iw9",
        "template_ngcbjol",
        form.current,
        "FPqQ1O4OvEo37D7UC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <section className="relative pt-24 overflow-hidden bg- mt-5">
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4  items-center">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="lg:pb-24 max-w-lg mx-auto">
                  <h4 className="font-heading text-4xl xs:text-5xl text-gray-900 font-bold mb-8 text-center">
                    Sign up for our newsletter
                  </h4>
                  <form>
                    <div className="sm:flex mb-2 items-center pl-5 pr-5">
                      <input
                        className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        placeholder="talk@anubhavray.me"
                        fdprocessedid="30qdqb"
                        required
                      />
                      <button
                        className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-violet-600 rounded-md overflow-hidden"
                        type="submit"
                        fdprocessedid="xoibof"
                      >
                        <div className="absolute top-0 right-full w-full h-full bg-violet-800 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <div className="relative flex items-center justify-center">
                          <span className="mr-4">Subscribe</span>
                          <svg
                            width="8"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg mx-auto pl-5 pr-5">
                  <div className="flex items-center justify-center">
                    <div className="bg- p-8 rounded-lg w-96">
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="row subscription relative"
                      >
                        <div className="col-lg-6 col-md mb-3 text-center">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            id="inputFirstName"
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md mb-3">
                          <input
                            type="text"
                            asp-for="last_name"
                            placeholder="Last Name"
                            id="inputLastName"
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <input
                            type="email"
                            placeholder="email address"
                            id="inputEmail"
                            name="from_email"
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <textarea
                            name="message"
                            asp-for="message"
                            placeholder="message"
                            id="message"
                            rows="6"
                            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          ></textarea>
                        </div>
                        <div className="text-center d-grid mt-1">
                          <button
                            type="submit"
                            value="Send"
                            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            onClick={handleClick({
                              vertical: "top",
                              horizontal: "right",
                            })}
                          >
                            submit
                            <i className="fas fa-paper-plane"></i>
                          </button>

                          <Snackbar
                            open={open}
                            autoHideDuration={3000}
                            onClose={handleClose}
                            anchorOrigin={{ vertical, horizontal }}
                            key={vertical + horizontal}
                          >
                            <Alert
                              onClose={handleClose}
                              severity="success"
                              sx={{ width: "100%" }}
                            >
                              message sent!
                            </Alert>
                          </Snackbar>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
