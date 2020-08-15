const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const multer = require("multer");
const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  productImage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("POST", PostSchema);
