const client = require("./client");

async function createOrder({ userID, completed }) {
  try {
    let isComplete;
    if (completed) {
      isComplete = true;
    } else {
      isComplete = false;
    }
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders("userID", completed)
        VALUES($1, $2)
        RETURNING *;
      `,
      [userID, isComplete]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function createOrderItem(quantity, productID, orderID) {
  try {
    const {
      rows: [orderItem],
    } = await client.query(
      `
          INSERT INTO orderItem(quantity, "productID", "orderID")
          VALUES($1, $2, $3)
          RETURNING *;
        `,
      [quantity, productID, orderID]
    );
    return orderItem;
  } catch (error) {
    throw error;
  }
}

async function getAllOrders() {
  try {
    const { rows } = await client.query(`SELECT * FROM orders ;`);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getAllItemsByOrderID({ id }) {
  try {
    const { rows } = await client.query(
      `SELECT * FROM orderItem WHERE "orderID" = $1;`,
      [id]
    );
    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createOrder,
  createOrderItem,
  getAllOrders,
  getAllItemsByOrderID,
};
