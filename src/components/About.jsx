//Replace the photos with yours and add a short bio. -Dan

import React from "react";
import dan from "./images/Daniel_Rivera.jpg";
import aboutUs from "./images/ShoppersDelightNFT.jpg";
import evan from "./images/Evan.png";
import christian from "./images/Christian.jpg";

function About() {
  return (
    <div>
      <div className="bg-image">
        <div className="container">
          <div className="row justify-content-start">
            <div className="text-white">
              <h1 className="row justify-content-center text-white">
                {" "}
                About us{" "}
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <div className="row justify-content-center">
                <img
                  src={aboutUs}
                  alt="about us"
                  style={{
                    maxWidth: "75%",
                    height: "auto",
                    maxHeight: "50%",
                  }}
                />
              </div>
              <div>
                {" "}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-4 text-white">
              <div className="img-fluid ">
                <h1></h1>
                <img
                  src={christian}
                  alt="christian"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />
                <p>
                  Christian Vollenweider is from Jacksonville Florida. He
                  recently decided to pursue a career change and joined the
                  Fullstack Academy 2021 Cohort. Christian is graduating from
                  Fullstack with a Web Development Certificate and hopes to
                  enter the tech field as a Front-End Developer soon.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-evenly">
            <div className="col-4 text-white">
              <div className="img-fluid ">
                <img
                  src={evan}
                  alt="evan"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />

                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-4 text-white">
              <div className="img-fluid ">
                <img
                  src={dan}
                  alt="dan"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; Daniel Rivera graduated from
                  Fullstack Academy as a Junior Software Engineer. He strives to
                  expand his knowledge to what is possible with code in order to
                  make life more efficient for all. During his time at Fullstack
                  Academy he created many projects using a text editor named
                  Visual Studio Code. He now has experience with Node.js,
                  Express.js, Postgresql,Ubuntu(WSL), GitBash,GitHub,Heroku,
                  JavaScript, HTML, CSS,React, and more.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; Daniel has always been around
                  technology ever since a little boy. His father was always
                  engaging him in building computers and teaching him the
                  aspects of technology. After the years of learning from his
                  father he had dreams to become a software engineer to serve
                  clients needs.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
