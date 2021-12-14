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
  let [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();
  

  const fetchSingleProduct = async () => {
    const product = await getSingleProduct(id);
    setSingleProduct(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);
    
  return (
    <div className="bg-image">
      <div className="mask">
        {console.log(singleProduct)}
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
                  <Link to={`/${singleProduct.id}`}>
                    <Button>{singleProduct.name}</Button>
                  </Link>
                </Card.Title>
                <Card.Text>{singleProduct.description}</Card.Text>
                <Card.Text>{singleProduct.price}</Card.Text>
                <Card.Text>{singleProduct.current_owner}</Card.Text>
                <Card.Text>{singleProduct.for_sale}</Card.Text>
              </Card.Body>
            </Card>
            );
          </Row>
          <Link>
            <FaCartPlus style={{ marginRight: "10px" }} />
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Products;
