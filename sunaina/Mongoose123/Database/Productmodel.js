const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  img: String,
});

module.exports={
    Product
}