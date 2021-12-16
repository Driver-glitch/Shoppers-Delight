import React from "react";

function Careers2() {
  return (
    <div>
      <div className="bg-image ">
        <div className="mask">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
            integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
            crossorigin="anonymous"
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto mb-4">
                <div className="section-title text-center text-white">
                  <br></br>
                  <h3 className="top-c-sep">Grow your career with us</h3>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-10 mx-auto ">
                <div className="career-search mb-60 ">
                  <form action="#" className="career-form mb-60 ">
                    <div className="row ">
                      <div className="col-md-6 col-lg-3 my-3 ">
                        <div className="input-group position-relative ">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Keywords"
                            id="keywords"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 my-3 ">
                        <div className="select-container ">
                          <select className="custom-select ">
                            <option selected="">Location</option>
                            <option value="1">Bangalore</option>
                            <option value="2">Jaipur</option>
                            <option value="3">Philippines</option>
                            <option value="4">Pune</option>
                            <option value="5">Thailand</option>
                            <option value="6">United Kingdom</option>
                            <option value="7">United States</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 my-3">
                        <div className="select-container">
                          <select className="custom-select">
                            <option selected="">Select Job Type</option>
                            <option value="1">Ui designer</option>
                            <option value="2">JS developer</option>
                            <option value="3">Web developer</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 my-3">
                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-light btn-custom"
                          id="contact-submit"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="filter-result">
                    <p className="mb-30 ff-montserrat text-white">
                      Total Job Openings : 90
                    </p>

                    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                      <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                          FD
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left text-white">
                            IT Analyst Programmer
                          </h5>
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans text-white">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-pin mr-2 text-white"></i>
                              &nbsp; Jacksonville , Florida &nbsp;
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-money mr-2 text-white"></i>{" "}
                              2500-3500 / pm &nbsp;
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-time mr-2 text-white"></i>
                              &nbsp; Part Time
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job-right my-4 flex-shrink-0">
                        <a
                          href="#"
                          className="btn d-block w-100 d-sm-inline-block btn-light"
                        >
                          Apply now
                        </a>
                      </div>
                    </div>

                    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                      <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex ">
                          UX
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left text-white">
                            Computer Engineer
                          </h5>
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans ">
                            <li className="mr-md-4 text-white">
                              <i className="zmdi zmdi-pin mr-2 text-white"></i>
                              &nbsp; Cary , North Carolina &nbsp;{" "}
                            </li>
                            <li className="mr-md-4 text-white">
                              <i className="zmdi zmdi-money mr-2 text-white"></i>{" "}
                              2500-3500 / pm &nbsp;{" "}
                            </li>
                            <li className="mr-md-4 text-white">
                              <i className="zmdi zmdi-time mr-2 text-white"></i>
                              &nbsp; Contract
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job-right my-4 flex-shrink-0">
                        <a
                          href="#"
                          className="btn d-block w-100 d-sm-inline-block btn-light"
                        >
                          Apply now
                        </a>
                      </div>
                    </div>

                    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                      <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                          GD
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left text-white">
                            Cloud Software Engineer
                          </h5>
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans text-white">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-pin mr-2"></i>&nbsp;
                              Remote &nbsp;
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-money mr-2"></i> 2500-3500
                              / pm &nbsp;{" "}
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-time mr-2"></i>&nbsp; Part
                              Time / Full Time
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job-right my-4 flex-shrink-0">
                        <a
                          href="#"
                          className="btn d-block w-100 d-sm-inline-block btn-light"
                        >
                          Apply now
                        </a>
                      </div>
                    </div>

                    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                      <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                          JS
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left text-white">
                            Software Engineer III{" "}
                          </h5>
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans text-white">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-pin mr-2"></i>&nbsp;
                              Mountain View , California &nbsp;{" "}
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-money mr-2"></i> 2500-3500
                              / pm &nbsp;
                            </li>
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-time mr-2"></i>&nbsp; Full
                              Time
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job-right my-4 flex-shrink-0">
                        <a
                          href="#"
                          className="btn d-block w-100 d-sm-inline-block btn-light"
                        >
                          Apply now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-reset justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <i className="zmdi zmdi-long-arrow-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="Careers">
                        1
                      </a>
                    </li>
                    <li className="page-item d-none d-md-inline-block">
                      <a className="page-link" href="Careers2">
                        2
                      </a>
                    </li>
                    <li className="page-item d-none d-md-inline-block">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        8
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers2;
