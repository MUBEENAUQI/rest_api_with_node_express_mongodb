const express = require("express");
const router = express.Router();

const Posts = require("../../models/post");

//getting all the requests
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("no items");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//getting one the requests
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("no items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//posting the request
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error("somethong went wrong");

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//deleting the request

router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("no items to delete");

    res.status(200).json("success, post has been deleted");
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//update
router.patch("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("something happened while updating");

    res.status(200).json("post has been updated");
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
