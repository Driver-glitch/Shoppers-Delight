import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import favicon from "./images/favicon-32x32.png";

export default function App() {
  return (
    <MDBFooter bgColor="dark" className="text-white-50 ">
      <MDBContainer lg="7" md="5">
        <MDBRow>
          <MDBCol lg="5" md="12" className="mb-4 mb-md-0 ">
            <br />
            <h5 className="text-uppercase">
              <img src={favicon} /> &nbsp; Shoppers Delight
            </h5>
            <br />
            <p>
              One of the world’s largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </MDBCol>

          <MDBCol lg="2" md="7" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <br />
              Marketplace
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="All_NFTs" className="text-white-50">
                  All NFTs
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-2">
              <br />
              My Account
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="Profile" className="text-white-50">
                  Profile
                </a>
              </li>
              <li>
                <a href="Settings" className="text-white-50">
                  Settings
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="7" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-2">
              <br />
              Resources
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="Newsletter" className="text-white-50">
                  Newsletter
                </a>
              </li>

              <li>
                <a href="Docs" className="text-white-50">
                  Docs
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="1" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-2">
              {" "}
              <br />
              Company
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="About" className="text-white-50">
                  About
                </a>
              </li>
              <li>
                <a href="Careers" className="text-white-50">
                  Careers
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-1 mb-4 mb-md-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://shoppersdelight.herokuapp.com/">
          ShoppersDelight.com
        </a>
      </div>
    </MDBFooter>
  );
}
