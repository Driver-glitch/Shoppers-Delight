//Daniel is doing

import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form
} from "react-bootstrap";


import { useState } from "react";
import Cart from "./Cart";

function NavigationBar() {
  const [show, setShow] = useState(false);  
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand
          href="Home"
          className="btn-group "
          style={{ paddingLeft: "2%" }}
        >
          Shoppers Delight
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex form-inline my-2 my-lg-2 px-4">
            <>
              <input
                className="form-control mx-sm-2 px-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </>
            <button
              className="btn btn-outline-success my-sm-1 my-2 my-lg-0"
              type="submit"
            >
              Search
            </button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ paddingLeft: "2%" }}
            navbarScroll
          >
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/products">All NFTs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="ContactUs">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="Newsletter">Newsletter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Discord">
                Discord Community
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="Register">Register</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Cart show={show} setShow={setShow} style={{marginLeft: "5%"}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

