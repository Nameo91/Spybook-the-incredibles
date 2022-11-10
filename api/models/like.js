const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new mongoose.Schema({
  users: [
    { type : Schema.Types.ObjectId,
      ref: 'User' }
    ],
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;