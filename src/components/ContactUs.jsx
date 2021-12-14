//This code is operational
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as emailjs from "emailjs-com";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvh0hxy",
        "my_b7xwtxo",
        form.current,
        "user_iHMCBo24yMeW4mLoL8ZKw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    
    <div
            className="bg-image">
      
       <div className="mask">
      <div>
      <h1 className="text-center text-white p-4 mt-0 mb-1 mb-md-0">Contact Us</h1>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-3 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-3 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-3 mx-auto">
                <textarea           
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="text-center p-4 mb-1 mb-md-0">
                <button type="submit" value="Send" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
