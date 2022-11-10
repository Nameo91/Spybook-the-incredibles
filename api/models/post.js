const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  name: String,
  message: { type: String}, 
  date: {
    type: Date,
    default: Date.now
  },
  img: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
