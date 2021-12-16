const client = require("./client");

async function createProduct({
  author,
  name,
  price,
  current_owner,
  image_url,
  for_sale,
  description,
  user_chain,
}) {
  try {
    const {
      rows: [products],
    } = await client.query(
      `INSERT INTO products (author, name, price, current_owner, image_url, for_sale, description, user_chain)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;`,
      [
        author,
        name,
        price,
        current_owner,
        image_url,
        for_sale,
        description,
        user_chain,
      ]
    );
    return products;
  } catch (err) {
    throw err;
  }
}

async function getSingleProduct(id) {
  if (!id) {
    return "No product ID provided";
  }
  try {
    const {
      rows: [product],
    } = await client.query(`SELECT * FROM products WHERE id = $1;`, [id]);
    return product;
  } catch (err) {
    throw err;
  }
}

async function getAllProducts() {
  try {
    console.log("getAllProducts");
    const { rows } = await client.query(`SELECT * FROM products ;`);
    console.log("heoaodkjsaodkasdnmkasdnmkasnmdkasmnd", rows);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function pendingOrders() {
  try {
    const {
      rows: [pendingOrders],
    } = await client.query(`SELECT * FROM pending_orders ;`);
    return pendingOrders;
  } catch (err) {
    throw err;
  }
}
module.exports = {
  createProduct,
  getSingleProduct,
  getAllProducts,
  pendingOrders,
};
