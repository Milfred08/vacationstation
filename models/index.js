const User = require("./user");
// const Product = require("./product");
const Cart = require("./cart");

User.hasMany(Cart);
Cart.belongsTo(User);
// Product.belongsToMany(User, { through: Cart });

(async () => {
  try {
    await User.sync();
    // await Product.sync();
    await Cart.sync();
  } catch (error) {
    console.error("!!! DO YOU ACTUALLY HAVE A DATABASE?", error);
  }
})();

module.exports = { User, Cart };
