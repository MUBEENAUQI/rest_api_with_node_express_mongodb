const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const multer = require("multer");
const FruitoptSchema = new Schema({
  heigth: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Fruitopt", FruitoptSchema);
