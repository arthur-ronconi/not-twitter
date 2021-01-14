const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "admin",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
