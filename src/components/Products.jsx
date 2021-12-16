import React from "react";

import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

import { getSingleProduct } from "../api";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Products = (props) => {
  let { cart, setCart } = props;

  //let [cart, setCart] = useState([]);
  let [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();

  const fetchSingleProduct = async () => {
    const product = await getSingleProduct(id);
    setSingleProduct(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const handleCart = (product) => {
    console.log(product, "product ");
    let newCart = [...cart];
    newCart.push(product);
    newCart = newCart.filter(function (item, pos) {
      return newCart.indexOf(item) == pos;
    });
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <div className="bg-image">
      <div className="mask">
        <Container>
          <Row className="m-5">
            <Card
              className="m-1"
              key={singleProduct.id}
              style={{ width: "18rem" }}
            >
              <Card.Img className="mt-3" src={singleProduct.image_url} />
              <Card.Body className="text-center">
                <Card.Title>
                  <Button
                    style={{ width: "50%", cursor: "pointer" }}
                    onClick={() => handleCart(singleProduct.id)}
                  >
                    <FaCartPlus />
                    <Card.Text className="pt-2" style={{ fontSize: ".5em" }}>
                      Add to Cart
                    </Card.Text>
                  </Button>
                </Card.Title>
                <Card.Text>{`$${singleProduct.price}`}</Card.Text>{" "}
                <Card.Text>{singleProduct.current_owner}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
