//This code is operational
import React from "react";

function Newsletter() {
  return (
    <div>
      <div className="bg-image">
        <div className="mask">
          <div>
            <h1 className="text-center text-white p-5 mb-3 mb-md-0">
              Subscribe To Our Newsletter!
            </h1>
            <div className="container">
              <form>
                <div className="row pt-2 mx-auto">
                  <div className="col-7 form-group mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                    <br />
                  </div>

                  <div className="col-6 form-group pt-2 mx-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>

                  <div className="text-center p-4 mb-1 mb-md-0">
                    <button type="button" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
