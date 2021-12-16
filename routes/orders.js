const express = require("express");
const ordersRouter = express.Router();

const {
  createOrder,
  createOrderItem,
  getAllOrders,
  getAllItemsByOrderID,
} = require("../db");

ordersRouter.get("/", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get("/:orderID", async (req, res, next) => {
  try {
    const { orderID } = req.params;

    const orders = await getAllItemsByOrderID({
      id: orderID,
    });
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post("/", async (req, res, next) => {
  try {
    const { userID, completed } = req.body;

    const newOrder = await createOrder({ userID, completed });
    console.log(newOrder, "newOrder created");
    if (newOrder) {
      res.send(newOrder);
    } else {
      next({
        name: "FailedToCreate",
        message: "There was an error creating your order",
      });
    }
  } catch (error) {
    next(error);
  }
});

ordersRouter.post("/:orderID", async (req, res, next) => {
  try {
    const { quantity, productID } = req.body;
    const { orderID } = req.params;
    const newOrderItem = await createOrderItem({
      quantity,
      productID,
      orderID,
    });
    console.log(newOrderItem, "newOrderItem created");
    if (newOrderItem) {
      res.send(newOrderItem);
    } else {
      next({
        name: "FailedToCreate",
        message: "There was an error creating your orderItem",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
