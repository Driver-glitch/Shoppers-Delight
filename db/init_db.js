// code to build and initialize DB goes here
//what is "orderItem" below on line 15?
const {
  createUser,
  createProduct,
  createOrder,
  createOrderItem,
  getAllOrders,
  getAllItemsByOrderID,
} = require("./");
const client = require("./client");

async function dropTables() {
  // drop all tables, in the correct order
  try {
    console.log("Starting to drop tables...");
    await client.query(`
         DROP TABLE IF EXISTS pendingOrders;
         DROP TABLE IF EXISTS orderItem;          
         DROP TABLE IF EXISTS products;
         DROP TABLE IF EXISTS orders;
          DROP TABLE IF EXISTS users;
        `);
    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    console.log(error, "!!!!!!!");
    throw error;
  }
}
async function createTables() {
  // create all tables, in the correct order
  try {
    console.log("Starting to build users table...");
    await client.query(`
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL  
        );`);
    console.log("Finished building tables!");

    console.log("Starting to build products table...");
    await client.query(`
        CREATE TABLE products(
          id SERIAL PRIMARY KEY,
          author VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          price DECIMAL(10,2) NOT NULL,
          current_owner VARCHAR(255) NOT NULL,          
          image_url VARCHAR(255) NOT NULL,
          for_sale BOOLEAN NOT NULL,
          description VARCHAR(255) NOT NULL,
          user_chain VARCHAR(5000) NOT NULL
        );`);
    console.log("Finished building products table!");

    //create a table that stores pending orders
    //Do we need ON DELETE CASCADE W/ FOREIGN KEY for when a user deletes account?
    //change VARCHAR length to only what is neccesary and no more.
    // console.log("Starting to build pending orders table...");
    // await client.query(`
    //     CREATE TABLE pendingOrders(
    //       id SERIAL PRIMARY KEY,
    //       product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    //       buyer_id INTEGER NOT NULL,
    //       seller_id INTEGER NOT NULL,
    //       price DECIMAL(10,2) NOT NULL,
    //       status BOOLEAN NOT NULL,
    //       expires VARCHAR(255) NOT NULL
    //     );`);

    await client.query(`
        
        CREATE TABLE orders(
          id SERIAL PRIMARY KEY,
          "userID" INTEGER REFERENCES users(id),
          completed BOOLEAN DEFAUlT false
          );
        
        `);

    console.log("Finished building orders table!");

    console.log("Starting to build order item table");
    await client.query(`
        
    CREATE TABLE orderItem(
      id SERIAL PRIMARY KEY,
      "orderID" INTEGER REFERENCES orders(id),
      "productID" INTEGER REFERENCES products(id),
      quantity INTEGER
      );
    
    `);
    console.log("Finished building all tables");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}
async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      { username: "Christian", password: "1111" },
      { username: "Evan", password: "2222" },
      { username: "Daniel", password: "3333" },
      { username: "Albert", password: "bertie99" },
      { username: "Dandra", password: "sandra123" },
      { username: "Glamgal", password: "glamgal123" },
      { username: "Bob", password: "4444" },
      { username: "Dylan", password: "5555" },
      { username: "Michael", password: "6666" },
      { username: "Chico", password: "7777" },
      { username: "Chicka", password: "8888" },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));
    console.log("Users created:");
    console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialProducts() {
  console.log("Starting to create products...");
  try {
    const productsToCreate = [
      {
        id: 1,
        author: "kyle",
        name: "St. Michael",
        price: "10.00",
        current_owner: "Dan",
        image_url:
          "https://i.gadgets360cdn.com/large/Bored_ape_NFT_1631274836067.jpg?downsize=950:*",
        for_sale: true,
        description: "A example of st. michael",
        user_chain: [
          {
            hash: "1",
            previous_hash: "0",
            price: "10.00",
          },
        ],
      },
      {
        id: 2,
        author: "friendlyArtist42",
        name: "Pop Tart",
        price: "99.00",
        current_owner: "Dan",
        image_url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nft-1-1614978591.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
        for_sale: true,
        buyout_price: "99.00", //set by owner/seller
        description: "A example of St. Jude",
        user_chain: [
          {
            hash: "2",
            previous_hash: "1",
            price: "99.00",
          },
        ],
      },
      {
        id: 3,
        author: "daveC",
        name: "Daniel Rivera's Cat",
        price: "100.00",
        current_owner: "Auriel",
        image_url:
          "https://cdn.vox-cdn.com/thumbor/bouCIhEhMramGHZAiQGaa3q43vo=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22341171/Screen_Shot_2021_03_02_at_3.21.50_PM.png",
        for_sale: true,
        buyout_price: "100.00", //set by owner/seller
        description: "A example of St. Paul",
        user_chain: [
          {
            hash: "4",
            previous_hash: "3",
            price: "100.00",
          },
        ],
      },
      {
        id: 4,
        author: "bestArtist",
        name: "Lazer Monk",
        price: "84.23",
        current_owner: "Milk",
        image_url:
          "https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631",
        for_sale: true,
        buyout_price: "84.23", //set by owner/seller
        description: "A example of St. John",
        user_chain: [
          {
            hash: "34",
            previous_hash: "33",
            price: "84.23",
          },
        ],
      },
      {
        id: 5,
        author: "bestArtist",
        name: "100",
        price: "84.23",
        current_owner: "Dan",
        image_url:
          "https://media.istockphoto.com/photos/concept-cryptographic-nft-on-a-hundreddollar-bill-franklin-in-glasses-picture-id1313353553?b=1&k=20&m=1313353553&s=170667a&w=0&h=leO19ogTi5MnJ0D6jd_olZvda6q_CDSpB9oJgGtpkGQ=",
        for_sale: true,
        buyout_price: "84.23", //set by owner/seller
        description: "A example of St. John",
        user_chain: [
          {
            hash: "34",
            previous_hash: "33",
            price: "84.23",
          },
        ],
      },
    ];
    const users = await Promise.all(productsToCreate.map(createProduct));
    console.log("Users created:");
    console.log(users);
    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error creating products!");
    throw error;
  }
}

async function createAndPopulateOrderCart() {
  console.log("Starting to create initial cart...");
  try {
    const newOrder = await createOrder({ userID: 1, completed: false });
    console.log(newOrder, "did we create new order");
    if (newOrder) {
      const newOrderItem1 = await createOrderItem(7, 1, newOrder.id);
      console.log(newOrderItem1, "new order item 1");

      const newOrderItem2 = await createOrderItem(10, 2, newOrder.id);
      console.log(newOrderItem2, "new order item 2");
      if (newOrderItem1 && newOrderItem2) {
        console.log("yayyyyy we gotta cart", newOrderItem1, newOrderItem2);
      }
    } else {
      next({
        name: "FailedToCreate",
        message: "There was an error creating your order",
      });
    }
    console.log("Finished creating cart!");
  } catch (error) {
    console.log("Error during create order cart");
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
    await createAndPopulateOrderCart();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}
rebuildDB();
