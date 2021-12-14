import React from "react";
import { Row, Col, Button, Offcanvas, Nav } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

function Cart({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row
        variant={"dark"}
        style={{ fontSize: "1em" }}
        onClick={handleShow}
        className="h-100 justify-content-center align-items-center text-center hover-cart"
      >
        <Col className="d-flex" border="primary" md={12}>
          <u>
            <FaCartPlus style={{ marginRight: "10px" }} />
            Cart
          </u>
        </Col>
      </Row>
      {/*This is the cart modal and only shows when the cart button is clicked*/}
      <Offcanvas show={show} onHide={handleClose}> 
        <Offcanvas.Header  
          className="pt-1"
          style={{ border: "solid 1px grey" }}
          closeButton
        >
          <Offcanvas.Title>My Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-1" style={{ border: "solid 1px grey" }}>
          {/* Cart items here*/}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
