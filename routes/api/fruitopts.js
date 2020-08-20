const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const Fruits = require("../../models/fruitopt");
const mongoose = require("mongoose");

//getting all the requests
router.get("/", async (req, res) => {
  try {
    const posts = await Fruits.find();
    if (!posts) throw Error("no items");
    res.status(200).json({ options: posts });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//getting one the requests
router.get("/:id", async (req, res) => {
  console.log(req.file);
  try {
    const post = await Fruits.findById(req.params.id);
    if (!post) throw Error("no items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//posting the request
router.post("/", upload.single("productImage"), async (req, res) => {
  console.log(req.file);
  const newPost = new Fruits({
    _id: new mongoose.Types.ObjectId(),

    heigth: req.body.heigth,
    width: req.body.width,
    productImage: req.file.path,
  });

  try {
    const post = await newPost.save();
    if (!post) throw Error("somethong went wrong");

    res.status(200).json({ option: post });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//deleting the request

router.delete("/:id", async (req, res) => {
  console.log(req.file);
  try {
    const post = await Fruits.findByIdAndDelete(req.params.id);
    if (!post) throw Error("no items to delete");

    res.status(200).json("success, post has been deleted");
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//update
router.patch("/:id", async (req, res) => {
  console.log(req.file);
  try {
    const post = await Fruits.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("something happened while updating");

    res.status(200).json("post has been updated");
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
