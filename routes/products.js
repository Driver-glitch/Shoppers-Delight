const express = require("express");
const productsRouter = express.Router();
const { createProduct, getSingleProduct, getAllProducts } = require("../db/products");

productsRouter.get("/:id", async (req, res, next) => {
  console.log('lol here in products.js items/:id route'); 
  try {        
    const product = await getSingleProduct( req.params.id );    
    res.send(product);
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", async (req, res, next) => {
  try {
    console.log('backend products line 17')
    const products = await getAllProducts();
    res.send(products);

  } catch (error) {
    next(error);
  }
});


module.exports = productsRouter ;