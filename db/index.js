// require and re-export all files in this db directory (users, activities...)
module.exports = {
  ...require("./client"),
  ...require("./users"),
  ...require("./products"),
  ...require("./orders"),
};
