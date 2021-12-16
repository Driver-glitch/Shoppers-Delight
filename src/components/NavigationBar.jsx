//Daniel is doing

import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
//import stuff from reactrouterdom
import { Link } from "react-router-dom";

import { useState } from "react";
import Cart from "./Cart";

function NavigationBar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        {/* <Link className="remove_" to="/Home"> */}
        <Navbar.Brand
          as={Link}
          to="/Home"
          // href="Home"
          className="btn-group "
          style={{ paddingLeft: "2%" }}
        >
          Shoppers Delight
        </Navbar.Brand>
        {/* </Link> */}

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
              <NavDropdown.Item as={Link} to="/products">
                All NFTs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/ContactUs">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Newsletter">
                Newsletter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Discord">
                Discord Community
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Cart
                show={show}
                setShow={setShow}
                style={{ marginLeft: "5%" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  // return (
  //   <div>
  //     <Navbar bg="dark" variant={"dark"} expand="lg">
  //       <Link
  //         to="Home"
  //         className="btn-group "
  //         style={{ paddingLeft: "2%" }}
  //       >
  //         Shoppers Delight
  //       </Link>

  //       <Navbar.Toggle aria-controls="navbarScroll" />
  //       <Navbar.Collapse id="navbarScroll">
  //         <Form className="d-flex form-inline my-2 my-lg-2 px-4">
  //           <>
  //             <input
  //               className="form-control mx-sm-2 px-5"
  //               type="search"
  //               placeholder="Search"
  //               aria-label="Search"
  //             />
  //           </>
  //           <button
  //             className="btn btn-outline-success my-sm-1 my-2 my-lg-0"
  //             type="submit"
  //           >
  //             Search
  //           </button>
  //         </Form>
  //         <Nav
  //           className="me-auto my-2 my-lg-1"
  //           style={{ paddingLeft: "2%" }}
  //           navbarScroll
  //         >
  //           <NavDropdown title="Explore" id="navbarScrollingDropdown">
  //             <Link to="/products">
  //               All NFTs
  //             </Link>
  //           </NavDropdown>

  //           <NavDropdown title="Resources" id="navbarScrollingDropdown">
  //             <Link to="ContactUs">Contact Us</Link>
  //             <Link to="Newsletter">Newsletter</Link>
  //             <NavDropdown.Divider />
  //             <Link to="Discord">
  //               Discord Community
  //             </Link>
  //           </NavDropdown>

  //           <NavDropdown title="Create" id="navbarScrollingDropdown">
  //             <Link to="Profile">Profile</Link>
  //             <Link to="Login">Login</Link>
  //             <Link to="Register">Register</Link>
  //           </NavDropdown>
  //           <Nav.Link>
  //             <Cart
  //               show={show}
  //               setShow={setShow}
  //               style={{ marginLeft: "5%" }}
  //             />
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   </div>
  // );
}

export default NavigationBar;
