const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const multer = require("multer");
const FoodgrainmilkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Foodgrainsmilk", FoodgrainmilkSchema);
