// EVAN is doing the AllNft page

//import bootstrap-react components

import React from "react";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api";

//function component starts here
const AllProducts = (props) => {
  let [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    const products = await getAllProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  if (typeof allProducts === "string") {
    console.log(allProducts.substring(0, 25));
  }
  return (
    <div className="bg-image">
      <div className="mask">
        <Container>
          <Row className="m-5">
            {allProducts && allProducts.length
              ? allProducts.map((product, index) => {
                  return (
                    <Card
                      className="m-1"
                      key={product.id + index}
                      style={{ width: "18rem" }}
                    >
                      <Card.Img className="mt-3" src={product.image_url} />
                      <Card.Body className="text-center">
                        <Card.Title>
                          <Link to={`/products/${product.id}`}>
                            <Button>{product.name}</Button>
                          </Link>
                        </Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>{product.current_owner}</Card.Text>
                        <Card.Text>{product.for_sale}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })
              : "No products found"}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AllProducts;
