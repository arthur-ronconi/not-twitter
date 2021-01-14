const express = require("express");
const router = express.Router();

// Post Model
const Post = require("../models/Post");

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: error });
  }
});

// GET POST BY ID
router.get("/:postID", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.send(err);
  }
});

// GET POST BY AUTHOR
router.get("/search/:author", async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.author });
    res.json(posts);
  } catch (err) {
    res.send(err);
  }
});

// SUBMIT POST
router.post("/", async (req, res) => {
  const post = new Post({
    body: req.body.body,
    author: req.body.author,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
