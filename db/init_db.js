// code to build and initialize DB goes here
//what is "orderItem" below on line 15?
const { createUser, createProduct } = require("./");
const client = require("./client");

  async function dropTables() {
    // drop all tables, in the correct order
    try {
      console.log("Starting to drop tables...");
      await client.query(`
          DROP TABLE IF EXISTS pendingOrders;
          DROP TABLE IF EXISTS users cascade;
          DROP TABLE IF EXISTS products;
          DROP TABLE IF EXISTS orders;
          DROP TABLE IF EXISTS orderItem;          
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
    } catch (error) {
      console.error("Error building users table!");
      throw error;
    }

    try {
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
    } catch (error) {
      console.error("Error building products table!");
      throw error;
    }

    //create a table that stores pending orders
    //Do we need ON DELETE CASCADE W/ FOREIGN KEY for when a user deletes account?
    //change VARCHAR length to only what is neccesary and no more.
    try {
      console.log("Starting to build pending orders table...");
      await client.query(`
        CREATE TABLE pendingOrders(
          id SERIAL PRIMARY KEY,
          product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
          buyer_id INTEGER NOT NULL,
          seller_id INTEGER NOT NULL,
          price DECIMAL(10,2) NOT NULL,
          status BOOLEAN NOT NULL,
          expires VARCHAR(255) NOT NULL
        );`);
      console.log("Finished building orders table!");
    } catch (error) {
      console.error("Error building orders table!");
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
  };

  async function createInitialProducts() {
    console.log("Starting to create products...");
    try {
      const productsToCreate = [
        {
          id: 1,
          author: "kyle",
          name: "St. Michael",
          price: "10.00",
          current_owner: "Auriel",
          image_url:
            "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
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
          name: "St. Jude",
          price: "99.00",
          current_owner: "Milk",
          image_url:
            "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
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
          name: "St. Paul",
          price: "100.00",
          current_owner: "Auriel",
          image_url:
            "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
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
          name: "St. John",
          price: "84.23",
          current_owner: "Milk",
          image_url:
            "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
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
  };

  async function rebuildDB() {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialProducts();
    } catch (error) {
      console.log("Error during rebuildDB");
      throw error;
    }
  }
  rebuildDB();